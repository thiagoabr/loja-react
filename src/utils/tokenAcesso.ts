const CHAVE_TOKEN = 'token_acesso';
const CHAVE_EXPIRACAO = 'token_expiracao';
const TEMPO_EXPIRACAO_MINUTOS = parseInt(process.env.REACT_APP_TOKEN_EXPIRA_MINUTOS || '1', 10);

export function setTokenAcesso(token: string) {
  const agora = new Date();
  const expiracao = new Date(agora.getTime() + TEMPO_EXPIRACAO_MINUTOS * 60000);
  
  sessionStorage.setItem(CHAVE_TOKEN, token);
  sessionStorage.setItem(CHAVE_EXPIRACAO, expiracao.toISOString());
}

export function getTokenAcesso(): string | null {
  const token = sessionStorage.getItem(CHAVE_TOKEN);
  const expiracao = sessionStorage.getItem(CHAVE_EXPIRACAO);

  if (!token || !expiracao) return null;

  const agora = new Date();
  const dataExpiracao = new Date(expiracao);

  if (agora > dataExpiracao) {
    removerTokenAcesso(); // Expirado
    return null;
  }

  return token;
}

export function removerTokenAcesso() {
  sessionStorage.removeItem(CHAVE_TOKEN);
  sessionStorage.removeItem(CHAVE_EXPIRACAO);
}
