

const CreateRecipe = () => {
    return (
        <>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#createRecipeModal" data-bs-whatever="@mdo">Create New Recipe</button>


            <div className="modal fade" id="createRecipeModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">New Recipe</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="row mb-3">
                                    <div className="col">
                                        <label for="inputFood" className="form-label">Food</label>
                                        <input type="text" className="form-control" id="inputFood" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col">
                                        <label for="inputIngredients" className="form-label">Ingridients: </label>
                                        <input type="text" className="form-control" id="inputIngredients" />
                                    </div>
                                    
                                </div>
                                <div className="row mb-3 p-2">
                                    <div className="col">
                                        <label for="inputTime" className="form-label">Cooking Time: ( in hours ) </label>
                                        <input type="text" className="form-control" id="inputTime" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col">
                                        <label for="inputProcess" className="form-label">Process: </label>
                                        <textarea type="text" className="form-control" id="inputProcess" />
                                        
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Add</button>
                        </div>
                    </div>
                </div>
            </div>




        </>
    )
}

export default CreateRecipe