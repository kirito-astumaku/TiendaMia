
import '../styless/REgistro.css'
import { useForm } from 'react-hook-form'
import { Link , useNavigate  } from 'react-router-dom'
import { registerUserService } from '../services/userServices'


function Sinlogin1() {

  const navigate = useNavigate()

  const onSubmit = async (data) => {
    try {
      const response = await registerUserService(data)
      if(response.status === 201) {
        console.log('User created successfully')
        navigate('/Login')
      }
    } catch (error) {
      console.error('Ocurrio un error al registrar el usuario', error.message)
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()


  return (
    <main className='form-signin w-100 m-auto'>
        <form onSubmit={handleSubmit(onSubmit)} >  

<section className="form-register">
<h4>Registre a TiendaMia </h4>
{errors.nombres && <span  style={{color: "red"}} >Falta información en el campo</span>}
<div>
  <input
 className="controls" 
 type="text"
  name="nombres" 
  id="nombres" 
  placeholder="Ingrese su Nombre"
  {...register('nombres', { required: true })}
  />
</div>
{errors.last_name && <span>Falta información en el campo</span>}
    <input
      type='text'
      className="controls" 
      id='last_name'
       name='Ingrese Apellidos' 
      placeholder='Ingrese su Apellidos'
      {...register('last_name', { required: true })}
    />
  
  {errors.correo && <span style={{color: "red"}}>Falta información en el campo</span>}
<input
 className="controls"
  type="email"
   name="correo"
    id="correo"
     placeholder="name@example.com"
     {...register("correo", { required: true })}
     />
 {errors.contraseña && <span style={{color: "red"}}>Falta información en el campo</span>}    
<input
 className="controls"
  type="password" 
  name="contraseña"
   id="contraseña" 
   placeholder="Ingrese su Contraseña"
   {...register("contraseña", { required: true })}
   />
   
<button className="botons" type='submit'>Registrar</button> 
{/* <Link className='w-100 btn btn-lg btn-primary' type='submit' to='/Login'>Sign up</Link> */}
<p><Link to="/Login">¿Ya tengo Cuenta?</Link></p>
<p className='' style={{color:"white"}}>© 2017–2024</p>
</section>

</form>
    </main>
    
  )
}

export default Sinlogin1
