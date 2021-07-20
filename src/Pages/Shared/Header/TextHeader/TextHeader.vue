<template>
  <div>
    <div class="textheader">
      <h1 class="heading-primary">
        <span class="heading-primary-main">ساکورا شاپ</span>
        <span class="heading-primary-sub">خرید اینترنتی انواع میوه خشک</span>
      </h1>
      <router-link class="btn" to="/products">نمایش محصولات</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.textheader {
  left: 50%;
  top: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  text-align: center;
  background-color: rgba(255, 255, 255, 0.37);
  // border-radius: 10px;
  padding: 40px;
  margin-top: 50px;
  width: 40%;
  z-index: 1;
 @media screen and (max-width: 900px) {
    margin-top:0px ;
    width: 70%;
  }
}

.heading-primary {
  color: white;
  backface-visibility: hidden;
  margin-bottom: 60px;
  
  
}
.heading-primary-main {
  display: block;
  font-size: 30px;
  font-weight: 400;
  letter-spacing: 0;
   @media screen and (max-width: 900px) {
    font-size: 25px;
  }

  animation-name: moveInRight;
  animation-duration: 2s;
}
.heading-primary-sub {
  display: block;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0;
    @media screen and (max-width: 900px) {
    font-size: 15px;
  }
  animation-name: moveInLeft;
  animation-duration: 2s;
}
@keyframes moveInLeft {
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  80% {
    transform: translateX(10px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes moveInRight {
  0% {
    opacity: 0;
    transform: translateX(100px);
  }
  80% {
    transform: translateX(-10px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.btn:link,
.btn.visited {
  text-decoration: none;
  padding: 15px 40px;
  display: inline-block;
  // border-radius: 100px;
  transition: all 0.2s;
  position: relative;
  animation-name: moveInBottom;
  animation-duration: 1s;
  animation-delay: 0.75s;
  animation-fill-mode: backwards;
}
.btn {
  background-color: orangered;
  color: white;
  position: relative;
  direction: rtl;
  margin-top: -20px;
}
.btn:hover {
  transform: translateY(-5px);
}
.btn:active {
  transform: translateY(3px);
}
.btn::after {
  content: "";
  display: inline-block;
  height: 100%;
  width: 100%;
  // border-radius: 100px;
  background-color: orangered;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  transition: all 0.4s;
}
.btn:hover::after {
  transform: scaleX(1.4) scaleY(1.6);
  opacity: 0;
}

@keyframes moveInBottom {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>