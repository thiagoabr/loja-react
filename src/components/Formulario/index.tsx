import React from 'react';
import axios from 'axios';
import Botao from '../Botao';
import style from './Formulario.module.scss';

class Formulario extends React.Component {
  state = {
    nome: "",
    email: "",
    senha: ""
  };

  async adicionarUsuario(evento: React.FormEvent<HTMLElement>) {
    evento.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/usuarios', {
        nome: this.state.nome,
        email: this.state.email,
        senha: this.state.senha
      });

      console.log('Usuário cadastrado com sucesso:', response.data);
      
      // Limpa o formulário após cadastrar
      this.setState({ nome: "", email: "", senha: "" });

      alert('Usuário cadastrado com sucesso!');
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      alert('Erro ao cadastrar usuário');
    }
  }

  render() {
    return (
      <form className={style.novoUsuario} onSubmit={this.adicionarUsuario.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="nome">Nome usuário</label>
          <input
            type="text"
            name="nome"
            id="nome"
            value={this.state.nome}
            onChange={(evento) => this.setState({ nome: evento.target.value })}
            placeholder="Nome do Usuário"
            required
          />
        </div>
        
        <div className={style.inputContainer}>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            value={this.state.email}
            onChange={(evento) => this.setState({ email: evento.target.value })}
            placeholder="E-mail do Usuário"
            required
          />
        </div>

        <div className={style.inputContainer}>
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            name="senha"
            id="senha"
            value={this.state.senha}
            onChange={(evento) => this.setState({ senha: evento.target.value })}
            required
          />
        </div>
        <div className={style.inputContainer}>
          <Botao>Cadastrar</Botao>
        </div>
      </form>
    );
  }
}

export default Formulario;
