<template>
  <div>
    <!-- Lista de Ativos -->
    <ul>
      <li v-for="ativo in ativos" :key="ativo._id">
        <span>{{ ativo.nome }} | {{ ativo.categoria }} | {{ ativo.data_aquisicao }} | {{ ativo.custo_aquisicao }} | {{ ativo.localizacao }}</span>
        <button @click="editAtivo(ativo)">Editar</button>
        <button @click="deleteAtivo(ativo._id)">Excluir</button>
      </li>
    </ul> 
  </div>
</template>

<script>
  import api from '../services/api'; // Importa o serviço API Axios

  export default {
    data() {
      return { ativos: [] };
    },
    methods: {
      fetchAtivos() {
        api.getAtivo().then(response => {
          this.ativos = response.data; // Atualiza a lista de livros
        });
      },
      deleteAtivo(id) { // Exclui o ativo pelo ID
        api.deleteAtivo(id).then(() => {
          this.fetchAtivos(); // Atualiza a lista após a exclusão
        });  
      },
      editAtivo(ativo) { // Emite um evento para editar um livro
        this.$emit('edit-ativo', ativo) // Emite o evento 'edit-ativo'  
      },
    },
    mounted() {
      this.fetchAtivos(); // Busca os ativos ao monstar o componente
      
    },
  };
</script>