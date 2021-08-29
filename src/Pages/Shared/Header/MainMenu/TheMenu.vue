<template>
  <div>
    <div
      class="menu"
      :class="{
        scroll: scrollPosition >= 160,
        menu: scrollPosition < 160,
      }"
    >
      <ul class="list-menu">
        <li class="list-items">
          <router-link class="home-link" to="/products">
            <h4 class="sub-name">محصولات</h4>
          </router-link>
        </li>
        <li
          @mouseover="sub.open = true"
          @mouseleave="sub.open = false"
          class="list-items"
          v-for="sub in SubMenus"
          v-show="sub.group == null"
          :key="sub.id"
        >
          <h4 class="sub-name">
            <a
            class="sub-link"
              :href="
                $router.resolve({
                  name: 'groupproduct',
                  params: { slug: sub.slug },
                }).href
              "
              >{{ sub.name }}</a
            >
          </h4>
          <div class="sub-product" v-show="sub.open">
            <ul>
              <li
                v-for="subproduct in SubMenus"
                v-show="subproduct.group != null && sub.id == subproduct.group"
                :key="subproduct.id"
              >
                <a
                  :href="
                    $router.resolve({
                      name: 'singleproduct',
                      params: { slug: subproduct.slug },
                    }).href
                  "
                  class="product-sub"
                  >{{ subproduct.name }}</a
                >
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollPosition: 0,
      isSticky: false,
    };
  },
  unmounted() {
    window.removeEventListener("scroll", this.updateScroll);
  },
  created() {
    this.$store.dispatch("GetSubMenuFromServer");
    window.addEventListener("scroll", this.updateScroll);
  },
  computed: {
    SubMenus() {
      return this.$store.getters.GetSubMenu;
    },
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
      if (this.scrollPosition >= 100) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.menu {
  background-color: black;
  width: 100%;
  // position: fixed;
  @media screen and (max-width: 1100px) {
    display: none;
  }
}
.list-items {
  color: white;
  padding: 15px 25px;
  font-size: 17px;
  width: 180px;

  text-align: center;
}
.list-menu {
  background-color: black;
  display: flex;
  justify-content: center;
  list-style: none;
  direction: rtl;
}
.sub-name {
  cursor: pointer;
}
.sub-link{
  text-decoration: none;
  color: white;
}
@keyframes sweep {
  0% {
    opacity: 0;
    transform: translatey(-10px);
  }
  100% {
    opacity: 1;
    transform: translatey(0);
  }
}

.sub-product ul li:last-child {
  border-bottom: none;
}
.sub-product {
  position: absolute;
  height: 100px;
  width: 179px;
  // background-color: yellow;
  z-index: 999999;
  margin-right: -25px;
  margin-top: 15px;
  animation: sweep 0.4s;

  & ul {
    list-style: none;
    background-color: black;
    width: 180px;
    // text-align: center;
    // border-radius: 5px;
    border: 1px solid black;
    padding: 0 10px;
    margin-left: -30px;

    & li {
      font-size: 15px;
      margin-top: 10px;
      padding: 10px;
      border-bottom: 1px solid white;
      // width: 50px;
    }
  }
}
.scroll {
  // background-color: ;
  // border-radius: 0px;
  margin-top: -150px;
  // justify-content: center;
  // display: flex;
  // direction: rtl;
  transition: all 0.4s;
  // height: 80px;
  padding-top: 10px;
  // width: 100%;
  position: fixed;
  z-index: 999;
  @media only screen and (max-width: 1100px) {
    display: none;
  }
}
.home-link {
  text-decoration: none;
  color: white;
}
.dropdown-content {
  // display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  // box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}
.product-sub {
  color: white;
  text-decoration: none;
  font-size: 12px;

  &:hover {
    transform: scale(2);
  }
}
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
</style>