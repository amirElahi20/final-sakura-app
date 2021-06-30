import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

Vue.config.productionTip = false
library.add(fas);
library.add(fab)
Vue.component('font-awesome-icon', FontAwesomeIcon)


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')