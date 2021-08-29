<template>
  <div>
    <div class="total">
      <div class="left">
        <div class="u-center-text">
          <h2 class="heading-secondary" v-if="SearchProduct[0]">{{SearchProduct[0].name}}</h2>
        </div>
        <div class="row" v-if="SearchProduct[0]">
          <div class="box" v-for="product in SearchProduct[0].sub_group" :key="product.id">

            <router-link v-if="product.products[0]"
              :to="{ name: 'singleproduct', params: { slug: product.products[0].slug } }"
              class="product-info"
            >
              <img
                :class="{ blurimg: !product.products[0].available }"
                class="image"                
                :src="`https://sdriedf.ir` + product.products[0].picture[0].picture"
                alt=""
              />
              <p class="paragraph">{{ product.products[0].name }}</p>
              <h5 class="cost">
                {{ (product.products[0].show_cost).toLocaleString() }} تومان
              </h5>
              <router-link
                :to="{ name: 'singleproduct', params: { slug: product.products[0].slug } }"
                class="btn"
                >مشاهده محصول</router-link
              >
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      searchName: this.$route.params.slug,
      title : this.$route.params.slug
    };
  },
   metaInfo() {
    return {
      titleTemplate: `فروشگاه اینترنتی - ${this.title}`,
      htmlAttrs: {
        lang: "utf-8",
        amp: true,
      },
    };
  },
  created() {
    this.$store.dispatch("GetGroupProductsFromServer", {
      slug: this.$route.params.slug,
    });
  },
  computed: {
    SearchProduct() {
      return this.$store.getters.GetGroupProduct;
    },
  },
};
</script>



<style lang="scss" scoped>
.search-box {
  display: flex;
  border: 1px solid black;
  width: 60%;
  margin: 0 auto;
  z-index: 99999;
  height: 60px;
  text-align: start;
  justify-content: space-between;
  background-color: white;
}
.nothing {
  text-align: center;
  background-color: orange;
  padding: 10px;
  width: 20%;
  margin: 2rem auto;
  color: white;
}
.search-input {
  border: none;
  width: 100%;
  height: 58px;
  font-size: 24px;
  @media screen and (max-width: 500px) {
    font-size: 15px;
  }
}
.search {
  cursor: pointer;
}
.close-search {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  font-size: 20px;
  color: red;
  cursor: pointer;
}
.search-btn {
  width: 80px;
  padding: 5px;
  text-align: center;
  background-color: orange;
  border: none;
  text-decoration: none;
  cursor: pointer;
  color: white;
  font-size: 15px;
  @media screen and (max-width: 500px) {
    width: 40px;
    font-size: 12px;
  }
}
.left-searchbtn {
  display: flex;
  justify-content: center;
  margin-left: 5px;
  align-items: center;
}
.result {
  display: flex;
  // background-color: red;
  width: 90%;
  border: 1px solid black;
  margin: 0 auto;
  justify-content: space-around;
  align-items: center;
  direction: rtl;
  height: 200px;
}
.right-search {
  width: 30%;
}
.left-search {
  width: 65%;
}
$color-primary-dark: orange;
$color-primary-light: orangered;
.heading-secondary {
  font-size: 2rem;
  margin-bottom: 1rem;
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

.u-center-text {
  text-align: center;
}

.product-info {
  color: black;
  text-decoration: none;
}

.available {
  font-size: 12px;
  direction: rtl;
  color: red;
  background-color: white;
  padding: 2px;
  border-radius: 5px;
  position: absolute;
  font-weight: bold;
  margin-right: 50px;
  margin-top: -230px;
  animation: shake-animation 4.72s ease infinite;
  transform-origin: 50% 50%;
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

.total {
  height: auto;
  display: flex;
  direction: rtl;
  padding: 2rem 0 5rem 0;
}

.left {
  width: 100%;
  margin: 0 auto;
}

.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.box {
  background-color: white;
  text-align: center;
  padding: 15px;
  margin-left: 20px;
  margin-top: 20px;
  width: 250px;
  transition: all 0.5s;
  box-shadow: 0.5rem 1rem 1rem rgba(rgb(163, 158, 158), 0.5);
  @media screen and (max-width: 740px) {
    width: 190px;
  }
  @media screen and (max-width: 500px) {
    width: 170px;
  }
  @media screen and (max-width: 380px) {
    width: 100%;
  }
}

.image {
  width: 100%;
  height: 190px;
  transition: all 1s;
  &:hover {
    transform: scale(1.1);
    opacity: 1s;
  }
}

.blurimg {
  filter: blur(7px);
}

.paragraph {
  display: block;
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 10px;
}

.btn {
  display: block;
  text-align: center;
  background-color: orange;
  text-decoration: none;
  padding: 10px 5px;
  font-size: 16px;
  margin-top: 10px;
  cursor: pointer;
  color: white;
  border: 1px solid orange;
  transition: all 0.5s;
}
</style>