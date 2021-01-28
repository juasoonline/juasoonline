import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home/Home.vue'

const routes =
[
    {
        path: '/login',
        name: 'Login',
        component: () => import( '../components/Login/login' )
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import( '../components/Register/register' )
    },
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/categories',
        name: 'Categories',
        component: () => import( /* webpackChunkName: "about" */ '../components/Categories/Categories' )
    },
    {
        path: '/category/:category',
        name: 'Category',
        component: () => import( '../components/Category/Category' )
    },
    {
        path: '/item/:item',
        name: 'Item',
        component: () => import( '../components/Item/Item' )
    },
    {
        path: '/store/:store',
        name: 'Store',
        component: () => import( '../components/Store/Store' )
    },
    {
        path: '/cart',
        name: 'Cart',
        component: () => import( '../components/Cart/Cart' )
    },
    {
        path: '/wishlist',
        name: 'Wishlist',
        component: () => import( '../components/Wishlist/Wishlist' )
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router