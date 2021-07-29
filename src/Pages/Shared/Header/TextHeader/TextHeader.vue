<template>
  <div>
    <div class="slider">
      <carousel v-if="GetSlider[0]"
        :per-page="1"
        :mouse-drag="true"
        paginationColor="#ffA400"
        :navigation-enabled="true"
        paginationActiveColor="#ff4500"
        navigation-next-label="&#10095;"
        navigation-prev-label="&#10094;"
        :navigation-click-target-size="10"
        :autoplay="true"
        :loop="true"
        :autoplayTimeout="7000"
      >
        <slide class="slide">
          <img :src="GetSlider[0].main_img_1" alt="1" />
        </slide>
         <slide class="slide">
          <img :src="GetSlider[0].main_img_2" alt="2" />
        </slide>
      </carousel>
    </div>
  </div>
</template>



<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  components: {
    Carousel,
    Slide,
  },
  created(){
    this.$store.dispatch("GetImagesFromServer");
  },
  computed:{
    GetSlider(){
     return this.$store.getters.GetImg
    }
  }
};
</script>

<style lang="scss" scoped>
.slider {
  width: 80%;
  margin: 50px auto;
}
h1 {
  color: black;
}
img {
  width: 100%;
  height: 320px;
  border-radius: 10px;
   @media screen and (max-width: 670px) {
    height: 150px;
  }
}
.slide {
  display: flex;
  justify-content: center;
}
</style>