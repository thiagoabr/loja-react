import api from './api.service';
import { Autenticacao } from '../types/autenticacao.type';

interface RespostaAutenticacao {
  token_acesso: string;
}

export async function realizarLogin(dados: Autenticacao): Promise<RespostaAutenticacao> {
  const response = await api.post<RespostaAutenticacao>('/autenticacao/login', dados);
  return response.data;
}
