import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';
import * as bcrypt from 'bcrypt';

@Controller('users')
export class UsersController {

    constructor(private usersService : UsersService ) {}

    @Get()
    async getUsers() {
        return await this.usersService.fetchUser();
    }

    @Post()
    async createUser(@Body() userDetails : CreateUserDto) : Promise<any> {
        const {username ,password} = userDetails
        let hashPass = await bcrypt.hash(password, 10)
        return await this.usersService.userCreation({ password: hashPass , username: username })
    }


    @Post('auth')
    async authenticate(@Body() userDetails:CreateUserDto): Promise<any> {
        return this.usersService.credentialCheck(userDetails)
    }



}
