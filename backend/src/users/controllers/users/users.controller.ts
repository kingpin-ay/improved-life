import { BadRequestException, Body, Controller, Get, Post, Res , Req } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import {Request, Response} from 'express'

@Controller('users')
export class UsersController {

    constructor(private usersService : UsersService , private jwtService: JwtService ) {}

    private cookieCheck(request : Request) {
        const data = request.cookies['_jwt']
        if(!this.jwtService.verifyAsync(data)) return false;
        else return true;
    }

    @Post('signup')
    async createUser(@Body() userDetails : CreateUserDto) : Promise<any> {
        const {username ,password} = userDetails
        let hashPass = await bcrypt.hash(password, 10)
        return await this.usersService.userCreation({ password: hashPass , username: username })
    }

    @Post('auth')
    async authenticate(@Body() userDetails:CreateUserDto , @Res({passthrough:true}) response : Response): Promise<any> {
        const user = await this.usersService.locateUser({ username : userDetails.username })
        if(!user) return {username:'',id: '' , isPass : false , isAc: false}
        if(!await bcrypt.compare(userDetails.password , user.password)) return {username:'',id: '' , isPass : false , isAc: true}
        response.cookie('_jwt',await this.jwtService.signAsync({id : user.id , username : user.username }),{httpOnly:true})
        return { username : user.username , id : user.id , isPass: true , isAc : true}
    }

    @Get('time')
    async getTime(@Req() request: Request){
        try{
            if(!this.cookieCheck(request.cookies['_jwt'])) throw new BadRequestException('unauthorized')
            return {message:'success'}
        }catch (e) {
            return e;
        }
    }

    @Get('logout')
    async logout(@Res({passthrough:true}) request : Response) {
        request.clearCookie('_jwt')
        return {message:'success'}
    }



}
