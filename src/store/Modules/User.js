import Vue from "vue";
import store from "..";
import router from '../../router/index';

const state = {
    IsUserAuthenticated: false,
    UserName: ''
};

const getters = {
    IsAuthenticated(state) {
        return state.IsUserAuthenticated;
    },
    GetUsername() {
        return state.UserName;
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
    }

};

const actions = {
    RegisterUser(context, registerData) {
        Vue.http.post('accounts/api/v1/register/', registerData)
            .then((response) => response.json())
            .then((json) => {
                    // console.log("my json", json);
                    if (json.user == false) {
                        Vue.swal("انجام نشد", "نام کاربری تکراری است", "error");
                    } else if (json.email == false) {
                        Vue.swal("انجام نشد", "ایمیل وارد شده تکراری است", "error");

                    } else {
                        Vue.swal("انجام شد", "لینک فعالسازی به ایمیل شما ارسال شد", "success");

                    }
                }

            )
    },
    LoginUser(context, loginData) {
        Vue.http.post('accounts/api/v1/obtain_token/', loginData)
            .then(response => {
                // console.log("this is login", response.body.access)
                context.commit("SetAuthCookie", response.body.access)
                context.commit("SetUserAuth", true);
                store.dispatch("checkForLogin");
                store.dispatch("CountUserOrders")
                Vue.swal("انجام شد", "ورود با موفقیت انجام شد", "success");

                router.push('/')
            }).catch(error => {
                Vue.swal("انجام نشد", "اطلاعات وارد شده صحیح نیستند", "error");
                console.log(error)
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