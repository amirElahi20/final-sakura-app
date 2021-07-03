import Vue from "vue";

const state = {

};

const getters = {

};

const mutations = {

};

const actions = {
    RegisterUser(context, registerData) {
        Vue.http.post('accounts/api/v1/register/', registerData)
            .then((response) => response.json())
            .then((json) => {
                    console.log("my json", json);
                    if (json.user == false) {
                        Vue.swal("انجام نشد", "نام کاربری تکراری است", "error");
                    } else if (json.email == false) {
                        Vue.swal("انجام نشد", "ایمیل وارد شده تکراری است", "error");

                    } else {
                        Vue.swal("انجام شد", "لینک فعالسازی به ایمیل شما ارسال شد", "success");

                    }
                }

            )
    }
};
// Email sent
export default {
    state,
    getters,
    mutations,
    actions
}