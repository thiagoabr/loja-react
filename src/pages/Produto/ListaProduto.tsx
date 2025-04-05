import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from './ListaProduto.module.scss';
import { Produto } from '../../types/produto';
import { api } from '../../services/api';

export default function ListaProduto() {
  const [produtos, setProdutos] = useState<Produto[]>([]);


  useEffect(() => {
    api
      .get('/produtos')
      .then((response) => setProdutos(response.data))
      .catch((error) => console.error('Erro ao buscar produtos', error));
  }, []);

  return (
    <div className={style.listaProdutos}>
      <h1>Produtos Cadastrados</h1>
      {produtos.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Preço (R$)</th>
              <th>Quantidade</th>
              <th>Descrição</th>
              <th>Categoria</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((produto: any) => (
              <tr key={produto.id}>
                <td>{produto.nome}</td>
                <td>
                  {produto.valor.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  })}
                </td>
                <td>{produto.quantidade}</td>
                <td>{produto.descricao}</td>
                <td>{produto.categoria || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className={style.emptyState}>Nenhum produto cadastrado.</p>
      )}
    </div>
  );
}
