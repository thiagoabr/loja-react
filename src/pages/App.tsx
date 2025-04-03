import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from '../components/Menu';
import Formulario from '../components/Formulario';
import ListaUsuarios from './ListaUsuario';

export default function App() {
  return (
    <Router>
      <div className='App'>
        <Menu />
        <div>
          <h1>Bem-vindo à nossa Loja React!</h1>
          <p>Gerencie usuários de forma simples e eficiente.</p>
        </div>
        <Routes>
          <Route path='/cadastro' element={<Formulario />} />
          <Route path='/usuarios' element={<ListaUsuarios />} />
        </Routes>
      </div>
    </Router>
  );
}
