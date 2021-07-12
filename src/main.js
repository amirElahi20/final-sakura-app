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

// Vue.http.options.root = 'http://asha4f.pythonanywhere.com/'


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