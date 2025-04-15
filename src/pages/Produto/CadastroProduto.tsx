import React, { useState } from 'react';
import FormularioBase from '../../components/FormularioBase';
import { Produto } from '../../types/produto.types';
import { CampoFormulario } from '../../types/formularioBase.type';
import { cadastrarProduto } from '../../services/produto.service';

const camposProduto = [
  { nome: 'nome', tipo: 'text', label: 'Nome do Produto', required: true },
  { nome: 'valor', tipo: 'number', label: 'Preço (R$)', required: true },
  { nome: 'quantidade', tipo: 'number', label: 'Quantidade', required: true },
  { nome: 'descricao', tipo: 'text', label: 'Descrição' },
  { nome: 'categoria', tipo: 'text', label: 'Categoria', required: true },
];

export default function CadastroProduto() {
  const [produto, setProduto] = useState<Produto>({usuarioId: '', nome: '', valor: 0, quantidade: 0, descricao: '', categoria: '' });

  const handleSubmit = async (evento: React.FormEvent) => {
    evento.preventDefault();
    const idUsuario = sessionStorage.getItem('id_usuario') || '';

    const produtoParaCadastro = {
      ...produto,
      usuarioId: idUsuario,
    };

    try {
      console.log(produtoParaCadastro);
      await cadastrarProduto(produtoParaCadastro);
      alert('Produto cadastrado!');
      setProduto({ usuarioId: '', nome: '', valor: 0, quantidade: 0, descricao: '', categoria: '' });
    } catch (err) {
      alert('Erro ao cadastrar produto');
    }
  };

  return (
    <FormularioBase<Produto>
      campos={camposProduto as CampoFormulario<Produto>[]}
      valores={produto}
      setValores={setProduto}
      onSubmit={handleSubmit}
      tituloBotao="Cadastrar Produto"
    />
  );
}
