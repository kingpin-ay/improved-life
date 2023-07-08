import { useState } from "react"
import useAuth from "../hooks/useAuth"
import { useNavigate, useLocation , Link} from "react-router-dom"
import axios from 'axios'




const Login = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || "/"
  const { setAuth } = useAuth()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await axios.post('http://localhost:3000/users/auth', { 'username': username, 'password': password }).then((response) => {
        if (response.data.isPass) setAuth({ username: response.data['username'], id: response.data['id'] })
        else alert("login faild please check ID and Password")
      })
      setUsername('')
      setPassword('')
      navigate(from, { replace: true })

    } catch (e) {
      alert(e)
    }
  }


  return (
    <>
      <div className="d-flex flex-column p-4 align-items-center mt-5 justify-content-between" style={{ height: "15rem" }}>
        <h3 >LOG IN</h3>
        <form className="vw-70 d-flex flex-column align-item-center p-3" onSubmit={handleSubmit}>
          <div className="mb-3">
            <input type="username" className="form-control" value={username} onChange={e => setUsername(e.target.value)} placeholder="username" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} placeholder="password" id="exampleInputPassword1" />
          </div>
          <button type="submit" className="btn btn-primary">LOGIN</button>
        </form>
        <p>Don't have a account <Link to="/signup"><span style={{color:"blue"}}>SIGN UP</span></Link></p>
      </div>  
    </>

  )
}

export default Login


