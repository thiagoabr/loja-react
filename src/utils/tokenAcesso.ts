const CHAVE_TOKEN = 'token_acesso';
const CHAVE_EXPIRACAO = 'token_expiracao';
const TEMPO_EXPIRACAO_MINUTOS = parseInt(process.env.REACT_APP_TOKEN_EXPIRA_MINUTOS || '30', 10);
const ID_USUARIO = 'id_usuario';

export function setTokenAcesso(token: string, idUsuario: string) {
  const agora = new Date();
  const expiracao = new Date(agora.getTime() + TEMPO_EXPIRACAO_MINUTOS * 60000);
  
  sessionStorage.setItem(CHAVE_TOKEN, token);
  sessionStorage.setItem(CHAVE_EXPIRACAO, expiracao.toISOString());
  sessionStorage.setItem(ID_USUARIO, idUsuario);
}

export function getTokenAcesso():  {token: string, id_usuario:string} | null {
  const token = sessionStorage.getItem(CHAVE_TOKEN);
  const expiracao = sessionStorage.getItem(CHAVE_EXPIRACAO);
  const id_usuario = sessionStorage.getItem(ID_USUARIO);

  if (!token || !expiracao || !id_usuario) return null;

  const agora = new Date();
  const dataExpiracao = new Date(expiracao);

  if (agora > dataExpiracao) {
    removerTokenAcesso(); // Expirado
    return null;
  }

  return {token, id_usuario};
}

export function removerTokenAcesso() {
  sessionStorage.removeItem(CHAVE_TOKEN);
  sessionStorage.removeItem(CHAVE_EXPIRACAO);
  sessionStorage.removeItem(ID_USUARIO);
}
