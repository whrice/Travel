<template>
    <div>
         <city-header></city-header>
         <city-list :cities='cities' :hotcities='hotcities'></city-list>
         <city-alpha :cities='cities'></city-alpha>
    </div>
   
</template>
<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CityList from './components/List'
import CityAlpha from './components/Alphabet'
export default {
   name:'City',
   components:{
       CityHeader,
       CityList,
       CityAlpha
   },
   data(){
       return{
          cities:{},
          hotcities:[]
       }
   },
   methods:{
       getCityInfo(){
           axios.get('/api/city.json').then(this.HandleGetCityInfoSucc)
       },
       HandleGetCityInfoSucc(res){
           res=res.data
           if(res.ret&&res.data){
               const data=res.data;
               this.cities=data.cities;
               this.hotcities=data.hotCities
           }
         
       }
   },
   mounted(){
       this.getCityInfo()
   }
}
</script>
<style lang="stylus" scoped>

</style>
