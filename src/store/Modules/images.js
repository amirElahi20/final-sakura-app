import Vue from "vue";
// import store from "..";

const state = {
    Images: []
};

const getters = {
    GetImg(state) {
        return state.Images
    }

};

const mutations = {
    SetImg(state, img) {
        state.Images = img
    }
};

const actions = {
    GetImagesFromServer(context) {
        Vue.http.get('site_model/api/v1/site_information/')
            .then(response => {
                console.log("images", response.data);
                context.commit("SetImg", response.data)
            })
    },
}
export default {
    state,
    getters,
    mutations,
    actions
}