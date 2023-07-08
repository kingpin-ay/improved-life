export class CreateTimeDto {
    start_time: string
    end_time : string
    date : string
    title: string
    discription : string
    userId : number
}
export class UpdateTimeDto {
    time_id : number
    userId : number
    start_time: string
    end_time : string
    date : string
    title: string
    discription : string
}
export class DeleteTimeDto {
    time_id : number
    userId : number
}

export class FetchTimeDto{
    userId: number
}
