<template>
  <div>
    <div class="total">
      <div class="left">
        <div class="u-center-text">
          <h2 class="heading-secondary">محصولات</h2>
        </div>
        <div class="row">
          <div class="box" v-for="item in 10" :key="item">
            <img
              class="image"
              src="../../../public/img/pexels-pixabay-327098.jpg"
              alt=""
            />
            <p class="paragraph">موز</p>
            <h5 class="cost">50000 تومان</h5>
            <router-link
            to="/"
              class="btn"
              >مشاهده محصول</router-link
            >
            <!-- <p class="available" v-if="!product.available">
              کالای مورد نظر موجود نیست!
            </p> -->
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
}
</script>


<style lang="scss" scoped>
$color-primary-dark: orange;
$color-primary-light: orangered;
.heading-secondary {
  font-size: 2rem;
  font-weight: 700;
  background-image: linear-gradient(
    to right,
    $color-primary-dark,
    $color-primary-light
  );
  -webkit-background-clip: text;
  display: inline-block;
  color: transparent;
  transition: all 0.3s;
}
.u-center-text {
  text-align: center;
  padding-bottom: 1rem;
}
.available {
  font-size: 12px;
  margin-top: 7px;
  color: red;
  font-weight: bold;
  border-bottom: 1px solid red;
  position: absolute;
  margin-top: -220px;
  margin-right: 40px;
  transform: rotate(-30deg);
}
.total {
  height: auto;
  display: flex;
  direction: rtl;
  padding: 5rem 0 5rem 0;
}
.left {
  width: 100%;
}
.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px;
}
.box {
  background-color: white;
  text-align: center;
  padding: 15px;
  margin-left: 20px;
  margin-top: 20px;
  border-radius: 10px;
  width: 240px;
  border: 1px solid brown;
  transition: all 0.5s;
  &:hover {
    box-shadow: 0.5rem 1rem 1rem rgba(rgb(163, 158, 158), 0.5);
  }
}
.image {
  width: 100%;
  height: 190px;
  border: 1px solid brown;
  border-radius: 10px;
}
.blurimg {
  filter: blur(7px);
}
.paragraph {
  display: block;
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 10px;
}

.btn {
  display: block;
  text-align: center;
  background-color: orangered;
  text-decoration: none;
  padding: 5px;
  border-radius: 10px;
  font-size: 13px;
  margin-top: 10px;
  cursor: pointer;
  color: white;
  border: 1px solid orangered;
  transition: all 0.5s;
  &:hover {
    background-color: white;
    border: 1px solid orangered;
    color: orangered;
  }
}
</style>