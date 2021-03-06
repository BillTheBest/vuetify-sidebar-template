import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import Vuetify from 'vuetify'
import HomePage from './pages/HomePage.vue'
import AboutPage from './pages/AboutPage.vue'
import ExamplePage from './pages/ExamplePage.vue'

const routes = [
    {
        path: '/home',
        name: 'home',
        component: HomePage
    },
    {
        path: '/about',
        name: 'about',
        component: AboutPage
    },
    {
        path: '/examples',
        name: 'examples',
        component: ExamplePage
    },
    {
        path: '*',
        redirect: {
            name: 'home'
        }
    }
];
const router = new VueRouter({
    routes,
    root: '/home'
});

Vue.use(Vuetify);
Vue.use(VueRouter);

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
