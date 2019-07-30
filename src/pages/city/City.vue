<template>
    <div>
         <city-header></city-header>
         <city-list></city-list>
         <city-alpha></city-alpha>
    </div>
   
</template>
<script>
import CityHeader from './components/Header'
import CityList from './components/List'
import CityAlpha from './components/Alphabet'
export default {
   name:'City',
   components:{
       CityHeader,
       CityList,
       CityAlpha
   }
}
</script>
<style lang="stylus" scoped>

</style>
