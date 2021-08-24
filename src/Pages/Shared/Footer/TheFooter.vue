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
    <footer >
      <div class="flex-rw">
      <ul class="footer-list-top">
        <li>
          <h4 class="footer-list-header">درباره ساکورا</h4>
        </li>
        <li>
          <router-link
            to="/"
            class="generic-anchor footer-list-anchor"
            itemprop="significantLink"
            >خانه</router-link
          >
        </li>
        <li>
          <router-link
            to="/aboutus"
            class="generic-anchor footer-list-anchor"
            itemprop="significantLink"
            >درباره ما</router-link
          >
        </li>
        <li>
          <router-link
            to="/contactus"
            class="generic-anchor footer-list-anchor"
            itemprop="significantLink"
            >ارتباط با ما</router-link
          >
        </li>
        <li>
          <router-link
            to="/products"
            class="generic-anchor footer-list-anchor"
            itemprop="significantLink"
            >لیست محصولات</router-link
          >
        </li>

        <li>
          <router-link
            to="/shopcart"
            class="generic-anchor footer-list-anchor"
            itemprop="significantLink"
            >سبد خرید</router-link
          >
        </li>
      </ul>
    
      <ul class="footer-list-top">
        <li id="help">
          <h4 class="footer-list-header">خدمات مشتریان</h4>
        </li>
        <li>
          
          <a
            href="/shop/about-contact"
            class="generic-anchor footer-list-anchor"
            itemprop="significantLink"
            >راهنمای خرید</a
          >
        </li>
        <li>
          <router-link
            to="/FrequentlyQuestions"
            class="generic-anchor footer-list-anchor"
            itemprop="significantLink"
            >پاسخ به پرسش های متداول</router-link
          >
        </li>
        <li id="find-a-store">
          <a
            href="/shop/store-locator"
            class="generic-anchor footer-list-anchor"
            itemprop="significantLink"
            >رویه های بازگرداندن کالا</a
          >
        </li>
        <li id="user-registration">
          <a
            href="/shop/user-registration?URL="
            class="generic-anchor footer-list-anchor"
            itemprop="significantLink"
            >شرایط استفاده</a
          >
        </li>
        <li id="order-tracking">
          <a
            href="/bugs_reaport"
            itemprop="significantLink"
            class="generic-anchor footer-list-anchor"
            >گزارش باگ</a
          >
        </li>
      </ul>
      <section class="footer-social-section flex-rw">
        <span class="footer-social-overlap footer-social-connect">
          ارتباطی <span class="footer-social-small">های</span> پل
        </span>
        <span class="footer-social-overlap footer-social-icons-wrapper">
          <a
            href="#"
            target="_blank"
            title="whatsapp"
            itemprop="significantLink"
            ><font-awesome-icon
              class="whatsapp"
              :icon="['fab', 'whatsapp']"
            ></font-awesome-icon
          ></a>
          <a href="#" target="_blank" title="Youtube" itemprop="significantLink"
            ><font-awesome-icon
              class="telegram"
              :icon="['fab', 'telegram']"
            ></font-awesome-icon
          ></a>
          <a
            href="#"
            target="_blank"
            title="Google Plus"
            itemprop="significantLink"
            ><font-awesome-icon
              class="instagram"
              :icon="['fab', 'instagram']"
            ></font-awesome-icon
          ></a>
        </span>
      </section>
      </div>
      <div class="footer-img">
        <img class="img-footer" src="../../../../public/img/jar.png" alt="">
        <img class="img-footer" src="../../../../public/img/tamas-tuzes-katai-GZ9_EfvDCFU-unsplash.jpg" alt="">
      </div>
    </footer>
  </div>
</template>


<script>
export default {};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

html,
body {
  height: 100%;
}

body {
  font-family: "BYekan";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

.generic-anchor {
  color: orange;
  transition: all 0.4s;
}
.generic-anchor:hover {
  color: orangered;
}

.flex-rw {
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
  margin-top: 3rem;
}

main {
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9b9b9b;
  line-height: 1;
}

footer {
  background: #373737;
  margin-top: auto;
  width: 100%;
}

.footer-list-top {
  width: 33.333%;
  padding: 10px;
}

.footer-list-top > li {
  text-align: center;
  padding-bottom: 10px;
}

.footer-list-header {
  padding: 10px 0 5px 0;
  color: #fff;
  font: 2.3vw "BYekan";
  @media screen and (max-width: 500px) {
    font: 4vw "BYekan";
  }
}

.footer-list-anchor {
  font: 1.3em "BYekan";
  @media screen and (max-width: 500px) {
    font: 3vw "BYekan";
  }
}

.footer-social-section {
  width: 100%;
  align-items: center;
  justify-content: space-around;
  position: relative;
  margin-top: 5px;
  @media screen and (max-width: 800px) {
    margin-bottom: 5rem;
  }
}

.footer-social-section::after {
  content: "";
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 10px;
  border-top: 1px solid #ccc;
  width: calc(100% - 20px);
}
.footer-img{
  display: flex;
  justify-content: space-around;
}
.footer-social-overlap {
  position: relative;
  z-index: 2;
  background: #373737;
  padding: 0 20px;
}

.footer-social-connect {
  display: flex;
  align-items: center;
  // justify-content: center;
  font: 3.5em "BYekan";
  color: #fff;
  @media screen and (max-width: 500px) {
    font: 7vw "BYekan";
    margin-top: 25px;
  }
}

.footer-social-small {
  font-size: 0.6em;
  padding: 0px 20px;
}

.footer-social-overlap > a {
  font-size: 3em;
}

.footer-social-overlap > a:not(:first-child) {
  margin-left: 0.38em;
}

.footer-bottom-section {
  width: 100%;
  padding: 10px;
  border-top: 1px solid #ccc;
  margin-top: 10px;
}

.footer-bottom-section > div:first-child {
  margin-right: auto;
}

.footer-bottom-wrapper {
  font-size: 1.5em;
  color: #fff;
}

.footer-address {
  display: inline;
  font-style: normal;
}

.whatsapp {
  transition: all 0.3s;
  border-radius: 100px;
  padding: 1px;
  color: white;
  @media screen and (max-width: 500px) {
    font-size: 50px;
  }
}
.whatsapp:hover {
  color: green;
}

.telegram {
  transition: all 0.3s;
  padding: 2px;
  color: white;
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
  color: white;
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
.layout {
  display: none;
}
.img-footer{
  width: 40%;
  height: 150px;
  margin-bottom: 40px;
    @media screen and (max-width: 500px) {
   height: 100px;
   margin-top: -60px;
  }
  //    @media screen and (max-width: 800px) {
  // display: none;
  // }
  // padding: 20px;
}
</style>