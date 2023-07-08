import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity({name:"time_manage"})
export class TimeManage {

    @PrimaryGeneratedColumn()
    time_id : number

    @Column()
    start_time : string

    @Column()
    end_time : string

    @Column()
    date : string

    @Column()
    title: string


    @Column()
    discription: string

    @ManyToOne(()=> User , (user) =>user.time_cards ,{nullable:false})
    user : User

}