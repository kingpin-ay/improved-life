import { useState } from "react"

const Signup = () => {
  const [username , setUsername] = useState("")
  const [password , setPassword] = useState("")

  const handleSignUp = async () => {

  }

  return (
    <>
        <div className="d-flex flex-column p-4 align-items-center mt-5 justify-content-between" style={{height:"15rem"}}>
        <h3 >SIGN UP</h3>
        <form className="vw-70 d-flex flex-column align-item-center p-3" onSubmit={(e) => e.preventDefault()}>
          <div className="mb-3">
            <input type="username" className="form-control" value={username} onChange={e=> setUsername(e.target.value)} placeholder="username" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div className="mb-3">
            <input type="password" className="form-control" value={password} onChange={e=> setPassword(e.target.value)} placeholder="password" id="exampleInputPassword1"/>
          </div>
          <button type="submit" className="btn btn-primary" onClick={handleSignUp}>Sign Up</button>
        </form>
      </div>
    </>
  )
}



export default Signup;