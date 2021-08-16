// https: //api.sdriedf.ir/site_model/api/v1/FAQ


import Vue from "vue";

const state = {
    Questions: []
};

const getters = {
    GetQuestions(state) {
        return state.Questions
    }
};

const mutations = {
    SetQuestions(state, question) {
        state.Questions = question
    }
};

const actions = {
    GetQuestionsFromServer(context) {
        Vue.http.get('site_model/api/v1/FAQ/', {
            responseType: 'json'
        }).then(response => {
            console.log("this is Questions", response.data);
            context.commit('SetQuestions', response.data)
        })
    }
};
export default {
    state,
    getters,
    mutations,
    actions
}