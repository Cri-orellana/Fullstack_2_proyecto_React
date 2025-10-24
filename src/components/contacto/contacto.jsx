import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { validarContacto } from './validarContacto.js';
import './contacto.css';

const Contacto = () => {
  const [datos, setDatos] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: '',
  });

  const [errores, setErrores] = useState({});
  const [alerta, setAlerta] = useState(null);

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setDatos({
      ...datos,
      [name]: value,
    });
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    setAlerta(null);
    const nuevosErrores = validarContacto(datos);
    setErrores(nuevosErrores);

    if (Object.keys(nuevosErrores).length === 0) {
      setAlerta({
        tipo: 'success',
        mensaje: '¡Mensaje enviado con éxito! Te contactaremos en breve.',
      });
      setDatos({ nombre: '', email: '', asunto: '', mensaje: '' });
    } else {
      setAlerta({
        tipo: 'danger',
        mensaje: 'Por favor, corrige los errores en el formulario.',
      });
    }
  };

  return (
    <Container className="pagina-contacto">
      <Row className="justify-content-center">
        <Col md={8}>
          <h2 className="text-center mb-4">Contáctanos</h2>

          {alerta && (
            <Alert variant={alerta.tipo} onClose={() => setAlerta(null)} dismissible>
              {alerta.mensaje}
            </Alert>
          )}

          <Form noValidate onSubmit={manejarEnvio}>
            <Form.Group className="mb-3" controlId="nombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="nombre"
                value={datos.nombre}
                onChange={manejarCambio}
                isInvalid={!!errores.nombre}
              />
              <Form.Control.Feedback type="invalid">
                {errores.nombre}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={datos.email}
                onChange={manejarCambio}
                isInvalid={!!errores.email}
              />
              <Form.Control.Feedback type="invalid">
                {errores.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="asunto">
              <Form.Label>Asunto</Form.Label>
              <Form.Select
                name="asunto"
                value={datos.asunto}
                onChange={manejarCambio}
                isInvalid={!!errores.asunto}
              >
                <option value="">Selecciona un asunto</option>
                <option value="consulta">Consulta general</option>
                <option value="soporte">Soporte Compra</option>
                <option value="otro">Otro</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errores.asunto}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="mensaje">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                name="mensaje"
                value={datos.mensaje}
                onChange={manejarCambio}
                isInvalid={!!errores.mensaje}
              />
              <Form.Control.Feedback type="invalid">
                {errores.mensaje}
              </Form.Control.Feedback>
            </Form.Group>

            <div className="d-grid gap-2">
              <Button variant="danger" type="submit">
                Enviar
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contacto;