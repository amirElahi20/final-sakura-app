<template>
  <div>
    
    <div class="contact-form">
      <div class="second-container">
        <h2>مشاهده</h2>
        <form>
          <div class="form-group">
            <label for="name-input">نام شما:</label>
            <div id="name-input" type="text">
              {{ShowInfoClient.user.first_name}}
              </div>
            <div id="name-input" type="text">
              {{ShowInfoClient.user.last_name}}
              </div>
          </div>
          <div class="form-group">
            <label for="name-input">نام کاربری:</label>
            <div id="name-input" class="english" type="text">
              {{ShowInfoClient.user.username}}
              </div>
          </div>
          <div class="form-group">
            <label for="email-input">ایمیل شما:</label>
            <div id="name-input" class="english" type="text">
             {{ShowInfoClient.user.email}}
            </div>
          </div>
          <div class="form-group">
            <label for="phone-input">شماره تماس خود را وارد کنید</label>
            <div id="name-input" class="english" type="text">
              {{ShowInfoClient.phone}}
            </div>
          </div>
           <div class="form-group">
            <label for="phone-input">موجودی شما</label>
            <div id="name-input" class="english" type="text">
              {{ShowInfoClient.money.toLocaleString()}}
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
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
      name: "",
      email: "",
      phone: "",
      body: "",
    };
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
  computed:{
    ShowInfoClient(){
      return this.$store.getters.GetInfo
    }
  },
  created(){
    this.$store.dispatch("Getinformtion")
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
  height: 10px;
  border: 1px solid #e6e6e6;
  font-size: 16px;
  color: #333;
  text-transform: uppercase;
}
.contact-form .second-container form .form-group div {
  padding-top: 13px;
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
</style>