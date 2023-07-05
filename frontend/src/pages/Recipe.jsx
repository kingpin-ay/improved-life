import CreateRecipe from "../components/CreateRecipe"
import RecipeCard from "../components/RecipeCard"


const Recipe = () => {
  return (
    <div className="p-4">
      <CreateRecipe/>

      <div className="d-flex justify-content-around flex-wrap">
        <RecipeCard name="biriyani" ingre="rice , meat , water" des="boil the water cook the chicken" time="2" date="18/3"/>
      </div>
    </div>
  )
}

export default Recipe