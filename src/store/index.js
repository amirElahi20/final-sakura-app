import Vue from 'vue'
import Vuex from 'vuex'
import Products from '../store/Modules/Products';
import SubMenu from '../store/Modules/SubMenu';
import User from '../store/Modules/User';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        Products,
        SubMenu,
        User
    }
})