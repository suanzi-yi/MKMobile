import { EntityModel } from "@midwayjs/orm";
import { Column, PrimaryGeneratedColumn } from "typeorm";



@EntityModel()
export class User{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({unique:true})
    username: string;

    @Column()
    password: string;

}