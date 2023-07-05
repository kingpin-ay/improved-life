import Behaviors from "../components/Behaviors"
import Cards from "../defaults/Default"

const Home = () => {
    return (
        <>
            <div className="d-flex flex-wrap p-4 justify-content-around ">
                {Cards.length ? (
                    Cards.map((card) => (
                        <Behaviors title={card.title} description={card.description} link={card.link} />
                    ))
                    
                ) : (
                    <p>NO CARDS</p>
                )}

            </div>


        </>
    )
}

export default Home