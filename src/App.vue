<template>
  <div id="app">
    <!-- Contenido de tu aplicación, como la barra de navegación, por ejemplo -->
    <router-view />
  </div>
</template>

<script>
// Importa el componente HomeView.vue
import HomeView from './views/HomeView.vue';

export default {
  name: 'App',
  components: {
    HomeView,
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
}
</style>
