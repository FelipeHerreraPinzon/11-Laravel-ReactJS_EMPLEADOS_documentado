import axios from 'axios'
import React, {useState} from 'react'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/empleado'
const CrearEmpleado = () => {

    const [nombre, setNombre] = useState('')
    const [celular, setCelular] = useState('')
    const [correo, setCorreo] = useState('')
    const navigate = useNavigate()
    const [setValidationError] = useState({})

    const store = async (e) => {
        e.preventDefault();
        await axios.post(endpoint, {nombre: nombre, celular: celular, correo: correo}).then(({data})=>{
            Swal.fire({
              icon:"success",
              title: '¡ Empleado Creado !',
              text:data.message
            })
            navigate("/")
          }).catch(({response})=>{
            if(response.status===422){
              setValidationError(response.data.errors)
            }else{
              Swal.fire({
                text:response.data.message,
                icon:"error"
              })
            }
        })
    

    }
  return (
    <div>
        <h2>Crear Nuevo Empleado</h2>
        <form onSubmit={store}>
            <div className='mb-3'>
                <label className='form-label'>Nombre</label>
                <input 
                    value={nombre} 
                    onChange={ (e)=> setNombre(e.target.value)}
                    type='text'
                    className='form-control'
                    placeholder='INGRESE NOMBRE DEL EMPLEADO'
                />
            </div>

            <div className='mb-3'>
                <label  className='form-label'>Celular</label>
                <input 
                    value={celular} 
                    onChange={ (e)=> setCelular(e.target.value)}
                    type='number'
                    className='form-control'
                    placeholder='INGRESE CELULAR DEL EMPLEADO'
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Correo</label>
                <input 
                    value={correo} 
                    onChange={ (e)=> setCorreo(e.target.value)}
                    type='text'
                    className='form-control'
                    placeholder='INGRESE CORREO DEL EMPLEADO'
                />
            </div>

            

            <button type='submit' className='btn btn-success'>Enviar</button>
        </form>
    </div>
  )
}

export default CrearEmpleado
