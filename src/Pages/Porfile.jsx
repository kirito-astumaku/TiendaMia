import { useState,  useEffect } from 'react';
import { getMyUserService } from "../services/userServices"
import { useAuthContext } from '../hooks/useAuth'
import "../styless/perfil.css"
function Porfiles() {
  const {autenticated} = useAuthContext()
  const [Userdata, setUserdata] = useState("")

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token')
        if (token) {
          const response = await getMyUserService(token)
          
          
          setUserdata(response.data)
        }
      } catch (error) {
        console.error("Error fetching user data:", error)
      }
    };

    if (autenticated) {
      fetchUserData();
    }
  }, [autenticated]);
  


  return (
    <div className='padre123'>
      <h1 className='data243'>Perfil</h1>
      <h2 className='data243'>Name: {Userdata.first_name}</h2>
      <h2 className='data243'>Apellido: {Userdata.last_name}</h2>
      <h2 className='data243'>Genero: {Userdata.gender}</h2>
      <h2 className='data243'>Email: {Userdata.email}</h2>
      <h2 className='data243'>Contraseña: ***********</h2>
      <h2 className='data243'>Rol: {Userdata.role}</h2>
    </div>
  )
}

export default Porfiles
