<template>
  <div>
    <loading
      class="vld-parent"
      :active="WaitForLoading"
      :is-full-page="fullPage"
      loader="dots"
      backgroundColor="#ffffff"
      color="#FFA500"
      blue="10px"
    />
    <div class="contact-form">
      <div class="second-container">
        <h2>ویرایش</h2>
        <form @submit.prevent="EditClientInfo">
          <div class="form-group" v-if="ShowInfoClient.user">
            <label for="name-input">نام / نام خانوادگی </label>
            <input
              id="name-input"
              type="text"
              v-model="ShowInfoClient.user.first_name"
            />
            <input type="text" v-model="ShowInfoClient.user.last_name" />
          </div>
          <div v-if="ShowInfoClient.user" class="form-group">
            <label for="name-input">نام کاربری خود را وارد کنید</label>
            <input type="text" v-model="ShowInfoClient.user.username" />
          </div>
          <div v-if="ShowInfoClient.user" class="form-group">
            <label for="email-input">ایمیل خود را وارد کنید</label>
            <input
              id="email-input"
              type="text"
              v-model="ShowInfoClient.user.email"
            />
          </div>
          <p class="alert">
            توجه کنید اگر ایمیل خود را تغییر دهید باید مجددا احراز هویت کنید
          </p>
          <div class="form-group">
            <label for="phone-input">شماره تماس خود را وارد کنید</label>
            <input
              id="phone-input"
              type="text"
              v-model="ShowInfoClient.phone"
            />
          </div>
          <button>اعمال تغییرات</button>
        </form>
      </div>
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
  numeric,
  email,
  not,
} from "vuelidate/lib/validators";
export default {
  data() {
    return {
      fullPage: true,
    
    };
  },

  components: {
    Loading,
  },
  validations: {
    title: {
      required,
    },
    name: {
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
      minLength: minLength(30),
    },
  },
  methods: {
    EditClientInfo() {
      const EditInfoClint = {
        username: this.ShowInfoClient.user.username,

        Fname: this.ShowInfoClient.user.first_name,

        Lname: this.ShowInfoClient.user.last_name,

        phone: this.ShowInfoClient.phone,

        email: this.ShowInfoClient.user.email,
      };
      this.$store.dispatch("Putinformtion", EditInfoClint);
    },
  },
  created() {
    this.$store.dispatch("Getinformtion");
      if (this.$cookie.get('Sakura') == null) {
      this.$router.push("/");
    }
  },
  computed: {
    ShowInfoClient() {
      return this.$store.getters.GetInfo;
    },
    WaitForLoading(){
      return this.$store.getters.GetPendingLoading
    },
    isAuth(){
      return this.$store.getters.IsAuthenticated;
    }
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
  //   height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: #f2f2f2;
}

.contact-form {
  width: 80%;
  direction: rtl;
  display: flex;
  justify-content: space-between;
  background: #fff;
  //   margin: 20px 0;
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
  padding: 30px 0px;
}
.contact-form .second-container h2 {
  font-size: 30px;
  font-weight: 400;
  color: #333;
  line-height: 1.2;
  text-align: center;
  margin-bottom: 20px;
  margin-top: 20px;
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
  font-size: 15px;
  color: red;
  margin-bottom: 20px;
}
</style>


  Vue.swal({
        title: "از ویرایش اطلاعات خود مطمئن هستید؟؟",
        text: "توجه کنید ، اگر ایمیل و یا نام کاربری  خود را تغییر دهید ، مجددا باید احراز هویت کنید",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "بله ویرایش میکنم",
        cancelButtonText: "خیر ویرایش نمیکنم",
        showCloseButton: true,
        showLoaderOnConfirm: true,
      }).then((result) => {
        if (result.value) {
          if (this.phone == "") this.phone = this.$store.getters.GetInfo.phone;
          if (this.Fname == "")
            this.Fname = this.$store.getters.GetInfo.user.first_name;
          if (this.Lname == "")
            this.Lname = this.$store.getters.GetInfo.user.last_name;
          if (this.email == "")
            this.email = this.$store.getters.GetInfo.user.email;
          if (this.Uname == "")
            this.Uname = this.$store.getters.GetInfo.user.username;

          const EditInfoClint = {
            username: this.Uname,
            first_name: this.Fname,
            last_name: this.Lname,
            email: this.email,
            phone: this.phone,
          };

          this.$store.dispatch("Putinformtion", EditInfoClint);
          (this.email = ""),
            (this.phone = ""),
            (this.Uname = ""),
            (this.Fname = ""),
            (this.Lname = "");
          this.$store.dispatch("Getinformtion");

          this.$swal("ویرایش با موفقیت انجام شد", "موفقیت آمیز", "success");
        } else {
          this.$swal("کنسل شد", "اطلاعات جدید ویرایش نشدند", "info");
          (this.email = ""),
            (this.phone = ""),
            (this.Uname = ""),
            (this.Fname = ""),
            (this.Lname = "");
        }
      });