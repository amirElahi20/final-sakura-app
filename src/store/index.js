import Vue from 'vue'
import Vuex from 'vuex'
import Products from '../store/Modules/Products';
import SubMenu from '../store/Modules/SubMenu';
import User from '../store/Modules/User';
import Order from '../store/Modules/Order';
import ShowClient from '../store/Modules/ShowClientinfo';
import Images from '../store/Modules/images';
import Questions from '../store/Modules/TheQuestions'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        Products,
        SubMenu,
        User,
        Order,
        ShowClient,
        Images,
        Questions
    }
})