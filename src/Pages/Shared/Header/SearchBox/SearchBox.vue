<template>
  <div>
    <div class="search-box">
      <input type="text" class="search-txt" placeholder="دنبال چی میگردی؟" />
      <a href="#" class="search-btn">
        <font-awesome-icon icon="search" />
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>


<style scoped>
input{
  color: white;
}
.search-box {
  margin-left: 10px;
  margin-top: -10px;
  margin-left: 15px;
  transform: translate(-1%);
  background: orangered ;
  height: 40px;
  border-radius: 40px;
  padding: 0px;
}
.search-box:hover > .search-txt {
  width: 240px;
  padding: 0 6px;
}
.search-btn:hover .search-box {
  top: 130px;
  left: 1000px;
  position: absolute;
}
.search-box:hover > .search-btn {
  background: white;
}
.search-btn {
  color: orangered;
  float: right;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  list-style: none;
}
.search-txt {
  border: none;
  background: none;
  float: left;
  padding: 0;
  color: white;
  font-size: 16px;
  transition: 0.8s;
  line-height: 40px;
  width: 0px;
}
::placeholder{
  color: white;
}
</style>