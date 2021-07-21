import Vue from "vue";

const state = {
    UserClient: {}
};

const getters = {
    GetInfo(state) {
        return state.UserClient
    }
};

const mutations = {
    SetUserInfo(state, userInfo) {
        state.UserClient = userInfo
    }
};

const actions = {
    Getinformtion(context) {
        Vue.http.get('panel/api/v1/user_information/', {
            headers: {
                'Authorization': 'Bearer ' + Vue.cookie.get('Sakura')
            }
        }).then(response => {
            console.log("user panel", response.body);
            context.commit('SetUserInfo', response.body)
        })
    },
    Putinformtion() {
        Vue.http.put('panel/api/v1/user_information/', {

            user: {
                username: 'amir54',
                first_name: 'امیررضا',
                last_name: 'الهی',
                email: 'info@gmail.com'
            }

        }, {
            headers: {
                'Authorization': 'Bearer ' + Vue.cookie.get('Sakura')
            }
        }).then(response => {
            console.log("user panel", response.body);
        })
    }
};
export default {
    state,
    getters,
    mutations,
    actions
}