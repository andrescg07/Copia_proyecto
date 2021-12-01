import React, { useState, useEffect } from 'react'
import { Navbar, Container, Offcanvas, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';

export default function Barra() {
    const [show, setShow] = useState(true)
    const [opcionRegistro, setOpcionRegistro] = useState(false)
    const [menu, setMenu] = useState(false)

    useEffect(() => {

        if (sessionStorage.getItem('token')) {
            setMenu(true)
            setShow(false)
            setOpcionRegistro(true)
        }


    }, []);

    const salir = () => {

        sessionStorage.clear()
        window.location.href = "/login"

    }

    return (
        <div>

            <Navbar bg="dark" variant="dark" expand={show}>
                <Container fluid>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Brand hidden={menu} href="#">
                        <img
                            src="./logo_utpg7.png"
                            width="136"
                            height="46"
                            className="d-inline-block align-top"
                            alt="App logo" />
                    </Navbar.Brand>
                    <Link hidden={opcionRegistro} style={{ color: '#FFF', textDecoration: 'none' }} to="/crearAdmin" > <i className='fas fa-user-plus'></i> <Navbar.Brand > Registrarse </Navbar.Brand></Link>
                    <Navbar.Brand hidden={show} href="#" onClick={() => salir()} to="/login"><i className="fas fa-user-times"></i> Cerrar sesión</Navbar.Brand>



                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="start"
                    >
                        
                        <Offcanvas.Header closeButton>
                            <div className="d-flex flex-column">
                            <Offcanvas.Title id="offcanvasNavbarLabel">Opciones</Offcanvas.Title>
                            <Offcanvas.Title id="offcanvasNavbarLabel">Bienvenido: {sessionStorage.getItem('nombre')}</Offcanvas.Title>
                            </div>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <NavDropdown title="Solicitudes" id="offcanvasNavbarDropdown">
                                    <NavDropdown.Item href="/verSolicitudes"><DriveFileRenameOutlineIcon/> Solicitudes</NavDropdown.Item>
                                    {/* <NavDropdown.Item href="/registrarCiudad"><i class="fas fa-user-plus"></i> Registro ciudad</NavDropdown.Item> */}
                                </NavDropdown>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

        </div>
    )
}
