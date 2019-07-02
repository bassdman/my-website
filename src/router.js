import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                header: 'fixed',
                footerWithBackground: true
            },
            abc: 'def'
        },
        {
            path: '/impressum',
            name: 'impressum',
            component: () =>
                import ('./views/Impressum.vue'),
            meta: {
                headerPagename: 'Impressum'
            }
        },
        {
            path: '/datenschutz',
            name: 'datenschutz',
            component: () =>
                import ('./views/Datenschutz.vue'),
            meta: {
                headerPagename: 'Datenschutz'
            }
        },
        {
            path: '/lebenslauf',
            name: 'lebenslauf',
            component: () =>
                import ('./views/Lebenslauf.vue'),
            meta: {
                headerPagename: 'Lebenslauf'
            }
        },
    ],
});