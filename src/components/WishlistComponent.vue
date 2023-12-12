<template>
    <navbar></navbar>
  
    <div class="wishlist-container">
      <h1 class="text-3xl font-medium text-neutral-800 mb-6">Lista de Deseos</h1>
  
      <div v-if="wishlistData.length === 0" class="text-gray-500">Tu lista de deseos está vacía.</div>
  
      <div v-else>
        <div v-for="producto in wishlistData" :key="producto.id" class="wishlist-item">
          <div class="wishlist-image">
            <img :src="require(`@/assets/assets${producto.imagen}`)" :alt="producto.nombre" class="w-full h-full object-cover">
          </div>
          <div class="wishlist-details">
            <h2 class="text-xl font-semibold text-gray-900 mb-2">{{ producto.nombre }}</h2>
            <p class="text-gray-700 mb-2">{{ producto.descripcion }}</p>
            <div class="flex items-center">
              <p class="text-gray-500 font-semibold">Precio: {{ producto.precio }}</p>
              <button @click="removeFromWishlist(producto.id)" class="ml-4 text-red-500 hover:text-red-700">
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import navbar from "../components/navbar.vue";
  import wishlist from '../../wishlist.json';
  
  export default {
    name: 'WishlistComponent',
    components: {
      navbar
    },
    data() {
      return {
        wishlistData: wishlist.productos,
      };
    },
    methods: {
      removeFromWishlist(id) {
        // Implementa la lógica para eliminar el producto de la lista de deseos
        // Puedes emitir un evento, llamar a una acción de Vuex, etc.
      }
    }
  };
  </script>
  
  <style scoped>
  .wishlist-container {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .wishlist-item {
    display: flex;
    border-bottom: 1px solid #ddd;
    padding: 16px;
  }
  
  .wishlist-image {
    width: 120px;
    height: 120px;
    overflow: hidden;
    border-radius: 8px;
    margin-right: 16px;
  }
  
  .wishlist-details {
    flex: 1;
  }
  
  @media (max-width: 768px) {
    .wishlist-item {
      flex-direction: column;
      align-items: center;
    }
  
    .wishlist-image {
      margin-bottom: 16px;
      margin-right: 0;
    }
  }
  </style>
  