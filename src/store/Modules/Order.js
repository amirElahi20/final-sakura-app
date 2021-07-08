import Vue from "vue";
import store from "..";

const state = {
    UserShopCart: [{}],
    IsExistShopCart: false,
    CountOrder: [],
};

const getters = {
    GetUserShopCart(state) {
        return state.UserShopCart
    },
    IsExistShopCart(state) {
        return state.IsExistShopCart
    },
    getCountOrder(state) {
        return state.CountOrder
    }

};

const mutations = {
    SetUserShopCart(state, shopCart) {
        state.UserShopCart = shopCart
    },
    SetExist(state, isExist) {
        state.IsExistShopCart = isExist;
    },
    SetCount(state, count) {
        state.CountOrder = count
    }
};

const actions = {
    AddProductToOrder(context, orderDetail) {
        console.log(orderDetail)
        Vue.http.post('shop/api/v1/new_Order/', {

            product: orderDetail.product,
            amount: orderDetail.amount,
            pack: orderDetail.pack

        }, {
            headers: {
                'Authorization': 'Bearer ' + Vue.cookie.get('Sakura')
            }
        }).then(() => {
            // console.log(response)
            store.dispatch("ShowOrderRows")
            Vue.swal("انجام شد", "محصول مورد نظر با موفقیت به سبد خرید اضافه شد", "success");
        }).catch(() => {
            // console.log(error)
            Vue.swal("توجه", "برای خرید باید ابتدا وارد سایت شوید", "info");
        })
    },


    ShowOrderRows({ commit }) {
        Vue.http.get('shop/v1/Show_Order/', {
            headers: {
                'Authorization': 'Bearer ' + Vue.cookie.get('Sakura'),
            }
        }).then(response => {
            // store.dispatch('CountUserOrders');
            commit('SetUserShopCart', response.body)
            commit('SetCount', response.data[0].rows.length)
                // console.log("length", response.data[0].rows.length)
            console.log("response show order", response.body)
        }).catch(err => {
            console.log(err);
        })
    },
    CountUserOrders({ commit }) {
        Vue.http.get('shop/v1/Show_Order/', {
            headers: {
                'Authorization': 'Bearer ' + Vue.cookie.get('Sakura'),
            }
        }).then(response => {
            commit('SetCount', response.data[0].rows.length)
                // return response.json();
        }).catch(err => {
            console.log(err);
        })
    }
}
export default {
    state,
    getters,
    mutations,
    actions
}