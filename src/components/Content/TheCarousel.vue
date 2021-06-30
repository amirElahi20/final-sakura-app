<template>
  <div class="swiper">
    <div class="u-center">
      <h2 class="header-title">میوه خشک</h2>
    </div>
    <carousel
      :per-page-custom="[
        [400, 2],
        [850, 3],
        [950, 4],
        [1200, 5],
      ]"
      :navigate-to="someLocalProperty"
      paginationColor="#ffA400"
      paginationActiveColor="#ff4500"
      :mouse-drag="true"
      :navigation-enabled="true"
    >
      <slide v-for="item in 10" :key="item">
        <div class="box">
          <div class="product-informartion">
            <img
              class="img-box"
              src="../.../../../../public/img/mockup-graphics-enNffryKuQI-unsplash.jpg"
              alt=""
            />
            <div class="products-cost">
              <h3 class="product-name">زردآلو خشک شده</h3>
              <h4 class="product-cost"><span>40000</span>تومان</h4>
              <a class="product-btn" href="#">مشاهده محصول</a>
            </div>
          </div>
        </div>
      </slide>
      <slide>
          <router- class="show" to="/products">
        <div class="box">
            <div class="show-more">
              <font-awesome-icon class="fa" icon="chevron-circle-right" />
              <h3>مشاهده همه محصولات</h3>
            </div>
        </div>
          </router->
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
};
</script>

<style lang="scss" scoped>
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
}
</style>