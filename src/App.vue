<template>
  <div>
    <the-header></the-header>
    <transition name="fade">
      <router-view> </router-view>
    </transition>
  </div>
</template>

<script>
import TheHeader from "./Pages/Shared/TheHeader.vue";
export default {
  components: {
    TheHeader,
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: "BYekan";
  src: url("../public/fonts/BYekan-webfont.eot") format("eot"),
    url("../public/fonts/BYekan-webfont.woff") format("woff"),
    url("../public/fonts/BYekan-webfont.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  // padding: 5px;
  font-family: "BYekan";
}
.english {
  font-family: sans-serif;
}
.container {
  width: 1200px;
}
input {
  font-family: "BYekan";
  outline: none;
}
button {
  font-family: "BYekan";
}

.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.4s;
}

.fade-enter-to {
  opacity: 1;
}

.fade-leave-from {
  opacity: 1;
}

.fade-leave-active {
  transition: all 0.4s;
}

.fade-leave-to {
  opacity: 0;
}
</style>
