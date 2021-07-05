<template>
  <div>
    <h2 class="title">تغییر رمز</h2>
    <div class="client-account">
      <div class="input-box">
        <label for="">ایمیل</label>
        <input type="text" />
      </div>
      <div class="input-box">
        <label for="">شماره تماس</label>
        <input type="text" />
      </div>
        <a href="#" class="edit-btn">ویرایش اطلاعات</a>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      
    };
  },
};
</script>

<style lang="scss" scoped>
.client-account {
  background-color: whitesmoke;
  border: 1px solid orangered;
  width: 85%;
  margin: 0 auto;
  padding: 50px;
  height: 300px;
  direction: rtl;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 10rem;
  border-radius: 10px;
}

label {
  display: block;
  margin-bottom: 0.2rem;
}
input {
  display: block;
  width: 400px;
  height: 40px;
  border: 1px solid orangered;
  border-radius: 10px;
  text-indent: 10px;
}

.title {
  text-align: center;
  margin:2rem 0;
}
.edit-btn {
margin-top: 180px;
  position: absolute;
  text-decoration: none;
  color: white;
  background-color: orangered;
  padding: 10px;
  border-radius: 10px;
  transition: all 0.3s;
  &:hover {
    background-color: green;
  }
}
</style>