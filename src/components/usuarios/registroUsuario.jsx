import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Card } from 'react-bootstrap';
import { Tab } from 'bootstrap';

const RegistroUsuario = () => {
  return (
    <div>
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="Registro" title="Registro">
        <Card className="tarjeta-Registro">
            <Card.Img variant="top" src={producto.imagen} />
            <Card.Body>
            <form>
            <div class="form-group">
                <label for="usuario">Ingrese su usuario</label>
                <input type="usuario" class="formulario" id="input-formu"/>
            </div>
            <div class="form-group">
                <label for="contraseña">Ingrese su contraseña</label>
                <input type="clave" class="formulario" id="input-formu"/>
            </div>
            <div class="form-group">
                <label for="confirmar-contraseña">Reingrese su contraseña</label>                
                <input type="clave" class="formulario" id="input-formu"/>
            </div>
            <div class='form-group form-check'>
                <input type="checkbox" class="formulario-box" id="checkbox-formu"/>
                <label class="form-check-label" for="exampleCheck1">Acepto terminos y condiciones</label>
            </div>
            <button type="submit" class="btn btn-primary">Registrarse</button>
            </form>
            </Card.Body>
        </Card>
      </Tab>
      <Tab eventKey="Iniciar sesion" title="Iniciar sesion">
        <Card className="tarjeta-Registro">
            <Card.Body>
            <form>
            <div class="form-group">
                <label for="usuario">Ingrese su usuario</label>
                <input type="usuario" class="formulario" id="input-formu"/>
            </div>
            <div class="form-group">
                <label for="contraseña">Ingrese su contraseña</label>
                <input type="clave" class="formulario" id="input-formu"/>
            </div>
            <button type="submit" class="btn btn-primary">Iniciar sesión</button>
            </form>
            </Card.Body>
        </Card>
      </Tab>
    </Tabs>
    </div>
  );
}

export default RegistroUsuario;