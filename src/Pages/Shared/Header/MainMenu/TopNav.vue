<template>
  <!-- *******************************************************************************************************
********************  This template includes Media icons Link like Telegram , whatsapp *********************
**********************and instagram . Also you can find the login , register and log out button here *******
************************************************************************************************************ -->
  <div>
    <!-- <top-responsive></top-responsive> -->
    <div class="topnav">
      <div class="container">
        <div class="right">
          <ul class="menu r">
            <li v-if="!IsAuthenticated">
              <router-link to="/login" class="login" exact>ورود</router-link>
              <router-link to="/register" class="login" exact
                >ثبت نام</router-link
              >
            </li>
            <li v-else>
              <a
                class="login english"
                @click="client"
                exact
                v-click-outside="hide"
                >{{ Username }}
                <font-awesome-icon
                  class="caret"
                  v-if="!subClient"
                  icon="caret-left"
                />
                <font-awesome-icon
                  class="caret"
                  v-if="subClient"
                  icon="caret-right"
                />
              </a>
              <a @click="signout" class="login" exact>خروج</a>
            </li>

            <div class="sub-client" v-if="subClient">
              <ul>
                <li>
                  <router-link to="/clientaccount"
                    >مشاهده حساب کاربری</router-link
                  >
                </li>
                <li>
                  <router-link to="/editaccount"
                    >ویرایش حساب کاربری</router-link
                  >
                </li>
                <li>
                  <router-link to="/changepassword">تغییر رمز عبور</router-link>
                </li>
                <li><router-link to="/purches">فاکتورهای من</router-link></li>
              </ul>
            </div>

            <li>
              <span class="english">0216400010</span>
              <font-awesome-icon class="fa" icon="phone" />
            </li>
            <li>
              <span class="english">info@shop.gmail.com</span>
              <font-awesome-icon class="fa" icon="envelope" />
            </li>
          </ul>
        </div>

        <div class="left">
          <ul class="menu l">
            <li>
              <a href="#">
                <font-awesome-icon
                  class="whatsapp"
                  :icon="['fab', 'whatsapp']"
                />
              </a>
            </li>
            <li>
              <a href="">
                <font-awesome-icon
                  class="telegram"
                  :icon="['fab', 'telegram']"
                />
              </a>
            </li>
            <li>
              <a href="">
                <font-awesome-icon
                  class="instagram"
                  :icon="['fab', 'instagram']"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <svg height="1" width="98%">
      <line
        x1="10%"
        y1="0"
        x2="92%"
        y2="0"
        style="stroke: rgb(220, 220, 220); stroke-width: 2"
      />
    </svg>
  </div>
</template>

<script>
import Vue from "vue";
import ClickOutside from "vue-click-outside";
export default {
  data() {
    return {
      subClient: false,
    };
  },
  computed: {
    IsAuthenticated() {
      return this.$store.getters.IsAuthenticated;
    },
    Username() {
      return this.$store.getters.GetUsername;
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
  },
  directives: {
    ClickOutside,
  },
};
</script>

<style lang="scss" scoped>
.sub-client {
  background-color: white;
  z-index: 999;
  position: absolute;
  margin-top: 0px;
  border-radius: 10px;
  margin-right: 114px;
  padding: 15px;
}
.sub-client ul {
  list-style: none;
  color: black;
}
.sub-client ul li {
  margin-top: 10px;
}
.sub-client ul li a {
  color: black;
  transition: all 0.4s;
  &:hover {
    color: orange;
  }
}
.caret {
  margin-right: 10px;
  position: absolute;
  margin-top: 2px;
}
.topnav {
  padding-top: 20px;
  height: 100%;
  display: flex;
}

.left {
  height: 50px;
}
.right {
  height: 50px;
}
.container {
  display: flex;
  justify-content: space-between;
  direction: rtl;
  margin: 0 auto;
}
.whatsapp {
  transition: all 0.3s;
  border-radius: 100px;
  font-size: 30px;
  padding: 1px;
}
.whatsapp:hover {
  color: green;
}

.telegram {
  transition: all 0.3s;
  font-size: 30px;
  padding: 2px;
}
.telegram:hover {
  color: #2693c9;
  background-color: white;
  border-radius: 40px;
}
.instagram {
  transition: all 0.4s;
  border-radius: 10px;
  padding: 2px;
  font-size: 30px;
}
.instagram:hover {
  background: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
}
.menu {
  display: flex;
  list-style: none;
  text-decoration: none;
}
.l li {
  padding-right: 10px;
}
.r li {
  padding-left: 30px;
}
.login {
  color: whitesmoke;
  background-color: orange;
  cursor: pointer;
  text-decoration: none;
  padding: 8px 25px;
  border-radius: 15px;
  border: 1px solid gold;
  margin-top: -10px;
  margin-left: 10px;
}
.login:active {
  color: black;
}
.login:hover {
  color: black;
  border: 1px solid gold;
  background: white;
  transition: all 0.5s;

  &:hover .tit {
    color: black;
    transition: all 0.5s;
  }
}
span {
  color: white;
}
a {
  text-decoration: none;
  cursor: pointer;
  color: white;
  font-weight: 400;
  font-size: 17px;
}
.fa {
  text-decoration: none;
  color: white;
  font-weight: 400;
  font-size: 17px;
}
.num {
  font-family: sans-serif;
}
.email {
  font-family: sans-serif;
}
span {
  padding-left: 3px;
}
</style>