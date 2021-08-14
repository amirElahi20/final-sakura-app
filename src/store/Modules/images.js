import Vue from "vue";
// import store from "..";

const state = {
    Images: [],
    siteinfo: {}
};

const getters = {
    GetImg(state) {
        return state.Images
    },
    GetSiteInformation(state) {
        return state.siteinfo
    }

};

const mutations = {
    SetImg(state, img) {
        state.Images = img
    },
    SetInfo(state, info) {
        state.siteinfo = info
    }
};

const actions = {
    GetImagesFromServer(context) {
        Vue.http.get('site_model/api/v1/slider_gallery/')
            .then(response => {
                console.log("images", response.data);
                context.commit("SetImg", response.data)
            })
    },
    GetInformationFromServer(context) {
        Vue.http.get('site_model/api/v1/site_information/')
            .then(response => {
                console.log("this is site information", response.data);
                context.commit("SetInfo", response.data)
            })
    }
}
export default {
    state,
    getters,
    mutations,
    actions
}