import React from 'react'

export default function CrearAdmin() {
    return (
        <div>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-7 mx-auto">
                        <div className="card">
                            <div className="container text-center fa-5x">
                                <i className="fas fa-user-plus"></i>
                            </div>
                            <div className="card-header bg-info text-center">
                                <h4>Registrar una solicitud de venta</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={"RegistrarSolicitud"}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Nombre</label>
                                            <input type="text"className="form-control required" />
                                        </div>

                                        <div className="col-md-6">
                                            <label>Apellidos</label>
                                            <input type="text"className="form-control required" />
                                        </div>

                                        <div className="col-md-6">
                                            <label>Número Identificación</label>
                                            <input type="text"className="form-control required" />
                                        </div>

                                        <div className="col-md-6">
                                            <label>Correo</label>
                                            <input type="text"className="form-control required" />
                                        </div>

                                        <div className="col-md-6">
                                            <label>Telefono</label>
                                            <input type="text"className="form-control required" />
                                        </div>
                                    </div>
                                    <br />
                                    <button type="submit" className="btn btn-outline-info">
                                        <span class="fa fa-save"></span>Registrarse
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
