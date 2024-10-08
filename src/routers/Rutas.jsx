import { Routes, Route, Navigate } from 'react-router-dom'
import Porfiles from '../Pages/Porfile'
import Sinlogin1 from '../Pages/Sinlogin'
import Homes from '../Pages/Home'
import Carrito1 from '../Pages/Carrito'
import Login2 from '../Pages/Login'
import { useAuthContext } from "../hooks/useAuth"
import ProductPage from "../Pages/ProductPage"
/* import ProductCreator from "../components/ProductCreator" */
import PropTypes from "prop-types"
import Secret from "../Pages/Secret"

function Rutas({searchTerm}) {

  const {autenticated, userPayload } = useAuthContext()
  
  return (
    <div>
      <Routes>
       <Route path="/Signup" element={<Sinlogin1/>}/>,
       <Route path="/Login" element={<Login2/>}/>,
       <Route path="/" element={<Homes searchTerm={searchTerm} />}/>,
       <Route path="/Perfil" element={autenticated ?<Porfiles/>: <Navigate to ="/login" />}/>,
       <Route path="/Carrito" element={autenticated ?<Carrito1/> : <Navigate to ="/login" />}/>,
       <Route path="/Secret" element={autenticated && userPayload?.role == 'ADMIN' ? <Secret /> : <Navigate to="/login" /> } />
       <Route path='/product/:id' element={<ProductPage />} />
    </Routes>
    </div>
  )
}
Rutas.propTypes = {
  searchTerm: PropTypes.string.isRequired
}

export default Rutas
