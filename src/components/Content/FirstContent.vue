<template>
  <div v-if="GetInformation[0]">
    <div class="u-center">
      <h2 class="header-title">{{GetInformation[0].name}}</h2>
    </div>
    <main class="FirstContent">
      <div class="left">
        <div class="site-info">
          <h3 class="heading-teritary">{{GetInformation[0].title_1}}</h3>
          <p class="paragraph">
           {{GetInformation[0].body_1}}
          </p>
          <h3 class="heading-teritary">{{GetInformation[0].title_2}}</h3>
          <p class="paragraph">
           {{GetInformation[0].body_2}}
          </p>
          <router-link to="/aboutus" class="btn-text"
            >درباره ما &larr;</router-link
          >
        </div>
      </div>
      <div class="right">
        <div class="img-box" v-if="getImages[0]">
          <img
            class="image img1"
            :src="getImages[0].product_img_1"
            alt=""
          />
          <img
            class="image img2"
            :src="getImages[0].product_img_3"
            alt=""
          />
          <img
            class="image img3"
            :src="getImages[0].product_img_2"
            alt=""
          />
        </div>
      </div>
    </main>

    <second-content></second-content>
  </div>
</template>


<script>
import SecondContent from "./SecoundContent.vue";
export default {
  components: { SecondContent },
  data() {
    return {};
  },
  
  created() {
    this.$store.dispatch("GetImagesFromServer");
  },
  computed: {
    getImages() {
      return this.$store.getters.GetImg;
    },
      GetInformation() {
      return this.$store.getters.GetSiteInformation;
    },
  },
};
</script>


<style lang="scss" scoped>
.heading-teritary {
  color: orangered;
  font-size: 22px;
}
.paragraph {
  margin-top: 10px;
  margin-bottom: 2rem;
}
.u-center {
  margin: 40px 0 50px 0;
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
h2:before,
h2:after {
  background-color: #000;
  content: "";
  display: inline-block;
  height: 1px;
  position: relative;
  vertical-align: middle;
  width: 14%;
}

h2:before {
  right: 0.5em;
  margin-left: -50%;
}

h2:after {
  left: 0.5em;
  margin-right: -50%;
}
.FirstContent {
  // margin-bottom: 4rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.right {
  width: 550px;
  margin-top: -50px;
  margin-bottom: 30rem;
  @media screen and (max-width: 1260px) {
    margin-top: -180px;
  }
  @media screen and (max-width: 700px) {
    margin-right: 30%;
    margin-top: -160px;
  }
  @media screen and (max-width: 400px) {
    margin-top: -120px;
  }
}
.left {
  width: 700px;
  height: 400px;
  margin-right: 10px;
}
img {
  width: 250px;
  height: 150px;
  position: absolute;
  outline-offset: 10px;
  box-shadow: 0.5rem 1rem 1rem rgba(rgb(77, 75, 75), 0.7);

  &:hover {
    transform: scale(1.05) translateY(-0.5rem);
    box-shadow: 0.5rem 1rem 1rem rgba(rgb(77, 75, 75), 0.7);
    z-index: 50;
  }
  &:hover &.image:not(:hover) {
    transform: scale(0.95);
  }
}

.img3 {

  margin-left: 100px;
  margin-top: 85px;
  width: 300px;
  z-index: 20;
  height: 240px;
  transition: all 0.3s;
  &:hover {
    outline: 5px solid rgb(173, 4, 173);
  }
  @media screen and (max-width: 700px) {
    width: 45%;
    margin-left: 28%;
  }
}
.img2 {
  margin-left: 20px;
  z-index: 10;
  margin-top: 75px;
  width: 280px;
  height: 300px;
  transition: all 0.3s;
  &:hover {
    outline: 5px solid red;
  }
  @media screen and (max-width: 700px) {
    width: 45%;
    margin-left: 13%;
  }
}
.img1 {
  margin-left: 200px;
  margin-top: 50px;
  z-index: 5;
  width: 330px;
  height: 300px;
  transition: all 0.3s;

  &:hover {
    outline: 5px solid yellow;
  }
  @media screen and (max-width: 700px) {
    width: 50%;
    margin-left: 40%;
  }
}
.site-info {
  margin-top: 10px;
  direction: rtl;
  margin-right: 5px;
}
.btn-text {
  text-decoration: none;
  color: white;
  background-color: orange;
  padding: 5px;
  border-radius: 5px;
}

</style>

