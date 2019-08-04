<template>
    <div>
         <city-header></city-header>
         <city-list :cities='cities' :hotcities='hotcities' :letter='letter'></city-list>
         <city-alpha :cities='cities' @change='handleChange'></city-alpha>
         <city-search class='dev' :cities='cities'></city-search>
    </div>
   
</template>
<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CityList from './components/List'
import CityAlpha from './components/Alphabet'
import CitySearch from './components/Search'
export default {
   name:'City',
   components:{
       CityHeader,
       CityList,
       CityAlpha, 
       CitySearch
   },
   data(){
       return{
          cities:{},
          hotcities:[],
          letter:''
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
         
       },
       handleChange(letter){
           this.letter=letter
       }
   },
   mounted(){
       this.getCityInfo()
   }
}
</script>
<style lang="stylus" scoped>
.dev{
    display none;
}
</style>
