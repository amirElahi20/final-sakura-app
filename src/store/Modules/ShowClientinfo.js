import Vue from "vue";
import store from '..'
import router from "../../router";

const state = {
    UserClient: [],
    User: {},
    Pending: false
};

const getters = {
    GetInfo(state) {
        return state.UserClient
    },
    getUser(state) {
        return state.User
    },
    GetPendingLoading(state) {
        return state.Pending
    }
};

const mutations = {
    SetUserInfo(state, userInfo) {
        state.UserClient = userInfo
    },
    SetUser(state, user) {
        state.user = user
    },
    SetPendingLoading(state, loading) {
        state.Pending = loading
    }
};

const actions = {
    Getinformtion(context) {
        Vue.http.get('panel/api/v1/user_information/', {
            headers: {
                'Authorization': 'Bearer ' + Vue.cookie.get('Sakura'),

            }
        }).then(response => {
            context.commit('SetUserInfo', response.body)
        })
    },
    Putinformtion(context, User) {
        console.log("this is user", User)
        context.commit("SetPendingLoading", true)
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
            context.commit("SetPendingLoading", false)
            store.dispatch("Getinformtion")
            Vue.swal("انجام شد", "اطلاعات ویرایش شد", "success");
            if (response.data.status == true) {
                router.push('/')
                Vue.swal("ایمیل خود را تغییر دادید", "لینک احراز هویت برای ایمیل شما ارسال شد", "success");
                store.dispatch("SignOutUser")

            }
        }).catch(() => {
            context.commit("SetPendingLoading", false)
            Vue.swal("انجام نشد", "ایمیل وارد شده تکراری است", "error");

        })
    }
};
export default {
    state,
    getters,
    mutations,
    actions
}