<template>
    <div>
        <h1> به زودی اینجا رو کامل میکنیم دوست من </h1>
    </div>
</template>

<script>
export default {
    created(){
         if (this.$cookie.get('Sakura') == null) {
      this.$router.push("/");
    }
    }
}
</script>
    

<style lang="scss" scoped>
    h1{
        text-align: center;
        padding-top: 10rem;
    }
</style>