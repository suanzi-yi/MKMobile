import { EntityModel } from "@midwayjs/orm";
import { Column, PrimaryGeneratedColumn } from "typeorm";



@EntityModel()
export class Order{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;
    
    @Column()
    workrname: string;

    @Column()
    fieldValue: string;

    @Column()
    workdate: string;

    @Column()
    workGroup: string;

    @Column()
    workproduct: string;

    @Column()
    phone: string;
}