import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueResource from 'vue-resource';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import Vuelidate from 'vuelidate';
import VueCookie from 'vue-cookie';

Vue.config.productionTip = false
library.add(fas);
library.add(fab);
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueResource);
Vue.use(VueSweetalert2)
Vue.use(Vuelidate);
Vue.use(VueCookie);

Vue.http.options.root = 'https://api.sdriedf.ir/';

// console.log("autentication", store.getters);
// console.log("autentication", store.getters.IsAuthenticated);
// // 
// if (store.getters.IsAuthenticated) {
//     router.beforeEach((to, from, next) => {
//         // if (store.getters.IsAuthenticated) {
//         if (to.matched.some(record => record.meta.requiresAuth)) {
//             // this route requires auth, check if logged in
//             // console.log("before each", store.getters.IsAuthenticated)
//             // console.log("before each2", !store.getters.IsAuthenticated)

//             // if not, redirect to login page.
//             if (store.getters.IsAuthenticated) {
//                 next({ name: 'login' })
//             } else {
//                 next({ name: 'Home' }) // go to wherever I'm going
//             }
//         } else
//             next() // does not require auth, make sure to always call next()!

//     })
// }

// Vue.http.options.root = 'http://asha4f.pythonanywhere.com/'

// router.beforeEach((to, from, next) => {
//     // if the route is not public
//     if (!to.meta) {
//         // if the user authenticated
//         if (store.getters.IsAuthenticated) { // I declared a `getter` function in the store to check if the user is authenticated.
//             // continue to the route
//             next({ name: 'Home' });
//         } else {
//             // redirect to login
//             next({ name: 'login' });
//         }
//     }
//     next();
// });


// Vue.http.interceptors.push((request, next) => {
//     request.headers.set('Authorization', 'Bearer ' + Vue.cookie.get('Sakura'))
//     request.headers.set('Accept', 'application/json')
//     next()
// });

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')