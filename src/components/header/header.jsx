import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logoDeLaTienda from '../../assets/Logo.png';
import './header.css';

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logoDeLaTienda}
            alt="Logo de la Tienda"
            className="logo-navbar"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            
            <Nav.Link as={Link} to="/nosotros">Nosotros</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/productos/pokemon">Pokemon</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/productos/yugioh">Yu-Gi-Oh!</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/productos/magic">Magic</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/productos/mitos">Mitos y Leyendas</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/usuarios">Ingresar</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;