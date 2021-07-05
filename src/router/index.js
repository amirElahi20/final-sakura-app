import Vue from 'vue'
import VueRouter from 'vue-router'
import FirstContent from '../components/Content/FirstContent.vue';
import AllProducts from '../components/ProductPages/AllProducts.vue';
import ContactUs from '../Pages/Information/ContactUs.vue';
import AboutUs from '../Pages/Information/AboutUs.vue';
import LogIn from '../components/TheForms/LogIn.vue';
import TheRegister from '../components/TheForms/TheRegister.vue';
import ForgetPassword from '../components/TheForms/ForgetPassword.vue';
import SingleProduct from '../components/ProductPages/SingleProduct.vue';
import ConfirmEmail from '../components/TheForms/ConfirmEmail.vue';
import ClientInfo from '../Pages/Account/Client/ClientInfo.vue';
import EditAccount from '../Pages/Account/Client/EditAccount.vue';
import ThePassword from '../Pages/Account/Client/ThePassword';
import ThePurches from '../Pages/Account/Client/ThePurches.vue';
import ShopCart from '../components/Shopping/ShopCart.vue';

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
    },
    {
        path: '/singleproduct/:slug',
        name: 'singleproduct',
        component: SingleProduct
    },
    {
        path: '/accounts/api/v1/check_confirm_email/:token',
        component: ConfirmEmail,
        name: 'Confirm'
    },
    {
        path: '/clientaccount',
        name: 'Account',
        component: ClientInfo
    },
    {
        path: '/editaccount',
        name: 'editacoount',
        component: EditAccount
    },
    {
        path: '/changepassword',
        name: 'passwordchanged',
        component: ThePassword
    },
    {
        path: '/purches',
        name: 'purches',
        component: ThePurches
    },
    {
        path: '/shopcart',
        name: 'shopcart',
        component: ShopCart
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior() {
        return {
            x: 0,
            y: 0
        }
    }
})

export default router