import { createContext, useContext, useEffect, useState } from 'react';
import { Autenticacao } from '../types/autenticacao.type';
import { realizarLogin } from '../services/autenticacao.service';
import {
  getTokenAcesso,
  setTokenAcesso,
  removerTokenAcesso,
} from '../utils/tokenAcesso';

interface AuthContextProps {
  token: string | null;
  login: (dados: Autenticacao) => Promise<boolean>;
  logout: () => void;
  estaAutenticado: boolean;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const tokenSalvo = getTokenAcesso();
    if (tokenSalvo) {
      setToken(tokenSalvo);
    }
  }, []);

  const login = async (dados: Autenticacao): Promise<boolean> => {
    try {
      const { token_acesso } = await realizarLogin(dados);
      if (token_acesso) {
        setTokenAcesso(token_acesso);
        setToken(token_acesso);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Erro ao logar:', error);
      return false;
    }
  };

  const logout = () => {
    removerTokenAcesso();
    setToken(null);
  };

  const estaAutenticado = !!token;

  return (
    <AuthContext.Provider
      value={{
        token,
        login,
        logout,
        estaAutenticado,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
