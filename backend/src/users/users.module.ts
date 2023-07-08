import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { JwtModule } from '@nestjs/jwt';
import { TimeController } from './controllers/time/time.controller';
import { TimeService } from './services/time/time.service';
import { TimeManage } from 'src/typeorm/entities/TimeManage';

@Module({
  imports:[TypeOrmModule.forFeature([User, TimeManage]),JwtModule.register({
    secret:'AyushSecret',
    signOptions : {expiresIn:'1d'}
  })],
  controllers: [UsersController, TimeController],
  providers: [UsersService, TimeService]
})
export class UsersModule {}
