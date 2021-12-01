import MaterialTable from 'material-table'
import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import Axios from 'axios'

export default function VerSolicitudes() {

  const [solicitudes, setSolicitudes] = useState([])
  // const [setIdSolicitud]=useState('')
  // const [setNombres]=useState('')
  // const[setApellidos]=useState('')
  // const [setCorreo] = useState('')
  // const [setIdentificacion] = useState('')

  // const [setShow] = useState(false);




  useEffect(() => {
    obtenerSolicitudes()
  }, [])


  const obtenerSolicitudes = async () => {

    const token = sessionStorage.getItem('token')
    const respuesta = await Axios.get('/solicitud/listarSolicitudes', {
      headers: { 'autorizacion': token }
    })

    console.log(respuesta)
    setSolicitudes(respuesta.data)


  }

  // const obtenerPersona= async(idParametro)=>{

  //   setShow(true)
  //   const id = idParametro
  //   const token = sessionStorage.getItem('token')
  //   const respuesta = await Axios.get('/solicitud/listar/'+id,{
  //     headers:{'autorizacion':token}
  //   })

  //   console.log(respuesta.data)
  //   setIdSolicitud(respuesta.data._id)
  //   setNombres(respuesta.data.nombre)
  //   setApellidos(respuesta.data.apellidos)
  //   setIdentificacion(respuesta.data.identificacion)
  //   setCorreo(respuesta.data.correo)


  // }


  const eliminar = async (id) => {


    const token = sessionStorage.getItem('token')
    const respuesta = await Axios.delete('/solicitud/eliminar/' + id, {
      headers: { 'autorizacion': token }

    })
    const mensaje = respuesta.data.mensaje
    Swal.fire({
      icon: 'success',
      title: mensaje,
      showConfirmButton: false,
      timer: 1500
    })

    obtenerSolicitudes()


  }

  const data =
    solicitudes.map((solicitud) => ({
      id: solicitud._id,
      nombre: solicitud.nombre,
      apellidos: solicitud.apellidos,
      identificacion: solicitud.identificacion,
      correo: solicitud.correo

    }))



  return (
    <div className="container">
      <br />
      <MaterialTable
        title="Mi tabla"
        columns={[

          { title: 'ID SOLICITUD', field: 'id' },
          { title: 'NOMBRE', field: 'nombre' },
          { title: 'APELLIDO', field: 'apellidos' },
          { title: 'IDENTIFICACIÓN', field: 'identificacion' },
          { title: 'CORREO', field: 'correo' },


        ]}
        data={data}
        options={{
          search: true,
          actionsColumnIndex: -1,
          initialPage: 1

        }}

        actions={[
          {
            icon: 'delete',
            tooltip: 'Eliminar',
            onClick: (event, rowData) => eliminar(rowData.id)

          },
        ]}
      />

    </div>
  )
}


