import React, { useState } from 'react';
import Axios from 'axios'
import Swal from 'sweetalert2'
import Logo from '../assets/images/logos/logo_utpg7.png'
import Background from '../assets/images/caracter/piscina.jpg'

export default function CrearAdmin() {

    const [nombre, setNombre] = useState('')
    const [correo, setCorreo] = useState('')
    const [contrasena, setContrasena] = useState('')

    const registro = async (e) => {
        e.preventDefault();
        const usuario = { nombre, correo, contrasena }
        const respuesta = await Axios.post('./admin/crear', usuario)
        console.log(respuesta)
        const mensaje = respuesta.data.mensaje
        

        if (mensaje !== 'Usuario Admin creado') {

            Swal.fire({
                icon: 'error',
                title: mensaje,
                showConfirmButton: false,
                timer: 1500
            })


        }

        else {

            // const token= respuesta.data.token 
            // const nombre= respuesta.data.nombre
            // const idUsuario= respuesta.data.id

            // sessionStorage.setItem('token',token)
            // sessionStorage.setItem('nombre',nombre)
            // sessionStorage.setItem('idUsuario',idUsuario)

            Swal.fire({
                icon: 'success',
                title: mensaje,
                showConfirmButton: false,
                timer: 1500
            })
            window.location.href = '/login'


        }

    }

    return (
        <div style = { {backgroundImage: `url(${Background})`}}>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-7 mx-auto">
                        <div className="card">
                            <div className="container text-center fa-5x">
                                <i className="fas fa-user-plus"></i>
                            </div>
                            <div className="add_admin_icon">
                                <img src={Logo} alt="foto" />
                            </div>
                            <div className="card-header text-center bg-primary">
                                <h4>Registrarse como administrador</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={registro}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label className="fs-4">Nombre Completo</label>
                                            <input type="text" className="form-control required" onChange={(e) => setNombre(e.target.value)} />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="fs-4">Correo electronico</label>
                                            <input type="text" className="form-control required" onChange={(e) => setCorreo(e.target.value)} />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="fs-4">Contraseña</label>
                                            <input type="text" className="form-control required" onChange={(e) => setContrasena(e.target.value)} />
                                        </div>


                                    </div>
                                    <br />
                                    <button type="submit" className="btn btn-primary p-3 ">
                                        <span className="fa fa-save"></span>Registrarse
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
