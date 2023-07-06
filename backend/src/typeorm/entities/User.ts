import {Entity, PrimaryGeneratedColumn , Column} from 'typeorm';



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
}



