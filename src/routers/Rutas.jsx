import { Routes, Route  } from "react-router-dom";
import Sinlogin from "../Pages/Sinlogin";
import Login from "../Pages/Login";


function Rutas() {
  return (
    <div>
      <Routes>
       <Route path="/Signup" element={ <Sinlogin/>}/>,
       <Route path="/Login" element={ <Login/>}/>,
    </Routes>
    </div>
  )
}

export default Rutas
