<template>
  <div class="sub-responsive">
    <!-- <div class="popup"></div> -->
    <div class="sub-menu">
      <div class="right">
        <font-awesome-icon icon="times" @click="closeMenu" class="close-icon" />

        <ul>
          <li
            :class="{ menu_list: sub.id == resId || sub.id == leftId }"
            @mouseover="getIndex(sub.id)"
            class="menu-list"
            v-for="sub in SubMenus"
            v-show="sub.group == null"
            :key="sub.id"
          >
            <font-awesome-icon
              @click="closeMenu"
              class="icon circle-icon"
              icon="circle"
            />
            <a class="sub-list" href="#">{{ sub.name }}</a>
            <font-awesome-icon
              class="icon angle-icon"
              icon="angle-double-left"
            />
          </li>
        </ul>
      </div>
      <div v-if="resId != 0" class="left">
        <ul>
          <li
            @mouseover="leftIndex(sub.group)"
            @mouseleave="mouseleave"
            v-for="sub in SubMenus"
            v-show="sub.group != null && sub.group == resId"
            :key="sub.id"
          >
            <p>{{ sub.name }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      resId: "",
      leftId: "",
    };
  },
  computed: {
    SubMenus() {
      return this.$store.getters.GetSubMenu;
    },
  },
  methods: {
    getIndex(id) {
      console.log("right id", id);
      this.resId = id;
    },
    leftIndex(id) {
      console.log("left id", id);
      this.leftId = id;
    },
    mouseleave() {
      // this.resId = "",
      this.leftId = "";
    },
    closeMenu() {
      this.$emit("closeSub", false);
    },
  },
  created() {
    this.$store.dispatch("GetSubMenuFromServer");
  },
};
</script>


<style lang="scss" scoped>
.close-icon {
  // float: left;
  // margin: 15px 0 0 25px;
  color: orangered;
  font-size: 25px;
  margin: 15px 10px 10px 0;
}
.sub-responsive {
  display: none;
  z-index: 9999;
  @media screen and (max-width: 1100px) {
    display: block;
  }
}
.popup {
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.836);
  opacity: 1;
}
.sub-menu {
  width: 100%;
  height: auto;
  display: flex;
  z-index: 9999;
  position: fixed;
  direction: rtl;
  top: 0;
  right: 0;
  @media screen and (max-width: 670px) {
    font-size: 12px;
  }
}
.active {
  background-color: orangered;
}
.right {
  background-color: white;
  width: 30%;
  //   padding-right: 10px;
  // margin-right: 10px;
  @media screen and (max-width: 670px) {
    width: 40%;
  }
}
.left {
  color: white;
  width: 70%;
  background-color: orange;
  @media screen and (max-width: 670px) {
    width: 60%;
  }
  direction: rtl;
}

ul {
  list-style: none;
}
.menu-list {
  // background-color: red;
  padding: 25px 0;
  transition: all 0.4s;
}
.menu_list {
  // font-size: 50px;
  background-color: orange;
  color: white;
}
.menu_list a {
  color: white;
}
.menu_list .icon {
  color: yellow;
}
.icon {
  transition: all 0.4s;
}
.sub-list {
  text-decoration: none;
  color: black;
  transition: all 0.4s;
}
.circle-icon {
  font-size: 10px;
  color: orange;
  margin: 0 5px;
}
.angle-icon {
  color: orange;
  float: left;
  margin-left: 15px;
  animation: shake-animation 5s ease infinite;
  transform-origin: 50% 50%;
}
@keyframes shake-animation {
  0% {
    transform: translate(0, 0);
  }
  1.78571% {
    transform: translate(8px, 0);
  }
  3.57143% {
    transform: translate(0, 0);
  }
  5.35714% {
    transform: translate(8px, 0);
  }
  7.14286% {
    transform: translate(0, 0);
  }
  8.92857% {
    transform: translate(8px, 0);
  }
  10.71429% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(0, 0);
  }
}
.left ul {
  margin: 60px 15px 0 0;
}
</style>