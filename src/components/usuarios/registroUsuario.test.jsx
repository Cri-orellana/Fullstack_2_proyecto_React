import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import RegistroUsuario from './registroUsuario.jsx';

// `describe` agrupa un conjunto de pruebas relacionadas.
describe('Componente RegistroUsuario', () => {

    // `it` define una prueba individual.
    it('debe renderizar el título de la pestaña de registro', () => {
        // 1. Renderizamos el componente dentro de un Router porque usa `useNavigate`.
        render(
            <BrowserRouter>
                <RegistroUsuario />
            </BrowserRouter>
        );

        // 2. Buscamos un elemento que contenga el texto "Registro".
        // `screen.getByText` busca un elemento visible con el texto exacto.
        const elementoTitulo = screen.getByText('Registro');

        // 3. `expect` es la aserción. Verificamos que el elemento encontrado esté en el documento.
        expect(elementoTitulo).toBeInTheDocument();
    });

});