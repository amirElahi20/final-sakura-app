<template>
  <div>
    <div class="top">
      <div class="right">
        <img src="../../../public/img/header3.png" alt="" />
        <p>خرید مطمئن از ساکورا</p>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.top {
  direction: rtl;
  justify-content: space-between;
  display: none;
   @media screen and (max-width: 900px){
      display: flex;
  }
}
.right{
    // background-color: pink;
    display: flex;
    margin-right: 10px;
}
.right p{
    color: white;
    margin: 15px 5px 0 0;
    font-size: 12px;
    font-weight: bold;
}

img {
  width: 50px;
}
</style>