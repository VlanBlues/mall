import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
const Home = () => import('./views/home/Home');
const Explore = () => import('./views/explore/Explore');
const Shop = () => import('./views/shop/Shop');
const Myup = () => import('./views/myup/Myup');
const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect: {
              name: 'home'
            }
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/explore',
            name: 'explore',
            component: Explore
        },
        {
            path: '/myup',
            name: 'myup',
            component: Myup
        },
        {
            path: '/shop',
            name: 'shop',
            component: Shop
        }
    ]
});
/*router.beforeEach((to, from, next) => {
    document.title = to.matched[0].meta.title;
    next()
});*/
export default router
