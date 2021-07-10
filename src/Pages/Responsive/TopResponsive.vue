<template>
  <div>
    <div class="res-header">
      <div class="container">
        <ul>
          <li>
            <router-link to="/login" ><font-awesome-icon class="icon icon1" icon="user"></font-awesome-icon>ورود</router-link>
          </li>
          <li>
            <router-link to="/search" ><font-awesome-icon class="icon icon2" icon="search"></font-awesome-icon>جست و جو</router-link>
          </li>
          <li>
            <router-link to="/shopcart" ><font-awesome-icon class="icon icon3" icon="shopping-cart"></font-awesome-icon>سبد خرید</router-link>
          </li>
          <li>
            <a  @click="showSubMenu"><font-awesome-icon class="icon icon4" icon="bars"></font-awesome-icon>دسته بندی</a>
          </li>
          <li>
            <router-link to="/"><font-awesome-icon class="icon icon5" icon="home"></font-awesome-icon>خانه</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
import ClickOutside from "vue-click-outside";

export default {
    data() {
        return {
            isActive : false
        }
    },
    directives:{
        ClickOutside
    },
    methods:{
        showSubMenu(){
            this.isActive = !this.isActive;
            this.$emit('show' , true)
        },
    }
};
</script>

<style lang="scss" scoped>
.res-header {
//   height: 90px;
  margin: 0 auto;
  display: none;

  @media screen and (max-width: 1100px){
      display: block;
  }

  
}
.icon {
  display: block;
  margin-top: 15px;
   margin-bottom: 5px;
}
.icon1 {
  margin-left: 6px;
}
.icon2 {
  margin-left: 20px;
}
.icon3 {
  margin-left: 20px;
}
.icon4 {
  margin-left: 25px;
}
.icon5 {
  margin-left: 5px;
}

.container {
  width: 100%;
  // margin: 0 auto;
  background-color: rgb(36, 34, 34);
  bottom: 0;
  position: fixed;
  // position: absolute;
  z-index: 999;
  height: 70px;
//   margin-bottom: 8px;
//   padding: 10px 0 20px 0;
}
ul {
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 5px;
  list-style: none;
}

a {
  color: white;
  transition: all 0.3s;
  font-size: 15px;
  // display: block;
  text-decoration: none;
}
a:hover {
  color: darkturquoise;
}
a:active {
  color: darkturquoise;
}

</style>