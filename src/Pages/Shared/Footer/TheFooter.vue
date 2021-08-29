<template>
  <div
    :class="{
      layout:
        $route.name == 'login' ||
        $route.name == 'register' ||
        $route.name == 'forgetpass' ||
        $route.name == 'Confirm' ||
        $route.name == 'shopcart' ||
        $route.name == 'ContactUs' ||
        $route.name == 'UserDashboard' ||
        $route.name == 'useraccount' ||
        $route.name == 'useraccountedit' ||
        $route.name == 'useraccountpass' ||
        $route.name == 'useraccountpurches' ||
        $route.name == 'useraccounttickets' ||
        $route.name == 'useraccountorders' ||
        $route.name == 'FrequentlyAskedQuestions' ||
        $route.name == 'reaport' ||
        $route.name == 'resetpassword',
    }"
  >
    <div class="footer">
      <div class="content">
        <div class="services">
          <h4>سرویس</h4>
          <p><a href="/FrequentlyQuestions">پاسخ به پرسش های متداول</a></p>
          <p><a href="/bugs_reaport">گزارش باگ</a></p>
          <p><a href="#">شرایط استفاده</a></p>
          <p><a href="#">حریم خصوصی</a></p>
        </div>
        <div class="social-media">
          <h4>پل های ارتباطی</h4>
          <p>
            <a
              href="https://telegram.org"
              ><i class="fab fa-linkedin"></i>تلگرام</a
            >
          </p>
          <p>
            <a href="https://www.instagram.com/"
              ><i class="fab fa-twitter"></i> اینستاگرام</a
            >
          </p>
          <p>
            <a href="https://www.whatsapp.com/"
              ><i class="fab fa-github"></i> واتسپ</a
            >
          </p>
          <p>
            <a href="tel:2589362147895"
              ><i class="fab fa-codepen"></i> شماره تماس</a
            >
          </p>
        </div>
        <div class="links">
          <h4>دسترسی سریع</h4>
          <p><a href="/">خانه</a></p>
          <p><a href="/products">محصولات</a></p>
          <p><a href="/aboutus">درباره ما</a></p>
          <p><a href="/contactus">ارتباط با ما</a></p>
        </div>
        <div class="details">
          <h4 class="address">آدرس</h4>
          <p>
            ایران، استان تهران، تهران، <br />
            میان بزرگراه‌ حکیم غرب، <br />
            بعد از بزرگراه چمران
          </p>
          <h4 class="mobile">شماره تماس</h4>
          <p><a href="tel:123456">123456</a></p>
          <h4 class="mail">ایمیل</h4>
          <p><a href="#" class="english">abcdef@gmail.com</a></p>
        </div>
      </div>
      <footer>
        <hr />
        &copy; حقوق برای ناشر محفوظ میباشد
      </footer>
    </div>
  </div>
</template>


<script>
export default {};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.layout{
  display: none;
}

.footer {
  border-top: 1px solid black;
  padding: 15px;
  margin-top: 70px;
  direction: rtl;
  width: 100%;
  bottom: 0;
  left: 0;
}

.footer .heading {
  max-width: 1010px;
  width: 90%;
  text-transform: uppercase;
  margin: 0 auto;
  margin-bottom: 3rem;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}

.footer .content {
  display: flex;
  justify-content: space-evenly;
  margin: 1.5rem;
}

.footer .content p {
  margin-bottom: 1.3rem;
  color: rgba(0, 0, 0, 0.829);
}

.footer .content a {
  text-decoration: none;
  transition: all 0.4s;
  color: rgba(0, 0, 0, 0.829);
}

.footer .content a:hover {
  color: orange;
}

.footer .content h4 {
  margin-bottom: 1.3rem;
  font-size: 19px;
}

footer {
  text-align: center;
  margin-bottom: 2rem;
}

footer hr {
  margin: 2rem 0;
}

@media (max-width: 767px) {
  .footer .content {
    display: flex;
    flex-direction: column;
    font-size: 14px;
  }

  .footer {
    position: unset;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .footer .content,
  .footer {
    font-size: 14px;
  }
}

@media (orientation: landscape) and (max-height: 500px) {
  .footer {
    position: unset;
  }
}
</style>