import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: () =>
            import ('../components/Content/FirstContent.vue')
    },
    {
        path: '/products',
        name: 'Products',
        component: () =>
            import ('../components/ProductPages/AllProducts.vue')
    },
    {
        path: '/aboutus',
        name: 'AboutUs',
        component: () =>
            import ('../Pages/Information/AboutUs.vue')
    },
    {
        path: '/contactus',
        name: 'ContactUs',
        component: () =>
            import ('../Pages/Information/ContactUs.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('../components/TheForms/LogIn.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/register',
        name: 'register',
        component: () =>
            import ('../components/TheForms/TheRegister.vue')
    },
    {
        path: '/forget',
        name: 'forgetpass',
        component: () =>
            import ('../components/TheForms/ForgetPassword.vue')
    },
    {
        path: '/singleproduct/:slug',
        name: 'singleproduct',
        component: () =>
            import ('../components/ProductPages/SingleProduct.vue')
    },
    {
        path: '/accounts/api/v1/check_confirm_email/:token',
        component: () =>
            import ('../components/TheForms/ConfirmEmail.vue'),
        name: 'Confirm'
    },
    {
        path: '/shopcart',
        name: 'shopcart',
        component: () =>
            import ('../components/Shopping/ShopCart.vue')
    },
    {
        path: '/UserDashboard',
        name: 'UserDashboard',
        component: () =>
            import ('../Pages/Account/Client/UserDashboard.vue'),
        mata: {
            loginDashboard: true
        },
        children: [

            {
                path: '/UserDashboard/Account',
                name: 'useraccount',
                component: () =>
                    import ('../Pages/Account/Client/TheAccount.vue'),
                mata: {
                    loginDashboard: true
                },
            },

            {
                path: '/UserDashboard/edit',
                name: 'useraccountedit',
                mata: {
                    loginDashboard: true
                },
                component: () =>
                    import ('../Pages/Account/Client/EditAccount.vue')
            },
            {
                path: '/UserDashboard/changepass',
                name: 'useraccountpass',
                mata: {
                    loginDashboard: true
                },
                component: () =>
                    import ('../Pages/Account/Client/ChangePass.vue')
            },
            {
                path: '/UserDashboard/purches',
                name: 'useraccountpurches',
                mata: {
                    loginDashboard: true
                },
                component: () =>
                    import ('../Pages/Account/Client/UserPurches.vue')
            },
            {
                path: '/UserDashboard/tickets',
                name: 'useraccounttickets',
                mata: {
                    loginDashboard: true
                },
                component: () =>
                    import ('../Pages/Account/Client/UserTickets.vue')

            },

            {
                path: '/UserDashboard/orders',
                name: 'useraccountorders',
                mata: {
                    loginDashboard: true
                },
                component: () =>
                    import ('../Pages/Account/Client/UserOrders.vue')
            },

        ]
    },
    {
        path: '/FrequentlyQuestions',
        name: 'FrequentlyAskedQuestions',
        component: () =>
            import ('../components/Questions/TheQuestions.vue')
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