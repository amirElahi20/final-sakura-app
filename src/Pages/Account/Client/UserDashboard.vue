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

      <div class="sidebar subMenuBar" :class="{ side: activeSide }">
        <header>
          <a href="#">امیررضا</a>
        </header>
        <ul class="nav">
          <li @click="hide">
            <a href="/UserDashboard/Account">
              <font-awesome-icon icon="tachometer-alt"></font-awesome-icon>
              مشاهده حساب کاربری
            </a>
          </li>
          <li @click="hide">
            <a href="/UserDashboard/edit">
              <font-awesome-icon icon="edit"></font-awesome-icon>
              ویرایش حساب کاربری
            </a>
          </li>
          <li @click="hide">
            <a href="/UserDashboard/changepass">
              <font-awesome-icon icon="lock"></font-awesome-icon>
              تغییر رمز
            </a>
          </li>
          <li @click="hide">
            <a href="/UserDashboard/purches">
              <font-awesome-icon icon="newspaper"></font-awesome-icon>
              فاکتورهای من
            </a>
          </li>
          <li @click="hide">
            <a href="/UserDashboard/orders">
              <font-awesome-icon icon="shopping-bag"></font-awesome-icon>
              سفارش های من
            </a>
          </li>
          <li @click="hide">
            <a href="/UserDashboard/tickets">
              <font-awesome-icon icon="question"></font-awesome-icon>
              سوالات من
            </a>
          </li>
          <li>
            <a href="/" class="back-btn"
              ><font-awesome-icon icon="undo"></font-awesome-icon> بازگشت به
              صفحه اصلی</a
            >
          </li>
          <li>
            <a @click="signOut" class="login" exact>
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
import Vue from "vue";
export default {
  data() {
    return {
      activeSide: true,
    };
  },
  created() {
         if (this.$cookie.get('Sakura') == null) {
      this.$router.push("/");
    }
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
          this.$router.push("/");
        } else {
          this.$swal("کنسل شد", "همچنان در سایت هستید", "info");
        }
      });
    },
    hide() {
      this.activeSide = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.subMenuBar {
  animation-name: MoveToLeft;
  animation-duration: 0.4s;
}
@keyframes MoveToLeft {
  0% {
    opacity: 0;
    transform: translateX(120px);
  }
  50% {
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
body {
  overflow-x: hidden;
  font-size: 16px;
}
.login {
  cursor: pointer;
}
/* Toggle Styles */

#viewport {
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
  margin-right: -250px;
  overflow-y: auto;
  background: whitesmoke;
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
  color: orange;
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
  position: fixed;
  z-index: 9999;
  left: 0;
  margin: 10px 0 0 15px;
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