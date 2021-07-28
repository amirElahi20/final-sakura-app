<template>
  <!-- *******************************************************************************************************
********************  This template includes Media icons Link like Telegram , whatsapp *********************
**********************and instagram . Also you can find the login , register and log out button here *******
************************************************************************************************************ -->
  <div>
    <transition name="fade">
      <submenu-responsive
        @closeSub="closeValue"
        v-if="show"
      ></submenu-responsive>
    </transition>
    <transition name="fade2">
      <div class="popup" v-if="show"></div>
    </transition>
    <!-- <top-responsive @show="showValue"></top-responsive> -->
    <div class="top-top">
      <font-awesome-icon @click="showSub" class="bars" icon="bars" />
      <div class="contact">
        <ul class="social-icon">
          <li>
            <a href="">
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
            <a href="">
              <font-awesome-icon class="instagram phone" icon="phone" />
              <h4>021458963</h4>
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
            <a>
              <font-awesome-icon class="shop-icon search" icon="search" />
            </a>
          </li>
          <li v-if="!IsAuthenticated">
            <router-link class="shoplink" to="/shopping">
              <font-awesome-icon class="shop-icon bag" icon="shopping-cart" />
              <div class="shop-count">
                <span class="badge">0</span>
              </div>
            </router-link>
          </li>
           <li v-if="IsAuthenticated">
            <router-link class="shoplink" to="/shopping">
              <font-awesome-icon class="shop-icon bag" icon="shopping-cart" />
              <div class="shop-count">
                <span class="badge">{{getCountOrder}}</span>
              </div>
            </router-link>
          </li>
          <li v-if="!IsAuthenticated">
            <router-link to="/register" class="login"> ثبت نام </router-link>
            <router-link to="/login" class="register">
              وارد شوید
            </router-link>
          </li>
           <li v-if="IsAuthenticated">
            <router-link to="/UserDashboard/Account" class="login"> {{Username}} </router-link>
            <a @click="signout" to="/register" class="register">
              خروج
            </a>
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
// import TopResponsive from "../../../Responsive/TopResponsive.vue";
import Vue from "vue";
import ClickOutside from "vue-click-outside";
import SubmenuResponsive from "../../../Responsive/SubmenuResponsive.vue";
export default {
  data() {
    return {
      subClient: false,
      activeSub: false,
      show: false,
    };
  },
  components: {
    // TopResponsive,
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
  },
  created() {
    this.$store.dispatch("checkForLogin");
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
.attention{
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
  justify-content: space-around;
  direction: rtl;
  height: 150px;
  padding-top: 55px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
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
  // font-size: 20px;
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
  // font-size: 20px;
}
.whatsapp {
  // font-size: 20px;
  color: rgb(6, 184, 6);
}
.phone {
  color: black;
  // font-size: 20px;
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
.shoplink{
  text-decoration: none;
  color: black;
}
// .sub-client {
//   background-color: white;
//   z-index: 999;
//   position: absolute;
//   margin-top: 0px;
//   border-radius: 10px;
//   margin-right: 114px;
//   padding: 15px;
// }
// .sub-client ul {
//   list-style: none;
//   color: black;
// }
// .sub-client ul li {
//   margin-top: 10px;
// }
// .sub-client ul li a {
//   color: black;
//   transition: all 0.4s;
//   &:hover {
//     color: orange;
//   }
// }
// .caret {
//   margin-right: 10px;
//   position: absolute;
//   margin-top: 2px;
// }
// .topnav {
//   padding-top: 20px;
//   height: 100%;
//   display: flex;

//   @media screen and (max-width: 900px) {
//     display: none;
//   }
// }
// .svg {
//   @media screen and (max-width: 900px) {
//     display: none;
//   }
// }

// .left {
//   height: 50px;
// }
// .right {
//   height: 50px;
// }
// .container {
//   display: flex;
//   justify-content: space-between;
//   direction: rtl;
//   margin: 0 auto;
//   width: 79%;
// }
// .whatsapp {
//   transition: all 0.3s;
//   border-radius: 100px;
//   font-size: 30px;
//   padding: 1px;
// }
// .whatsapp:hover {
//   color: green;
// }

// .telegram {
//   transition: all 0.3s;
//   font-size: 30px;
//   padding: 2px;
// }
// .telegram:hover {
//   color: #2693c9;
//   background-color: white;
//   border-radius: 40px;
// }
// .instagram {
//   transition: all 0.4s;
//   border-radius: 10px;
//   padding: 2px;
//   font-size: 30px;
// }
// .instagram:hover {
//   background: radial-gradient(
//     circle at 30% 107%,
//     #fdf497 0%,
//     #fdf497 5%,
//     #fd5949 45%,
//     #d6249f 60%,
//     #285aeb 90%
//   );
// }
// .menu {
//   display: flex;
//   list-style: none;
//   text-decoration: none;
// }
// .l li {
//   padding-right: 10px;
// }
// .r li {
//   padding-left: 30px;
// }
// .login {
//   color: whitesmoke;
//   background-color: orange;
//   cursor: pointer;
//   text-decoration: none;
//   padding: 8px 25px;
//   border-radius: 15px;
//   border: 1px solid gold;
//   margin-top: -10px;
//   margin-left: 10px;
// }
// .login:active {
//   color: black;
// }
// .login:hover {
//   color: black;
//   border: 1px solid gold;
//   background: white;
//   transition: all 0.5s;

//   &:hover .tit {
//     color: black;
//     transition: all 0.5s;
//   }
// }
// span {
//   color: white;
// }
// a {
//   text-decoration: none;
//   cursor: pointer;
//   color: white;
//   font-weight: 400;
//   font-size: 17px;
// }
// .fa {
//   text-decoration: none;
//   color: white;
//   font-weight: 400;
//   font-size: 17px;
// }
// .num {
//   font-family: sans-serif;
// }
// .email {
//   font-family: sans-serif;
// }
// span {
//   padding-left: 3px;
// }
// .fade-enter-active,
// .fade-leave-active {
//   transition: opacity 0.2s;
// }
// .fade-enter,
// .fade-leave-to {
//   opacity: 0;
// }
.fade2-enter-active,
.fade2-leave-active {
  transition: opacity 1s;
}
.fade2-enter,
.fade2-leave-to {
  opacity: 0;
}
</style>