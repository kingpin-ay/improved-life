import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { Repository } from 'typeorm';

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


    async locateUser(condition: any) : Promise<User>{
        return await this.userRepository.findOne({where : condition})
    }
}
