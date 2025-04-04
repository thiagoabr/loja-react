import React, { useState } from 'react';
import axios from 'axios';
import Botao from '../Botao';
import style from './Formulario.module.scss';
import { Usuario } from '../../types/Usuario';

export default function Formulario() {
  const [usuario, setUsuario] = useState<Usuario>({
    nome: '',
    email: '',
    senha: '',
  });

  const handleChange = (campo: keyof Usuario) => 
    (evento: React.ChangeEvent<HTMLInputElement>) => {
      setUsuario({ ...usuario, [campo]: evento.target.value });
    };

  const adicionarUsuario = async (evento: React.FormEvent<HTMLElement>) => {
    evento.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/usuarios', usuario);
      console.log('Usuário cadastrado com sucesso:', response.data);
      setUsuario({ nome: '', email: '', senha: '' });
      alert('Usuário cadastrado com sucesso!');
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      alert('Erro ao cadastrar usuário');
    }
  };

  return (
    <form className={style.novoUsuario} onSubmit={adicionarUsuario}>
      <div className={style.inputContainer}>
        <label htmlFor='nome'>Nome usuário</label>
        <input
          type='text'
          name='nome'
          id='nome'
          value={usuario.nome}
          onChange={handleChange('nome')}
          placeholder='Nome do Usuário'
          required
        />
      </div>

      <div className={style.inputContainer}>
        <label htmlFor='email'>E-mail</label>
        <input
          type='email'
          name='email'
          id='email'
          value={usuario.email}
          onChange={handleChange('email')}
          placeholder='E-mail do Usuário'
          required
        />
      </div>

      <div className={style.inputContainer}>
        <label htmlFor='senha'>Senha</label>
        <input
          type='password'
          name='senha'
          id='senha'
          value={usuario.senha}
          onChange={handleChange('senha')}
          required
        />
      </div>

      <div className={style.inputContainer}>
        <Botao>Cadastrar</Botao>
      </div>
    </form>
  );
}
