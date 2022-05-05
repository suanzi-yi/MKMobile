import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Repository } from 'typeorm';
import { User } from '../entity/user';

@Provide()
export class UserService {
  @InjectEntityModel(User)
  userModel: Repository<User> //用户模型

  //注册用户
  async saveuser(user: User) {
    try {
      await this.userModel.save(user);
      return {
        msg: "成功",
        success: true
      }
    } catch (error) {
      return {
        msg: "用户已存在",
        success: false
      }
    }
  }

  //登录时查询是否有此用户
  async finduserbyname(username: string) {
    let user = await this.userModel.findOne({ where: { username } })
    return user
  }

  //修改密码
  async updatepassword(newuser: User){
    let olduser=await this.userModel.findOne({where:{ username:newuser.username}})
    olduser.password=newuser.password
    try {
      await this.userModel.save(olduser)
      return { 
        msg: "修改成功",
        success: true
      }
    } catch (error) {
      return {
        msg: "修改失败",
        success: false
      }
    }
  }

}
