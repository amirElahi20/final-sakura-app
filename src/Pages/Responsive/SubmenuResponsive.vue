<template>
  <div class="sub-responsive">
    <div class="sub-menu subMenuBar">
      <font-awesome-icon icon="times" @click="closeMenu" class="close-icon" />
      <ul class="list">
        <li>
          <a href="/" class="sub-links"
            ><font-awesome-icon class="sub-menu-icon" icon="home" /> خانه</a
          >
        </li>
        <li>
          <a class="sub-links" href="/shopcart"
            ><font-awesome-icon class="sub-menu-icon" icon="shopping-cart" />
            سبدخرید</a
          >
        </li>
        <li>
          <a class="sub-links" href="/products"
            ><font-awesome-icon class="sub-menu-icon" icon="box" /> محصولات</a
          >
        </li>
        <li>
          <a class="sub-links" href="/contactus"
            ><font-awesome-icon class="sub-menu-icon" icon="phone" /> ارتباط با
            ما</a
          >
        </li>
        <li>
          <a class="sub-links" href="/aboutus"
            ><font-awesome-icon class="sub-menu-icon" icon="comments" /> درباره
            ما</a
          >
        </li>
        <li  v-if="!IsAuthenticated">
          <a class="sub-links" href="/login"
            ><font-awesome-icon class="sub-menu-icon" icon="sign-in-alt" />
            ورود</a
        >
        </li>
        <li>
          <a @click="signOut" class="sub-links" href="/aboutus"
            ><font-awesome-icon class="sub-menu-icon" icon="sign-out-alt" />
            خروج</a
          >
        </li>
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
        <div class="sub-title-box" v-for="sub in SubMenus" :key="sub.id">
          <a 
            :href="
              $router.resolve({
                name: 'singleproduct',
                params: { slug: sub.slug },
              }).href
            "
            class="sub-title"
            v-show="sub.group == title.id"
          >
            <font-awesome-icon class="sub-icon circle-icon" icon="circle" />
            {{ sub.name }}
          </a>
        </div>
      </details>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
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
     IsAuthenticated() {
      return this.$store.getters.IsAuthenticated;
    },
  },
  methods: {
    getIndex(id) {
      console.log("right id", id);
      this.resId = id;
    },
    signOut() {
      Vue.swal({
        title: "خارج میشوید؟؟",
        text: "مطمئن هستید؟؟",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "بله خارج میشوم",
        cancelButtonText: "خیر ، کنسل کن",
        showCloseButton: true,
        showLoaderOnConfirm: true,
      }).then((result) => {
        if (result.value) {
          this.$store.dispatch("SignOutUser");

          this.$swal(
            "خارج شدید",
            "از سایت خارج شدید ، برای خرید میتوانید مجددا وارد شوید",
            "success"
          );
          this.$router.push("/");
        } else {
          this.$swal("کنسل شد", "همچنان در سایت هستید", "info");
        }
      });
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
.subMenuBar {
  animation-name: MoveToLeft;
  animation-duration: 0.4s;
}
@keyframes MoveToLeft {
  0% {
    opacity: 0;
    transform: translateX(120px);
  }
  50% {
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
.circle-icon {
  font-size: 7px;
}
.sub-icon {
  color: orangered;
  margin-right: 10px;
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
  font-size: 15px;
  text-decoration: none;
  color: black;
}
.sub-title-box{
  margin-top: 15px;

}
.details {
  margin-right: 15px;
  font-size: 18px;
  margin-top: 30px;
  margin-bottom: 20px;
}
details > summary {
  list-style-type: none;
  margin-bottom: 1.5rem;
  outline: none;
  cursor: pointer;
  display: inline;
}

details > summary::-webkit-details-marker {
  display: none;
}

details > summary::after {
  // content: "\2190"
  content: "\21B6";
  margin-right: 5px;
  font-size: 15px;
  font-weight: bold;
}

details[open] > summary::after {
  content: "\21BB";
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
  width: 60%;
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
  overflow-y: scroll;
  top: 0;
  right: 0;
  @media screen and (max-width: 670px) {
    font-size: 12px;
  }
}

.sub-links {
  text-decoration: none;
  color: black;
  font-size: 15px;
}
.sub-menu-icon {
  // color: orangered;
  margin-left: 5px;
  font-size: 15px;
}
li {
  // background-color: red;
  padding: 10px 0px;
}
</style>