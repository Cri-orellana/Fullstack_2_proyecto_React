import React from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext'


export default function AppNavbar(){
const { user, logout } = useAuth()


return (
<Navbar bg="dark" variant="dark" expand="md" className="mb-4">
<Container>
<a class="navbar-brand" href="index.html">
      <img src="src\assets\Logo.png" alt="TCG Project" width="40" height="40" class="d-inline-block align-text-top"/>
      TCG Project
    </a>
<Navbar.Toggle aria-controls="main-nav" />
<Navbar.Collapse id="main-nav">
<Nav className="me-auto">
<Nav.Link as={NavLink} to="/productos">Productos</Nav.Link>
<Nav.Link as={NavLink} to="/carrito">Carrito</Nav.Link>
<Nav.Link as={NavLink} to="/nosotros">Nosotros</Nav.Link>

</Nav>
<Nav>
{user ? (
<>
<Navbar.Text className="me-3">Hola, <strong>{user.nombre}</strong></Navbar.Text>
<Button size="sm" variant="outline-light" onClick={logout}>Cerrar sesión</Button>
</>
) : (
<>
<Nav.Link as={NavLink} to="/login">Iniciar sesión</Nav.Link>
<Nav.Link as={NavLink} to="/register">Registrarse</Nav.Link>
</>
)}
</Nav>
</Navbar.Collapse>
</Container>
</Navbar>
)
}