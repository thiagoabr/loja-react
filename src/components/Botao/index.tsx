import React from 'react';
import style from './Botao.module.scss';
import { BotaoProps } from  '../../types/botao.type';

export default function Botao({ children }: BotaoProps) {
  return <button className={style.botao}>{children}</button>;
}
