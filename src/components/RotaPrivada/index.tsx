import { JSX } from 'react';
import { Navigate } from 'react-router-dom';
import {getTokenAcesso} from '../../utils/tokenAcesso';

export default function RotaPrivada({ children }: { children: JSX.Element }) {
  return getTokenAcesso() ? children : <Navigate to="/" />;
}
