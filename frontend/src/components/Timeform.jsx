

const TimeForm = () => {
    return (
        <>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Create New Job</button>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">New Job</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="row g-3">
                                <div className="row">
                                    <div className="col">
                                        <label for="inputStartTime" className="form-label">Starting Time</label>
                                        <input type="time" className="form-control" aria-label="Start Time" required />
                                    </div>
                                    <div className="col">
                                        <label for="inputEndTime" className="form-label">Ending Time</label>
                                        <input type="time" className="form-control" aria-label="End Time" required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label for="inputDate" className="form-label">Date</label>
                                    <input type="date" className="form-control" id="inputEmail4" required />
                                </div>
                                <div className="col-12">
                                    <label for="inputTitle" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="inputAddress" placeholder="Excercise" required />
                                </div>
                                <div className="col-12">
                                    <label for="inputDescription" className="form-label">Description</label>
                                    <textarea type="text" className="form-control" id="inputAddress2" placeholder="Go to gym at 9" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Schedule</button>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default TimeForm