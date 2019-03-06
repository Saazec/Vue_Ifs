import Vue from 'vue';
import Router from 'vue-router';
import Login from '../components/Login.vue';
import ForgotPassword from '../components/ForgotPassword.vue';
import Dashboard from '../components/Dashboard.vue';
import Ifs from '../components/Ifs.vue';
import Operational from '../components/Operational.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Login
        },
        {
            path: '/forgotpassword',
            name: 'Forgot',
            component: ForgotPassword,
        },
        {
            path: '/dashboard',
            name: 'Dashboard',
            component: Dashboard,
        },
        {
            path: '/operational',
            name: 'Operational',
            component: Operational,
        },
        {
            path: '/ifs',
            name: 'Ifs',
            component: Ifs,
        },
    ]
})