import '../styless/REgistro.css'
 import { useForm } from 'react-hook-form'
import {/*  Link  ,*/  useNavigate  } from 'react-router-dom'
import { registerUserService } from '../services/userServices' 


function Sinlogin1() {

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    try {
      const response = await registerUserService(data)
      if(response.status === 201) {
        console.log('User created successfully')
        navigate('/login')
      }
    } catch (error) {
      console.error('Ocurrio un error al registrar el usuario', error.message)
    }
  }


  return (
<main className='form-signin w-100 m-auto'>
      <section className="form-register">
    <form onSubmit={handleSubmit(onSubmit)}>
    
<h4>Registre a TiendaMia </h4>
{errors.first_name && <span  style={{color: "red"}} >Falta información en el campo</span>}
<div>
  <input
 className="controls" 
 type="text"
  name="first_name" 
  id="first_name" 
  placeholder="Ingrese su Nombre"
  {...register('first_name', { required: true })}
  />
</div>
{errors.last_name && <span>Falta información en el campo</span>}
    <input
      type='text'
      className="controls" 
      id='last_name'
       name='last_name' 
      placeholder='Ingrese su Apellidos'
      {...register('last_name', { required: true })}
    />
    {errors.gender && <span>This field is required</span>}
    <div className='form-floating'>
        <select
          className='form-select'
          id='gender'
          name='gender'
          {...register('gender', { required: true })}
        >
          <option value=''>Choose...</option>
          <option value='M'>Masculino</option>
          <option value='F'>Femenino</option>
        </select>
        <label htmlFor='gender'>Genero</label>
      </div>
      <br />
      
  
  {errors.email && <span style={{color: "red"}}>Falta información en el campo</span>}
<input
 className="controls"
  type="email"
   name="email"
    id="email"
     placeholder="name@example.com"
     {...register("email", { required: true })}
     />
 {errors.password && <span style={{color: "red"}}>Falta información en el campo</span>}    
<input
 className="controls"
  type="password" 
  name="password"
   id="password" 
   placeholder="Ingrese su Contraseña"
   {...register("password", { required: true })}
   />
   

      <button className='w-100 btn btn-lg btn-primary' type='submit'>Sign up</button>
      <p className='mt-5 mb-3 text-muted'>© 2017–2024</p>
      
    </form>
    </section>
  </main>
    
  )
}

export default Sinlogin1