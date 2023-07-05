

const RecipeCard = (props) => {
    return (
        <div className="card" style={{width:"18rem"}}>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">{props.ingre}</h6>
                <p className="card-text">{props.des}</p>
                <p className="card-text">Needed Time : {props.time} hrs</p>
                <p className="card-text">Added On {props.date}</p>
            </div>
        </div>
    )
}

export default RecipeCard