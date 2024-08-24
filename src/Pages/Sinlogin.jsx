
import '../styless/REgistro.css'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'


function Sinlogin() {
    const onSubmit = async (/* data */) => {
        /* try {
          const response = await registerUserService(data)
          if(response.status === 201) {
            console.log('User created successfully')
            navigate('/login')
          }
        } catch (error) {
          console.error('Ocurrio un error al registrar el usuario', error.message)
        } */
      }

const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  return (
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
       
    <input className="botons" type="submit" value="Registrar"/>
    <p><Link to="/Login">¿Ya tengo Cuenta?</Link></p>
    <p className='' style={{color:"white"}}>© 2017–2024</p>
  </section>
  
</form>
  )
}

export default Sinlogin
