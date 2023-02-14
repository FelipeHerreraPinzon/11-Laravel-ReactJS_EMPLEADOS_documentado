import React, {useEffect, useState} from 'react'
import Swal from 'sweetalert2';
import axios from 'axios'
import {Link} from 'react-router-dom'

const endpoint = 'http://localhost:8000/api'
const MostrarEmpleados = () => {
    const [ empleados, setEmpleados ] = useState([])
        useEffect( ()=> {
            getAllEmpleados()
        }, [])

    const getAllEmpleados = async () => {
        const response = await axios.get(`${endpoint}/empleados`)
        setEmpleados(response.data)
    }    

  /*  
  const deleteEmpleado = async (id) => {
          if(window.confirm("¿¿¿ Eliminar este registro ???")){
        await axios.delete(`${endpoint}/empleado/${id}`)
        getAllEmpleados()
        }
    } 
  */
    const deleteEmpleado = async (id) => {
        const isConfirm = await Swal.fire({
           title: '¿ Estas seguro de borrar esto ?',
           text: "¡ Esta acción es irreversible !",
           icon: 'warning',
           showCancelButton: true,
           confirmButtonColor: '#3085d6',
           cancelButtonColor: '#d33',
           confirmButtonText: 'Si, borrar!'
         }).then((result) => {
           return result.isConfirmed
         });
         if(!isConfirm){
           return;
         }

      
     await axios.delete(`${endpoint}/empleado/${id}`).then(({data})=>{
       Swal.fire({
           icon:"success",
           text:data.message
       })
     getAllEmpleados()
   }).catch(({response:{data}})=>{
       Swal.fire({
           text:data.message,
           icon:"error"
       })
     })
}
    return (
        <div>
            <div className='d-grid gap-2'>
                <Link to="/crear" className='btn btn-success col-2 mt-2 mb-2 text-white'>CREAR</Link>
            </div>
            <table className='table table-striped'>
                <thead className='bg-primary text-white'>
                    <tr>
                        <th>NOMBRE</th>
                        <th>CORREO Name</th>
                        <th>CELULAR</th>
                        <th>ACCIONES</th>
                    </tr>
                </thead>
                <tbody>
                    { empleados.map( (empleado) => (
                        <tr key={empleado.id}>
                            <td>{empleado.nombre}</td>
                            <td>{empleado.correo}</td>
                            <td>{empleado.celular}</td>
                    
                            <td>
                                <Link to={`/editar/${empleado.id}`} className='btn btn-info'>Edit</Link>
                                <button onClick={ ()=>deleteEmpleado(empleado.id)} className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                    ))}                
                </tbody>
            </table>
        </div>
      )
    }

    export default MostrarEmpleados
        





   

  


   

          
       
































