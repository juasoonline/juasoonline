import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home/Home.vue'

const routes =
[
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
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
