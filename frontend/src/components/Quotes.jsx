

const Quotes = (props) => {
    return (
        <div className="card" style={{width:'18rem'}}>
            <div className="card-body">
                <h5 className="card-title text-primary-emphasis">Quote #{props.id}</h5>
                <p className="card-text" style={{fontWeight:700}}>{props.quote}</p>
                <p className="card-text">by - <span className="text-primary">@{props.user}</span></p>
                <p className="card-text">{props.time}</p>
            </div>
        </div>
    )
}

export default Quotes