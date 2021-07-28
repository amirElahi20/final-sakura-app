<template>
  <div>
    <header
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
          $route.name == 'FrequentlyAskedQuestions',
      }"
    >
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
.layout {
  display: none;
}
</style>

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