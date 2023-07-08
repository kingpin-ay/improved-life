import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TimeManage } from 'src/typeorm/entities/TimeManage';
import { CreateTimeDto, DeleteTimeDto, FetchTimeDto, UpdateTimeDto } from 'src/users/dtos/Time.dto';
import { Repository , getRepository} from 'typeorm';
import { User } from 'src/typeorm/entities/User';

@Injectable()
export class TimeService {

    constructor(@InjectRepository(TimeManage) private timeRepository : Repository<TimeManage>, @InjectRepository(User) private user: Repository<User>) {}

    async createTimeCard(timeCardDetails : CreateTimeDto): Promise<any>{
        const new_time_card = this.timeRepository.create(timeCardDetails)
        const user = await this.user.findOne({where:{id: timeCardDetails.userId}})
        new_time_card.user = user
        return await this.timeRepository.insert(new_time_card)
    }

    async findAll(details : FetchTimeDto): Promise<any>{
        const {userId} = details
        return await this.timeRepository.find({
            where:{user: {id: userId}}
        })
    }

    async updateTimeCard(updateTimeDetails: UpdateTimeDto){
        return await this.timeRepository.save(updateTimeDetails)
    }

    async deleteTimeCard(deleteTimeDto: DeleteTimeDto): Promise<any>{
        await this.timeRepository.delete({time_id: deleteTimeDto.time_id})
    }
}
