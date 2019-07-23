<template>
  <div>
     <home-header></home-header>
     <home-swiper></home-swiper>
     <home-icons></home-icons>
  </div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons  from './components/Icons' 
export default {
  name: "Home" ,//组件的名字
  components:{
      HomeHeader:HomeHeader,
      HomeSwiper,
      HomeIcons
      //es6的对象中介值相等，可以简写：HomeHeader
  }
};
</script>
<style>

</style>