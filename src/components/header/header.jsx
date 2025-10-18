import React, { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import logoDeLaTienda from '../../assets/Logo.png';
import './header.css';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${searchTerm}`);
      setSearchTerm('');
    }
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logoDeLaTienda}
            alt="Logo de la Tienda"
            className="logo-nav"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Form className="d-flex mx-lg-auto my-2 my-lg-0" onSubmit={handleSearchSubmit}>
            <Form.Control
              type="search"
              placeholder="Buscar productos..."
              className="me-2"
              aria-label="Buscar"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button variant="danger" type="submit">Buscar</Button>
          </Form>

          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/nosotros">Nosotros</Nav.Link>
            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
            <Nav.Link as={Link} to="/ingreso">Ingresar</Nav.Link>
            
            <NavDropdown 
              title="Productos" 
              id="basic-nav-dropdown" 
              align="end"
            >
              <NavDropdown.Item as={Link} to="/productos/pokemon">Pokemon</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/productos/yugioh">Yu-Gi-Oh!</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/productos/magic">Magic</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/productos/mitos">Mitos y Leyendas</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;