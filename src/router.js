import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/shop',
        },
        {
            path: '/shop',
            component: () => import(/* webpackChunkName: 'shop' */ './components/features/User/User')
        },
        {
            path: '/admin',
            component: () => import(/* webpackChunkName: 'admin' */ './components/features/Admin/Admin')
        },
        {
            path: '*',
            redirect: '/shop'
        }
    ],
})

export default router