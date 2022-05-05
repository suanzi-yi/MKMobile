import { IMiddleware } from '@midwayjs/core';
import { Inject, Middleware } from '@midwayjs/decorator';
import { NextFunction, Context } from '@midwayjs/koa';
import { JwtService } from '_@midwayjs_jwt@3.3.5@@midwayjs/jwt';
//鉴权器中间件
@Middleware()
export class AdminMiddleWare implements IMiddleware<Context, NextFunction> {
    @Inject()
    jwt:JwtService;

    resolve() {
        return async (ctx: Context, next: NextFunction) => {
            // 控制器前执行的逻辑
            console.log(ctx)
            const token=ctx.request.header.token as string
            let isUser:any
            let msg:string
            try{
                 isUser = await this.jwt.verify(token)//验证合法性
                 isUser=true
            }
            catch(e){
                if(e=="TokenExpiredError"){
                    isUser=false,
                    msg="登录已过期！请重新登录！"  
                }
                else{
                    isUser=false,
                    msg="登录错误!请先登录！"  
                }
            }
            console.log('时间戳',isUser);
            
            if(isUser) {
                const result = await next();
                return result
            }
            else {
                return {
                    status: 201,
                    msg
                }
            }
          };
    }
    ignore(ctx:Context):boolean {
        return ctx.path==='/v1/api/user/login'||ctx.path==='/v1/api/user/register'||ctx.path==="/v1/api/news/getnews"
    }
    static getName(): string {
        return 'admin';
      }
}