<template>
  <div class="swiper">
    <div class="u-center">
      <h2 class="header-title">پرفروش ترین محصولات</h2>
    </div>
    <carousel
      :per-page-custom="[
        [1200, 5],
        [950, 4],
        [850, 3],
        [300, 1.4]
      ]"
      paginationColor="#ffA400"
      paginationActiveColor="#ff4500"
      :mouse-drag="true"
     
    >
      <slide v-for="product in MostSellProducts" :key="product.id">
        <div class="box">
          <div class="product-informartion">
            <img
              :class="{ blurimg: !product.available }"
              class="img-box"
              :src="product.picture[0].picture"
              alt=""
            />
            <div class="products-cost">
              <h3 class="product-name">{{ product.name }}</h3>
              <h4 class="product-cost">
                <span>قیمت از{{ product.show_cost.toLocaleString() }}</span
                >تومان
              </h4>
              <p class="available" v-if="!product.available">
                کالای مورد نظر موجود نیست!
              </p>
              <router-link
                :to="{ name: 'singleproduct', params: { slug: product.slug } }"
                class="product-btn"
                >مشاهده محصول</router-link
              >
            </div>
          </div>
        </div>
      </slide>
      <slide>
        <router-link class="show" to="/products">
          <div class="box">
            <div class="show-more">
              <font-awesome-icon class="fa" icon="chevron-circle-right" />
              <h3>مشاهده همه محصولات</h3>
            </div>
          </div>
        </router-link>
      </slide>
    </carousel>
    <div class="u-center mybtn">
      <div class="btn-btn">
        <a class="total-probtn" href="#">مشاهده همه</a>
      </div>
    </div>
    <svg class="svg" height="1" width="98%">
      <line
        x1="10%"
        y1="0"
        x2="92%"
        y2="0"
        style="stroke: rgb(255, 69, 0); stroke-width: 0.5"
      />
    </svg>
  </div>
</template>



<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {};
  },
  computed: {
    MostSellProducts() {
      return this.$store.getters.GetMostSellProducts;
    },
  },
  created() {
    if (this.MostSellProducts.length == 0) {
      this.$store.dispatch("GetMostSellProductsFromServer");
    }
  },
};
</script>




<style lang="scss" scoped>
.u-center {
  margin: 70px 0 50px 0;
  text-align: center;
}
.available {
  font-size: 12px;
  direction: rtl;
  color: red;
  background-color: white;
  padding: 2px;
  border-radius: 5px;
  font-weight: bold;
  position: absolute;
  margin-right: 50px;
  animation: shake-animation 4.72s ease infinite;
  transform-origin: 50% 50%;
  margin-top: -230px;
}
@keyframes shake-animation {
  0% {
    transform: translate(0, 0);
  }
  1.78571% {
    transform: translate(5px, 0);
  }
  3.57143% {
    transform: translate(0, 0);
  }
  5.35714% {
    transform: translate(5px, 0);
  }
  7.14286% {
    transform: translate(0, 0);
  }
  8.92857% {
    transform: translate(5px, 0);
  }
  10.71429% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(0, 0);
  }
}
.blurimg {
  filter: blur(4px);
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
.box {
  height: 420px;
  // width: 210px;
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
  // @media screen and (max-width: 700px) {
  //   font-size: 15px;
  //  }
}
.product-cost {
  font-size: 14px;
  margin-bottom: 15px;
  @media screen and (max-width: 700px) {
    margin-bottom: 2rem;
    // font-size: 18px;
   }
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
   @media screen and (max-width: 700px) {
     padding: 15px 20px;
   }
}
.total-probtn {
  text-decoration: none;
  color: white;
  background-color: orange;
  padding: 15px 20px;
  border-radius: 10px;
}
.mybtn {
  margin-top: 25px;
}
.btn-btn {
  background-color: green;
  display: inline-block;
  transition: all 0.4s;
  &:hover {
    transform: scale(1.1);
  }
}
.show-more {
  text-align: center;
}
.fa {
  font-size: 50px;
  margin-top: 150px;
  color: orange;
}
.show {
  cursor: pointer;
  text-decoration: none;
  color: orangered;
}
</style>