import Vue from "vue";
import store from '..'

const state = {
    UserClient: [],
    User: {}
};

const getters = {
    GetInfo(state) {
        return state.UserClient
    },
    getUser(state) {
        return state.User
    }
};

const mutations = {
    SetUserInfo(state, userInfo) {
        state.UserClient = userInfo
    },
    SetUser(state, user) {
        state.user = user
    }
};

const actions = {
    Getinformtion(context) {
        Vue.http.get('panel/api/v1/user_information/', {
            headers: {
                'Authorization': 'Bearer ' + Vue.cookie.get('Sakura'),

            }
        }).then(response => {
            console.log("user panel", response.body);
            // context.commit('SetUser', response.data.user);
            context.commit('SetUserInfo', response.body)
        })
    },
    Putinformtion(context, User) {
        console.log("this is user", User)
        Vue.http.put('panel/api/v1/user_information/', {
            user: {
                username: User.username,
                first_name: User.Fname,
                last_name: User.Lname,
                email: User.email,
                phone: User.phone
            }
        }, {
            headers: {
                'Authorization': 'Bearer ' + Vue.cookie.get('Sakura')
            }
        }).then(response => {
            // console.log("user panel", response.body);
            console.log(response.status)
            store.dispatch("Getinformtion")
            Vue.swal("انجام شد", "اطلاعات ویرایش شد", "success");
        }).catch(() => {
            Vue.swal("انجام نشد", "ویرایش اطلاعات موفقیت آمیز نبود", "success");

        })
    }
};
export default {
    state,
    getters,
    mutations,
    actions
}