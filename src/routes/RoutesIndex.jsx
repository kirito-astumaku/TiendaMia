import { Routes, Route, Navigate } from 'react-router-dom'
import Login2 from '../pages/Login'
import Signup from '../pages/Signup'
import { useAuthContext } from '../hooks/useAuth'
import Porfiles from '../Pages/Porfile'
import Homes from '../pages/Home'
import Carrito1 from '../Pages/Carrito'


const RoutesIndex = () => {
  const { isAuth } = useAuthContext()

  return (
    <Routes>
        <Route path="/" element={<Homes />} />
        <Route
          path="/dashboard"
          element={isAuth ? <Porfiles /> : <Navigate to="/Login" />}
        />
        <Route
          path="/secret"
          element={isAuth ? <Carrito1 /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<Login2 />} />
        <Route path="/signup" element={<Signup />} />
    </Routes>
  )
}
export default RoutesIndex