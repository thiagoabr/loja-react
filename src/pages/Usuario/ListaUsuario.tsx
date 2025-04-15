import { useEffect, useState } from 'react';
import style from './Usuario.module.scss';
import { listarUsuarios } from '../../services/usuario.service';
import { Usuario } from '../../types/usuario.type';

export default function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  useEffect(() => {
    async function carregarUsuarios() {
      try {
        const response = await listarUsuarios();
        setUsuarios(response);
      } catch (error) {
        alert('Erro ao carregar usuários');
        console.error(error);
      }
    }

    carregarUsuarios();
  }, []);

  return (
    <div className={style.listaUsuarios}>
      <h1>Lista de Usuários</h1>
      {usuarios.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>E-mail</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario: any) => (
              <tr key={usuario.id}>
                <td>{usuario.nome}</td>
                <td>{usuario.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className={style.emptyState}>Nenhum usuário cadastrado.</p>
      )}
    </div>
  );
}
