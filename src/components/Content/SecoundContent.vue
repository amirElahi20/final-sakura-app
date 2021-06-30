<template>
  <div>
    <section class="section-features">
      <div class="row">
        <div class="col-1-of-4">
          <div class="feature-box">
              <font-awesome-icon class="fa" icon="check-circle" />
            <h3 class="heading-tertiary">ضمانت و تضمین اصل بودن</h3>
            <p class="feature-box__text">لذت خرید کالای درجه یک و اصل</p>
          </div>
        </div>
        <div class="col-1-of-4">
          <div class="feature-box">
              <font-awesome-icon class="fa" icon="shopping-bag" />
            <h3 class="heading-tertiary">خرید راحت</h3>
            <p class="feature-box__text">
              به راحتی و با چندکلیک خرید خود را انجام دهید
            </p>
          </div>
        </div>
        <div class="col-1-of-4">
          <div class="feature-box">
              <font-awesome-icon class="fa" icon="credit-card" />
            <h3 class="heading-tertiary">پرداخت آنی و سفارش آنلاین</h3>
            <p class="feature-box__text">پرداخت بدون دردسر و امن در خانه</p>
          </div>
        </div>
        <div class="col-1-of-4">
          <div class="feature-box">
              <font-awesome-icon class="fa" icon="truck" />
            <h3 class="heading-tertiary">تحویل در کوتاه ترین زمان ممکن</h3>
            <p class="feature-box__text">ارسال کالا به تمام نقاط ایران</p>
          </div>
        </div>
        <div class="col-1-of-4">
          <div class="feature-box">
              <font-awesome-icon class="fa" icon="undo" />
            <h3 class="heading-tertiary">بازگشت وجه</h3>
            <p class="feature-box__text">
              ارجاع کالا و بازگشت وجه درصورت عدم رضایت
            </p>
          </div>
        </div>
      </div>
    </section>
  <mostsell-product></mostsell-product>
  </div>
</template>

<script>
import MostsellProduct from './MostsellProduct.vue';
export default {
  components: { MostsellProduct },};
</script>


<style lang="scss" scoped>
.heading-tertiary {
  font-size: 15px;
  // color: white;
}
.row {
  display: flex;
  justify-content: space-evenly;
  flex-wrap:wrap ;
}
.feature-box {
  background-color: rgba(255, 255, 255, 0.37);
  width: 220px;
  font-size: 20px;
  padding: 2.5rem 0px;
  text-align: center;
  border-radius: 5px;
  transition: all 0.3s;
  color: white;
  margin-top: 30px;

  &__icon {
    font-size: 50px;
    margin-bottom: 20px;
  }
  &:hover {
    transform: translateY(-1.5rem) scale(1.03);
    cursor: pointer;
  }
  &__text {
    font-size: 12px;
    margin-top: 5px;
  }
}
.section-features {
  padding: 13rem 0;
  background-image: linear-gradient(315deg, #000000 0%, #0000003a 74%),
    url("../../../public/img/zaib-tse-KVv5lFOMY1E-unsplash.jpg");
  background-color: #2d3436;
  background-size: cover;
  background-position: bottom;
  margin-top: -10rem;

  transform: skewY(-7deg);

  & > * {
    transform: skewY(7deg);
  }
}
.fa{
    font-size: 35px;
}
</style>
