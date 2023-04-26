import { createRouter,createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes:[{
        path: '/',
        component: () => import('../components/landing.vue')
    },{
        path: '/cliente',
        component: () => import('../components/client.vue'),
        children: [{
            path: 'carrito',
            component: () => import('../views/client/car.vue')
        },{
            path: 'inicio',
            component: () => import('../views/client/home.vue')
        },{
            path: 'favoritos',
            component: () => import('../views/client/favorites.vue')
        }]
    },{
        path:'/admin',
        component: () => import('../components/admin.vue'),
        children: [{
            path: 'history',
            component: () => import('../views/admin/history.vue')
        },{
            path: 'storage',
            component: () => import('../views/admin/storage.vue')
        }]
    }]
})
export default router