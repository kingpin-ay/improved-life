import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import axios from 'axios'


const Navbar = () => {
    const { auth , setAuth} = useAuth()

    const handleLogout = async (event) => {
        try{
            await axios.get('http://localhost:3000/users/logout').then(()=> {
                setAuth({})
            })
        }catch(e){
            alert(e)
        }
    }








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
                        <div className='nav-item dropdown'>
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                NAVIGATE
                            </a>
                            <ul className="dropdown-menu dropdown-menu-right">
                                <li><Link to="/time" className="dropdown-item" >Time Managment</Link></li>
                                <li ><Link to="/resource" className="dropdown-item"  >Resource Managment</Link></li>
                                <li ><Link to="/financial" className="dropdown-item" >Financial Managment</Link></li>
                                <li  ><Link to="/health" className="dropdown-item" >Recipe Tracker</Link></li>
                                <li ><Link to="/quotes" className="dropdown-item" >Daily Quotes</Link></li>
                            </ul>
                        </div>
                        {auth?.username ? (
                            <div className='nav-item d-flex border'>
                                <Link className='nav-link disabled' style={{color:"black"}}>{auth.username}</Link>
                                <Link className="nav-link" onClick={handleLogout} to="/">LOGOUT</Link>
                            </div>
                        ) : (
                            <>
                                <Link className="nav-link" to="/login">LOGIN</Link>
                                <Link className="nav-link" to="/signup">SIGNUP</Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}



export default Navbar;