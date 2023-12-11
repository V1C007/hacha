import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Producto from "../components/Producto.vue"
import CatalogoComponent from '../components/Catalogo.vue'
import PayPalView from "../components/PayPalView.vue"
import reviewForm from "../components/reviewForm.vue"
import UserAdmin from "../views/UserAdmin"
import Admin from "../views/Admin"
import OrdenesCompra from "../components/OrdenesCompra.vue"
import LoginComponent from "../components/LoginComponent.vue"
import SignUp from "../components/SignUp.vue"
import LoginUser from '../components/LoginUser.vue'
import WishlistComponent from "../components/WishlistComponent.vue"
import CartComponent from "../components/CartComponent.vue"
import Perfil from "../views/Perfil"

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
        path: '/Producto/:id',
        name: 'Producto',
        component: Producto
    },
    {
        path: '/OrdenesCompra',
        name: 'OrdenesCompra',
        component: OrdenesCompra
    },
    {
        path: '/Catalogo',
        name: 'Catalogo',
        component: CatalogoComponent
    },
    {
        path: '/Perfil',
        name: 'Perfil',
        component: Perfil
    },
    {
        path: '/Admin',
        name: 'Admin',
        component: Admin
    },

    {
        path: '/UserAdmin',
        name: 'UserAdmin',
        component: UserAdmin
    },
    {
        path: '/reviewForm',
        name: 'reviewForm',
        component: reviewForm
    },
    {
        path: '/LoginComponent',
        name: 'LoginComponent',
        component: LoginComponent
    },
    {
        path: '/LoginUser',
        name: 'LoginUser',
        component: LoginUser
    },
    {
        path: '/SignUp',
        name: 'SignUp',
        component: SignUp
    },
    {
        path: '/Wishlist',
        name: 'Wishlist',
        component: WishlistComponent
    },
    {
        path: '/Cart',
        name: 'Cart',
        component: CartComponent
    },
    {
        path: '/paypal',
        name: 'paypal',
        component: PayPalView,
        props: true
    }

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
