import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User) private userRepository :Repository<User>,
        ) {

    }

    userCreation(userDetails : CreateUserDto) {
        const newUser = this.userRepository.create({ ...userDetails , createdAt: new Date()})
        return this.userRepository.save(newUser) 
    }

    fetchUser() {
        return this.userRepository.find();
    }

    async credentialCheck(userdetails : CreateUserDto) {

        
        console.log(this.userRepository.createQueryBuilder("user.password").where("username = :irs" , {irs: userdetails.username}))
        return true;
    }
}
