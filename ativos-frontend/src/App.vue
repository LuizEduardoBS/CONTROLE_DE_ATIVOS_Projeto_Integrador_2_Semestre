<template>
  <AtivosForm/>
  <AtivosList/>
</template>

<script>
import AtivosForm from './components/AtivosForm.vue'
import AtivosList from './components/AtivosList.vue'

export default {
  name: 'App',
  components: {
    AtivosForm,
    AtivosList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
