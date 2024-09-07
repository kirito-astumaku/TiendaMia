import '../styless/REgistro.css';
import { Link } from 'react-router-dom';
 import {loginUserService } from '../services/userServices';
import { useAuthContext } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';   
import { useForm } from 'react-hook-form'; 

function Login2() {
  const navigate = useNavigate()

  const { login } = useAuthContext() 
 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  
  const onSubmit = async (  data  ) => {
       try {
      const response = await loginUserService(data)
      if(response.status === 200) {
        login(response.data.token)
        console.log('inicio completdo ')
        navigate('/Home')
      }
    } catch (error) {
      console.error('Ocurrio un error al iniciar sesión', error.message)
    }   
  } 

  return (
    <form onSubmit={handleSubmit(onSubmit)} >  
    <section className="form-register">
    <h4>Inicia secion en  TiendaMia </h4>
    {errors.nombres && <span  style={{color: "red"}} >Falta información en el campo</span>}
    <input
     className="controls"
      type="email"
       name="email"
        id="email"
         placeholder="Ingrese su Correo"
         {...register("email", { required: true })}
         />
     {errors.contraseña && <span style={{color: "red"}}>Falta información en el campo</span>}    
    <input
     className="controls"
      type="password" 
      name="password"
       id="password" 
       placeholder="Ingrese su Contraseña"
       {...register("password", { required: true })}
       />
       
    <input className="botons" type="submit" value="Inicio de secion"/>
    <p><Link to="/Signup">¿No tienes cuenta registrate?</Link></p>
  

  </section>
</form>
  )
}

export default Login2

