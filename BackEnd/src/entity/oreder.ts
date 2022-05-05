import { EntityModel } from "_@midwayjs_orm@3.3.5@@midwayjs/orm";
import { Column, PrimaryGeneratedColumn } from "_typeorm@0.3.6@typeorm";



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