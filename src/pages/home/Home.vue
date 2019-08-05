<template>
  <div>
     <home-header ></home-header>
     <home-swiper :list='swiperList'></home-swiper>
     <home-icons  :list='iconList'></home-icons>
     <home-reco   :list='recoList'></home-reco>
     <home-weekend :list='weekList'></home-weekend>
  </div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons  from './components/Icons' 
import HomeReco  from './components/Reco'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: "Home" ,//组件的名字
  components:{
      HomeHeader:HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeReco,
      HomeWeekend
      //es6的对象中介值相等，可以简写：HomeHeader
  },
  data (){
     return{
       lastCity:'',
       swiperList:[],
       iconList:[],
       recoList:[],
       weekList:[]
     }
  },
  methods:{
    getHomeInFo (){
    axios.get('/api/index.json?city='+ this.city).then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res){
        res=res.data;
        if(res.ret&&res.data){
          const data=res.data;
          this.swiperList=data.swiperList
          this.iconList=data.iconList
          this.recoList=data.recommendList
          this.weekList=data.weekendList
        }
        //console.log(this.iconList);
    }
  },
  computed:{
     ...mapState(['city'])
  },
  mounted(){
    this.getHomeInFo()
    this.lastCity=this.city
  },
  activated (){
    if(this.lastCity!==this.city){
      this.lastCity=this.city
    this.getHomeInFo()
    }
  }
};
</script>
<style>

</style>