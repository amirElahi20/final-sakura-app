import Vue from "vue";

const state = {
    SubMenu: [],
};

const getters = {
    GetSubMenu(state) {
        return state.SubMenu
    }
};

const mutations = {
    SetSubMenu(state, submenu) {
        state.SubMenu = submenu
    }
};

const actions = {
    GetSubMenuFromServer(context) {
        Vue.http.get('product/api/v1/group_list/', {
            responseType: 'json'
        }).then(response => {
            context.commit('SetSubMenu', response.body)
        })
    }
};
export default {
    state,
    getters,
    mutations,
    actions
}