import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from '../components/Menu/menu';
import Formulario from '../components/Formulario';
import ListaUsuarios from './ListaUsuario/ListaUsuarios';

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <Routes>
          <Route path="/cadastro" element={<Formulario />} />
          <Route path="/usuarios" element={<ListaUsuarios />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
