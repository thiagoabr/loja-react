import { Autenticacao } from '../types/autenticacao.type';

export interface AuthContextProps {
  token: string | null;
  login: (dados: Autenticacao) => Promise<boolean>;
  logout: () => void;
  estaAutenticado: boolean;
}