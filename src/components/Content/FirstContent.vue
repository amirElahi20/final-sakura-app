<template>
  <div>
    <main class="pos">
      <section class="section-about">
        <div class="u-center-text">
          <h2 class="heading-secondary">باکیفیت ترین محصولات خوراکی</h2>
        </div>
        <div class="row">
          <div class="col-1-of-2">
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
          <div class="col-1-of-2">
            <div class="composition">
              <img
                src="../../../public/img/mockup-graphics-enNffryKuQI-unsplash.jpg"
                alt=""
                class="composition__photo composition__photo--p1"
              />
              <img
                src="../../../public/img/neha-deshmukh-GoKXJaQoLQs-unsplash.jpg"
                alt=""
                class="composition__photo composition__photo--p2"
              />
              <img
                src="../../../public/img/wp3997775-purple-grapes-wallpapers.jpg"
                alt=""
                class="composition__photo composition__photo--p3"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
    <second-content></second-content>
    <the-carousel></the-carousel>
    <!-- <most-sells></most-sells> -->
  </div>
</template>


<script>
// import MostSells from "./FirstContent/MostSells.vue";
import TheCarousel from "./TheCarousel.vue";
import SecondContent from "./SecoundContent.vue";
export default {
  components: { SecondContent, TheCarousel },
};
</script>


<style lang="scss" scoped>
.section-about {
  padding: 2rem 0 6rem;
  margin-bottom: 5rem;
}
.pos {
  padding: 0 10px 0rem 10px;
}
.heading-secondary {
  font-size: 2rem;
  font-weight: 700;
  background-image: linear-gradient(to right, orange, orangered);
  -webkit-background-clip: text;
  display: inline-block;
  color: transparent;
  transition: all 0.3s;
}
.u-center-text {
  text-align: center;
  padding-bottom: 4rem;
}
.row {
  display: flex;
}
.col-1-of-2 {
  direction: rtl;
  width: 100%;
  display: block;
}
.heading-teritary {
  font-size: 25px;
  font-weight: 700;
  padding-bottom: 10px;
  color: orangered;
}
.paragraph {
  font-size: 20px;
  &:not(:last-child) {
    margin-bottom: 3rem;
  }
}
.btn-text {
  &:link,
  &:visited {
    font-size: 18px;
    color: orangered;
    display: inline-block;
    text-decoration: none;
    border-bottom: 1px solid orangered;
    padding: 3px;
    transition: all 0.2s;
    margin-top: -20px;
  }
  &:hover {
    background-color: orange;
    color: white;
    text-shadow: 0.5rem 1rem 2rem rgba(rgb(77, 75, 75), 0.5);
    transform: translateY(-2px);
    border-radius: 8px;
  }
  &:active {
    text-shadow: 0.5rem 1rem 1rem rgba(rgb(77, 75, 75), 0.5);
    transform: translateY(0);
  }
}
.composition {
  position: relative;
  width: 100%;
  margin-top: -100px;

  &__photo {
    box-shadow: 0.5rem 1rem 1rem rgba(rgb(77, 75, 75), 0.5);
    border-radius: 20px;

    transition: all 0.2s;
    outline-offset: 15px;
    position: absolute;

    &--p1 {
      right: 140px;
      z-index: 5;
      width: 330px;
      height: 320px;
      transition: all 0.3s;

      &:hover {
        outline: 5px solid yellow;
      }
    }
    &--p2 {
      right: 60px;
      top: 8rem;
      z-index: 10;
      width: 280px;
      height: 300px;
      transition: all 0.3s;
      &:hover {
        outline: 5px solid red;
      }
    }
    &--p3 {
      right: 300px;
      width: 300px;
      top: 9.5rem;
      z-index: 15;
      height: 240px;
      transition: all 0.3s;
      &:hover {
        outline: 5px solid rgb(173, 4, 173);
      }
    }
    &:hover {
      transform: scale(1.05) translateY(-0.5rem);
      box-shadow: 0.5rem 1rem 1rem rgba(rgb(77, 75, 75), 0.7);
      z-index: 20;
    }
  }
  &:hover &__photo:not(:hover) {
    transform: scale(0.95);
  }
}
</style>

