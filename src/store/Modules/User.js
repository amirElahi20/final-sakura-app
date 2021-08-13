import Vue from "vue";
import store from "..";
import router from '../../router/index';

const state = {
    IsUserAuthenticated: false,
    UserName: '',
    pendingRequest: false
};

const getters = {
    IsAuthenticated(state) {
        return state.IsUserAuthenticated;
    },
    GetUsername(state) {
        return state.UserName;
    },
    GetPending(state) {
        return state.pendingRequest
    }
};

const mutations = {
    SetAuthCookie(state, token) {
        Vue.cookie.set(
            "Sakura",
            token,
            1
        );
    },
    DeleteAuthCookie() {
        Vue.cookie.delete('Sakura')
    },
    SetUserAuth(state, Auth) {
        state.IsUserAuthenticated = Auth
    },
    SetUsername(state, username) {
        state.UserName = username
    },
    setPending(state, pending) {
        state.pendingRequest = pending
    }

};

const actions = {
    RegisterUser(context, registerData) {
        context.commit("setPending", true)

        Vue.http.post('accounts/api/v1/register/', registerData)
            .then((response) => response.json())
            .then((json) => {
                    context.commit("setPending", false)

                    if (json.user == false) {
                        Vue.swal("انجام نشد", "نام کاربری تکراری است", "error");
                    } else if (json.email == false) {
                        Vue.swal("انجام نشد", "ایمیل وارد شده تکراری است", "error");

                    } else {
                        Vue.swal("انجام شد", "لینک فعالسازی به ایمیل شما ارسال شد", "success");

                    }
                }

            ).catch(err => {
                console.log(err)
                context.commit("setPending", false)

            })
    },
    LoginUser(context, loginData) {
        context.commit("setPending", true)
        Vue.http.post('accounts/api/v1/obtain_token/', loginData)
            .then(response => {
                context.commit("SetAuthCookie", response.body.access)
                context.commit("SetUserAuth", true);
                store.dispatch("checkForLogin");
                store.dispatch("CountUserOrders")
                Vue.swal("انجام شد", "ورود با موفقیت انجام شد", "success");
                router.push('/')
                context.commit("setPending", false)

            }).catch(error => {
                Vue.swal("انجام نشد", "اطلاعات وارد شده صحیح نیستند", "error");
                console.log(error)
                context.commit("setPending", false)

            })
    },
    // accounts/api/v1/username/
    checkForLogin(context) {
        Vue.http.get('accounts/api/v1/username/', {
            headers: {
                'Authorization': 'Bearer ' + Vue.cookie.get('Sakura'),
                'Accept': 'application/json'
            }
        }).then(response => {
            // console.log("username-username", response.body.username);
            context.commit('SetUsername', response.body.username);
            context.commit("SetUserAuth", true);

        })
    },
    SignOutUser(context) {
        context.commit('SetUsername', '');
        context.commit("SetUserAuth", false);
        context.commit("DeleteAuthCookie");
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}