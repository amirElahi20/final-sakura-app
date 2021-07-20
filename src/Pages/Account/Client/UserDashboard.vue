<template>
  <div>
    <div id="viewport">
      <div class="popup" v-show="!activeSide"></div>

      <font-awesome-icon
        v-if="activeSide"
        @click="Showsidebar"
        icon="bars"
        class="bars-icon"
      />
      <font-awesome-icon
        v-if="!activeSide"
        @click="hide"
        icon="times"
        class="times-icon"
      />

      <div class="sidebar" :class="{ side: activeSide }">
        <header>
          <a href="#">امیررضا</a>
        </header>
        <ul class="nav">
          <li @click="hide">
            <router-link to="/UserDashboard/Account" @click="hide">
              <font-awesome-icon icon="tachometer-alt"></font-awesome-icon>
              مشاهده حساب کاربری
            </router-link>
          </li>
          <li @click="hide">
            <router-link to="/UserDashboard/edit">
              <font-awesome-icon icon="edit"></font-awesome-icon>
              ویرایش حساب کاربری
            </router-link>
          </li>
          <li @click="hide">
            <router-link to="/UserDashboard/changepass">
              <font-awesome-icon icon="lock"></font-awesome-icon>
              تغییر رمز
            </router-link>
          </li>
          <li @click="hide">
            <router-link to="/UserDashboard/purches">
              <font-awesome-icon icon="newspaper"></font-awesome-icon>
              فاکتورهای من
            </router-link>
          </li>
          <li @click="hide">
            <router-link to="/UserDashboard/orders">
              <font-awesome-icon icon="shopping-bag"></font-awesome-icon>
              سفارش های من
            </router-link>
          </li>
          <li @click="hide">
            <router-link to="/UserDashboard/tickets">
              <font-awesome-icon icon="question"></font-awesome-icon>
              سوالات من
            </router-link>
          </li>
          <li>
            <router-link to="/" class="back-btn"
              ><font-awesome-icon icon="undo"></font-awesome-icon> بازگشت به
              صفحه اصلی</router-link
            >
          </li>
          <li>
            <a @click="signOut"  class="login" exact>
              <font-awesome-icon icon="sign-out-alt"></font-awesome-icon>
              خروج</a
            >
          </li>
        </ul>
      </div>
      <div id="content">
        <router-view> </router-view>
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside";
import Vue from 'vue'
// import TheAccount from "../Client/TheAccount.vue";
export default {
  data() {
    return {
      activeSide: true,
    };
  },
  methods: {
    Showsidebar() {
      this.activeSide = false;
    },
     signOut() {
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
          this.$router.push('/')
        } else {
          this.$swal("کنسل شد", "همچنان در سایت هستید", "info");
        }
      });
    },
    hide() {
      this.activeSide = true;
    },
  },
  directives: {
    ClickOutside,
  },
  //  components:{
  //    TheAccount
  //  }
};
</script>

<style lang="scss" scoped>
body {
  overflow-x: hidden;
  font-size: 16px;
}
.login{
  cursor: pointer;
}
/* Toggle Styles */

#viewport {
  // display: none;
  padding-right: 270px;
  direction: rtl;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
  @media screen and (max-width: 700px) {
    padding-right: 17px;
  }
}

#content {
  width: 100%;
  position: relative;
  margin-right: 0;
}

/* Sidebar Styles */

.sidebar {
  z-index: 1000;
  position: fixed;
  right: 250px;
  width: 250px;
  height: 100%;
  // display: block;
  margin-right: -250px;
  overflow-y: auto;
  background: rgb(182, 181, 181);
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}
.side {
  display: block;
  @media screen and (max-width: 700px) {
    display: none;
  }
}

.sidebar header {
  background-color: orange;
  font-size: 25px;
  line-height: 52px;
  // margin-left: 1px;
  text-align: center;
  @media screen and (max-width: 700px) {
    margin-top: 55px;
  }
}

.sidebar header a {
  color: #fff;
  display: block;
  text-decoration: none;
}

.sidebar header a:hover {
  color: #fff;
}

.sidebar .nav li {
  border-bottom: 1px solid orange;
  padding: 20px 0px;
}

.sidebar .nav a {
  background: none;
  color: rgb(39, 13, 13);
  font-size: 17px;
  text-decoration: none;
  padding: 25px 24px;
  transition: all 0.4s;
}

.sidebar .nav a:hover {
  background: none;
  color: orangered;
}

.bars-icon {
  font-size: 30px;
  position: absolute;
  z-index: 9999;
  margin: 15px 15px;
  display: none;
  cursor: pointer;
  @media screen and (max-width: 700px) {
    display: block;
  }
}
.times-icon {
  font-size: 35px;
  position: absolute;
  z-index: 9999;
  margin: 15px 10px;
  display: none;
  cursor: pointer;
  color: red;
  @media screen and (max-width: 700px) {
    display: block;
  }
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
</style>