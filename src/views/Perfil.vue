<template>
    <navbar></navbar>
    <div class="m-5 flex justify-center items-center">
      <div class="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 class="text-3xl font-bold text-center mb-6">Perfil de usuario</h1>
        <div class="mb-4">
          <label for="nombre" class="block text-sm font-medium text-gray-600">Nombre</label>
          <input type="text" id="nombre" v-model="usuario.Nombre" class="mt-1 p-2 w-full border border-gray-300 rounded-md">
        </div>
        <div class="mb-4">
          <label for="Correo" class="block text-sm font-medium text-gray-600">Correo</label>
          <input type="text" id="Correo" v-model="usuario.Correo" class="mt-1 p-2 w-full border border-gray-300 rounded-md">
        </div>
        <div class="mb-4">
          <label for="pass" class="block text-sm font-medium text-gray-600">Contraseña</label>
          <input type="password" id="pass" v-model="usuario.Password" class="mt-1 p-2 w-full border border-gray-300 rounded-md">
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import navbar from "../components/navbar.vue"
  export default {
    name: 'ViewUser',
    components: {
      navbar
    },
    data() {
      return {
        usuario: {
          "id": 1,
          "Nombre": "Antonio Lopez Lopez",
          "Correo": "AntLopez@hotmail.com",
          "Password": "123456789"
        }
      }
    }
  }
  </script>
  