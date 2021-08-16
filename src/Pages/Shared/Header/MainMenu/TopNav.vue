<template>
  <!-- *******************************************************************************************************
********************  This template includes Media icons Link like Telegram , whatsapp *********************
**********************and instagram . Also you can find the login , register and log out button here *******
************************************************************************************************************ -->
  <div>
      <submenu-responsive
        @closeSub="closeValue"
        v-if="show"
      ></submenu-responsive>
      <div class="popup" v-if="show"></div>
    <div class="top-top">
      <font-awesome-icon @click="show= true" class="bars" icon="bars" />
      <div class="contact">
        <ul class="social-icon">
          <li v-if="GetInformation[0]">
            <a :href="GetInformation[0].instagram_id" target="_blank">
              <font-awesome-icon
                class="instagram insta"
                :icon="['fab', 'instagram']"
              />
              <h4>اینستاگرام</h4>
            </a>
          </li>
          <li>
            <a href="">
              <font-awesome-icon
                class="instagram telegram"
                :icon="['fab', 'telegram']"
              />
              <h4>تلگرام</h4>
            </a>
          </li>
          <li>
            <a href="">
              <font-awesome-icon
                class="instagram whatsapp"
                :icon="['fab', 'whatsapp']"
              />
              <h4>واتساپ</h4>
            </a>
          </li>
          <li>
            <a href="tel:09361231129">
              <font-awesome-icon class="instagram phone" icon="phone" />
              <h4>تماس</h4>
            </a>
          </li>
        </ul>
      </div>
      <div class="logo">
        <img
          class="header-img"
          src="../../../../../public/img/header3.png"
          alt=""
        />
      </div>
      <div class="shop">
        <ul class="shop-ul">
          <li>
            <a @click="showSearchBox = true">
              <font-awesome-icon class="shop-icon search" icon="search" />
            </a>
          </li>
          <transition name="fade2">
            <div v-if="showSearchBox" class="search-box">
              <div class="close-search">
                <font-awesome-icon
                  @click="showSearchBox = false"
                  class="close-icon"
                  icon="times"
                />
              </div>
              <div class="right-searchinput">
                <input
                  v-model="searchName"
                  class="search-input"
                  maxlength="30"
                  type="text"
                  placeholder="نام محصول"
                />
              </div>
              <div class="left-searchbtn">
                <a class="search-btn"
                  :href="
                    $router.resolve({
                      name: 'searchproduct',
                      params: { slug: searchName.split(' ').join('-') },
                    }).href
                  "
                  >جست و جو</a
                >
              </div>
            </div>
          </transition>
          <li v-if="!IsAuthenticated">
            <router-link class="shoplink" to="/shopcart">
              <font-awesome-icon class="shop-icon bag" icon="shopping-cart" />
              <div class="shop-count">
                <span class="badge">0</span>
              </div>
            </router-link>
          </li>
          <li v-if="IsAuthenticated">
            <router-link class="shoplink" to="/shopcart">
              <font-awesome-icon class="shop-icon bag" icon="shopping-cart" />
              <div class="shop-count">
                <span class="badge">{{ getCountOrder }}</span>
              </div>
            </router-link>
          </li>
          <li v-if="!IsAuthenticated">
            <router-link to="/register" class="login"> ثبت نام </router-link>
            <router-link to="/login" class="register"> وارد شوید </router-link>
          </li>
          <li v-if="IsAuthenticated">
            <router-link to="/UserDashboard/Account" class="login">
              {{ Username }}
            </router-link>
            <a @click="signout" to="/register" class="register"> خروج </a>
            <div class="attention">
              <p>باکلیک بر روی نام خود وارد حساب کاربری میشوید</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import ClickOutside from "vue-click-outside";
import SubmenuResponsive from "../../../Responsive/SubmenuResponsive.vue";
export default {
  data() {
    return {
      subClient: false,
      activeSub: false,
      show: false,
      showSearchBox: false,
      searchName: "",
    };
  },
  components: {
    SubmenuResponsive,
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
    GetInformation() {
      return this.$store.getters.GetSiteInformation;
    },
  },
  created() {
    this.$store.dispatch("checkForLogin");
    this.$store.dispatch("GetImagesFromServer");
    this.$store.dispatch("GetInformationFromServer");
    
  },
  methods: {
    signout() {
      Vue.swal({
        title: "خارج میشوید؟؟",
        text: "مطمئن هستید؟؟",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "بله خارج میشوم",
        cancelButtonText: "خیر ، کنسل کن",
        showCloseButton: true,
        showLoaderOnConfirm: true,
      }).then((result) => {
        if (result.value) {
          this.$store.dispatch("SignOutUser");

          this.$swal(
            "خارج شدید",
            "از سایت خارج شدید ، برای خرید میتوانید مجددا وارد شوید",
            "success"
          );
        } else {
          this.$swal("کنسل شد", "همچنان در سایت هستید", "info");
        }
      });
    },
    client() {
      this.subClient = !this.subClient;
    },
    hide() {
      this.subClient = false;
    },
    showValue(value) {
      this.activeSub = value;
      console.log(value);
    },
    closeValue(value) {
      this.show = value;
    },
    showSub() {
      this.show = true;
    },
  },
  directives: {
    ClickOutside,
  },
};
</script>

<style lang="scss" scoped>
.instagram {
  margin-left: 5px;
  font-size: 22px;
}

.attention {
  font-size: 12px;
  background-color: orange;
  border-radius: 10px;
  text-align: center;
  position: absolute;
  width: 90px;
  padding: 5px;
  margin-top: 10px;
}
.top-top {
  background-color: white;
  border-bottom: 1px solid black;
  display: flex;
  z-index: 99999;
  justify-content: space-around;
  direction: rtl;
  height: 150px;
  padding-top: 55px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
}
.search-box {
  display: flex;
  border: 1px solid black;
  width: 300px;
  margin-top: -15px;
  // border-radius: 5px;
  position: absolute;
  z-index: 99999;
  height: 60px;
  justify-content: space-between;
  background-color: white;
}
.search-input {
  border: none;
  width: 200px;
  height: 100%;
  text-indent: 10px;
  font-size: 14px;
  // padding: 15px;
}
.search {
  cursor: pointer;
}
.search-btn {
  padding: 7px;
  background-color: orange;
  border: none;
  // cursor: not-allowed;
  text-decoration: none;
  cursor: pointer;
  color: white;
  font-size: 15px;
}
.left-searchbtn {
  display: flex;
  justify-content: center;
  margin-left: 5px;
  align-items: center;
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
.contact {
  @media screen and (max-width: 1100px) {
    display: none;
  }
}
.bars {
  font-size: 25px;
  cursor: pointer;
  display: none;
  @media screen and (max-width: 1100px) {
    display: block;
  }
}
.login {
  border-left: 1px solid grey;
  padding-left: 8px;
  text-decoration: none;
  color: black;
}
.register {
  padding-right: 8px;
  text-decoration: none;
  color: black;
  cursor: pointer;
}
.logo {
  margin-top: -10px;
  margin-left: 100px;
  @media screen and (max-width: 1100px) {
    display: none;
  }
}
.social-icon,
.shop-ul {
  list-style: none;
  display: flex;
}
.shop-icon {
  font-size: 25px;
  font-weight: 100;
}
.badge {
  background-color: orange;
  position: absolute;
  border-radius: 50px;
  padding: 0px 0px 5px 0px;
  width: 20px;
  height: 20px;
  text-align: center;
  margin-top: -40px;
  margin-right: -10px;
  color: white;
}
.social-icon li a {
  display: flex;
  margin-bottom: 5px;
  cursor: pointer;
  text-decoration: none;
  color: black;
  margin-left: 15px;
}
.shop-ul li {
  margin-right: 35px;
}
.header-img {
  width: 60px;
}
.insta {
  border: 0.1px solid #d6249f;
  color: white;
  border-radius: 5px;
  background: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
}
.telegram {
  color: #2693c9;
}
.whatsapp {
  color: rgb(6, 184, 6);
}
.phone {
  color: black;
}
.popup {
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 998;
  background-color: rgba(0, 0, 0, 0.836);
  opacity: 1;
}
.shoplink {
  text-decoration: none;
  color: black;
}
.fade2-enter-active,
.fade2-leave-active {
  transition: opacity 0.5s;
}
.fade2-enter,
.fade2-leave-to {
  opacity: 0;
}

</style>