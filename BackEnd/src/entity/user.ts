import { EntityModel } from "_@midwayjs_orm@3.3.5@@midwayjs/orm";
import { Column, PrimaryGeneratedColumn } from "_typeorm@0.3.6@typeorm";



@EntityModel()
export class User{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({unique:true})
    username: string;

    @Column()
    password: string;

}