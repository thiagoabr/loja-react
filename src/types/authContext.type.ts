export type AuthContext = {
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
};