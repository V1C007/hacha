<template>
    <div>
      <router-view />
  
      <!-- component -->
      <section v-if="!cookieClosed" id="cookieSection" class="fixed w-11/12 sm:w-2/5 p-2 mx-auto bg-white border border-gray-200 dark:bg-gray-800 left-4 sm:left-12 bottom-4 sm:bottom-16 dark:border-gray-700 rounded-2xl text-sm sm:text-base">
        <!-- Ajustes en los tamaños, márgenes y posición -->
  
        <h2 class="font-semibold text-gray-800 dark:text-white text-lg sm:text-xl"> Esta página utiliza Cookies!</h2>
  
        <p class="mt-2 text-gray-600 dark:text-gray-300">Esta página web utiliza cookies. <a href="#" class="font-medium text-gray-700 underline transition-colors duration-300 dark:hover:text-blue-400 dark:text-white hover:text-blue-500" title="para escoger las cookies en español">Permíteme elegir</a>.</p>
  
        <p class="mt-1 text-gray-600 dark:text-gray-300">Al cerrar la ventana aceptas las cookies.</p>
  
        <div class="grid grid-cols-2 gap-2 mt-2 shrink-0">
          <button @click="acceptCookies" class="text-xs sm:text-sm bg-gray-900 font-medium rounded-lg hover:bg-gray-700 text-white px-3 py-2 duration-300 transition-colors focus:outline-none">
            Aceptar todo
          </button>
  
          <button @click="rejectCookies" class="text-xs sm:text-sm border text-gray-800 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 font-medium rounded-lg px-3 py-2 duration-300 transition-colors focus:outline-none">
            Rechazar todo
          </button>
  
          <button class="text-xs sm:text-sm border text-gray-800 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 font-medium rounded-lg px-3 py-2 duration-300 transition-colors focus:outline-none">
            Preferencias
          </button>
  
          <button @click="closeCookieSection" class="text-xs sm:text-sm border text-gray-800 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 font-medium rounded-lg px-3 py-2 duration-300 transition-colors focus:outline-none">
            Cerrar
          </button>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  
  export default {
    name: "app_vue",
    components: {
      // navbar
    },
    data() {
      return {
        cookieClosed: false
      };
    },
    methods: {
      acceptCookies() {
        // "Aceptar todos"
        console.log("Aceptado");
        this.closeCookieSection();
      },
      rejectCookies() {
        // "Rechazar todos"
        console.log("Rechazado");
        this.closeCookieSection();
      },
      closeCookieSection() {
        this.cookieClosed = true;
      }
    }
  };
  </script>
  
  <style>
  .hidden {
    display: none;
  }
  </style>
  