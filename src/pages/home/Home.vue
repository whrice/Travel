<template>
  <div>
     <home-header></home-header>
     <home-swiper></home-swiper>
     <home-icons></home-icons>
     <home-reco></home-reco>
     <home-weekend></home-weekend>
  </div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons  from './components/Icons' 
import HomeReco  from './components/Reco'
import HomeWeekend from './components/Weekend'
export default {
  name: "Home" ,//组件的名字
  components:{
      HomeHeader:HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeReco,
      HomeWeekend
      //es6的对象中介值相等，可以简写：HomeHeader
  }
};
</script>
<style>

</style>