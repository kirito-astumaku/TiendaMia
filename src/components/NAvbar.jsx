import { useState } from "react"
import { Link } from 'react-router-dom'
import './style.css'
import PropTypes from "prop-types"
import { useEffect } from "react"
import { NavLink} from "react-router-dom"
import { useAuthContext } from '../hooks/useAuth'
import { getMyUserService } from "../services/userServices"


function NAvbar({ setSearchTerm }){
  const [searchInput, setSearchInput] = useState("")
  const { logout, autenticated/* , userPayload  */} = useAuthContext()
  const [user, setUser] = useState("")

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token')
        if (token) {
          const response = await getMyUserService(token)
          
          
          setUser(response.data.first_name)
        }
      } catch (error) {
        console.error("Error fetching user data:", error)
      }
    };

    if (autenticated) {
      fetchUserData();
    }
  }, [autenticated]);
  

  const handleSearchChange = (event) => {
    const value = event.target.value.toLowerCase()
    setSearchInput(value)
    setSearchTerm(value)
  }


  

  const linkIsActive = (isActive) => isActive ? 'header__item-link header__item-link--is-active' : 'header__item-link'
  return (
    <div >
        <div id='padre1'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid"   >
  <img style={{width:'50px', marginRight:'10px'}} src="src/recursodescargables/carrito-de-compras.png" alt="" />
    <Link  className="navbar-brand" to="/"><h5>Todo en un lugar</h5></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link 
           className="nav-link active"
           aria-current="page"

            to="/"
          ><h5>Home</h5></Link>
        </li>
        {autenticated ? (
  <>
    <li className="nav-item dropdown">
      <Link style={{fontSize:"18px"}} className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        {user}
      </Link>
      <ul className="dropdown-menu">
        <li><Link className="dropdown-item" to="/perfil">Perfil</Link></li>

        <li><hr className="dropdown-divider" /></li>
        <li><NavLink className="dropdown-item" to="/" onClick={logout} style={{background:"none" , color:"black"}} >Cerrar sesión</NavLink></li>
      </ul>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/Carrito">
        <h5>Carrito</h5>
      </Link>
    </li>
  </>
) : 
(
  <>
    
   <li className="nav-item">
          <NavLink 
           className="nav-link" 
           class={({ isActive }) => linkIsActive(isActive)}
           to="/Login">
            <h5>
              iniciar secion
              </h5>
             </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
             class={({ isActive }) => linkIsActive(isActive)}
              to="/Signup">
                <h5>Registro</h5>
            
          </NavLink>
        </li>
      
  </>

)

}
       
        
</ul>
       
      {/* ------------------------------------------------------------------------------------------ */}
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" value={searchInput}
            onChange={handleSearchChange}/>
        {/* <button className="btn btn-outline-success" type="submit">Buscar</button> */}
      </form>
  
    </div>
  </div>
</nav>
</div>
    </div>
  )
}
NAvbar.propTypes = {
  setSearchTerm: PropTypes.func.isRequired
}


export default NAvbar