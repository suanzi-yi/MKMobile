import { Body, Controller, Get, Inject, Post, Query } from "@midwayjs/decorator";
import { OrderService } from "../service/order.service";





@Controller('/v1/api/orders')
export class OrderController{
    @Inject()
    OrderService: OrderService

    //下订单
    @Post('/order')
    async saveOrder(@Body() order){
        console.log(order);
        return await this.OrderService.saveOrder(order);
    }

    //修改订单byid
    @Get('/deleteorder')
    async deleteOrder(@Query("id") id){
        return await this.OrderService.deleteOrder(id);
    }
    //获得所有订单
    @Get('/getallorder')
    async getAllOrder(@Query("username") username){
        let allorder= await this.OrderService.getallorder(username);
        return {
            msg:"成功",
            success:true,
            data:allorder
        }
    }
}