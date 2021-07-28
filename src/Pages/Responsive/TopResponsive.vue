<template>
  <div>
    <div class="popup" v-show="activeSearch">
      <div class="search-box" v-if="activeSearch">
        <a href="#" @click="hide">
          <font-awesome-icon
            class="close-search"
            icon="times"
          ></font-awesome-icon>
        </a>
        <a href="#" class="search-link">
          <font-awesome-icon
            class="search-icon"
            icon="search"
          ></font-awesome-icon>
        </a>
        <input type="text" placeholder="جست و جو کنید" />
      </div>
    </div>
    <div class="res-header">
      <div class="container">
        <ul>
          <!-- <li v-if="!IsAuthenticated">
            <router-link to="/login"
              ><font-awesome-icon
                class="icon icon1"
                icon="user"
              ></font-awesome-icon
              >ورود</router-link
            >
          </li> -->
          <li v-if="IsAuthenticated">
            <router-link to="/UserDashboard/Account"
              ><font-awesome-icon
                class="icon icon1"
                icon="user"
              ></font-awesome-icon
              >پنل کاربری</router-link
            >
          </li>
          <li>
            <a @click="ShowSearch"
              ><font-awesome-icon
                class="icon icon2"
                icon="search"
              ></font-awesome-icon
              >جست و جو</a
            >
          </li>
      
       
          <li>
            <router-link to="/products">
              <font-awesome-icon
                class="icon icon3"
                icon="box"
              ></font-awesome-icon>
            <span>محصولات</span>
            </router-link>
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
      // isActive: false,
      activeSearch: false,
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
    ShowSearch() {
      this.activeSearch = true;
    },
    hide() {
      this.activeSearch = false;
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
.search-box {
  // background-color: red;
  width: 80%;
  margin: 0 auto;
  // display: flex;
  justify-content: center;
  align-items: center;
  // padding-top: 50px;
  left: 10%;
  top: 10%;
  z-index: 999999;
  position: absolute;
  display: none;
   @media screen and (max-width: 1100px) {
    display: flex;
  }
}
.search-box input {
  width: 100%;
  height: 70px;
  direction: rtl;
  padding-right: 5px;
  border-radius: 5px;
  border: none;
}
.search-icon {
  position: absolute;
  cursor: pointer;
  font-size: 20px;
  color: orangered;
  margin-left: 10px;
}
.search-link {
  margin-top: -20px;
}
.close-search {
  color: red;
  font-size: 35px;
  position: absolute;
  margin-top: -80px;
  margin-left: 95%;
  cursor: pointer;
}
.badge {
  position: absolute;
  background-color: orangered;
  padding: 2px 0 0px 3px;
  // padding: 0 0 10px 3px;
  width: 17px;
  height: 17px;
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
  margin-left: 25px;
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
// .popup {
//   height: 100vh;
//   width: 100%;
//   position: fixed;
//   top: 0;
//   left: 0;
//   z-index: 50;
//   background-color: rgba(0, 0, 0, 0.836);
//   opacity: 1;
// }
</style>