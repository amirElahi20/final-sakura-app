<template>
  <div>
    <div class="log">
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
    };
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
     this.$v.$touch()
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
.invalid input {
  border: 1px solid red !important;
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
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.4s;
}

.fade-enter-to {
  opacity: 1;
}

.fade-leave-from {
  opacity: 1;
}

.fade-leave-active {
  transition: all 0.4s;
}

.fade-leave-to {
  opacity: 0;
}
.invalid label {
  color: red;
}
.valid input {
  border: 1px solid green;
}
.valid label {
  color: green;
}
.eye {
  color: gray;
  position: absolute;
  margin-top: -35px;
  margin-left: 15px;
  cursor: pointer;
}
.fa {
  margin-left: 5px;
}

.alert {
  color: red;
  text-align: start;
}
.error {
  color: red;
  text-align: center;
  font-weight: bold;
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
  margin-top: -75px;
}
.router {
  text-decoration: none;
  color: orangered;
  border-bottom: 0.5px solid orangered;
}
.form {
  width: 100%;
  height: 41rem;
  background-image: linear-gradient(
      105deg,
      rgba(white, 0.9) 0%,
      rgba(white, 0.7) 50%,
      transparent 50%
    ),
    url("../../../public/img/tamas-tuzes-katai-GZ9_EfvDCFU-unsplash.jpg");
  background-size: cover;
  background-position: center;
  position: relative;
  border-radius: 30px;
  box-shadow: 1rem 2rem 2rem rgba(rgb(15, 15, 15), 0.8);

  &__login {
    width: 50%;
    padding: 5.3rem;
  }
}
.list {
  &__group:not(:last-child) {
    margin-bottom: 0rem;
  }

  &__input {
    font-size: 17px;
    height: 50px;
    padding-right: 10px;
    border-radius: 10px;
    background-color: rgba(rgb(255, 255, 255), 0.9);
    border: none;
    text-align: right;
    border: 1px solid black;
    width: 90%;
    display: block;
    color: inherit;
  }
  &__label {
    font-size: 1rem;
    font-weight: 700;
    margin-right: 3rem;
    margin-bottom: 0.7rem;
    display: block;
    direction: rtl;
    transition: all 0.3s;
    margin-top: 1rem;
  }
}
.submit-btn {
  padding: 10px;
  display: flex;
  width: 90%;
  cursor: pointer;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: orangered;
  border: 1px solid orangered;
  transition: all 0.3s;
  margin-top: 30px;
  &:hover {
    transform: scale(1.1);
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
  border-radius: 10px;
  background-color: orange;
  color: white;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.1);
  }
}
</style>