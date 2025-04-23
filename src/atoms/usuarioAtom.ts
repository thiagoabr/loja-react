import { atom } from 'recoil';
import { Usuario } from '../types/usuario.type';

export const usuarioAtom = atom<Usuario>({
  key: 'usuarioAtom',
  default: {
    nome: '',
    email: '',
    senha: '',
  },
});
