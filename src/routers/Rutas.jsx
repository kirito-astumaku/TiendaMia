import { Routes, Route } from 'react-router-dom'
import Login2 from '../pages/Login'
import Porfiles from '../Pages/Porfile'
import Sinlogin1 from '../Pages/Sinlogin'
import Homes from '../pages/Home'
import Carrito1 from '../Pages/Carrito'

function Rutas() {
  return (
    <div>
      <Routes>
       <Route path="/Signup" element={<Sinlogin1/>}/>,
       <Route path="/Login" element={ <Login2/>}/>,
       <Route path="/" element={<Homes/>}/>,
       <Route path="/Perfil" element={<Porfiles/>}/>,
       <Route path="/Carrito" element={<Carrito1/>}/>,
    </Routes>
    </div>
  )
}

export default Rutas
