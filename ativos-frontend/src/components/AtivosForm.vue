<template>
  <form @submit.prevent="handleSubmit" class="formulario-ativos">
    <input v-model="ativo.nome" placeholder="Nome do ativo" required />
    
    <select v-model="ativo.categoria" required>
      <option disabled value="">Selecione uma categoria</option>
      <option value="categoria1">Categoria 1</option>
      <option value="categoria2">Categoria 2</option>
      <option value="categoria3">Categoria 3</option>
    </select>

    <input v-model="ativo.data_aquisicao" type="date" placeholder="Data da aquisição" required />
    <input v-model="ativo.custo_aquisicao" placeholder="Custo da aquisição" required />
    <input v-model="ativo.localizacao" placeholder="Localização do ativo" required />
    <button type="submit">{{ ativo._id ? 'Atualizar' : 'Adicionar' }}</button>
  </form>
</template>

<script>
import api from '../services/api';

export default {
  props: ['ativoToEdit'],
  data() {
    return {
      ativo: this.ativoToEdit || { nome: '', categoria: '', data_aquisicao: '', custo_aquisicao: '', localizacao:'' }, // Inicialização do ativo
    };
  },

watch: {
  // Observa mudanças na prop ativoToEdit
  ativoToEdit: {
    immediate: true, // Executa a função imediatamente na inicialização
    handler(newVal) {
      // Atualiza os dados do ativo quando a prop mudar
      this.ativo = newVal || { nome: '', categoria: '', data_aquisicao: '', custo_aquisicao: '', localizacao:'' };
    },
  },
},

methods: {
  // Função para enviar o fórmulario
  handleSubmit() {
    if (this.ativo._id) {
      api.updateAtivo(this.ativo._id, this.ativo).then(() => {
        this.$emit('book-updated'); // Emite um evento quando o ativo é atualizado
      });
    } else {
      api.addAtivo(this.ativo).then(() => {
        this.$emit('ativo-added'); // Emite um evento quando um novo ativo é adicionado
      });
    }
  },
},

};
</script>

<style scoped>
  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .formulario-ativos {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    width: 800px;
  }
</style>
