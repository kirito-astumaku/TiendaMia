
import { Link } from 'react-router-dom'
import './style.css'

function NAvbar(){


  


  return (
    <div >
        <div id='padre'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid"  >
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
        <li className="nav-item">
          <Link  
          className="nav-link" 
          to="#"

          >
            <h5>
              Nuevo
              </h5>
              </Link>

        </li>
        <li className="nav-item dropdown">
          <Link  className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             User 
          </Link>
          <ul className="dropdown-menu">
            <li><Link  className="dropdown-item" to="/Carrito">Carrito</Link></li>
            <li><Link  className="dropdown-item" to="/perfil">Perfil</Link></li>
            <li><Link  className="dropdown-item" to=""></Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link  className="dropdown-item" to="">Cerrar secion</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link" to="/Carrito"><h5>Carrito</h5>
            </Link>
        </li>
        
        <li className="nav-item">
          <Link 
           className="nav-link" to="/Login"><h5>iniciar secion</h5></Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link" to="/Signup"><h5>Registro</h5></Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Buscar</button>
      </form>
  
    </div>
  </div>
</nav>
</div>
    </div>
  )
}


export default NAvbar