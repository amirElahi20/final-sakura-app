import Vue from "vue";

const state = {

};

const getters = {

};

const mutations = {

};

const actions = {
    AddProductToOrder(context, orderDetail) {
        console.log(orderDetail)
        Vue.http.post('shop/api/v1/new_Order/', {

            product: orderDetail.product,
            amount: orderDetail.amount,
            pack: orderDetail.pack

        }).then(response => {
            console.log(response)
            Vue.swal("انجام شد", "محصول مورد نظر با موفقیت به سبد خرید اضافه شد", "success");
        }).catch(error => {
            console.log(error)
            Vue.swal("توجه", "برای خرید باید ابتدا وارد سایت شوید", "info");
        })
    },
    ShowOrderRows() {
        Vue.http.get('shop/v1/Show_all_Order/', {
            responseType: 'json'
        }).then(response => {
            console.log("total orders", response)
                // context.commit('SetProducts', response.body)
        })
    }
};
// 'shop/v1/Show_Order/'
export default {
    state,
    getters,
    mutations,
    actions
}