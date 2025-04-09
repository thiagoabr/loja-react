import { Link, useNavigate } from 'react-router-dom';
import styles from './Menu.module.scss';
import { useAuth } from '../../contexts/authContext';

export default function Menu() {
  const { logout, estaAutenticado } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className={styles.menu}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {estaAutenticado && (
          <>
            <li>
              <Link to="/usuarios/cadastro">Cadastrar Usuário</Link>
            </li>
            <li>
              <Link to="/usuarios">Lista de Usuários</Link>
            </li>
            <li>
              <Link to="/produtos/cadastro">Cadastrar Produto</Link>
            </li>
            <li>
              <Link to="/produtos">Lista de Produtos</Link>
            </li>
            <li>
              <button onClick={handleLogout} className={styles.logoutButton}>
                Sair
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
