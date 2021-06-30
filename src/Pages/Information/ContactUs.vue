<template>
  <div>
    <div class="contact">
      <h1 class="call">
        <font-awesome-icon class="icon" icon="phone"></font-awesome-icon>تماس با ساکورا شاپ
      </h1>
      <svg height="1" width="100%">
        <line
          x1="80%"
          y1="0"
          x2="97%"
          y2="0"
          style="stroke: rgb(255, 255, 255); stroke-width: 10"
        />
      </svg>
      <section class="question">
        <ul class="topul">
          <li>
            <p>
              لطفا پیش از ارسال ایمیل یا تماس تلفنی ، ابتدا پرسش های متداول را
              مشاهده کنید
            </p>
          </li>
          <li><a href="" class="btn">پرسش های متداول</a></li>
        </ul>
      </section>
      <svg height="1" width="100%">
        <line
          x1="3%"
          y1="0"
          x2="97%"
          y2="0"
          style="stroke: rgb(255, 255, 255); stroke-width: 1"
        />
      </svg>
      <section class="form">
        <li>
          <label> موضوع</label>
          <div class="select">
            <select v-model="title" name="format" id="format">
              <option value="" selected disabled>--انتخاب موضوع--</option>
              <option value="1">پیشنهادات</option>
              <option value="2">انتقادات</option>
              <option value="3">مدیریت</option>
              <option value="4">حسابداری</option>
              <option value="5">سایر موضوعات</option>
            </select>
          </div>
        </li>

        <li>
          <label>نام و نام خانوادگی</label>
          <input v-model.trim="name" class="input" type="text" />
        </li>
        <li>
          <label> ایمیل</label>
          <input v-model="email" type="email" />
        </li>
        <li>
          <label>تلفن تماس</label>
          <input v-model="phone" type="text" />
        </li>
        <li>
          <label>متن پیام</label>
          <textarea
            v-model="body"
            class="message"
            rows="10"
            cols="50"
            autofocus
          ></textarea>
        </li>
        <button>ارسال پیام</button>
      </section>

      <svg height="1" width="100%">
        <line
          x1="3%"
          y1="0"
          x2="97%"
          y2="0"
          style="stroke: rgb(255, 255, 255); stroke-width: 1"
        />
      </svg>

      <section class="bottom">
        <div class="last">
          <ul class="contactul">
            <li class="li">
              <font-awesome-icon class="icon icon1" icon="phone"></font-awesome-icon>شماره تماس ما
              <span>0214557896</span>
            </li>
            <li class="li">
              <font-awesome-icon class="icon icon1" icon="envelope"></font-awesome-icon>ایمیل ما
              <span class="english">info@gmail.com</span>
            </li>
            <li class="li">
              <font-awesome-icon class="icon icon1" icon="clock"></font-awesome-icon>پاسخگویی 24 ساعته و 7 روز
              هفته
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>


<script>
export default {};
</script>

<style lang="scss" scoped>
.invalidtext textarea {
  border: 1px solid red;
}
.invalidtext label {
  color: red;
}
.invalid input {
  border: 1px solid red !important;
}
.invalid label {
  color: red;
}
.invalidformat {
  border: 1px solid red !important;
}
.contact {
  width: 65%;
  background-color: whitesmoke;
  border-radius: 10px;
  border: 1px solid black;
  margin: 2rem auto;
  margin-bottom: 5rem;
  border-radius: 50px;
}
.alert {
  color: red;
  font-size: 12px;
  font-weight: bold;
}
#format {
  width: 88%;
  // text-indent: 10px;
  height: 40px;
  text-align: right;
  text-indent: 10px;
  border-radius: 10px;
  // border: 0.5px solid orangered;
  display: block;
  background-image: none;
  background-color: white;
  appearance: none;
  outline: none;
  font-family: "BYekan";
}
.contactul {
  direction: rtl;
}
.last {
  // text-align: center;
  margin-right: 40%;
  padding: 3rem 0 3rem 0;
}
.li {
  margin-top: 10px;
}
li {
  text-decoration: none;
  list-style: none;
}
.question {
  margin-top: 2rem;
}
.call {
  direction: rtl;
  padding: 30px 30px 0 0;
  font-size: 18px;
  //   font-weight: 400;
}
.icon {
  margin-left: 5px;
}
.topul {
  display: flex;
  justify-content: space-between;
  direction: rtl;
  margin-bottom: 1rem;
  padding: 0 30px;
}

.btn {
  background-color: orangered;
  color: white;
  padding: 10px;
  border-radius: 10px;
  transition: all 0.3s;
  text-decoration: none;
  border: 1px solid orangered;

  &:hover {
    border: 1px solid orangered;
    color: orangered;
    background-color: white;
  }
}
.map {
  width: 458px;
  border-radius: 10px;
}
.form {
  display: grid;
  direction: rtl;
  // grid-template-columns: repeat(2, 500px);
  grid-template-rows: repeat(2, 100px);
  grid-template-columns: repeat(auto-fill, minmax(350px, 4fr));
  margin-right: 30px;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.icon1 {
  font-size: 20px;
  margin-left: 10px;
}
input {
  // padding: 8px 155px;
  // position: absolute;
  width: 88%;
  text-indent: 10px;
  height: 40%;
  text-align: right;
  border-radius: 10px;
  border: 0.5px solid rgb(138, 10, 99);
  display: block;
}

.massege {
  width: 800px;
}
textarea {
  display: block;
  resize: none;
  text-indent: 10px;
  width: 88%;
  border-radius: 10px;
  border: 0.5px solid rgb(138, 10, 99);
  text-indent: 10px;
  border: 1px solid rgb(138, 10, 99);
  outline: none;
  background-color: transparent;
  font-family: "BYekan";
  background-color: white;
}
button {
  width: 30%;
  height: 20%;
  margin-right: 56%;
  margin-top: 35%;
  border-radius: 5px;
  border: 1px solid gold;
  color: black;
  background-color: gold;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    color: white;
    border: 1px solid green;
    background-color: green;
  }
}
.info {
  display: flex;
  direction: rtl;
  margin-top: 2rem;
  padding: 30px;
  justify-content: space-between;
}
.right {
  width: 40%;
}
.left {
  width: 50%;
}
.box {
  margin-bottom: 3rem;
}
.box:last-child {
  margin-bottom: 0;
}
</style>