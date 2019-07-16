<template>
  <div>
     <home-header></home-header>
  </div>
</template>
<script>
import HomeHeader from './components/Header'
export default {
  name: "Home" ,//组件的名字
  components:{
      HomeHeader:HomeHeader
      //es6的对象中介值相等，可以简写：HomeHeader
  }
};
</script>
<style>

</style>