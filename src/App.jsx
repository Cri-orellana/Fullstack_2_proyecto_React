import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/header/header.jsx';
import Footer from './components/footer/footer.jsx';
import Inicio from './Inicio.jsx';
import Nosotros from './Nosotros.jsx';
import PaginaProductos from './components/paginas/paginaProductos.jsx';
import Ingreso from './Ingreso.jsx';
import './App.css';

function Layout() {
  return (
    <div className="layout-principal">
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
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Inicio />} />
        <Route path="nosotros" element={<Nosotros />} />
        <Route path="productos/:franquicia" element={<PaginaProductos />} />
        <Route path="ingreso" element={<Ingreso />} />
      </Route>
    </Routes>
  );
}

export default App;