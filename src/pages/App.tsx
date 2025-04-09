import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from '../components/Menu';
import CadastroUsuario from '../pages/Usuario/CadastroUsuario';
import ListaUsuarios from '../pages/Usuario/ListaUsuario';
import CadastroProduto from '../pages/Produto/CadastroProduto';
import ListaProdutos from '../pages/Produto/ListaProduto';
import Autenticacao from '../pages/Autenticacao';
import RotaPrivada from '../components/RotaPrivada';

export default function App() {
  return (
    <Router>
      <div className='App'>
        <Menu />
        <div>
          <h1>Bem-vindo à nossa Loja React!</h1>
          <p>Gerencie usuários e produtos de forma simples e eficiente.</p>
        </div>
        <Routes>
          <Route path='/' element={<Autenticacao />} />
          
          <Route path="/usuarios/cadastro" element={
            <RotaPrivada>
              <CadastroUsuario />
            </RotaPrivada>
          } />

          <Route path="/usuarios" element={
            <RotaPrivada>
              <ListaUsuarios />
            </RotaPrivada>
          } />

          <Route path="/produtos/cadastro" element={
            <RotaPrivada>
              <CadastroProduto />
            </RotaPrivada>
          } />

          <Route path="/produtos" element={
            <RotaPrivada>
              <ListaProdutos />
            </RotaPrivada>
          } />

          <Route path="*" element={<Autenticacao />} /> {/* fallback */}
        </Routes>
      </div>
    </Router>
  );
}
