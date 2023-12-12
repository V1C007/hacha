<template>
    <navbar></navbar>
  
    <div class="cart-container">
      <!-- Título de la página -->
      <h1 class="text-3xl font-medium leading-tight text-neutral-800 mb-6">Carrito de Compras</h1>
  
      <!-- Verifica si el carrito está vacío -->
      <div v-if="cartData.length === 0" class="text-gray-500">Tu carrito está vacío.</div>
  
      <!-- Si hay productos en el carrito, muestra la tabla -->
      <div v-else>
        <!-- Tabla que muestra los productos en el carrito -->
        <table class="min-w-full">
          <!-- Encabezado de la tabla -->
          <thead class="bg-gray-500 border-b text-white text-center">
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
          </thead>
          <tbody>
            <!-- Itera sobre los productos en el carrito -->
            <tr v-for="producto in cartData" :key="producto.id" class="cart-item">
              <!-- Celda para mostrar la información del producto -->
              <td class="cart-product">
                <!-- Contenedor que muestra la imagen y detalles del producto -->
                <div class="flex items-center">
                  <!-- Imagen del producto -->
                  <div class="cart-image">
                    <img :src="require(`@/assets/assets${producto.imagen}`)" :alt="producto.nombre" class="w-16 h-16 object-cover rounded-md">
                  </div>
                  <!-- Detalles del producto -->
                  <div class="ml-4">
                    <h2 class="text-base font-semibold text-gray-900">{{ producto.nombre }}</h2>
                    <p class="text-sm text-gray-700">{{ producto.descripcion }}</p>
                  </div>
                </div>
              </td>
              <!-- Celda para mostrar el precio del producto -->
              <td class="cart-price">${{ producto.precio }}</td>
              <!-- Celda para mostrar la cantidad y permitir cambios -->
              <td class="cart-quantity">
                <!-- Botones para incrementar y decrementar la cantidad -->
                <div class="flex items-center">
                  <button @click="decrement(producto)" class="bg-green-500 text-white px-3 py-1 rounded-l">-</button>
                  <div class="bg-green-500 text-white px-3 py-1">{{ producto.cantidad }}</div>
                  <button @click="increment(producto)" class="bg-green-500 text-white px-3 py-1 rounded-r">+</button>
                </div>
              </td>
              <!-- Celda para mostrar el total del producto -->
              <td class="cart-total">${{ producto.precio * producto.cantidad }}</td>
            </tr>
            <!-- Fila para mostrar el total general del carrito -->
            <tr>
              <!-- Celdas vacías -->
              <td colspan="3"></td>
              <!-- Etiqueta para mostrar el total -->
              <td class="font-bold">Total:</td>
              <!-- Celda para mostrar el total general -->
              <td class="font-bold">${{ total }}</td>
            </tr>
          </tbody>
        </table>
  
        <!-- Botón para realizar la compra -->
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
      // Incrementa la cantidad de un producto en el carrito
      increment(producto) {
        producto.cantidad++;
      },
      // Decrementa la cantidad de un producto en el carrito
      decrement(producto) {
        if (producto.cantidad > 1) {
          producto.cantidad--;
        }
      },
      // Redirige al usuario a la página de PayPal
      goToPayPal() {
        this.$router.push({ name: 'paypal', query: { total: this.total } });
      }
    },
    computed: {
      // Calcula el total general del carrito sumando el precio total de cada producto
      total() {
        return this.cartData.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
      }
    },
    data() {
      return {
        // Obtiene los datos del carrito desde el archivo JSON
        cartData: cart.productos.map(producto => ({ ...producto, cantidad: 1 })),
      };
    }
  };
  </script>
  
  <style scoped>
  /* Estilos específicos del componente */
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
  