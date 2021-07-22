import Vue from "vue";
import store from '..'
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
            console.log("user panel", response.data);
            context.commit('SetUserInfo', response.data)
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
            console.log("user panel", response.body);
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