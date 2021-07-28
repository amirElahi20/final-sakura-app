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
console.log("autentication", store.getters.IsAuthenticated);
console.log("Auth", Vue.cookie.get('Sakura'))


///true
////////////////////////////
router.beforeEach((to, from, next) => {
        if (to.matched.some(record => record.meta.requiresAuth)) {
            // this route requires auth, check if logged in
            // if not, redirect to login page.
            if (Vue.cookie.get('Sakura') != null) {
                next({
                    path: '/',
                    query: { redirect: '/login' }
                })
            } else {
                next()
            }
        } else {
            next() // make sure to always call next()!
        }
    })
    // 
router.beforeEach((to, from, next) => {
    if (!to.matched.some(record => record.meta.loginDashboard)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (Vue.cookie.get('Sakura') == null) {
            next({ query: { redirect: '/contactus' } })
            console.log('nokey')
        } else {
            next()
            console.log('ok')
        }
    } else {
        next()
        console.log('finish')
    }
})


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')