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