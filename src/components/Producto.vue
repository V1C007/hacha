<template>
    <navbar></navbar>
    <div class="container flex m-5">
      <div class="w-1/2 ml-20">
        <img
          v-if="producto && producto.imagen"
          ref="productImage"
          :src="require(`@/assets/assets/${producto.imagen}`)"
          alt="Product Image"
          title="Imagen del producto"
          class="w-full h-auto object-cover object-center rounded-lg"
          @mouseover="onImageHover"
          @mouseout="onImageHover"
        />
      </div>
      <div class="w-1/2 mr-10 font-medium">
        <h1 class="text-4xl ml-5">{{ producto?.nombre || '' }}</h1>
        <p class="text-4xl ml-5 mt-6">$ {{ producto?.precio || '' }} MXN</p>
        <p class="text-1xl ml-5 mt-6 ">Stock Disponible: {{ producto?.stock || '' }}</p>
        <button class="my-5 mx-10 border-solid border-2 border-black w-80 h-10 rounded-md" @click="showAlert">
          Agregar al carrito
        </button>
        <button class="mx-10 border-solid w-80 h-10 rounded-md">
          <PayPalButton :precio="producto?.precio || 0"></PayPalButton>
        </button>
        <div class="wishlist">
          <span class="heart" :class="{ 'clicked': isClicked }" @click="toggleWishlist"></span>
        </div>
        <p class="mx-10 mt-15 font-medium text-justify">{{ producto?.descripcion || '' }}</p>
      </div>
    </div>
    <StaticRatings :productId="producto?.id" :userLoggedIn="userLoggedIn"></StaticRatings>
    <div class="text-center my-5">
      <h1 class="text-xl ml-5 text-center mb-10">¿Quieres recibir ofertas?</h1>
      <input class="w-80 h-10 border-solid border-2 border-gray-500 rounded-md" type="text" placeholder="Correo electrónico" />
    </div>
  </template>
  
  <script>
  import PayPalButton from './PayPalButton.vue';
  import StaticRatings from './StaticRatings.vue';
  import navbar from "./navbar.vue";
  import products from '../../products.json';
  
  export default {
    name: 'ProductoUNO',
    data() {
      return {
        producto: {},
        isClicked: false,
        isHovered: false,
      };
    },
    methods: {
      showAlert() {
        alert('Producto agregado al carrito');
      },
      toggleWishlist() {
        this.isClicked = !this.isClicked;
      },
      onImageHover() {
        const img = this.$refs.productImage;
        if (img) {
          this.isHovered = !this.isHovered;
          img.style.transform = this.isHovered ? 'scale(1.1)' : 'scale(1)';
        }
      },
    },
    components: {
      PayPalButton,
      StaticRatings,
      navbar
    },
    created() {
      const productId = Number(this.$route.params.id);
      if (!isNaN(productId) && products.productos) {
        this.producto = products.productos.find(producto => producto.id === productId);
      }
      if (!this.producto || !this.producto.nombre) {
        console.error('Producto no encontrado o nombre no definido:', this.producto);
      }
    },
  };
  </script>
  
  <style scoped>
  .heart {
    width: 20px;
    height: 20px;
    position: relative;
    transform: rotate(-45deg);
    background-color: rgba(0, 0, 0, 0.959);
    cursor: pointer;
    margin: 20px auto;
    margin-left: 50px;
    border-radius: 50%;
  }
  
  .heart::before,
  .heart::after {
    content: '';
    width: 20px;
    height: 32px;
    border-radius: 20px 20px 0 0;
    position: absolute;
    background-color: rgb(0, 0, 0);
  }
  
  .heart::before {
    top: -20px;
    left: 0;
    transform: rotate(-45deg);
  }
  
  .heart::after {
    top: -20px;
    left: 10px;
    transform: rotate(45deg);
  }
  
  .heart.clicked {
    background-color: rgb(0, 0, 0);
  }
  
  .heart.clicked::before,
  .heart.clicked::after {
    background-color: rgb(255, 0, 0);
  }

  body{
    background-color: #334155;
  }

  
  </style>
  