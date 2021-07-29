<template>
  <div>
    <div class="sub-menu">
      <div class="right">
        <ul>
          <li
          :class="{menu_list : sub.id == resId || sub.id == leftId}"
            @mouseover="getIndex(sub.id)"
            class="menu-list"
            v-for="sub in SubMenus"
            v-show="sub.group == null"
            :key="sub.id"
          >
            <font-awesome-icon class="icon circle-icon" icon="circle" />
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
            :key="sub.id"          >
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
      leftId : "",
    };
  },
  computed: {
    SubMenus() {
      return this.$store.getters.GetSubMenu;
    },
  },
  methods: {
    getIndex(id) {
      console.log("right id",id);
      this.resId = id;
    },
    leftIndex(id){
        console.log("left id",id);
        this.leftId = id;
    },
    mouseleave(){
        // this.resId = "",
        this.leftId =""
    }
  },
  created() {
    this.$store.dispatch("GetSubMenuFromServer");
  },
};
</script>


<style lang="scss" scoped>
.sub-menu {
  width: 80%;
  // margin-left: 550px;
  margin-right: 0px;
  // right: 200px;
  height: auto;
  display: flex;
  margin-top: 10px;
  position: absolute;
  // margin-right: 0px;
  justify-content: flex-start;
}
.active {
  background-color: orangered;
}
.right {
  background-color: white;
  direction: rtl;
  width: 20%;
}
.left {
  color: white;
  width: 80%;
  background-color: orange;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
ul {
  list-style: none;
}
.menu-list {
  padding: 25px 0;
  transition: all 0.4s;
}
.menu_list{
    background-color: orange;
    color: white;
}
.menu_list a{
    color: white;
}
.menu_list .icon{
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
  margin-top: 4px;
}
</style>