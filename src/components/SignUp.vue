<template>
  <section class="bg-white">
    <div class="container flex items-center justify-center min-h-screen px-6 mx-auto">
      <form class="w-full max-w-md">
        <div class="flex justify-center mx-auto">
          <img src="../assets/assets/logo.png" class="h-20" alt="imagen del logo" title="Grow in box logo">
        </div>

        <div class="flex items-center justify-center mt-6">
          <router-link to="/loginUser" class="w-1/3 pb-4 font-medium text-center text-gray-500 capitalize border-b ">
            Iniciar Sesion
          </router-link>

          <span class="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-green-500 ">
            Crear cuenta
          </span>
        </div>

        <!-- Username Input -->
        <div class="relative flex items-center mt-8">
          <span class="absolute">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />

            </svg>
          </span>
          <input type="text"
            class="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:border-gray-600 focus:border-green-400 dark:focus:border-green-300 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Nombre de usuario" />
        </div>

        <!-- Email Address Input -->
        <div class="relative flex items-center mt-6">
          <span class="absolute">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </span>
          <input type="email"
            class="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  dark:text-gray-300 dark:border-gray-600 focus:border-green-400 dark:focus:border-green-300 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Correo electronico" />
        </div>

        <!-- Password Input -->
        <div class="relative flex items-center mt-4">
          <span class="absolute">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </span>
          <input type="password"
            class="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg  dark:text-gray-300 dark:border-gray-600 focus:border-green-400 dark:focus:border-green-300 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Contraseña" />
        </div>

        <!-- Confirm Password Input -->
        <div class="relative flex items-center mt-4">
          <span class="absolute">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </span>
          <input type="password"
            class="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:text-gray-300 dark:border-gray-600 focus:border-green-400 dark:focus:border-green-300 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Confirmar contraseña" />
        </div>

        <!-- Sign Up Button -->
        <div class="mt-6">
          <button @click="crearCuenta"
            class="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-500 rounded-lg hover:bg-green-400 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-50">
            Crear cuenta
          </button>

          <!-- Success Message -->
          <div v-if="cuentaCreada" class="mt-4 text-green-600">
            ¡La cuenta se creo con éxito!
          </div>

          <!-- Already have an account link -->
          <div class="mt-6 text-center">
            <router-link to="/loginUser" class="text-sm text-green-500 hover:underline dark:text-green-400">
              ¿Ya tienes cuenta?
            </router-link>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>
  
<script>
export default {
  name: "SignUp",
  data() {
    return {
      cuentaCreada: false,
    };
  },
  methods: {
    crearCuenta() {

      this.cuentaCreada = true;

      // Redirección a la página principal después del éxito
      if (this.cuentaCreada) {
        // Muestra una alerta con el mensaje
        alert("¡La cuenta se ha creado con éxito!");

        this.$router.push("/"); // Ajusta la ruta según tu configuración
      }
    },
  },
};
</script>
  
<style scoped>
/* Puedes agregar estilos específicos del componente aquí */
</style>
  