<template>
  <div>
    <div class="total-shop" v-if="IsAuthenticated && getCountOrder != 0">
      <!-- <h1 class="heading-secondary">سبد خرید</h1> -->
      <div class="shopping-cart">
        <div class="column-labels">
          <label class="product-image">عکس ها</label>
          <label class="product-details">محصولات</label>
          <label class="product-price">قیمت</label>
          <label class="product-quantity">تعداد</label>
          <label class="product-removal">حذف</label>
          <label class="product-line-price">کل</label>
        </div>

        <div
          v-for="(order, index) in userOrders[0].rows"
          :key="index"
          class="product"
        >
          <div class="product-image">
            <router-link
              :to="{
                name: 'singleproduct',
                params: { slug: order.product.slug },
              }"
            >
              <img
                class="img-product"
                :src="order.product.picture[0].picture"
              />
            </router-link>
          </div>
          <div class="product-details">
            <div class="product-title">{{ order.product.name }}</div>
            <br />
            <p class="product-description">
              <font-awesome-icon class="icon-pack" icon="box" />
              {{ order.product_cost.pack.title }} <br /><br />
              <font-awesome-icon class="icon-pack" icon="weight" /> تخفیف
              {{ order.product_cost.discount }} درصد
              <br />
            </p>
          </div>
          <div class="product-price" style="direction: rtl">
            {{ order.product_cost.cost.toLocaleString() }}
            <span class="toman">تومان</span>
            <span class="toman bargain">150تومان تخفیف</span>
          </div>

          <div class="product-quantity">
            <div class="counter-counter">
              <div
                :disabled="pendingRequest"
                @click="addone(order.product_cost.pack.id, order.product.id)"
                class="counter plus"
              >
                +
              </div>
              <div v-if="!pendingRequest" class="cost-box">
                {{ order.amount }}
              </div>
              <loading
                class="vld-parent"
                :active="pendingRequest"
                :is-full-page="fullPage"
                loader="dots"
                backgroundColor="#ffffff"
                color="#FFA500"
                blue="10px"
              />

              <div
                v-if="order.amount != 1"
                :disabled="pendingRequest"
                @click="removeone(order.product_cost.pack.id, order.product.id)"
                class="counter minus"
              >
                -
              </div>
              <div
                v-if="order.amount == 1"
                :disabled="pendingRequest"
                @click="removeone(order.product_cost.pack.id, order.product.id)"
                class="counter minus"
              >
                <font-awesome-icon icon="trash-alt" class="trash-icon" />
              </div>
            </div>
          </div>
          <div class="product-removal">
            <button
              @click="
                deleteOrder(
                  order.product_cost.pack.id,
                  order.product.id,
                  order.amount
                )
              "
              class="remove-product"
            >
              حذف
            </button>
          </div>
          <div class="product-line-price" style="direction: rtl">
            {{ order.price.toLocaleString() }}
            <span class="toman">تومان</span>
          </div>
        </div>

        <div class="totals">
          <div class="totals-item">
            <label>
              {{ userOrders[0].total_price.toLocaleString() }}

              <span class="toman">تومان</span></label
            >
            <div class="totals-value" id="cart-subtotal">مبلغ کالاها</div>
          </div>
          <div class="totals-item">
            <label>
              {{ cost.toLocaleString() }}
              <span class="toman">تومان</span></label
            >
            <div class="totals-value" id="cart-shipping">هزینه ارسال</div>
          </div>
          <div class="totals-item totals-item-total">
            <label>
              {{ (userOrders[0].total_price + cost).toLocaleString() }}
              <span class="toman">تومان</span></label
            >
            <div class="totals-value" id="cart-total">مبلغ کل</div>
          </div>
        </div>

        <button class="checkout">پرداخت</button>
        <div class="back">
          <router-link class="login log" to="/"
            >بازگشت به خانه اصلی</router-link
          >
        </div>
      </div>
    </div>
    <div v-if="IsAuthenticated && getCountOrder == 0">
      <div class="attention">
        <font-awesome-icon class="shop-bag" icon="shopping-basket" />
        <h1>کاربر گرامی</h1>
        <h2>سبد خرید شما خالی میباشد</h2>
        <router-link class="login" to="/">بازگشت به خانه اصلی</router-link>
      </div>
    </div>
    <div v-if="!IsAuthenticated">
      <div class="attention">
        <font-awesome-icon class="shop-bag" icon="shopping-cart" />
        <h1>کاربر گرامی</h1>
        <h4>برای مشاهده سبد خرید خود باید وارد سایت شوید</h4>
        <router-link class="login" to="/login">ورود</router-link>
        <router-link class="login" to="/register">ثبت نام</router-link>
        <router-link class="login" to="/">بازگشت به خانه اصلی</router-link>
      </div>
    </div>
  </div>
</template>


<script>
import Loading from "vue-loading-overlay";

import "vue-loading-overlay/dist/vue-loading.css";
import Vue from "vue";
export default {
  data() {
    return {
      cost: 20000,
      index: 0,
      pendingRequest: false,
      fullPage: true,
      loader: "bars",
    };
  },
  metaInfo: {
    title: "فروشگاه ساکورا",
    titleTemplate: "%s - سبدخرید",
    htmlAttrs: {
      lang: "utf-8",
      amp: true,
    },
  },
  components: {
    Loading,
  },
  methods: {
    async addone(packId, productId) {
      console.log("pack", packId);
      console.log("product", productId);
      let productpack = packId.toString();
      let productproduct = productId.toString();
      this.pendingRequest = true;
      await this.$http
        .post(
          "shop/api/v1/modify_Order_Row/",
          {
            product: productproduct,
            amount: "+1",
            pack: productpack,
          },
          {
            headers: {
              Authorization: "Bearer " + Vue.cookie.get("Sakura"),
            },
          }
        )
        .then((response) => {
          console.log(response);
          this.$store.dispatch("ShowOrderRows");
          this.pendingRequest = false;
        })
        .catch((err) => {
          console.log(err);
          this.pendingRequest = false;
        });
    },
    async removeone(packId, productId) {
      let productpack = packId.toString();
      let productproduct = productId.toString();
      this.pendingRequest = true;
      await this.$http
        .post(
          "shop/api/v1/modify_Order_Row/",
          {
            product: productproduct,
            amount: "-1",
            pack: productpack,
          },
          {
            headers: {
              Authorization: "Bearer " + Vue.cookie.get("Sakura"),
            },
          }
        )
        .then((response) => {
          console.log(response);
          this.$store.dispatch("ShowOrderRows");
          this.pendingRequest = false;
        })
        .catch((err) => {
          console.log(err);
          this.pendingRequest = false;
        });
    },
    async deleteOrder(packId, productId, amount) {
      let productpack = packId.toString();
      let productamount = amount.toString();
      let productproduct = productId.toString();
      this.pendingRequest = true;
      await this.$http
        .post(
          "shop/api/v1/Cancel_Order_Row/",
          {
            product: productproduct,
            amount: productamount,
            pack: productpack,
          },
          {
            headers: {
              Authorization: "Bearer " + Vue.cookie.get("Sakura"),
            },
          }
        )
        .then((response) => {
          console.log(response);
          this.$store.dispatch("ShowOrderRows");
          this.pendingRequest = false;
        })
        .catch((err) => {
          console.log(err);
          this.pendingRequest = false;
        });
    },
  },
  created() {
    return this.$store.dispatch("ShowOrderRows");
  },
  computed: {
    userOrders() {
      return this.$store.getters.GetUserShopCart;
    },
    Username() {
      return this.$store.getters.GetUsername;
    },
    IsAuthenticated() {
      return this.$store.getters.IsAuthenticated;
    },
    getCountOrder() {
      return this.$store.getters.getCountOrder;
    },
  },
};
</script>


<style lang="scss" scoped>
.trash-icon {
  margin: 5px -2px;
  padding-bottom: 1px;
}
.back {
  margin-top: 200px;
}
.icon-pack {
  font-size: 15px;
  color: orange;
}
.img-product {
  height: 80px;
  border-radius: 100%;
}
.attention {
  width: 70%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 2rem auto;
  padding: 50px;
  border-radius: 15px;
}
.bargain {
  display: block;
  text-align: center;
  margin-top: 10px;
  color: red;
}
.shop-bag {
  font-size: 80px;
  margin: 20px 0px;
}
.login {
  text-decoration: none;
  color: white;
  padding: 10px 20px;
  background-color: orangered;
  margin-top: 20px;
  border-radius: 15px;
  transition: all 0.4s;

  &:hover {
    transform: scale(1.1);
  }
}
.log {
  @media screen and (max-width: 450px) {
    font-size: 10px;
  }
}
.counter {
  padding: 1px 10px;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  cursor: pointer;
  color: white;
}
.plus {
  background-color: orange;
  margin-top: -7px;
  padding-top: 2px;
  margin-bottom: 10px;
  @media screen and (max-width: 649px) {
    display: inline-block;
    margin-right: 10px;
  }
  @media screen and (max-width: 370px) {
    // display: inline-block; 
    // margin-left: 10px; 
    display: block;
    margin-right: 0;
  }
}
.minus {
  background-color: orangered;
  margin-top: -7px;
  padding-top: 2px;
  margin-bottom: 10px;
  margin-top: 10px;
  @media screen and (max-width: 649px) {
    display: inline-block; 
    margin-left: 10px; 
  }
    @media screen and (max-width: 370px) {
    // display: inline-block; 
    // margin-left: 10px; 
    display: block;
    margin-left: 0px;
  }
}
.cost-box {
  border: 1px solid black;
  display: inline;
  padding: 2px 10px;
  border-radius: 10px;
  @media screen and (max-width: 649px) {
    display: inline-block;
    // margin-right: 10px;
    // margin-left: 10px;
  }
    @media screen and (max-width: 370px) {
    // display: inline-block; 
    // margin-left: 10px; 
    margin-right: 72%;
  }
}
.toman {
  font-size: 10px;
  font-weight: bold;
}
.username {
  margin-bottom: 1rem;
}
.total-shop {
  width: 80%;
  margin: 6rem auto;
}
$color-primary-dark: orange;
$color-primary-light: orangered;
.heading-secondary {
  float: right;
  font-size: 1rem;
  margin-bottom: 0.2rem;
  margin-top: -2rem;
  font-weight: 700;
  background-image: linear-gradient(
    to right,
    $color-primary-dark,
    $color-primary-light
  );
  -webkit-background-clip: text;
  display: inline-block;
  color: transparent;
  transition: all 0.3s;
}

/*
I wanted to go with a mobile first approach, but it actually lead to more verbose CSS in this case, so I've gone web first. Can't always force things...

Side note: I know that this style of nesting in SASS doesn't result in the most performance efficient CSS code... but on the OCD/organizational side, I like it. So for CodePen purposes, CSS selector performance be damned.
*/

/* Global settings */
$color-border: orange;
$color-label: orangered;
$font-default: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue",
  Helvetica, Arial, sans-serif;
$font-bold: "HelveticaNeue-Medium", "Helvetica Neue Medium";

/* Global "table" column settings */
.product-image {
  float: right;
  width: 25%;
  // background-color: red;
  height: 20%;
}
.product-details {
  float: right;
  width: 20%;
  // background-color: yellow;
}
.product-price {
  float: right;
  text-align: center;
  width: 24%;
}
.product-quantity {
  float: right;
  text-align: center;
  // width: 10%;
     @media screen and (max-width: 649px) {
         width: 50%;
         margin-top: 0px;
        //  background-color: red;
         }
}
.product-removal {
  float: right;
  width: 9%;
  color: orangered;
}
.product-line-price {
  float: right;
  width: 12%;
  text-align: center;
}

/* This is used as the traditional .clearfix class */
.group:before,
.group:after {
  content: "";
  display: table;
}
.group:after {
  clear: both;
}
.group {
  zoom: 1;
}

/* Apply clearfix in a few places */
.shopping-cart,
.column-labels,
.product,
.totals-item {
  @extend .group;
}

/* Apply dollar signs */

/* Body/Header stuff */
body {
  padding: 0px 30px 30px 20px;
  font-family: $font-default;
  font-weight: 100;
}

h1 {
  font-weight: 100;
}

label {
  color: $color-label;
}

.shopping-cart {
  margin-top: -45px;
}

/* Column headers */
.column-labels {
  label {
    padding-bottom: 15px;
    margin-bottom: 15px;
    border-bottom: 1px solid $color-border;
  }
  .product-details {
    // text-indent: 150px;
    text-align: right;
  }
  .product-image {
    text-align: right;
    // text-indent: -9999px;
  }
  .product-removal {
    text-indent: 5px;
  }
}

/* Product entries */
.product {
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid $color-border;

  .product-image {
    text-align: right;
    img {
      width: 100px;
    }
  }

  .product-details {
    .product-title {
      margin-right: 20px;
      direction: rtl;
      // background-color: red;
      font-weight: bold;
    }
    .product-description {
      margin: 5px 20px 5px 0;
      line-height: 1.4em;
      direction: rtl;
      font-size: 13px;
    }
  }
  .remove-product {
    border: 0;
    padding: 4px 8px;
    background-color: orange;
    color: #fff;
    font-size: 12px;
    border-radius: 3px;
    transition: all 0.4s;
    cursor: pointer;
  }

  .remove-product:hover {
    background-color: red;
  }
}

/* Totals section */
.totals {
  .totals-item {
    float: left;
    // clear: both;
    direction: ltr;
    width: 100%;
    margin-bottom: 10px;
    // background-color: red;

    label {
      float: left;
      clear: both;
      width: 79%;
      text-align: right;
    }

    .totals-value {
      float: right;
      width: 21%;
      text-align: right;
    }
  }
}

.checkout {
  float: right;
  border: 0;
  margin-top: 15px;
  padding: 6px 25px;
  background-color: orange;
  color: #fff;
  font-size: 25px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.4s;
  @media screen and (max-width: 450px) {
    font-size: 15px;
  }
}

.checkout:hover {
  background-color: green;
}

/* Make adjustments for tablet */
@media screen and (max-width: 650px) {
  .shopping-cart {
    margin: 0;
    padding-top: 20px;
    border-top: 1px solid $color-border;
  }

  .column-labels {
    display: none;
  }

  .product-image {
    float: right;
    width: auto;
    img {
      margin: 0 0 10px 40px;
    }
  }

  .product-details {
    float: none;
    margin-bottom: 10px;
    width: auto;
  }

  .product-price {
    clear: both;
    width: 70px;
  }

  .product-quantity {
    // width: 100px;
    .counter-counter {
      margin-left: 7px;
      margin-top: 15px;
       
    }
  }

  .product-removal {
    width: auto;
    float: left;
    margin-right: 30px;
  }

  .product-line-price {
    float: left;
    width: 70px;
  }
}

/* Make more adjustments for phone */
@media screen and (max-width: 350px) {
  .product-removal {
    float: left;
  }

  .product-line-price {
    float: left;
    clear: right;
    width: auto;
    margin-top: 10px;
  }

  .totals {
    .totals-item {
      label {
        width: 20%;
      }

      .totals-value {
        width: 40%;
      }
    }
  }
}
</style>