import Vue from "vue";

const state = {
    MostSellProducts: [],
    BestProducts: [],
    Products: [],
    SingleProduct: {},
    SimilarProduct: {}
};

const getters = {
    GetMostSellProducts(state) {
        return state.MostSellProducts
    },
    GetBestProducts(state) {
        return state.BestProducts
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
    SetBestProducts(state, bestProducts) {
        state.BestProducts = bestProducts;
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
            // console.log(response)
            context.commit('SetMostSellProducts', response.body)
        })
    },
    GetBestProductsFromServer(context) {
        Vue.http.get('product/api/v1/best_product/', {
            responseType: 'json'
        }).then(response => {
            // console.log(response)
            context.commit('SetBestProducts', response.body)
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
        console.log("similar product slug", name.slug)
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