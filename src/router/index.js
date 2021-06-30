import Vue from 'vue'
import VueRouter from 'vue-router'
import FirstContent from '../components/Content/FirstContent.vue';
import AllProducts from '../components/ProductPages/AllProducts.vue';
import ContactUs from '../Pages/Information/ContactUs.vue';
import AboutUs from '../Pages/Information/AboutUs.vue';
import LogIn from '../components/TheForms/LogIn.vue';
import TheRegister from '../components/TheForms/TheRegister.vue';
import ForgetPassword from '../components/TheForms/ForgetPassword.vue';


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: FirstContent
    },
    {
        path: '/products',
        name: 'Products',
        component: AllProducts
    },
    {
        path: '/aboutus',
        name: 'AboutUs',
        component: AboutUs
    },
    {
        path: '/contactus',
        name: 'ContactUs',
        component: ContactUs
    },
    {
        path: '/login',
        name: 'login',
        component: LogIn
    },
    {
        path: '/register',
        name: 'register',
        component: TheRegister
    },
    {
        path: '/forget',
        name: 'forgetpass',
        component: ForgetPassword
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router