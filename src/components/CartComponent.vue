<template>
    <navbar></navbar>
  
    <div class="cart-container">
      <h1 class="text-3xl font-medium leading-tight text-neutral-800 mb-6">Carrito de Compras</h1>
  
      <div v-if="cartData.length === 0" class="text-gray-500">Tu carrito está vacío.</div>
  
      <div v-else>
        <table class="min-w-full">
          <thead class="bg-green-500 border-b text-white text-center">
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
          </thead>
          <tbody>
            <tr v-for="producto in cartData" :key="producto.id" class="cart-item">
              <td class="cart-product">
                <div class="flex items-center">
                  <div class="cart-image">
                    <img :src="require(`@/assets/assets${producto.imagen}`)" :alt="producto.nombre" class="w-16 h-16 object-cover rounded-md">
                  </div>
                  <div class="ml-4">
                    <h2 class="text-base font-semibold text-gray-900">{{ producto.nombre }}</h2>
                    <p class="text-sm text-gray-700">{{ producto.descripcion }}</p>
                  </div>
                </div>
              </td>
              <td class="cart-price">${{ producto.precio }}</td>
              <td class="cart-quantity">
                <div class="flex items-center">
                  <button @click="decrement(producto)" class="bg-green-500 text-white px-3 py-1 rounded-l">-</button>
                  <div class="bg-green-500 text-white px-3 py-1">{{ producto.cantidad }}</div>
                  <button @click="increment(producto)" class="bg-green-500 text-white px-3 py-1 rounded-r">+</button>
                </div>
              </td>
              <td class="cart-total">${{ producto.precio * producto.cantidad }}</td>
            </tr>
            <tr>
              <td colspan="3"></td>
              <td class="font-bold">Total:</td>
              <td class="font-bold">${{ total }}</td>
            </tr>
          </tbody>
        </table>
  
        <div class="text-center mt-6">
          <button @click="goToPayPal" class="bg-green-500 text-white px-4 py-2 rounded">Comprar Carrito</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import navbar from "../components/navbar.vue";
  import cart from '../../cart.json';
  
  export default {
    name: 'CartComponent',
    components: {
      navbar
    },
    methods: {
      increment(producto) {
        producto.cantidad++;
      },
      decrement(producto) {
        if (producto.cantidad > 1) {
          producto.cantidad--;
        }
      },
      goToPayPal() {
        this.$router.push({ name: 'paypal', query: { total: this.total } });
      }
    },
    computed: {
      total() {
        return this.cartData.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
      }
    },
    data() {
      return {
        cartData: cart.productos.map(producto => ({ ...producto, cantidad: 1 })),
      };
    }
  };
  </script>
  
  <style scoped>
  .cart-container {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .cart-item {
    border-bottom: 1px solid #ddd;
  }
  
  .cart-product {
    display: flex;
    align-items: center;
  }
  
  .cart-image {
    width: 64px;
    height: 64px;
    overflow: hidden;
  }
  
  .cart-price,
  .cart-quantity,
  .cart-total {
    text-align: center;
    padding: 8px;
  }
  
  .text-center {
    text-align: center;
    margin-top: 1rem;
  }
  
  @media (max-width: 768px) {
    .cart-product {
      flex-direction: column;
      align-items: flex-start;
    }
  
    .cart-image {
      margin-bottom: 8px;
    }
  }
  </style>
  