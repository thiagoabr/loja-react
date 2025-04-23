import { atom } from 'recoil';
import { Usuario } from '../types/usuario.type';

export const usuarioAtom = atom<Usuario>({
  key: 'usuarioAtom',
  default: {
    id: 0,
    nome: '',
    email: '',
    senha: '',
  },
});
