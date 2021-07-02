import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueResource from 'vue-resource';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

Vue.config.productionTip = false
library.add(fas);
library.add(fab);
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueResource);
Vue.http.options.root = 'https://asha4f.pythonanywhere.com/';

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')