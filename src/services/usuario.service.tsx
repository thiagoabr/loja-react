import api from './api.service';
import { Usuario } from '../types/usuario.type';
import { getTokenAcesso } from '../utils/tokenAcesso';

export async function listarUsuarios(): Promise<Usuario[]> {
  const response = await api.get('/usuarios',
    {
      headers: {
        Authorization: `Bearer ${getTokenAcesso()}`
      }
    });
  return response.data;
}
  
export async function cadastrarUsuario(usuario: Usuario): Promise<void> {
  await api.post('/usuarios', usuario,
    {
      headers: {
        Authorization: `Bearer ${getTokenAcesso()}`
      }
    });
}