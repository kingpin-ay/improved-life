import { Link } from 'react-router-dom';


const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary p-3">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">IMPROVED-LIFE</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
                        <Link className="nav-link" to="/login">LOGIN</Link>
                        <Link className="nav-link" to="/signup">SIGNUP</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}



export default Navbar;