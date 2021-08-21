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
              <form class="list">
                <h2 class="topform">فراموشی رمز</h2>
                <div class="list__group">
                  <label for="name" class="list__label">
                    <font-awesome-icon
                      class="fa"
                      icon="envelope"
                    ></font-awesome-icon
                    >ایمیل</label
                  >

                  <input
                    v-model="email"
                    type="email"
                    class="list__input"
                    placeholder="ایمیلتو وارد کن"
                    id="email"
                  />
                </div>

                <button
                  class="submit-btn"
                  @click.prevent="SendEmailToResetPassword"
                  type="submit"
                >
                  ارسال
                </button>
              </form>
              <h5 class="txt">
                میتوانید
                <router-link class="router" to="/register"
                  >ثبت نام کنید</router-link
                >
              </h5>
              <router-link class="back-btn" to="/"
                >بازگشت به صفحه اصلی</router-link
              >
              <h5 class="txt">
                <router-link class="router forget" to="/login"
                  >بازگشت به صفحه ورود</router-link
                >
              </h5>
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
import Vue from "vue";
export default {
  data() {
    return {
      email: "",
      fullPage: true,
      Loading: false,
    };
  },
  components: {
    Loading,
  },
  metaInfo: {
    title: "فروشگاه ساکورا",
    titleTemplate: "%s - فراموشی رمز",
    htmlAttrs: {
      lang: "utf-8",
      amp: true,
    },
  },
  methods: {
    SendEmailToResetPassword() {
      this.Loading = true;
      Vue.http
        .post("accounts/api/v1/request_reset_email/", {
          email: this.email,
        })
        .then(() => {
          this.Loading = false;
          Vue.swal(
            "انجام شد",
            "لینک بازیابی رمز برای ایمیل وارد شده ارسال شد",
            "success"
          );
        })
        .catch(() => {
          this.Loading = false;

          Vue.swal("انجام نشد", "مشکلی پیش آمد مجددا تلاش فرمایید", "error");
        });
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
  text-align: end;
  margin-top: -15px;
}
.eye {
  position: absolute;
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
  margin-top: 40px;
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
  height: 38rem;
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
  }
}
.submit-btn {
  padding: 10px;
  display: flex;
  width: 90%;
  cursor: pointer;
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