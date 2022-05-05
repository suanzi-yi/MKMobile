import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { Order } from "../entity/oreder";



@Provide()
export class OrderService {
    @InjectEntityModel(Order)
    OrderModel:Repository<Order>;

    //增加订单
    async saveOrder(order: Order){
        try {
            await this.OrderModel.save(order);
            return {
                msg:"成功",
                success: true
            }
        } catch (error) {
            return {
                msg:"失败",
                success: false
            }
        }
        
    }
    //删除订单
    async deleteOrder(id:number){
        let oldorder= await this.OrderModel.findOne({where:{id}})
        await this.OrderModel.remove(oldorder)
        return {
            msg: "删除成功",
            success: true
        }
    }
    //获得所有订单
    async getallorder(username:string){
        let allorder= await this.OrderModel.find({where:{username:username}})
        return allorder
    }
}