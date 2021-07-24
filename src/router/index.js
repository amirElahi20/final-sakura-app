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
import UserDashboard from '../Pages/Account/Client/UserDashboard.vue';
import ShopCart from '../components/Shopping/ShopCart.vue';
import TheAccount from '../Pages/Account/Client/TheAccount.vue';
import EditAccount from '../Pages/Account/Client/EditAccount.vue';
import ChangePass from '../Pages/Account/Client/ChangePass.vue';
import UserOrders from '../Pages/Account/Client/UserOrders.vue';
import UserPurches from '../Pages/Account/Client/UserPurches.vue';
import UserTickets from '../Pages/Account/Client/UserTickets.vue';
// import store from '../store/index';
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
            component: LogIn,
            meta: {
                requiresAuth: true
            }
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
            path: '/shopcart',
            name: 'shopcart',
            component: ShopCart
        },
        {
            path: '/UserDashboard',
            name: 'UserDashboard',
            component: UserDashboard,
            mata: {
                loginDashboard: false
            },
            TheAccount,
            children: [

                {
                    path: '/UserDashboard/Account',
                    name: 'useraccount',
                    component: TheAccount,
                    mata: {
                        loginDashboard: false
                    },
                },

                {
                    path: '/UserDashboard/edit',
                    name: 'useraccountedit',
                    mata: {
                        loginDashboard: true
                    },
                    component: EditAccount
                },
                {
                    path: '/UserDashboard/changepass',
                    name: 'useraccountpass',
                    mata: {
                        loginDashboard: false
                    },
                    component: ChangePass
                },
                {
                    path: '/UserDashboard/purches',
                    name: 'useraccountpurches',
                    mata: {
                        loginDashboard: false
                    },
                    component: UserPurches
                },
                {
                    path: '/UserDashboard/tickets',
                    name: 'useraccounttickets',
                    mata: {
                        loginDashboard: false
                    },
                    component: UserTickets
                },

                {
                    path: '/UserDashboard/orders',
                    name: 'useraccountorders',
                    mata: {
                        loginDashboard: false
                    },
                    component: UserOrders
                },
            ]
        },
        // {
        //     path: '/UserDashboard/Account',
        //     name: 'useraccount',
        //     component: TheAccount
        // }
    ]
    // import { store } from "../store/index"; // import the store to check if authenticated

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





// router.beforeEach((to, from, next) => {
//     if (to.matched.some(record => record.meta.loginDashboard)) {
//         // this route requires auth, check if logged in
//         console.log("before each", store.getters.IsAuthenticated)
//             // if not, redirect to login page.
//         if (store.getters.IsAuthenticated) {
//             next({ path: '/UserDashboard/Account' })
//         } else {
//             next({ name: 'register' }) // go to wherever I'm going
//         }
//     } else {
//         next() // does not require auth, make sure to always call next()!
//     }
// })


// router.beforeEach((to, from, next) => {
//     // if the route is not public
//     if (to.meta.public) {
//         // if the user authenticated
//         console.log("before each", to.meta.public)
//         if (store.getters.IsAuthenticated) { // I declared a `getter` function in the store to check if the user is authenticated.
//             // continue to the route
//             next({ name: 'Home' });
//         } else {
//             // redirect to login
//             next({ name: 'login' });
//         }
//     }
//     next();
// }); }
//     next();
// });