import { atom } from 'recoil';
import { Usuario } from '../types/usuario.type';

export const listaUsuarioAtom = atom<Usuario[]>({
  key: 'listaUsuarioAtom',
  default: [],
});
