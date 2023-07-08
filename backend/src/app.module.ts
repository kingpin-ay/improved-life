import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './typeorm/entities/User';
import { UsersModule } from './users/users.module';
import { TimeManage } from './typeorm/entities/TimeManage';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Ayush@007',
      database: 'life_hack',
      entities: [User,TimeManage],
      synchronize: true,
    })
    , UsersModule],

  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }
