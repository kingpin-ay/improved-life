

const handleClick = () => {
    
}

const TimeTableCard = (props) => {
    return (
        <div className="card" style={{width: "18rem;"}}>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <p className="card-text">{props.starttime}</p>
                <p className="card-text">{props.endtime}</p>
                <button onClick={handleClick} className="btn btn-primary">Delete</button>
            </div>
        </div>
    )
}

export default TimeTableCard