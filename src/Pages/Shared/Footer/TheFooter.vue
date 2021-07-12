<template>
  <div>
<!--Some of this HTML is directly from Pavilion.  You can change it to whatever you want if you want to mimic this design.-->
<footer class="flex-rw">
  
  <ul class="footer-list-top">
    <li>
      <h4 class="footer-list-header">درباره ساکورا</h4></li>
    <li><a href='/shop/about-mission' class="generic-anchor footer-list-anchor" itemprop="significantLink">درباره ما</a></li>
    <li><a href='/promos.html' class="generic-anchor footer-list-anchor" itemprop="significantLink">ارتباط با ما</a></li>
    <li><a href='/retailers/new-retailers.html' class="generic-anchor footer-list-anchor" itemprop="significantLink">لیست محصولات</a></li>

    <li><a href='/job-openings.html' itemprop="significantLink" class="generic-anchor footer-list-anchor">موقعیت های شغلی</a></li>

    <li><a href='/shop/about-show-schedule' class="generic-anchor footer-list-anchor" itemprop="significantLink">اخبار</a></li>
  </ul>
  <ul class="footer-list-top">
    <li>
      <h4 class="footer-list-header">محصولات</h4></li>


    <li><a href='/Angels/cat/id/70' class="generic-anchor footer-list-anchor">میوه خشک</a></li>
    <li><a href='/Home-Decor/cat/id/64' class="generic-anchor footer-list-anchor">آجیل</a></li>
    <li><a href='/Mugs/cat/id/32' class="generic-anchor footer-list-anchor">گز</a></li>
    <li><a href='/Pet-Lover/cat/id/108' class="generic-anchor footer-list-anchor">خشکبار</a></li>
    <li><a href='/Ladies-Accessories/cat/id/117' class="generic-anchor footer-list-anchor" target="_blank">محصولات تر</a></li>
  </ul>
  <ul class="footer-list-top">
    <li id='help'>
      <h4 class="footer-list-header">خدمات مشتریان</h4></li>
    <li><a href='/shop/about-contact' class="generic-anchor footer-list-anchor" itemprop="significantLink">راهنمای خرید</a></li>
    <li><a href='/faq.html' class="generic-anchor footer-list-anchor" itemprop="significantLink">پاسخ به پرسش های متداول</a></li>
    <li id='find-a-store'><a href='/shop/store-locator' class="generic-anchor footer-list-anchor" itemprop="significantLink">رویه های بازگرداندن کالا</a></li>
    <li id='user-registration'><a href='/shop/user-registration?URL=' class="generic-anchor footer-list-anchor" itemprop="significantLink">شرایط استفاده</a></li>
    <li id='order-tracking'><a href='/shop/order-status' itemprop="significantLink" class="generic-anchor footer-list-anchor">گزارش باگ</a></li>
  </ul>
  <section class="footer-social-section flex-rw">
      <span class="footer-social-overlap footer-social-connect">
      ارتباطی <span class="footer-social-small">های</span> پل
      </span>
      <span class="footer-social-overlap footer-social-icons-wrapper">
      <a href="#"  target="_blank" title="whatsapp" itemprop="significantLink"><font-awesome-icon class="whatsapp" :icon="['fab', 'whatsapp']"></font-awesome-icon></a>
      <a href="#"  target="_blank" title="Youtube" itemprop="significantLink"><font-awesome-icon class="telegram" :icon="['fab', 'telegram']"></font-awesome-icon></a>
      <a href="#"  target="_blank" title="Google Plus" itemprop="significantLink"><font-awesome-icon class="instagram" :icon="['fab', 'instagram']"></font-awesome-icon></a>
      </span>
  </section>
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

html, body {
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
  margin-bottom: 5rem;
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

.footer-social-overlap {
  position: relative;
  z-index: 2;
  background: #373737;
  padding: 0 20px;
}

.footer-social-connect {
  display: flex;
  align-items: center;
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
</style>