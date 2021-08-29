<template>
  <div>
    <div class="container">
      <div class="about"  v-for="about in AboutUs" :key="about.title">
        <div class="left">
          <h1>{{ about.title }}</h1>
          
          <hr />
          <p>
            {{about.sub_title}}
          </p>
          <p>
            {{about.body}}
          </p>
        </div>
        <div class="right">
          <!-- {{about.picture}} -->
          <img
            :src="about.picture"
          />
        </div>
        <div class="clear"></div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      AboutUs : []
    }
  },
   metaInfo: {
      title: 'فروشگاه اینترنتی',
      titleTemplate: '%s - درباره ما',
      htmlAttrs: {
        lang: 'utf-8',
        amp: true
      }
    },
    methods:{
      GetAboutUsFromServer(){
        this.$http.get('site_model/api/v1/About_Us/').then(response =>{
          console.log( "this is about us page", response.data);
          this.AboutUs = response.data
        })
      }
    },
    created(){
      this.GetAboutUsFromServer()
    }
};
</script>


<style lang="scss" scoped>
body {
  margin: 0;
  padding: 0;
  position: relative;
}
.container {
  width: 80%;
  margin: -1rem auto;
  direction: rtl;
}
.container h1 {
  font-size: 50px;
}
.about {
  padding: 5% 0;
  width: 100%;
  height: auto;
}
.about .left {
  padding: 2% 0;
  float: left;
  width: 50%;
  display: inline-block;
}
.about .right {
  width: 50%;
  display: inline-block;
}
.about .right img {
  width: 100%;
  margin: 0 auto;
}
.about .left h1 {
  text-align: center;
  color: orange;
  margin: 0 0 10px 0;
}
.about .left hr {
  width: 80%;
  border-top: 2px solid orangered;
  border-bottom: none;
  margin-right: 10%;
}
.about .left p {
  font-size: 1rem;
  margin: 40px auto;
  width: 80%;
}

.mission {
  padding: 5% 0;
  width: 100%;
  height: auto;
  background-color: #fff;
}
.mission .right {
  padding: 2% 0;
  width: 50%;

  display: inline-block;
}
.mission .left {
  float: left;
  width: 50%;

  display: inline-block;
}
.mission .left img {
  width: 100%;
}
.mission .right h1 {
  text-align: center;
  color: orange;
  margin: 0 0 20px 0;
}
.mission .right hr {
  width: 80%;
  border-top: 2px solid orangered;
  border-bottom: none;
  margin-right: 10%;
}
.mission .right p {
  font-size: 1rem;
  margin: 40px auto;
  width: 80%;
}

.team {
  width: 90%;
  margin: auto;
  padding: 5% 5%;
  over-flow: hidden;
}
.team h1 {
  text-align: center;
  color: #1eadff;
}
.team h1 hr {
  width: 15%;
  border-top: 2px solid #000;
  background-color: transperant;
  border-bottom: none;
  margin-bottom: 50px;
}
.team .card {
  padding-bottom: 20px;
  padding-top: 20px;
  position: relative;
  min-width: 20%;
  height: 500px !important;
  height: auto;
  background-color: #fff;
  display: inline-block;
  margin: 40px 6.5%;
  box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.5);
  text-align: center;
}
.card .circle-container {
  position: relative;
  background-color: #579f79;
  width: 250px;
  height: 250px;
  border: none;
  border-radius: 50%;
  margin: auto;
  color: #fff;
}
.circle-container h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  font-size: 60px;
}

.team .card h2 {
  text-align: center;
  margin: 30px 0 0 0;
}
.team .card h4 {
  text-align: center;
  margin: 10px 0 0 0;
}
.team .card p {
  width: 250px;
  margin: 30px auto;
  text-align: center;
}
.clear {
  clear: both;
}

/* media */
@media (max-width: 1200px) {
  .mission .right p {
    font-size: 0.8rem;
    margin: 20px auto;
  }
  .about .left p {
    font-size: 0.8rem;
    margin: 20px auto;
  }
}

@media (max-width: 992px) {
  .about .left {
    width: 100%;
  }
  .about .right {
    width: 100%;
  }
  .mission .left {
    width: 100%;
  }
  .mission .right {
    width: 100%;
  }
  .team .card {
    width: 40%;
  }
}

@media (max-width: 768px) {
  .team .card {
    width: 100%;
  }
  nav {
    height: 80px;
  }
}
</style>