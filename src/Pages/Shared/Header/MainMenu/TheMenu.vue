<template>
  <div>
    <transition name="fade">
      <div class="popup" v-show="!activePopup"></div>
    </transition>
    <div
      class="total"
      :class="{
        scroll: scrollPosition >= 160,
        container: scrollPosition < 160,
      }"
    >
      <div class="container">
        <div class="right">
          <ul class="menu r">
            <li
              class="subbox"
              @mouseover="mouseover"
              @mouseleave="mouseleave"
              :class="{ active: !activePopup }"
            >
              <a href="#" class="sub">دسته بندی</a>
              <transition name="fade">
                <sub-menu v-show="!activePopup"></sub-menu>
              </transition>
            </li>
            <li>
              <router-link class="router forget" to="/">خانه</router-link>
            </li>
            <li>
              <router-link class="router forget" to="/products"
                >محصولات</router-link
              >
            </li>
            <li>
              <router-link class="router forget" to="/aboutus"
                >درباره ما</router-link
              >
            </li>
            <li>
              <router-link class="router forget" to="/contactus"
                >ارتباط با ما</router-link
              >
            </li>
          </ul>
        </div>
        <!-- <div class="left">bfdb</div> -->
      </div>
    </div>
  </div>
</template>

<script>
// import SearchBox from "../SearchBox/SearchBox.vue";
import SubMenu from "../SubMenus/SubMenu.vue";
export default {
  components: {
    // SearchBox,
    SubMenu,
  },
  data() {
    return {
      activePopup: true,
      scrollPosition: 0,
      isSticky: false,
    };
  },

  created() {
    this.$store.dispatch("ShowOrderRows");
    window.addEventListener("scroll", this.updateScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.updateScroll);
  },
  methods: {
    mouseover() {
      this.activePopup = false;
    },
    mouseleave() {
      this.activePopup = true;
    },
    updateScroll() {
      this.scrollPosition = window.scrollY;
      if (this.scrollPosition >= 100) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    },
   
  },
  computed: {
    userOrders() {
      return this.$store.getters.GetUserShopCart;
    },
    IsAuthenticated() {
      return this.$store.getters.IsAuthenticated;
    },
    getCountOrder(){
      return this.$store.getters.getCountOrder;
    }
   
  },
};
</script>


<style lang="scss" scoped>
.total{
    padding-bottom: 1rem;
    width: 100%;
    border-bottom: 1px solid black;
    background-color: whitesmoke;

}
.menu {
  display: flex;
  list-style: none;
  text-decoration: none;
  direction: rtl;
  height: auto;
  margin-top: 10px;
  @media only screen and (max-width: 1100px){
display: none;
  }
}
.r li {
  // margin-left: 80px;
  margin-top: 15px;
  margin-right: 80px;
}
.fa {
  font-size: 35px;
  margin-top: -5px;
  margin-right: 10px;
  transition: all 0.3s;
}

.container {
  display: flex;
  margin: 0 auto;
  // justify-content: space-evenly;
  // justify-content: start;
  justify-content: space-between;
  direction: rtl;
  width: 100%;
  transition: all 0.4s;
  z-index: 998;
}
.scroll {
  background-color: whitesmoke;
  border-radius: 0px;
  margin-top: -150px;
  justify-content: space-around;
  display: flex;
  direction: rtl;
  transition: all 0.4s;
  padding: -5px 12px;
  // margin: 5px;
  height: 80px;
  width: 100%;
  position: fixed;
  z-index: 999;
    @media only screen and (max-width: 1100px){
display: none;
  }
}

.rightmenu li .sub {
  color: black;
}
.sub {
  background-color: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  margin-top: -5px;
  margin-left: 20px;
  padding: 12px 7px;
  transition: all 1s;
  color: black;
}

a {
  color: black;
  font-size: 18px;
  text-decoration: none;
}

.rightmenu {
  display: flex;
  text-decoration: none;
  list-style: none;
}
.rightmenu li {
  padding-right: 50px;
}
.rightmenu li a {
  color: white;
  text-decoration: none;
}
.leftmenu {
  display: flex;
  text-decoration: none;
  list-style: none;
}
.leftmenu li a {
  color: white;
  text-decoration: none;
  display: flex;
  text-align: center;
}
.leftmenu li a i {
  font-size: 20px;
}
.badge {
  background-color: red;
  z-index: 999;
  position: absolute;
  border-radius: 50px;
  padding-top: 2px;
  padding-right: 7px;
  padding-left: 7px;
  top: 6rem;
}
.popup {
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  background-color: rgba(0, 0, 0, 0.836);
  opacity: 1;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>