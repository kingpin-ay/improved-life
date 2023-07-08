import {Entity, PrimaryGeneratedColumn , Column, OneToMany} from 'typeorm';
import { TimeManage } from './TimeManage';



@Entity({name : "users"})
export class User {

    @PrimaryGeneratedColumn()
    id : number;


    @Column({unique : true , nullable: false})
    username : string;

    @Column({nullable:false})
    password: string;

    @Column({nullable:false})
    createdAt : Date;

    @OneToMany(() => TimeManage , (time_card) => time_card.user)
    time_cards : TimeManage[]
}



