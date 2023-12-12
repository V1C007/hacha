
<template>
    <nav className="bg-White mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex items-center justify-between h-16">
                <img src="../assets/assets/logo.png" class="h-20" alt="imagen del logo" title="HACHA logo">
                
                <div :class="{ 'hidden': !showMenuLargeScreen }" class="flex items-center space-x-4">
                <div className="flex items-baseline space-x-4">
                    <router-link to="/"
                        class="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        title="home">Inicio</router-link>
                    <router-link to="/Catalogo"
                        className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        title="catalogo">Cátalogo</router-link>
                </div>

                    <router-link to="/Perfil"
                        class="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" 
                        title="Perfil">
                        Perfil
                    </router-link>

                    <router-link to="/LoginUser"
                        className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        title="LoginUser">
                        Inicio de sesión
                    </router-link>
                    <router-link to="/OrdenesCompra"
                        class="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        title="OrdenesCompra">
                        Órdenes de compra
                    </router-link>
                    <router-link to="/WishlistComponent"
                        className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        title="Favoritos">
                        <img class="w-6 h-6" src="../assets/assets/Heart.png" alt="heart logo" title="logo heart">
                    </router-link>

                    <router-link to="/CartComponent"
                        className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        title="Compras">
                        <img class="w-6 h-6" src="../assets/assets/shopbag.png" alt="bagshop logo" title="logo shopbag">
                    </router-link>
                </div>

                <!-- menú de hamburguesa-->
                <div class="sm:hidden">
                    <!-- activa menú -->
                    <button @click="toggleMobileMenu"
                        class="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>

                    
                    <!-- Menú desplegable-->
                    <div v-if="mobileMenuOpen" class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right">
                        <div class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <!-- Contenido -->
                            
                            <router-link to="/" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                title="home">
                                Inicio
                            </router-link>

                            <router-link to="/Catalogo"
                                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                title="catalogo">
                                Catalogo
                            </router-link>
                            
                            <router-link to="/User" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                title="Perfil">
                                Perfil
                            </router-link>

                            <router-link to="/Login"
                                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                title="Login">
                                Inicio de sesión
                            </router-link>
                            
                            <router-link to="/OrdenesCompra" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                title="OrdenesCompra">
                                Órdenes de compra
                            </router-link>

                            <router-link to="/WishlistComponent"
                                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                title="Favoritos">
                                Lista de Deseos
                            </router-link>

                            <router-link to="/CartComponent"
                                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                title="Compras">
                                Carrito de Compra
                            </router-link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "navBbar-view",
    data() {
        return {
            mobileMenuOpen: false,
            showMenuLargeScreen: true, // control de visibilidad
        };
    },
    methods: {
        toggleMobileMenu() {
            this.mobileMenuOpen = !this.mobileMenuOpen;
        },
        handleScreenSize() {
            this.showMenuLargeScreen = window.innerWidth >= 640; // Actualizamos segun tamaño pantalla
        },
    },
    mounted() {
        this.handleScreenSize(); // Llamamos a la función
        window.addEventListener('resize', this.handleScreenSize); // Escuchamos el evento de redimensionamiento de la ventana
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.handleScreenSize); // Limpiamos el evento al destruir el componente
    },
};
</script>