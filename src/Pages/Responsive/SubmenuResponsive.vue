<template>
  <div class="sub-responsive">
    <div class="sub-menu">
      <font-awesome-icon icon="times" @click="closeMenu" class="close-icon" />
      <ul class="list">
        <li>
          <router-link to="/">خانه</router-link>
        </li>
        <li><router-link to="/products">محصولات</router-link></li>
        <li><router-link to="/products">ارتباط با ما</router-link></li>
        <li><router-link to="/products">درباره ما</router-link></li>
      </ul>
      <details
        v-for="(title, index) in SubMenus"
        :key="index"
        v-show="title.group == null"
        class="details"
      >
        <summary>
          <font-awesome-icon class="title-icon circle-icon" icon="circle" />
          {{ title.name }}
        </summary>
        <div v-for="sub in SubMenus" :key="sub.id">
          <p class="sub-title" v-show="sub.group == title.id">
            <font-awesome-icon class="sub-icon circle-icon" icon="circle" />
            {{ sub.name }}
          </p>
        </div>
      </details>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      subId: "",
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
    ShowSub(subId) {
      alert(subId);
      this.subId = subId;
    },
  },
  created() {
    this.$store.dispatch("GetSubMenuFromServer");
  },
};
</script>


<style lang="scss" scoped>
.circle-icon {
  font-size: 7px;
}
.sub-icon {
  color: orangered;
}
.title-icon {
  color: orange;
}
.sub-responsive {
  color: white;
  z-index: 99999999;
  direction: rtl;
}
.sub-title {
  // margin-right: -40px;
  // direction: rtl;
  // text-align: center;
  font-size: 15px;
}
.details {
  margin-right: 15px;
  font-size: 18px;
  cursor: pointer;
  margin-top: 30px;
  margin-bottom: 20px;
}
details > summary {
  list-style-type: none;
}

details > summary::-webkit-details-marker {
  display: none;
}

details > summary::after {
  content: "\2190";
  margin-right: 5px;
  font-size: 15px;
  font-weight: bold;
}

details[open] > summary::after {
  content: "\2193";
  padding-right: 0px;
  vertical-align: middle;
  font-weight: bold;
}
.list {
  text-decoration: none;
  margin-right: 20px;
  margin-top: 20px;
  list-style: none;
}
.list li {
  cursor: pointer;
  margin-top: 40px;
  margin-bottom: 40px;
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

.close-icon {
  color: orangered;
  font-size: 25px;
  // margin: 15px 10px 10px 0;
  margin-right: 20px;
  margin-top: 20px;
  cursor: pointer;
}

.sub-menu {
  width: 40%;
  height: 100vh;
  color: black;
  text-align: right;
  padding-right: 10px;
  background-color: whitesmoke;
  flex-direction: column;
  display: flex;
  z-index: 999;
  position: fixed;
  direction: rtl;
  top: 0;
  right: 0;
  @media screen and (max-width: 670px) {
    font-size: 12px;
  }
}
</style>