<template>
  <div>
    <header
      class="header"
      :class="{
        layout:
          $route.name == 'login' ||
          $route.name == 'register' ||
          $route.name == 'forgetpass' ||
          $route.name == 'Confirm' ||
          $route.name == 'shopcart' ||
          $route.name == 'ContactUs' ||
          $route.name == 'UserDashboard' ||
          $route.name == 'useraccount' ||
          $route.name == 'useraccountedit' ||
          $route.name == 'useraccountpass' ||
          $route.name == 'useraccountpurches' ||
          $route.name == 'useraccounttickets' ||
          $route.name == 'useraccountorders' ||
          $route.name == 'FrequentlyAskedQuestions'
      }"
    >
      <img src="../../../public/img/newheader.jpg" alt="" />
      <top-nav></top-nav>
      <the-menu></the-menu>
      <text-header></text-header>
    </header>
  </div>
</template>

<script>
import TopNav from "./Header/MainMenu/TopNav.vue";
import TheMenu from "./Header/MainMenu/TheMenu.vue";
import TextHeader from "./Header/TextHeader/TextHeader.vue";
export default {
  components: {
    TopNav,
    TheMenu,
    TextHeader,
  },
};
</script>


<style scoped lang="scss">
.header {
  width: 100%;
  height: 75vh;
  background-image: linear-gradient(315deg, #000000 0%, #0000003a 74%);
  position: relative;
  @media screen and (max-width: 900px) {
    height: 50vh;
  }
}
img {
  position: absolute;
  width: 100%;
  height: 75vh;
  z-index: -1;
  @media screen and (max-width: 900px) {
    height: 50vh;
  }
}
.layout {
  display: none;
}
</style>