import Vue from "vue";

const state = {
    MostSellProducts: [],
    LastProducts: [],
    Products: [],
    SingleProduct: {},
    SimilarProduct: {}
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
    }
};

const actions = {
    GetMostSellProductsFromServer(context) {
        Vue.http.get('product/api/v1/top_product/', {
            responseType: 'json'
        }).then(response => {
            // console.log("Get most sell product from server", response.data)
            context.commit('SetMostSellProducts', response.data)
        })
    },
    GetLastProductsFromServer(context) {
        Vue.http.get('product/api/v1/last_product/', {
            responseType: 'json'
        }).then(response => {
            console.log("last product ", response.data)
            context.commit('SetLastProducts', response.data)
        })

    },
    GetProductsFromServer(context) {
        Vue.http.get('product/api/v1/product_list/', {
            responseType: 'json'
        }).then(response => {
            // console.log("total products", response)
            context.commit('SetProducts', response.body)
        })

    },
    GetSinlgeProductsFromServer(context, Filter) {
        console.log("Single product slug", Filter.slug);
        Vue.http.get('product/api/v1/product/' + Filter.slug)
            .then(response => {
                console.log("Single product", response.data);
                context.commit("SetSingleProduct", response.data)
            })
    },
    // product/api/v1/similar_product/موز/
    GetSimilarProductsFromServer(context, name) {
        // console.log("similar product slug", name.slug)
        Vue.http.get('product/api/v1/similar_product/' + name.slug)
            .then(response => {
                return response.json()
            }).then(data => {
                // console.log("similar product", data)
                // console.log("this is slug", name.slug)
                // console.log("this is similar product", response.body);
                context.commit("SetSimilarProduct", data)
            })
    },
};
export default {
    state,
    getters,
    mutations,
    actions
}