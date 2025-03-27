import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3000', // Altere para o endereço da sua API
});
