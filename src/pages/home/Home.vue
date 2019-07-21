<template>
  <div>
     <home-header></home-header>
     <home-swiper></home-swiper>
  </div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
export default {
  name: "Home" ,//组件的名字
  components:{
      HomeHeader:HomeHeader,
      HomeSwiper
      //es6的对象中介值相等，可以简写：HomeHeader
  }
};
</script>
<style>

</style>