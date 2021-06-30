<template>
    <div class="confirm">
        <div class="topalert">
            <h3>!!توجه کنید!!</h3>
        </div>
        <div class="mainalert">با کلیک بر روی دکمه زیر ایمیل خود را فعال کنید</div>
        <router-link class="btn" @click="confirm" to="/login"> فعالسازی ایمیل</router-link>
    </div>
</template>

<script>
import axios from 'axios';
 import { useToast } from "vue-toastification";

export default {
    data() {
        return{
          token: this.$route.params.token,
          toast : useToast()
        }
    },
    methods:{
      confirm() {
        axios.post('https://asha4f.pythonanywhere.com/accounts/api/v1/check_confirm_email/',{
          token : this.token
        })
        .then(response=>{
            console.log(response);
            this.toast.success("ایمیل شما با موفقیت فعال شد");
            // this.$router.push('/login');
        })
    },
    }
}
</script>


<style lang="scss" scoped>
  .topalert{
      background-color: orange;
      padding: 20px;
      font-size: 20px;
      margin-bottom: 2rem;
  }
  .confirm{
      text-align: center;
      color: orangered;
  }
  .mainalert{
      font-size: 18px;
      margin-bottom: 2rem;
  }
  .btn{
   text-decoration: none;
  padding: 20px 40px;
  display: inline-block;
  border-radius: 100px;
  transition: all 0.2s;
  position: relative;
  background-color: orange;
  margin-bottom: 2rem;
  cursor: pointer;
  color: white;
  font-size: 14px;
}
.btn:hover {
  transform: translateY(-5px);
}
.btn:active {
  transform: translateY(3px);
}
.btn::after {
  content: "";
  display: inline-block;
  height: 100%;
  width: 100%;
  border-radius: 100px;
  background-color: orange;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  transition: all 0.4s;
}
.btn:hover::after {
  transform: scaleX(1.4) scaleY(1.6);
  opacity: 0;
}


</style>