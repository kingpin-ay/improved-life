import { Link } from "react-router-dom"


const wordTrim = (text) => {
    return text.slice(0, 199)
}


const Behaviors = (props) => {

    return (
        <div className="card text-center mb-5" style={{ width: '22rem' }}>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{wordTrim(props.description) + '...'}</p>
                <Link to={props.link} className="btn btn-primary">Enter</Link>
            </div>
        </div>
    )
}


export default Behaviors