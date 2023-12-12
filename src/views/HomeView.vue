<template>
  <!-- Componente de barra de navegación -->
  <navbar></navbar>

  <div class="home bg-gray-100">
    <!-- Grid para mostrar productos, 1 columna en móviles y 2 en pantallas más grandes -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 p-4">
      <!-- Bucle para mostrar cada producto (limitado a 4 productos) -->
      <div v-for="(producto, index) in productos.slice(0, 4)" :key="index"
        class="rounded-xl bg-white bg-clip-border text-gray-700 shadow-md overflow-hidden">
        <!-- Imagen del producto -->
        <img :src="require(`@/assets/assets/${producto.imagen}`)" :alt="producto.nombre" :title="producto.nombre"
          class="w-full h-48 object-cover" />
        <!-- Detalles del producto -->
        <div class="p-6">
          <!-- Etiqueta "Interesante" -->
          <h6 class="mb-2 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
            Interesante
          </h6>
          <!-- Nombre del producto -->
          <h2 class="mb-2 block font-sans text-xl sm:text-2xl font-semibold sm:font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {{ producto.nombre }}
          </h2>
          <!-- Descripción del producto -->
          <p class="mb-4 block font-sans text-sm sm:text-base font-normal leading-relaxed text-gray-700 antialiased">
            {{ producto.descripcion }}
          </p>
          <!-- Enlace para ir a la página del producto -->
          <router-link :to="{ name: 'Producto', params: { id: producto.id }}"
            class="select-none rounded-lg bg-green-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md transition-all hover:bg-green-600">
            Comprar YA
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import navbar from "../components/navbar.vue";
import products from '../../products.json';

export default {
  components: {
    navbar
  },
  data() {
    return {
      x: ref(0),
      // Lista de productos cargada desde el archivo JSON
      productos: products.productos || []
    };
  },
  methods: {
    onMousemoveA(e) {
      // Función para manejar eventos de movimiento del mouse
      this.x = e.clientX;
    }
  }
}
</script>

<style scoped>
/* Agrega tus estilos personalizados aquí, si es necesario */
</style>
