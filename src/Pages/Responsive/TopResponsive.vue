<template>
  <div>
    <div class="res-header">
      <div class="container">
        <ul>
          <li v-if="!IsAuthenticated">
            <router-link to="/login"
              ><font-awesome-icon
                class="icon icon1"
                icon="user"
              ></font-awesome-icon
              >ورود</router-link
            >
          </li>
          <li v-else>
            <router-link to="/UserDashboard/Account"
              ><font-awesome-icon
                class="icon icon1"
                icon="user"
              ></font-awesome-icon
              >{{ Username }}</router-link
            >
          </li>
          <li>
            <router-link to="/search"
              ><font-awesome-icon
                class="icon icon2"
                icon="search"
              ></font-awesome-icon
              >جست و جو</router-link
            >
          </li>
          <li v-if="IsAuthenticated">
            <router-link to="/shopcart"
              ><font-awesome-icon
                class="icon icon3"
                icon="shopping-cart"
              ></font-awesome-icon>
              <span class="badge">{{ getCountOrder }}</span> سبد
              خرید</router-link
            >
          </li>
          <li v-else class="shopping">
            <router-link to="/shopcart">
              <font-awesome-icon
                class="icon icon3"
                icon="shopping-cart"
              ></font-awesome-icon>
              <span class="badge">0</span> سبد خرید
            </router-link>
          </li>
          <li>
            <a @click="showSubMenu"
              ><font-awesome-icon
                class="icon icon4"
                icon="bars"
              ></font-awesome-icon
              >دسته بندی</a
            >
          </li>
          <li>
            <router-link to="/"
              ><font-awesome-icon
                class="icon icon5"
                icon="home"
              ></font-awesome-icon
              >خانه</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside";

export default {
  data() {
    return {
      isActive: false,
    };
  },
  directives: {
    ClickOutside,
  },
  methods: {
    showSubMenu() {
      this.isActive = !this.isActive;
      this.$emit("show", true);
    },
  },
  computed: {
    IsAuthenticated() {
      return this.$store.getters.IsAuthenticated;
    },
    Username() {
      return this.$store.getters.GetUsername;
    },
    getCountOrder() {
      return this.$store.getters.getCountOrder;
    },
  },
};
</script>

<style lang="scss" scoped>
.res-header {
  margin: 0 auto;
  display: none;

  @media screen and (max-width: 1100px) {
    display: block;
  }
}
.badge {
  position: absolute;
  background-color: orangered;
  padding: 1px 0 0 3px;
  width: 15px;
  height: 15px;
  border-radius: 100px;
  font-size: 15px;
  margin-top: -30px;
  margin-left: 30px;
}
.icon {
  display: block;
  margin-top: 15px;
  margin-bottom: 5px;
}
.icon1 {
  margin-left: 6px;
}
.icon2 {
  margin-left: 20px;
}
.icon3 {
  margin-left: 20px;
}
.icon4 {
  margin-left: 25px;
}
.icon5 {
  margin-left: 5px;
}
li {
  cursor: pointer;
}
.container {
  width: 100%;
  background-color: rgb(255, 166, 0);
  bottom: 0;
  position: fixed;
  z-index: 999;
  height: 70px;
}
ul {
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 5px;
  list-style: none;
}

a {
  color: white;
  transition: all 0.3s;
  font-size: 15px;
  text-decoration: none;
}
a:hover {
  color: black;
}
a:active {
  color: black;
}
</style>