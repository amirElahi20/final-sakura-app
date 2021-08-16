<template>
  <div>
    <div class="log">
           <loading
                class="vld-parent"
                :active="Loading"
                :is-full-page="fullPage"
                loader="dots"
                backgroundColor="#ffffff"
                color="#FFA500"
                blue="10px"
              />
      <section class="login">
        <div class="row">
          <div class="form">
            <div class="form__login">
              <form class="list" @submit.prevent="RegisterUser">
                <h2 class="topform">ثبت نام</h2>
                <div
                  class="list__group"
                  :class="{ invalid: $v.username.$error }"
                >
                  <label for="name" class="list__label">
                    <font-awesome-icon
                      class="fa"
                      icon="user"
                    ></font-awesome-icon
                    >نام کاربری</label
                  >
                  <input
                    @input="$v.username.$touch()"
                    type="text"
                    class="list__input"
                    placeholder="اسمتو به انگلیسی بنویس "
                    id="name"
                    v-model.trim="username"
                  />
                </div>
                <p class="alert" v-if="!$v.username.alphaNum">
                  فقط حروف انگلیسی و عدد
                </p>
                <p
                  class="alert"
                  v-if="!$v.username.required && $v.username.$dirty"
                >
                  نباید خالی باشد
                </p>

                <div
                  class="list__group"
                  :class="{ invalid: $v.password.$error }"
                >
                  <label for="name" class="list__label">
                    <font-awesome-icon
                      class="fa"
                      icon="lock"
                    ></font-awesome-icon
                    >رمز عبور</label
                  >
                  <input
                    @input="$v.password.$touch()"
                    v-model.trim="password"
                    :type="visibility"
                    class="list__input"
                    placeholder="رمز عبورتو وارد کن"
                    id="password"
                  />
                  <font-awesome-icon
                    @click="showpassword"
                    v-if="visibility == 'password'"
                    class="eye"
                    icon="eye"
                  ></font-awesome-icon>
                  <font-awesome-icon
                    @click="hidepassword"
                    v-if="visibility == 'text'"
                    class="eye"
                    icon="eye-slash"
                  ></font-awesome-icon>
                </div>
                <p class="alert" v-if="!$v.password.minLength">
                  رمز نباید کمتر از 6 کاراکتر باشد
                </p>
                <p
                  class="alert"
                  v-if="!$v.password.required && $v.password.$dirty"
                >
                  نباید خالی باشد
                </p>

                <div class="list__group" :class="{ invalid: $v.email.$error }">
                  <label for="name" class="list__label">
                    <font-awesome-icon
                      class="fa"
                      icon="envelope"
                    ></font-awesome-icon
                    >ایمیل</label
                  >

                  <input
                    @input="$v.email.$touch()"
                    v-model="email"
                    type="email"
                    class="list__input"
                    placeholder="ایمیلتو وارد کن"
                    id="email"
                  />
                </div>
                <p class="alert" v-if="!$v.email.email">
                  ایمیل وارد شده معتبر نمیباشد
                </p>
                <p class="alert" v-if="!$v.email.required && $v.email.$dirty">
                  نباید خالی باشد
                </p>

                <button class="submit-btn" type="submit">ثبت نام</button>
              </form>
              <h5 class="txt">
                عضو هستید؟؟ پس
                <router-link class="router" to="/login">وارد شوید</router-link>
              </h5>
              <router-link class="back-btn" to="/"
                >بازگشت به صفحه اصلی</router-link
              >
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>


<script>
import Loading from "vue-loading-overlay";

import "vue-loading-overlay/dist/vue-loading.css";
import {
  required,
  maxLength,
  minLength,
  alphaNum,
  email,
} from "vuelidate/lib/validators";
export default {
  data() {
    return {
      username: "",
      password: "",
      email: "",
      visibility: "password",
            fullPage: true,

    }
  },
   metaInfo: {
      title: 'فروشگاه ساکورا',
      titleTemplate: '%s - ثبت نام',
      htmlAttrs: {
        lang: 'utf-8',
        amp: true
      }
    },
     components:{
      Loading
    },
      computed:{
    Loading(){
      return this.$store.getters.GetPending
    }
  },
  validations: {
    email: {
      required,
      email,
      maxLength: maxLength(100),
    },
    username: {
      required,
      alphaNum,
    },
    password: {
      minLength: minLength(6),
      required,
    },
  },
  methods: {
    RegisterUser() {
      this.$v.$touch();
      if (!this.$v.$error) {
        const register = {
          username: this.username,
          password: this.password,
          email: this.email,
        };
        this.$store.dispatch("RegisterUser", register);
      }
    },
    showpassword() {
      this.visibility = "text";
    },
    hidepassword() {
      this.visibility = "password";
    },
  },
};
</script>


<style lang="scss" scoped>
.router {
  text-decoration: none;
  color: orange;
  border-bottom: 0.5px solid orange;
}
.invalid input {
  border: 1px solid red !important;
}
.invalid label {
  color: red;
}
.alert {
  color: red;
  // text-align: start;
  text-align: end;
  margin-top: -15px;
}
.eye {
  position: absolute;
  // top: 15.7rem;
  margin-top: -34px;
  margin-left: 10px;
  color: rgb(90, 92, 92);
  cursor: pointer;
}

.error {
  color: red;
  text-align: center;
  font-weight: bold;
}
.forget {
  font-size: 15px;
  text-align: center;
  color: orangered;
  border-bottom: 0.5px solid orangered;
}
.log {
  display: flex;
  justify-content: center;
}
.login {
  padding: 3rem 0;
  width: 1000px;
}
.topform {
  margin-bottom: 20px;
  text-align: center;
  margin-top: -50px;
}
.fa {
  margin-left: 5px;
}
p {
  direction: rtl;
}
.form {
  width: 100%;
  margin: 0 auto;
  height: 40rem;
  background-image: linear-gradient(
      105deg,
      rgba(white, 0.9) 0%,
      rgba(white, 0.7) 60%,
      transparent 50%
    ),
    url("../../../public/img/tamas-tuzes-katai-GZ9_EfvDCFU-unsplash.jpg");
  background-size: cover;
  background-position: left;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.4) 0px 10px 10px -5px;
  &__login {
    width: 60%;
    padding: 6rem;

    @media screen and (max-width: 800px) {
      width: 100%;
      height: 100%;
      background-image: linear-gradient(315deg, #fffdfd 0%, #fffdfda2 74%);
      background-position: left;
      position: relative;
        background-size: cover;

    }
  }
  //  background-image: linear-gradient(315deg, #000000 0%, #0000003a 74%);
}
.list {
  &__group:not(:last-child) {
    margin-bottom: 1rem;
  }

  &__input {
    font-size: 17px;
    height: 50px;
    padding-right: 10px;
    // border-radius: 10px;
    background-color: rgba(rgb(255, 255, 255), 0.9);
    border: none;
    text-align: right;
    border: 1px solid black;
    width: 90%;
    // width: 250px;
    position: relative;
    // margin: 0 auto;
    display: block;
    color: inherit;
    @media screen and (max-width: 500px) {
      width: 100%;
    }
  }

  &__label {
    font-size: 1rem;
    font-weight: 700;
    margin-right: 3rem;
    margin-top: 0.7rem;
    display: block;
    direction: rtl;
    transition: all 0.3s;
    margin-bottom: 10px;
    color: black;
    @media screen and (max-width: 500px) {
      // margin-right: 3.5rem;
      // text-align: left;
      // margin-right: 15%;
    }
  }
}
.submit-btn {
  padding: 10px;
  display: flex;
  width: 90%;
  cursor: pointer;
  // border-radius: 10px;
  justify-content: center;
  align-items: center;
  color: black;
  background-color: orange;
  border: 1px solid orange;
  transition: all 0.3s;
  margin-top: 30px;
  &:hover {
    transform: scale(1.1);
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
}

.txt {
  text-align: center;
  padding-right: 1rem;
  padding-top: 1rem;
  font-size: 15px;
}
.back-btn {
  padding: 10px;
  display: flex;
  justify-content: center;
  width: 90%;
  margin-top: 1rem;
  // border-radius: 10px;
  background-color: orangered;
  color: white;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.1);
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
}
</style>