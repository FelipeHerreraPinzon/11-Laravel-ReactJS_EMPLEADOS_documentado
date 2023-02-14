import axios from 'axios'
import React,{useState, useEffect} from 'react'
import Swal from 'sweetalert2';
import { useNavigate, useParams } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/empleado/'

const EditarEmpleado = () => {

   
    const [nombre, setNombre] = useState('')
    const [celular, setCelular] = useState('')
    const [correo, setCorreo] = useState('')
    const navigate = useNavigate()
    const [setValidationError] = useState({})
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault();
        await axios.put(`${endpoint}${id}`, {
            nombre: nombre,
            celular: celular,
            correo: correo
           
        }).then(({data})=>{
            Swal.fire({
              icon:"success",
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
        navigate('/')
    }

    useEffect( () =>{

        const getEmpleadoById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            setNombre(response.data.nombre)
            setCelular(response.data.celular)
            setCorreo(response.data.correo)
           
        }
        getEmpleadoById()
        
    }, [])
  return (
    <div>
        <h2>Editar Empleado</h2>
        <form onSubmit={update}>
            <div className='mb-3'>
                <label className='form-label'>Nombre</label>
                <input 
                    value={nombre} 
                    onChange={ (e)=> setNombre(e.target.value)}
                    type='text'
                    className='form-control'                   
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Celular</label>
                <input 
                    value={celular} 
                    onChange={ (e)=> setCelular(e.target.value)}
                    type='number'
                    className='form-control'                    
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Correo</label>
                <input 
                    value={correo} 
                    onChange={ (e)=> setCorreo(e.target.value)}
                    type='text'
                    className='form-control'             
                />
            </div>



            <button type='submit' className='btn btn-success'>Actualizar</button>
        </form>
    </div>
  )
}

export default EditarEmpleado
