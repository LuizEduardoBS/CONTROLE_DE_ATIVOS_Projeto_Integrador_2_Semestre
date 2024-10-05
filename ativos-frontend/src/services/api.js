import axios from 'axios';

// Criando a instância do Axios com a URL base da API
const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api/routes',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Exportando funções CRUD usando o Axios
export default {
  getAtivo() {
    return apiClient.get('/');
  },
  addAtivo(ativo) {
    return apiClient.post('/', ativo);
  },
  updateAtivo(id, ativo) {
    return apiClient.put(`/${id}`, ativo);
  },
  deleteAtivo(id) {
    return apiClient.delete(`/${id}`);
  },
};