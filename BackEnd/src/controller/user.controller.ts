import { Body, Controller, Inject, Post } from "@midwayjs/decorator";
import { JwtService } from "_@midwayjs_jwt@3.3.5@@midwayjs/jwt";
import { UserService } from "../service/user.service";


@Controller('/v1/api/user')
export class UserController{
    @Inject()
    jwt:JwtService

    @Inject()
    UserService:UserService
    //登录
    @Post('/login')
    async login(@Body() user){
        const isuser = await this.UserService.finduserbyname(user.username);
        if(isuser){
            if(isuser.password==user.password){
                const token = await this.jwt.sign(user)
                return {
                    msg:"登录成功",
                    success:true, 
                    token:token
                }
            }else{
                return {
                    msg:"登录失败,密码错误",
                    success: false
                }
            }
        }else{
            return {
                msg: "您还未注册",
                success:false
            }
        }
        
    }
    //注册
    @Post('/register')
    async register(@Body() user){
        let {msg,success}=await this.UserService.saveuser(user);
        return {
            msg,
            success
        }
        
    }

    //修改密码
    @Post('/updatepassword')
    async updatepassword(@Body() user){
        let {msg,success}=await this.UserService.updatepassword(user)
        return {
            msg,
            success
        }        
    }
}