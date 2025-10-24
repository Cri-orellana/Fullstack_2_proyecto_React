import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProveedorCarrito } from './components/carrito/ContextoCarrito.jsx';

import Header from './components/header/header.jsx';
import Footer from './components/footer/footer.jsx';
import Inicio from './Inicio.jsx';
import Nosotros from './Nosotros.jsx';
import PaginaProductos from './components/paginas/paginaProductos.jsx';
import PaginaBusqueda from './components/paginas/paginaBusqueda.jsx';
import Ingreso from './Ingreso.jsx';
import Contacto from './components/contacto/contacto.jsx';
import Carrito from './components/carrito/carrito.jsx';
import './App.css';

function Layout() {
  return (
    <div className="plantilla">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ProveedorCarrito>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="nosotros" element={<Nosotros />} />
          <Route path="productos/:franquicia" element={<PaginaProductos />} />
          <Route path="search" element={<PaginaBusqueda />} />
          <Route path="ingreso" element={<Ingreso />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="carrito" element={<Carrito />} />
        </Route>
      </Routes>
    </ProveedorCarrito>
  );
}

export default App;