<template>
  <div>
    <div class="singleproduct">
      <div class="right">
        <img
          v-for="(pic, I) in SingleProduct.picture"
          :key="I"
          :src="pic.picture"
          class="product-img"
          alt=""
        />
        <h1 class="product-cost-cost" v-if="SingleProduct.product_cost">
          {{ SingleProduct.product_cost[select].cost }}
          <span>تومان</span>
        </h1>
        <a
          @click="
            AddToOrder(SingleProduct.id, SingleProduct.product_cost[select].id)
          "
          class="addbasket"
        >
          <h3 class="add-to-basket">
            افزودن به سبد خرید<font-awesome-icon
              class="fa"
              icon="shopping-cart"
            />
          </h3>
        </a>
      </div>
      <div class="left">
        <div class="product-info">
          <h2 class="product-name">{{ SingleProduct.name }}</h2>
          <div class="product-explain">
            <h4>توضیح محصول :</h4>
            <p class="product-paragraph">
              {{ SingleProduct.description }}
            </p>
          </div>
          <div class="pack-type">
            <h3 class="title-pack">نوع بسته بندی را انتخاب کنید</h3>
            <img
              @click="selectenvelope"
              class="pack-logo"
              src="../../../public/img/envelope.png"
              alt=""
            />
            <img
              class="pack-logo"
              @click="selectglass"
              src="../../../public/img/jar.png"
              alt=""
            />
          </div>

          <div v-if="packet" class="pack-weight">
            <select v-model="select" name="format" class="format">
              <option selected disabled>حجم بسته پاکتی</option>
              <option
                v-for="(cost, index) in SingleProduct.product_cost"
                :key="index"
                :value="index"
                v-show="SingleProduct.product_cost[index].pack.parent == 1"
              >
                {{ cost.pack.weight }} گرم
              </option>
            </select>
          </div>
          <font-awesome-icon v-if="packet" class="icon2 packet" icon="check" />

          <div v-if="glass" class="pack-weight">
            <select v-model="select" name="format" class="format">
              <option selected disabled>حجم بسته شیشه ای</option>
              <option
                v-for="(cost, index) in SingleProduct.product_cost"
                :key="cost.id"
                :value="index"
                v-show="SingleProduct.product_cost[index].pack.parent == 4"
              >
                {{ cost.pack.weight }} گرم
              </option>
            </select>
          </div>

          <font-awesome-icon v-if="glass" class="icon2 glass" icon="check" />

          <footer class="count-box">
            <h5>تعداد</h5>
            <button @click="plus" class="count-icon plus">+</button>

            <div class="input-count">{{ count }}</div>
            <button
              :disabled="count === 1"
              @click="minus"
              class="count-icon minus"
            >
              -
            </button>
          </footer>
        </div>
      </div>
    </div>

    <!-- **********
    *************************
    this isstart of  reponsive page of single prodict pages
    ******************************
    ********************************** -->
    <div class="class-box">
      <div class="top">
        <div class="product-name2">
          <h2>{{ SingleProduct.name }}</h2>
        </div>
        <img
          v-for="(pic, I) in SingleProduct.picture"
          :key="I"
          :src="pic.picture"
          class="product-img"
          alt=""
        />
        <div class="cost-box-product">
          <h1 class="cost-of-product" v-if="SingleProduct.product_cost">
            {{ SingleProduct.product_cost[select].cost }}
            <span>تومان</span>
          </h1>
        </div>
        <a
          @click="
            AddToOrder(SingleProduct.id, SingleProduct.product_cost[select].id)
          "
          class="addbasket"
        >
          <h3 class="add-to-basket2">
            <font-awesome-icon class="fa" icon="shopping-cart" />افزودن به سبد
            خرید
          </h3>
        </a>
        <div class="pack-type2">
          <h3 class="title-pack">نوع بسته بندی را انتخاب کنید</h3>
          <img
            @click="selectenvelope"
            class="pack-logo2"
            src="../../../public/img/envelope.png"
            alt=""
          />
          <font-awesome-icon v-if="packet" class="icon2 packet2" icon="check" />

          <img
            class="pack-logo2"
            @click="selectglass"
            src="../../../public/img/jar.png"
            alt=""
          />
          <font-awesome-icon v-if="glass" class="icon2 glass2" icon="check" />
        </div>
        <div v-if="packet" class="pack-weight2">
          <select v-model="select" name="format" class="format2">
            <option selected disabled>حجم بسته پاکتی</option>
            <option
              v-for="(cost, index) in SingleProduct.product_cost"
              :key="index"
              :value="index"
              v-show="SingleProduct.product_cost[index].pack.parent == 1"
            >
              {{ cost.pack.weight }} گرم
            </option>
          </select>
        </div>

        <div v-if="glass" class="pack-weight2">
          <select v-model="select" name="format" class="format2">
            <option selected disabled>حجم بسته شیشه ای</option>
            <option
              v-for="(cost, index) in SingleProduct.product_cost"
              :key="cost.id"
              :value="index"
              v-show="SingleProduct.product_cost[index].pack.parent == 4"
            >
              {{ cost.pack.weight }} گرم
            </option>
          </select>
        </div>
        <footer class="count-box2">
          <button @click="plus" class="count-icon plus">+</button>

          <div class="input-count2">{{ count }}</div>
          <button
            :disabled="count === 1"
            @click="minus"
            class="count-icon minus"
          >
            -
          </button>
        </footer>

        <h4 class="explain2">توضیح محصول :</h4>
        <p class="product-paragraph2">
          {{ SingleProduct.description }}
        </p>
      </div>
    </div>

    <!--*****************************
    *******************************
     this is end of reponsive page of single prodict pages 
     ***************************
     ********************************-->

    <div class="similar">
      <div class="u-center">
        <h2 class="header-title">محصولات مشابه</h2>
      </div>
      <carousel
        :per-page-custom="[
          [400, 2],
          [850, 3],
          [950, 4],
          [1200, 5],
        ]"
        paginationColor="#ffA400"
        paginationActiveColor="#ff4500"
        :mouse-drag="true"
        :navigation-enabled="true"
        navigation-next-label="&#10095;"
        navigation-prev-label="&#10094;"
        navigation-click-target-size="15"
      >
        <slide v-for="(similar, Index) in SimilarProduct" :key="Index">
          <div class="box">
            <div class="product-informartion">
              <img class="img-box" :src="similar.picture[0].picture" alt="" />
              <div class="products-cost">
                <h3 class="product-name">{{ similar.name }}</h3>
                <h4 class="product-cost">
                  <span>{{ similar.show_cost.toLocaleString() }}</span
                  >تومان
                </h4>
                <router-link
                  :to="{
                    name: 'singleproduct',
                    params: { slug: similar.slug },
                  }"
                  class="product-btn"
                  >مشاهده محصول</router-link
                >
              </div>
            </div>
          </div>
        </slide>
      </carousel>
    </div>
  </div>
</template>


<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  data() {
    return {
      glass: true,
      packet: false,
      select: 2,
      count: 1,
      id: 5,
      pack: "",
      array: 0,
    };
  },
  components: {
    Carousel,
    Slide,
  },
  computed: {
    SingleProduct() {
      return this.$store.getters.GetSingleProduct;
    },
    SimilarProduct() {
      return this.$store.getters.GetSimilarProduct;
    },
  },
  watch: {
    $route() {
      this.$store.dispatch("GetSinlgeProductsFromServer", {
        slug: this.$route.params.slug,
      });
    },
  },
  created() {
    this.$store.dispatch("ShowOrderRows");

    this.$store.dispatch("GetSinlgeProductsFromServer", {
      slug: this.$route.params.slug,
    });
    this.$store.dispatch("GetSimilarProductsFromServer", {
      slug: this.$route.params.slug,
    });
  },
  methods: {
    selectenvelope() {
      this.glass = false;
      this.packet = true;
      this.select = 0;
    },
    selectglass() {
      this.glass = true;
      this.packet = false;
      this.select = 2;
    },
    plus() {
      this.count += 1;
    },
    minus() {
      this.count -= 1;
    },
    AddToOrder(resId, packID) {
      this.pack = packID;
      const orderDetail = {
        product: resId,
        amount: this.count,
        pack: packID,
      };
      this.$store.dispatch("AddProductToOrder", orderDetail);
    },
  },
};
</script>


<style lang="scss" scoped>
.product-name2 {
  text-align: center;
  margin-bottom: 0.4rem;
  font-size: 20px;
}
.input-count2 {
  width: 20%;
  padding-top: 5px;
  margin: 5px;
  height: 30px;
  border: 1px solid black;
  // display: inline-block;
  border-radius: 10px;
  text-indent: 10px;
  margin-top: 0px;
}
.count-box2 {
  display: flex;
  justify-content: center;
  // margin: 0 auto;
  // width: 100%;
}
.count-box2 h5 {
  text-align: center;
}
.pack-weight2 {
  // background-color: red;
  width: 100%;
  margin: 1rem auto;
}
.format2 {
  width: 50%;
  height: 40px;
  text-indent: 10px;
  direction: rtl;
  margin-left: 25%;
  background-color: white;
  outline: none;
  border-radius: 10px;
  border: 1px solid black;
  cursor: pointer;
  font-family: "BYekan";
}
.pack-logo2 {
  width: 50px;
  margin-right: 30px;
  cursor: pointer;
}
.add-to-basket2 {
  text-align: center;
  margin-top: 10px;
  background-color: orangered;
  padding: 5px 0;
  border-radius: 10px;
  color: white;
  transition: all 0.4s;

  &:hover {
    background-color: orange;
  }
}
.pack-type2 {
  width: 90%;
  margin-left: 20px;
  text-align: center;
}
.pack-type2 img {
  margin-left: 30px;
}
.glass2 {
  margin-left: -45px;
}
.packet2 {
  margin-left: -45px;
}
.explain2 {
  margin-top: 1rem;
  direction: rtl;
}
.product-paragraph2 {
  margin-top: 10px;
  text-align: end;
}
.class-box {
  width: 50%;
  margin: 2rem auto;
  height: auto;
  padding: 10px;
  display: none;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  @media screen and (max-width: 500px) {
    width: 70%;
  }
  @media screen and (max-width: 922px) {
    display: flex;
  }
}
.product-img2 {
  width: 100%;
  border-radius: 10px;
}

.cost-of-product {
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px 0px;
}
.cost-box-product {
  text-align: center;
}

.product-img {
  width: 100%;
  height: 300px;
  border-radius: 10px;
}
.singleproduct {
  width: 80%;
  height: 410px;
  border-radius: 10px;
  margin: 2rem auto;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  padding: 5px;
  direction: rtl;
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 922px) {
    display: none;
  }
}
.icon2 {
  font-size: 30px;
  position: absolute;
  color: green;
}
.packet {
  margin-right: 5px;
  margin-top: -70px;
}
.glass {
  margin-right: 150px;
  margin-top: -70px;
}
.right {
  width: 30%;
  height: 400px;
  @media screen and (max-width: 1096px) {
    width: 30%;
  }
}
.product-cost-cost {
  text-align: center;
  border: 1px solid black;
  border-radius: 10px;
}
.add-to-basket {
  text-align: center;
  margin-top: 10px;
  background-color: orangered;
  padding: 1px 0;
  border-radius: 10px;
  color: white;
  transition: all 0.4s;

  &:hover {
    background-color: orange;
  }
}
.product-explain {
  width: 400px;
}
.addbasket {
  text-decoration: none;
  cursor: pointer;
}
.left {
  margin-right: 70px;
  width: 50%;
  @media screen and (max-width: 1096px) {
    width: 60%;
  }
}
.pack-logo {
  width: 50px;
  margin-right: 30px;
  cursor: pointer;
}
.pack-weight {
  display: inline;
  position: absolute;
  margin-right: 250px;
  margin-top: -80px;
}
.title-pack {
  margin-top: 10px;
  margin-bottom: 10px;
}
.format {
  width: 150px;
  height: 40px;
  text-indent: 10px;
  border-radius: 10px;
  border: 0.5px solid brown;
  display: block;
  background-image: none;
  background-color: white;
  margin-right: 35px;
  cursor: pointer;
  outline: none;
  font-family: "BYekan";
}

.count-box {
  width: 170px;
  padding: 10px;
  border-radius: 10px;
  margin-right: 280px;
  margin-top: -2.5rem;
  margin-bottom: 0.5rem;
}
.input-count {
  width: 50%;
  border: 1px solid black;
  display: inline-block;
  border-radius: 10px;
  text-indent: 10px;
}
.count-icon {
  padding: 0px;
  cursor: pointer;
  border-radius: 7px;
  color: white;
  padding: 2px 5px 4px 5px;
}
.plus {
  background-color: orangered;
  border: 1px solid orangered;
  margin-left: 5px;
  width: 30px;
  height: 30px;
  clip-path: circle(50% at 50% 50%);
}
.minus {
  background-color: orange;
  border: 1px solid orange;
  margin-right: 5px;
  width: 30px;
  height: 30px;
  clip-path: circle(50% at 50% 50%);
}
.box {
  height: 420px;
  border: 1px solid black;
  margin: 0 5px;
  border-radius: 10px;
  background-color: whitesmoke;
}
.swiper {
  width: 80%;
  margin: 0 auto;
}
.img-box {
  width: 100%;
  height: 240px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  border-bottom: 1px solid black;
  margin-bottom: 20px;
}
.products-cost {
  text-align: center;
  direction: rtl;
}
.product-name {
  font-size: 18px;
  margin-bottom: 2px;
}
.product-cost {
  font-size: 14px;
  margin-bottom: 15px;
}
.product-btn {
  text-decoration: none;
  color: white;
  background-color: orangered;
  padding: 5px 10px;
  font-size: 15px;
  border-radius: 10px;
  border: 1px solid orangered;
  transition: all 0.4s;
  &:hover {
    background-color: white;
    color: orangered;
    border: 1px solid orangered;
  }
}
.similar {
  width: 80%;
  margin: 0 auto;
  margin-bottom: 2rem;
}
.u-center {
  margin: 70px 0 50px 0;
  text-align: center;
}
.header-title {
  font-size: 1.5rem;
  font-weight: 700;
  background-image: linear-gradient(to right, orange, orangered);
  -webkit-background-clip: text;
  display: inline-block;
  color: transparent;
  transition: all 0.3s;
}
</style>