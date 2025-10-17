import React from 'react';
import { Container, Tabs, Tab, Form, Button } from 'react-bootstrap';
import './registroUsuario.css';

const RegistroUsuario = () => {
  return (
    <Container className="contenedor-registro">
      <Tabs defaultActiveKey="registro" id="tabs-registro" className="mb-3 tarjeta-registro-tabs" fill>
        
        <Tab eventKey="registro" title="Registro">
          <Form className="p-4">
            <Form.Group className="mb-3" controlId="usuario-reg">
              <Form.Label>Ingrese su usuario</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="pass-reg">
              <Form.Label>Ingrese su contraseña</Form.Label>
              <Form.Control type="password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="pass-confirm">
              <Form.Label>Reingrese su contraseña</Form.Label>
              <Form.Control type="password" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Check type="checkbox" label="Acepto términos y condiciones" id="checkbox-formu" />
            </Form.Group>

            <Button variant="danger" type="submit" className="w-100">
              Registrarse
            </Button>
          </Form>
        </Tab>

        <Tab eventKey="iniciar-sesion" title="Iniciar Sesión">
          <Form className="p-4">
            <Form.Group className="mb-3" controlId="usuario-login">
              <Form.Label>Ingrese su usuario</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="pass-login">
              <Form.Label>Ingrese su contraseña</Form.Label>
              <Form.Control type="password" />
            </Form.Group>

            <Button variant="danger" type="submit" className="w-100">
              Iniciar sesión
            </Button>
          </Form>
        </Tab>
      </Tabs>
    </Container>
  );
}

export default RegistroUsuario;