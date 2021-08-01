<template>
  <div>
    <div class="shop-box">
      <div class="right">
        <div class="product-info">
          <h1 class="product-name">موز</h1>
          <div class="cost-box">
            <h2 style="direction: rtl">{{ cost.toLocaleString() }} تومان</h2>
          </div>
          <div style="direction: rtl" class="count-box">
            <h2>تعداد:</h2>
            <input class="count" type="number" min="1" value="1" />
          </div>
          <div class="pack">
            <h3 style="direction: rtl">نوع دسته بندی :</h3>
            <div
              @click="activeJar"
              class="combine"
              style="display: inline-block"
            >
              <img
                class="pack-icon pack-jar"
                src="../../../public/img/jar.png"
                alt=""
              />
              <font-awesome-icon
                v-if="jar"
                class="check-icon check-jar"
                icon="check"
              />
            </div>
            <div
              @click="activeEnvelope"
              class="combine"
              style="display: inline-block"
            >
              <img
                class="pack-icon pack-envelope"
                src="../../../public/img/envelope.png"
                alt=""
              />
              <font-awesome-icon
                v-if="envelope"
                class="check-icon check-envelope"
                icon="check"
              />
            </div>
          </div>
          <div v-if="jar" class="weight">
            <select class="select" name="" id="">
              <option selected disabled value="">بسته بندی شیشه ای</option>
              <option value="">150گرمی</option>
              <option value="">250گرمی</option>
            </select>
          </div>
          <div v-if="envelope" class="weight">
            <select class="select" name="" id="">
              <option selected disabled value="">بسته بندی پاکتی</option>
              <option value="">150گرمی</option>
              <option value="">250گرمی</option>
            </select>
          </div>
          <div style="direction: rtl" class="addtobasket">
            <a class="basket"
              >افزودن به سبد خرید <font-awesome-icon icon="shopping-cart"
            /></a>
          </div>
        </div>
      </div>
      <div class="left">
        <carousel
          class="carousel"
          :per-page="1"
          :mouse-drag="true"
          paginationColor="#ffA400"
          :navigation-enabled="false"
          :pagination-enabled="false"
          :center-mode="true"
          paginationActiveColor="#ff4500"
          :autoplay="true"
          :loop="true"
          :autoplayTimeout="4000"
        >
          <slide class="slide">
            <img
              class="img-carousel"
              src="../../../public/img/neha-deshmukh-GoKXJaQoLQs-unsplash.jpg"
              alt=""
            />
          </slide>
          <slide class="slide">
            <img
              class="img-carousel"
              src="../../../public/img/oriol-portell-bL6VgDDsS8M-unsplash.jpg"
              alt=""
            />
          </slide>
        </carousel>
      </div>
    </div>
    <div class="product-explanation"></div>
    <div class="product-properties"></div>
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
    return {
      cost: 50000,
      jar: false,
      envelope: true,
    };
  },
  methods: {
    activeJar() {
      (this.jar = true), (this.envelope = false);
    },
    activeEnvelope() {
      (this.envelope = true), (this.jar = false);
    },
  },
};
</script>


<style lang="scss" scoped>
.shop-box {
  width: 80%;
  height: 400px;
  margin: 6rem auto;
  // margin-top: 10rem;
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: center;
  @media screen and (max-width: 1065px) {
    width: 90%;
  }
  @media screen and (max-width: 950px) {
    width: 95%;
  }
  @media screen and (max-width: 686px) {
    margin-top: 25rem;
  }

  //   @media screen and (max-width: 800px){
  //     display: flex;
  //     align-items: center;
  //     justify-content: center;
  //     flex-direction: column;
  // }
  // direction: rtl;
}
.left {
  width: 400px;
  height: 470px;
  @media screen and (max-width: 895px) {
    width: 300px;
  }
  @media screen and (max-width: 686px) {
    width: 75%;
    height: 300px;
    margin-top: 25rem;
  }
}
.right {
  background-color: whitesmoke;
  border: 1px solid black;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  width: 450px;
  height: 470px;
  padding-right: 15px;
  @media screen and (max-width: 895px) {
    width: 350px;
    padding-right: 0px;
  }
  @media screen and (max-width: 686px) {
    width: 75%;
    height: 450px;
  }
}
.product-name {
  margin-top: 15px;
}
.carousel {
  height: 100%;
}
.img-carousel {
  width: 100%;
  height: 470px;
  @media screen and (max-width: 380px) {
    // width: 75%;
    // height: 250px;
  }
}
.product-info {
  text-align: center;
}
.cost-box {
  background-color: white;
  border-radius: 5px;
  width: 250px;
  display: inline-block;
  padding: 10px;
  border: 1px solid black;
  @media screen and (max-width: 385px) {
    width: 200px;
  }
}
input {
  text-indent: 10px;
}
option {
  font-family: "BYekan";
}
.count {
  background-color: white;
  display: inline-block;
  padding: 10px;
  width: 150px;
  border-radius: 10px;
  font-size: 20px;
}
.select {
  padding: 10px;
  font-family: "BYekan";
  direction: rtl;
  border-radius: 10px;
  cursor: pointer;
  margin: 1rem 0 2rem 0;
}

.pack-icon {
  width: 70px;
}
.pack {
  margin-top: 10px;
}
.basket {
  background-color: orange;
  color: white;
  cursor: pointer;
  padding: 10px;
  border-radius: 10px;
  transition: all 0.4s;
}
.basket:hover {
  background-color: orangered;
}
.check-icon {
  font-size: 30px;
  color: green;
  position: absolute;
}
.check-envelope {
  // margin-right: 25px;
  margin-left: -48px;
  margin-top: 20px;
}
.check-jar {
  // margin-right: 25px;
  margin-left: -48px;
  margin-top: 20px;
}
.combine {
  cursor: pointer;
}
</style>