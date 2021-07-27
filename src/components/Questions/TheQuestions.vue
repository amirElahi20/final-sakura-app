<template>
  <div>
    <div class="box">
      <div class="u-center">
        <h2 class="header-title">سوالات متداول</h2>
      </div>
      <div class="questions" v-for="question in 5" :key="question">
        
      </div>
      <div class="back-btn">
        <router-link class="back" to="/">بازگشت به صفحه اصلی</router-link>
      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>
.box {
  margin-top: 5rem;
  width: 95%;
  margin: 0 auto;
}
.question {
  background-color: whitesmoke;
  color: black;
  border: 1px solid orange;
  padding: 25px;
  margin-top: 20px;
  text-align: right;
  cursor: pointer;
}
details:last-child {
  //   margin-bottom: 35px;
}
.answer {
  background-color: orange;
  padding: 10px;
  text-align: right;
  color: white;
  margin-top: 2px;
}
.icon {
  margin-right: 5px;
  font-size: 30px;
  margin-top: 5px;
}
details > summary {
  list-style-type: none;
}

details > summary::-webkit-details-marker {
  display: none;
}

details > summary::before {
  content: "\2190";
  margin-right: 5px;
  font-size: 15px;
  font-weight: bold;
}

details[open] > summary::before {
  content: "\2193";
  padding-right: 0px;
  vertical-align: middle;
  font-weight: bold;
}
.u-center {
  margin: 40px 0 50px 0;
  text-align: center;
}
.header-title {
  font-size: 1.5rem;
  font-weight: 700;
  background-image: linear-gradient(to right, orange, orangered);
  -webkit-background-clip: text;
  display: inline-block;
  color: transparent;
  transition: all 0.3s;
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

h2:before {
  right: 0.5em;
  margin-left: -50%;
}

h2:after {
  left: 0.5em;
  margin-right: -50%;
}
.back {
  text-decoration: none;
  color: white;
  padding: 15px;
  background-color: orangered;
}
.back-btn {
  margin-top: 35px;
}
</style>