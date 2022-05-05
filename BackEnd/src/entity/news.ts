import { EntityModel } from "@midwayjs/orm";
import { Column, PrimaryGeneratedColumn } from "typeorm";


@EntityModel()
export class News{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    title: string;

    @Column()
    url: string;

    @Column()
    date: string;
}