import axios from "axios"
import { useMutation, useQueryClient } from "react-query"
import useAuth from '../hooks/useAuth'
import { useState } from 'react'





const TimeTableCard = (props) => {
    const queryClient = useQueryClient()
    const { auth } = useAuth()
    const [starttime, setStartTime] = useState(props.starttime)
    const [endtime, setEndTime] = useState(props.endtime)
    const [title, setTitle] = useState(props.title)
    const [date, setDate] = useState(props.date)
    const [des, setDes] = useState(props.description)

    const newMutation = useMutation({

        mutationFn: async (id) => {
            await axios.post('http://localhost:3000/time/delete', { time_id: id })
        },
        onSuccess: () => queryClient.invalidateQueries(['timepost'])
    })
    const updatemutation = useMutation({

        mutationFn: async (data) => {
            await axios.post('http://localhost:3000/time/update', data)
        },
        onSuccess: (Response) => {
            queryClient.invalidateQueries(['timepost'])
        }
    })

    const handleUpdateClick = () => {
        console.log(auth)
        const data = {
            time_id: props.timeId,
            userId: auth.id,
            start_time: starttime,
            end_time: endtime,
            date: date,
            title: title,
            discription: des
        }
        console.log(data)
        updatemutation.mutate(data)
    }


    const handleClick = () => {
        newMutation.mutate(props.timeId)
    }
    return (
        <>

            <div className="card" style={{ width: "18rem", flex: "1 0 21%", alignItems: "center" , textAlign:"center"}}>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <p className="card-text">StartTime : {props.starttime}</p>
                    <p className="card-text">EndTime : {props.endtime}</p>
                    <p className="card-text">PostID : #{props.timeId}</p>
                    <div className="d-flex justify-content-around">
                        <button onClick={handleClick} className="btn btn-primary flex-1">Delete</button>
                        <button className="btn btn-primary flex-1" data-bs-toggle="modal" data-bs-target="#updateJobModal" data-bs-whatever="@mdo">Update</button>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="updateJobModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">update Job</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="row g-3">
                                <div className="row">
                                    <div className="col">
                                        <label for="inputStartTime" className="form-label">Starting Time</label>
                                        <input type="time" className="form-control" value={starttime} onChange={e => setStartTime(e.target.value)} aria-label="Start Time" required />
                                    </div>
                                    <div className="col">
                                        <label for="inputEndTime" className="form-label">Ending Time</label>
                                        <input type="time" className="form-control" value={endtime} onChange={e => setEndTime(e.target.value)} aria-label="End Time" required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label for="inputDate" className="form-label">Date</label>
                                    <input type="date" className="form-control" value={date} onChange={e => setDate(e.target.value)} id="inputEmail4" required />
                                </div>
                                <div className="col-12">
                                    <label for="inputTitle" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="inputAddress" value={title} onChange={e => setTitle(e.target.value)} placeholder="Excercise" required />
                                </div>
                                <div className="col-12">
                                    <label for="inputDescription" className="form-label">Description</label>
                                    <textarea type="text" value={des} onChange={e => setDes(e.target.value)} className="form-control" id="inputAddress2" placeholder="Go to gym at 9" />
                                </div>
                            </form>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={handleUpdateClick} data-bs-dismiss="modal">Update</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TimeTableCard