import Vue from "vue";

const state = {
    MostSellProducts: [],
    LastProducts: [],
    Products: {},
    SingleProduct: {},
    SimilarProduct: {},
    SearchProduct: [],
    GroupProducts: []
};

const getters = {
    GetMostSellProducts(state) {
        return state.MostSellProducts
    },
    GetLastProducts(state) {
        return state.LastProducts
    },
    GetProducts(state) {
        return state.Products
    },
    GetSingleProduct(state) {
        return state.SingleProduct
    },
    GetSimilarProduct(state) {
        return state.SimilarProduct
    },
    GetSearchProduct(state) {
        return state.SearchProduct
    },
    GetGroupProduct(state) {
        return state.GroupProducts
    }
};

const mutations = {
    SetMostSellProducts(state, mostSellProducts) {
        state.MostSellProducts = mostSellProducts;
    },
    SetLastProducts(state, bestProducts) {
        state.LastProducts = bestProducts;
    },
    SetProducts(state, products) {
        state.Products = products
    },
    SetSingleProduct(state, singleProduct) {
        state.SingleProduct = singleProduct
    },
    SetSimilarProduct(state, similarproduct) {
        state.SimilarProduct = similarproduct
    },
    SetSearchProduct(state, search) {
        state.SearchProduct = search
    },
    SetGroupProduct(state, group) {
        state.GroupProducts = group
    }
};

const actions = {
    GetMostSellProductsFromServer(context) {
        Vue.http.get('product/api/v1/top_product/', {
            responseType: 'json'
        }).then(response => {
            context.commit('SetMostSellProducts', response.data)
        })
    },
    GetLastProductsFromServer(context) {
        Vue.http.get('product/api/v1/last_product/', {
            responseType: 'json'
        }).then(response => {
            context.commit('SetLastProducts', response.data)
        })

    },
    GetProductsFromServer(context) {
        Vue.http.get('product/api/v1/product_list/', {
            responseType: 'json'
        }).then(response => {
            context.commit('SetProducts', response.body)
        })

    },
    GetSinlgeProductsFromServer(context, Filter) {
        console.log("Single product slug", Filter.slug);
        Vue.http.get('product/api/v1/product/' + Filter.slug)
            .then(response => {
                context.commit("SetSingleProduct", response.data)
            })
    },
    GetSimilarProductsFromServer(context, name) {
        Vue.http.get('product/api/v1/similar_product/' + name.slug)
            .then(response => {
                return response.json()
            }).then(data => {
                context.commit("SetSimilarProduct", data)
            })
    },
    GetSearchProductsFromServer(context, name) {
        console.log("Search slug", name.slug)
        Vue.http.get('product/api/v1/search/' + name.slug)
            .then(response => {
                return response.json()
            }).then(data => {
                context.commit("SetSearchProduct", data)
            })
    },
    GetGroupProductsFromServer(context, name) {
        console.log("group slug", name.slug)
        Vue.http.get('product/api/v1/search/group/' + name.slug + '/')
            .then(response => {
                return response.json()
            }).then(data => {
                console.log("group product", data)
                context.commit("SetGroupProduct", data)
            })
    },
};
export default {
    state,
    getters,
    mutations,
    actions
}