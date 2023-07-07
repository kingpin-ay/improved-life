import './css/App.css'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'




function App() {
  const auth = {"token" : false}

  return (
    <>
      <Navbar />
      {/* {auth.token? (<Outlet/>) : (<Navigate to="/login"/>)} */}
        <Outlet/>
    </>
  )
}

export default App
