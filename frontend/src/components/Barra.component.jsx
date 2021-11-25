import React from 'react'
import {Navbar, Container,Nav,NavDropdown,Form, Button, Offcanvas, FormControl} from 'react-bootstrap'

export default function nav() {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand={false}>
                <Container fluid>
                    <Navbar.Brand href="#">
                    <img
                            src="./logo_utpg7.png"
                            width="136"
                            height="46"
                            className="d-inline-block align-top"
                            alt="App logo" />

                    </Navbar.Brand>
                    <Navbar.Brand href="#" className="cerrar_sesion"><i class="uil uil-signout"></i>  Cerrar sesión </Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                    >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">Bienvenido Andrés Camacho</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                        <NavDropdown title="Acciones" id="offcanvasNavbarDropdown">
                            <NavDropdown.Item href="/verSolicitudes"><i class="uil uil-clipboard-notes"></i> Ver solicitudes</NavDropdown.Item>
                            
                        </NavDropdown>

                        </Nav>
                        <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                        </Form>
                    </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    )
}
