<template>
  <div>
    <loading
      class="vld-parent"
      :active="Loading"
      :is-full-page="fullPage"
      loader="dots"
      backgroundColor="#ffffff"
      color="#FFA500"
      blue="10px"
    />
    <div class="contact-form">
      <div class="first-container">
        <div class="info-container">
          <div>
            <img class="icon" />
            <h3>
              <font-awesome-icon class="info-icon" icon="map-marker-alt" />
              نشانی
            </h3>
            <p>استان فارس / شیراز</p>
          </div>
          <div>
            <img class="icon" />
            <h3>
              <font-awesome-icon class="info-icon" icon="phone" />شماره تماس
            </h3>
            <p>09302555881144</p>
          </div>
          <div>
            <img class="icon" />
            <h3>
              <font-awesome-icon class="info-icon" icon="envelope" />ایمیل
            </h3>
            <p class="english">contact@example.com</p>
          </div>
        </div>
      </div>
      <div class="second-container">
        <h2>پیغام به پشتیبانی</h2>
        <form>
          <div class="form-group">
            <label for="name-input">نام خود را وارد کنید </label>
            <input
              id="name-input"
              v-model="firstName"
              @input="$v.firstName.$touch()"
              type="text"
              placeholder="نام"
            />

            <input
              type="text"
              v-model="lastName"
              placeholder="نام خانوادگی"
              @input="$v.lastName.$touch()"
            />
          </div>
          <p class="alert" v-if="!$v.firstName.required && $v.firstName.$dirty">
            فیلد نام را پر کنید
          </p>
          <p class="alert" v-if="!$v.lastName.required && $v.lastName.$dirty">
            فیلد نام خانوادگی را پر کنید
          </p>
          <div class="form-group">
            <label for="name-input">موضوع خود را انتخاب کنید</label>
            <select name="format" v-model="title" @input="$v.title.$touch()">
              <option value="" selected disabled>انتخاب موضوع</option>
              <option value="1">پیشنهادات</option>
              <option value="2">انتقادات</option>
              <option value="3">مدیریت</option>
              <option value="4">حسابداری</option>
              <option value="5">سایر موضوعات</option>
            </select>
          </div>
          <p class="alert" v-if="!$v.title.required && $v.title.$dirty">
            موضوع پیغام را مشخص کنید
          </p>
          <div class="form-group">
            <label for="email-input">ایمیل خود را وارد کنید</label>
            <input
              v-model="email"
              @input="$v.email.$touch()"
              id="email-input"
              type="text"
              placeholder="مثال : someone@gmail.com"
            />
          </div>
          <p class="alert" v-if="!$v.email.email">
            ایمیل وارد شده معتبر نمیباشد
          </p>
          <p class="alert" v-if="!$v.email.required && $v.email.$dirty">
            نباید خالی باشد
          </p>
          <div class="form-group">
            <label for="phone-input">شماره تماس خود را وارد کنید</label>
            <input
              v-model="phone"
              @input="$v.phone.$touch()"
              id="phone-input"
              type="text"
              placeholder="مثال:0912000004"
              required
            />
          </div>
          <p class="alert" v-if="!$v.phone.required && $v.phone.$dirty">
            نباید خالی باشد
          </p>
          <p class="alert" v-if="!$v.phone.minLength && $v.phone.numeric">
            شماره تلفن نمیتواند کمتر از یازده رقم باشد
          </p>
          <p class="alert" v-if="!$v.phone.maxLength && $v.phone.numeric">
            شماره تلفن نمیتواند بیشتر از یازده رقم باشد
          </p>
          <p class="alert" v-if="!$v.phone.numeric">
            شماره تلفن حاوی حروف الفبا نیست ، فقط عدد وارد کنید
          </p>

          <div class="form-group">
            <label for="message-textarea">پیغام خود را بنویسید</label>
            <textarea
              v-model="body"
              @input="$v.body.$touch()"
              id="message-textarea"
              placeholder="پیام شما"
            ></textarea>
          </div>
          <p class="alert" v-if="!$v.body.required && $v.body.$dirty">
            نباید خالی باشد
          </p>
          <p class="alert" v-if="!$v.body.minLength">
            نوشته نباید کمتر از بیست کاراکتر باشد
          </p>
          <button @click.prevent="SendMessageToServer">ارسال پیام</button>
        </form>
        <router-link to="/" class="back-btn">بازگشت به صفحه اصلی</router-link>
      </div>
    </div>
  </div>
</template>


<script>
import Loading from "vue-loading-overlay";

import "vue-loading-overlay/dist/vue-loading.css";
import Vue from "vue";
import {
  required,
  maxLength,
  minLength,
  numeric,
  email,
  not,
} from "vuelidate/lib/validators";
export default {
  data() {
    return {
      title: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      body: "",
      fullPage: true,
      Loading: false,
    };
  },
  components: {
    Loading,
  },
  metaInfo: {
    title: "فروشگاه اینترنتی",
    titleTemplate: "%s - ارتباط با پشتیبانی",
    htmlAttrs: {
      lang: "utf-8",
      amp: true,
    },
  },
  validations: {
    title: {
      required,
    },
    firstName: {
      persianalpha: not(numeric),
      required,
    },
    lastName: {
      persianalpha: not(numeric),
      required,
    },
    email: {
      email,
      required,
    },
    phone: {
      numeric,
      required,
      minLength: minLength(11),
      maxLength: maxLength(11),
    },
    body: {
      required,
      minLength: minLength(20),
    },
  },
  methods: {
    SendMessageToServer() {
      this.$v.$touch();
      if (!this.$v.$error) {
        this.Loading = true;
        const request = {
          title: this.title,
          name: this.firstName + " " + this.lastName,
          phone: this.phone,
          email: this.email,
          body: this.body,
        };
        Vue.http
          .post("site_model/api/v1/contact_us/", request)

          .then((response) => {
            console.log(response);
            this.Loading = false;

            Vue.swal("انجام شد", "پیام شما با موفقیت ارسال شد", "success");
          })
          .catch((err) => {
            console.log(err);
            this.Loading = false;
            Vue.swal("انجام نشد", "ارسال پیام موفقیت آمیز نبود", "error");
          });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  outline: none;
}

body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: #f2f2f2;
}

.contact-form {
  width: 80vw;
  direction: rtl;
  display: flex;
  justify-content: space-between;
  background: #fff;
  margin: 50px auto;
}
.contact-form > * {
  width: 50%;
}
.contact-form .first-container {
  background: linear-gradient(45deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("https://colorlib.com/etc/cf/ContactFrom_v17/images/bg-01.jpg") center
      center/cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 710px;
}
.contact-form .first-container .info-container div {
  margin: 24px 0;
}
.contact-form .first-container .info-container div h3 {
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.2;
  padding-bottom: 10px;
}
.contact-form .first-container .info-container div:first-of-type p {
  max-width: 260px;
  color: #999;
}
.contact-form .first-container .info-container div p {
  font-size: 16px;
  line-height: 1.6;
  color: orange;
}
.contact-form .second-container {
  padding: 30px;
}
.contact-form .second-container h2 {
  font-size: 30px;
  font-weight: 400;
  color: #333;
  line-height: 1.2;
  text-align: center;
  margin-bottom: 20px;
}
.contact-form .second-container form {
  display: flex;
  flex-direction: column;
}
.contact-form .second-container form .form-group {
  margin-bottom: 10px;
}
.contact-form .second-container form .form-group * {
  min-height: 55px;
  border: 1px solid #e6e6e6;
  padding: 0 20px;
}
.contact-form .second-container form .form-group label {
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid #e6e6e6;
  font-size: 16px;
  color: #333;
  text-transform: uppercase;
  margin-top: -1px;
}
.contact-form .second-container form .form-group:first-of-type input {
  width: 50%;
}
.contact-form .second-container form .form-group input {
  width: 100%;
  font-size: 15px;
  margin-top: -2px;
  font-family: "BYekan";
}
.contact-form .second-container form .form-group select {
  width: 100%;
  font-size: 15px;
  height: 10px;
  margin-top: -2px;
  font-family: "BYekan";
  cursor: pointer;
}
.contact-form .second-container form .form-group select option {
  font-family: "BYekan";
}
.contact-form .second-container form .form-group input::placeholder,
.contact-form .second-container form .form-group textarea::placeholder {
  color: #999;
  font-family: "BYekan";
}
.contact-form .second-container form .form-group textarea {
  width: 100%;
  min-height: 80px;
  resize: none;
  padding: 10px 20px;
  margin-top: -1px;
  font-family: "BYekan";
}
.contact-form .second-container form button {
  width: 200px;
  height: 50px;
  background: orange;
  border-radius: 5px;
  color: #fff;
  font-size: 17px;
  font-weight: 600;
  text-transform: uppercase;
  border: 0;
  transition: all 0.3s;
  position: relative;
  right: calc(50% - 100px);
  cursor: pointer;
  margin-bottom: 1rem;
}
.contact-form .second-container form button:hover {
  background: green;
}

@media screen and (max-width: 800px) {
  .contact-form {
    width: 90vw;
  }
}
@media screen and (max-width: 700px) {
  .contact-form {
    flex-direction: column-reverse;
  }
  .contact-form > * {
    width: 100%;
  }
  .contact-form .first-container {
    padding: 40px 0;
  }
}
.info-icon {
  margin-left: 5px;
}
.back-btn {
  margin-top: 30px;
  background-color: orangered;
  right: calc(50% - 100px);
  position: relative;
  color: white;
  text-decoration: none;
  padding: 10px 31.1px;
}
.alert {
  color: red;
  font-size: 12px;
  margin-bottom: 1rem;
  margin-top: -10px;
}
</style>