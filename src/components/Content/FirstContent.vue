<template>
  <div>
    <div class="u-center">
      <h2 class="header-title">پرفروش ترین محصولات</h2>
    </div>
    <main class="FirstContent">
      <div class="left">
        <div class="site-info">
          <h3 class="heading-teritary">تنوع محصول</h3>
          <p class="paragraph">
            جدیدترین محصولات خوراکی را با بهترین کیفیت و مناسب ترین قیمت در
            ساکورا شاپ پیدا خواهید کرد. تنوع محصولات در اینجا بالاست.
          </p>
          <h3 class="heading-teritary">با خیال راحت خرید کنید</h3>
          <p class="paragraph">
            در کمترین زمان و با خیال راحت خرید خود را انجام دهید. محصولات در
            کوتاه ترین زمان ممکن به دستتان خواهد رسید
          </p>
          <router-link to="/aboutus" class="btn-text"
            >درباره ما &larr;</router-link
          >
        </div>
      </div>
      <div class="right">
        <div class="img-box">
          <img
            class="image img1"
            src="../../../public/img/mockup-graphics-enNffryKuQI-unsplash.jpg"
            alt=""
          />
          <img
            class="image img2"
            src="../../../public/img/neha-deshmukh-GoKXJaQoLQs-unsplash.jpg"
            alt=""
          />
          <img
            class="image img3"
            src="../../../public/img/wp3997775-purple-grapes-wallpapers.jpg"
            alt=""
          />
        </div>
      </div>
    </main>

    <second-content></second-content>
    <the-carousel></the-carousel>
  </div>
</template>


<script>
import TheCarousel from "./TheCarousel.vue";
import SecondContent from "./SecoundContent.vue";
export default {
  components: { SecondContent, TheCarousel },
};
</script>


<style lang="scss" scoped>
.u-center {
  margin: 40px 0 50px 0;
  text-align: center;
}
.heading-teritary {
  color: orangered;
  font-size: 22px;
}
.paragraph {
  margin-top: 10px;
  margin-bottom: 2rem;
}
.header-title {
  font-size: 1.5rem;
  font-weight: 700;
  background-image: linear-gradient(to right, orange, orangered);
  -webkit-background-clip: text;
  display: inline-block;
  color: transparent;
  transition: all 0.3s;
}
h2:before,
h2:after {
  background-color: #000;
  content: "";
  display: inline-block;
  height: 1px;
  position: relative;
  vertical-align: middle;
  width: 14%;
}

h2:before {
  right: 0.5em;
  margin-left: -50%;
}

h2:after {
  left: 0.5em;
  margin-right: -50%;
}
.FirstContent {
  margin-bottom: 4rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  // direction: rtl;
}
.right {
  width: 550px;
  margin-top: -50px;
  margin-bottom: 30rem;
  @media screen and (max-width: 1260px) {
    margin-top: -180px;
  }
  @media screen and (max-width: 700px) {
    // margin-top: -180px;
    margin-right: 30%;
    margin-top: -160px;
  }
  @media screen and (max-width: 400px) {
    margin-top: -120px;
  }
}
.left {
  // background-color: yellow;
  width: 700px;
  height: 400px;
  margin-right: 10px;
}
img {
  width: 250px;
  height: 150px;
  position: absolute;
  outline-offset: 10px;
  box-shadow: 0.5rem 1rem 1rem rgba(rgb(77, 75, 75), 0.7);

  &:hover {
    transform: scale(1.05) translateY(-0.5rem);
    box-shadow: 0.5rem 1rem 1rem rgba(rgb(77, 75, 75), 0.7);
    z-index: 50;
  }
  &:hover &.image:not(:hover) {
    transform: scale(0.95);
  }
}

.img3 {
  // right: 300px;
  // left: 5px;
  margin-left: 100px;
  margin-top: 85px;
  width: 300px;
  z-index: 20;
  height: 240px;
  transition: all 0.3s;
  &:hover {
    outline: 5px solid rgb(173, 4, 173);
  }
  @media screen and (max-width: 700px) {
    // width: 180px;
    width: 45%;
    // margin-left: 120px;
    margin-left: 28%;
  }
}
.img2 {
  // right: 60px;
  // top: 8rem;
  margin-left: 20px;
  z-index: 10;
  margin-top: 75px;
  width: 280px;
  height: 300px;
  transition: all 0.3s;
  &:hover {
    outline: 5px solid red;
  }
  @media screen and (max-width: 700px) {
    // width: 150px;
    width: 45%;
    // margin-left: 50px;
    margin-left: 13%;
  }
}
.img1 {
  // right: 140px;
  margin-left: 200px;
  margin-top: 50px;
  z-index: 5;
  width: 330px;
  height: 300px;
  transition: all 0.3s;

  &:hover {
    outline: 5px solid yellow;
  }
  @media screen and (max-width: 700px) {
    // width: 250px;
    width: 50%;
    // margin-left: 170px;
    margin-left: 40%;
  }
}
.site-info {
  margin-top: 10px;
  direction: rtl;
  margin-right: 5px;
}
.btn-text {
  text-decoration: none;
  color: white;
  background-color: orange;
  padding: 5px;
  border-radius: 5px;
}
// .composition {
//   position: relative;
//   width: 100%;
//   margin-top: -100px;

//   &__photo {
//     box-shadow: 0.5rem 1rem 1rem rgba(rgb(77, 75, 75), 0.5);
//     border-radius: 20px;

//     transition: all 0.2s;
//     outline-offset: 15px;
//     position: absolute;

//     &--p1 {
//       right: 140px;
//       z-index: 5;
//       width: 330px;
//       height: 320px;
//       transition: all 0.3s;

//       &:hover {
//         outline: 5px solid yellow;
//       }
//     }
//     &--p2 {
//       right: 60px;
//       top: 8rem;
//       z-index: 10;
//       width: 280px;
//       height: 300px;
//       transition: all 0.3s;
//       &:hover {
//         outline: 5px solid red;
//       }
//     }
//     &--p3 {
//       right: 300px;
//       width: 300px;
//       top: 9.5rem;
//       z-index: 15;
//       height: 240px;
//       transition: all 0.3s;
//       &:hover {
//         outline: 5px solid rgb(173, 4, 173);
//       }
//     }
//     &:hover {
//       transform: scale(1.05) translateY(-0.5rem);
//       box-shadow: 0.5rem 1rem 1rem rgba(rgb(77, 75, 75), 0.7);
//       z-index: 20;
//     }
//   }
//   &:hover &__photo:not(:hover) {
//     transform: scale(0.95);
//   }
// }

// .section-about {
//   padding: 2rem 0 6rem;
//   margin-bottom: 5rem;
// }
// .pos {
//   padding: 0 10px 0rem 10px;
// }
// .heading-secondary {
//   font-size: 2rem;
//   font-weight: 700;
//   background-image: linear-gradient(to right, orange, orangered);
//   -webkit-background-clip: text;
//   display: inline-block;
//   color: transparent;
//   transition: all 0.3s;
// }
// .u-center-text {
//   text-align: center;
//   padding-bottom: 4rem;
// }
// .row {
//   display: flex;
//   justify-content: center;
//   flex-wrap: wrap;
// }
// .col-1-of-2 {
//   width: 250px;
//   // background-color: red;
// }
// .col-1-of-1{
//   max-width: 50%;
//   // background-color: yellow/;
//   direction: rtl;
//   margin: 0 auto;

// }
// .heading-teritary {
//   font-size: 25px;
//   font-weight: 700;
//   padding-bottom: 10px;
//   color: orangered;
// }
// .paragraph {
//   font-size: 20px;
//   &:not(:last-child) {
//     margin-bottom: 3rem;
//   }
// }
// .btn-text {
//   &:link,
//   &:visited {
//     font-size: 18px;
//     color: orangered;
//     display: inline-block;
//     text-decoration: none;
//     border-bottom: 1px solid orangered;
//     padding: 3px;
//     transition: all 0.2s;
//     margin-top: -20px;
//   }
//   &:hover {
//     background-color: orange;
//     color: white;
//     text-shadow: 0.5rem 1rem 2rem rgba(rgb(77, 75, 75), 0.5);
//     transform: translateY(-2px);
//     border-radius: 8px;
//   }
//   &:active {
//     text-shadow: 0.5rem 1rem 1rem rgba(rgb(77, 75, 75), 0.5);
//     transform: translateY(0);
//   }
// }
</style>

