<template>
  <navbar></navbar>

  <div class="home">
    <div>
      <div class="max-w-screen-md mx-auto">
        <div class="mb-4 sm:flex sm:flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div
            class="w-full sm:w-2/5 sm:shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
            <img src="../assets/assets/i1.png" alt="imagen de hacha" title="imagen producto hacha"
              class="w-full h-48 object-cover sm:h-full" />
          </div>
          <div class="p-6">
            <h6
              class="mb-2 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
              Interesante
            </h6>
            <h2
              class="mb-2 block font-sans text-xl sm:text-2xl font-semibold sm:font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">
              HACHA
            </h2>
            <p class="mb-4 block font-sans text-sm sm:text-base font-normal leading-relaxed text-gray-700 antialiased">
              Lo mejor
              de lo mejor.
            </p>
            <a class="inline-block" href="#" title="Enlace para más información">

              <router-link :to="{ name: 'Producto', params: { id: 1 } }"
                class="select-none rounded-lg bg-black py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40"
                title="Producto">
                Comprar YA
              </router-link>
            </a>
          </div>
        </div>

        <div class="w-full sm:flex sm:flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div
            class="w-full sm:w-2/5 sm:shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
            <img src="../assets/assets/i2.png" alt="imagen de hacha" title="producto hacha"
              class="w-full h-48 object-cover sm:h-full" />
          </div>
          <div class="p-6">
            <h6
              class="mb-2 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
              Interesante
            </h6>
            <h4
              class="mb-2 block font-sans text-xl sm:text-2xl font-semibold sm:font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Todo lo que necesitas
            </h4>
            <p class="mb-4 block font-sans text-sm sm:text-base font-normal leading-relaxed text-gray-700 antialiased">
              No necesitaras otra hacha en toda
              tu vida.
            </p>
            <a class="inline-block" href="#" title="Enlace para más información ">

              <router-link :to="{ name: 'Producto', params: { id: 2 } }"
                class="select-none rounded-lg bg-black py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40"
                title="Producto">
                Comprar YA
              </router-link>
            </a>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { ref } from 'vue';

import navbar from "../components/navbar.vue"

export default {
  components: {
    navbar
  },
  data() {
    return {
      x: ref(0)
    };
  },
  methods: {
    onMousemoveA(e) {
      this.x = e.clientX;
    }
  }
}
</script>

<style scoped>

.hiddenA-text {
  color: hsla(0, 0%, 0%, 0);
  text-align: center;
  font-weight: bold;
  font-size: 1px;
  transition: color 2s ease, font-size 5s ease;
}

.hiddenB-text {
  color: hsla(0, 0%, 0%, 0);
  text-align: right;
  font-size: 350px;
  transition: color 2s ease, font-size 5s ease;
}

.hiddenC-text {
  color: hsla(0, 0%, 0%, 0);
  text-align: right;
  font-size: 110px;
  transition: color 2s ease, font-size 5s ease;
}

.hiddenD-text {
  color: hsla(0, 0%, 0%, 0);
  text-align: right;
  font-size: 20px;
  transition: color 2s ease, font-size 5s ease;
}

.visible-text {
  color: hsl(0, 0%, 100%);
  font-weight: bold;
  font-size: 50px;
  transition: color 3s ease, font-size 5s ease;
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
}

.hiddenD-button {
  border: 0px;
  background: transparent;
  font-size: 0px;
  color: transparent;
}


.visible-button {
  display: block;
  padding: 15px 30px;
  border: 2px solid #ffffff;
  background: transparent;
  color: #ffffff;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  margin: 0 auto;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.8);
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.8);
  transition: all 3s ease;
}

.visible-button:hover {
  background: rgba(255, 255, 255, 0.473);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.4);
  transform: scale(1.05);
  transition: all 0.3s ease;
}
</style>
