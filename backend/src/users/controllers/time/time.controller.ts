import { Controller, Post, Body} from '@nestjs/common';
import { CreateTimeDto, DeleteTimeDto, FetchTimeDto, UpdateTimeDto } from 'src/users/dtos/Time.dto';
import { TimeService } from 'src/users/services/time/time.service';


@Controller('time')
export class TimeController {

    constructor(private timeservice: TimeService) { }



    @Post('create')
    async createTime(@Body() timeDetails: CreateTimeDto) {
        try {

            return await this.timeservice.createTimeCard(timeDetails)

        } catch (e) {
            return e;
        }
    }

    @Post('all')
    async fetchAll(@Body() data: FetchTimeDto) {
        try {

            return await this.timeservice.findAll(data)
        } catch (e) {
            return e;
        }
    }

    @Post('update')
    async updateRecord(@Body() updateTimeDto: UpdateTimeDto) {
        try {
            return await this.timeservice.updateTimeCard(updateTimeDto)
        } catch (e) {
            return e;
        }
    }

    @Post('delete')
    async deleteRecord(@Body() deleteTimeDto: DeleteTimeDto) {
        try {
            return await this.timeservice.deleteTimeCard(deleteTimeDto)
        } catch (e) {
            return e;
        }
    }




}
