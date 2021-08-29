<template>
  <div>
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
        <h2>گزارش باگ</h2>
        {{ selectedFile }}
        <form>
          <div class="form-group">
            <label for="name-input">نام خود را وارد کنید</label>
            <input
              id="name-input"
              v-model="name"
              type="text"
              placeholder="نام"
              required
            />
            <input
              type="text"
              v-model="Lname"
              placeholder="نام خانوادگی"
              required
            />
          </div>

          <label for="email-input">ارسال تصویر مربوط به باگ</label>
          <input
            @change="fileChange($event.target.files[0])"
            id="email-input"
            type="file"
            placeholder="مثال : someone@gmail.com"
          />
          <!-- <div v-if="!noFiles" class="confirm_pic">
            <p>عکس اضافه شد</p>
            <p>نام فایل :{{ FileName }}</p>
          </div> -->
          <div class="form-group">
            <label for="message-textarea">باگ در کدام بخش دیده شد؟؟</label>
            <textarea
              id="message-textarea"
              v-model="title"
              placeholder="پیام شما"
            ></textarea>
          </div>
          <div class="form-group">
            <label for="message-textarea">پیغام خود را بنویسید</label>
            <textarea id="message-textarea" placeholder="پیام شما"></textarea>
          </div>
          <p class="pay-attention">
            لطفا توجه داشته باشید قبل از برطرف شدن خطای گزارش شده، هیچگونه
            اطلاعاتی در مورد آن را عمومی نکرده یا با دیگران به اشتراک نگذارید.
            بدون رضایت افراد با حساب کاربری آن‌ها تعاملی نداشته باشید و از شکستن
            حریم شخصی افراد و ایجاد مشکل در اطلاعات دیگران اجتناب کنید. همچنین
            به هیچ عنوان از مشکلات که یافته‌اید، بهره‌برداری و سوءاستفاده نکنید
            و به قوانین کشور پایبند باشید. با توجه به اهمیت خطای گزارش شده از
            سوی شما، ما به پاس قدردانی هدیه‌ای برای شما در نظر خواهد گرفت. توجه
            داشته باشید بعضی از مشکلات به دلیل کم اهمیت بودن شامل هدیه نخواهند
            بود.
          </p>
          <button @click.prevent="SendBugToServer">ارسال پیام</button>
        </form>
        <router-link to="/" class="back-btn">بازگشت به صفحه اصلی</router-link>
      </div>
    </div>
  </div>
</template>


<script>
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
      name: "",
      Lname: "",
      body: "",
      noFiles: true,
      FileName: "",
      selectedFile: null,
    };
  },
  metaInfo: {
    title: "فروشگاه اینترنتی",
    titleTemplate: "%s - گزارش باگ",
    htmlAttrs: {
      lang: "utf-8",
      amp: true,
    },
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
    SendBugToServer() {
      const fd = new FormData();
      fd.append("image", this.selectedFile)
      
      const request = {
        title: this.title,
        name: this.name,
        last_name : this.Lname,
        body: this.body,
      };
      Vue.http
        .post("site_model/api/v1/bugs/", request)

        .then((response) => {
          console.log(response);
          alert('ok')
        }).catch(err =>{
          console.log(err)
          alert('nokey')
        })
    },
    fileChange(event) {
      // this.noFiles = !event.target.files.length;
      // this.FileName = event.target.files[0].name;
      // this.selectedFile = event.target.files[0];
      console.log(event);
      this.selectedFile = event;
      // alert(event.target.files[0])
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
#email-input {
  padding: 20px;
  margin-bottom: 2rem;
  width: 100%;
}
#email-input::-webkit-file-upload-button {
  visibility: hidden;
}
#email-input::before {
  content: "انتخاب تصویر";
  display: inline-block;
  background: linear-gradient(top, #f9f9f9, #e3e3e3);
  border: 1px solid #999;
  border-radius: 3px;
  padding: 10px 8px;
  outline: none;
  white-space: nowrap;
  -webkit-user-select: none;
  cursor: pointer;
  text-shadow: 1px 1px #fff;
  font-weight: 700;
  font-size: 10pt;
  width: 103%;
  height: 100%;
  text-align: center;
  margin-right: -15px;
}
#email-input:hover::before {
  border-color: black;
}
#email-input:active::before {
  background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
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
.pay-attention {
  margin-bottom: 1rem;
  font-size: 14px;
  direction: rtl;
}
.confirm_pic {
  color: green;
  font-size: 12px;
  margin: -45px 10px 30px 0;
}
</style>