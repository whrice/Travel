<template>
    <div>
      <detail-banner :sightName='sightName' 
      :bannerImg='bannerImg'
      :gallaryImgs='gallaryImgs'></detail-banner>
      <detail-header></detail-header>
      <div class='content'>
       <detail-menu :list='list'></detail-menu>   
      </div>
    </div>
</template>
<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailMenu from './components/Menu'
import axios from 'axios'
export default {
    name:'Detail',
    components:{
    DetailBanner,
    DetailHeader,
    DetailMenu
    },
    mounted () {
      this.getDetailInfo()
    },
    data (){
       return{
         sightName:'',
         bannerImg:'',
         gallaryImgs:[],
         list:[{
           title:'活动票',
           children:[{
             title:'暑假成人票'
           },{
             title:'中高考考生票'
           }]
         },{
          title:'门票',
          children:[{
             title:'成人'
           },{
             title:'儿童'
           },{
             title:'学生'
           }]
         },{
           title:'年卡',
           children:[{
             title:'深圳欢乐谷1大1小亲子年卡'
           }]
         },{
           title:'日夜场通玩票',
            children:[{
             title:'【提前1天预订】成人票'
           },{
               title:'【随买随用】成人票'
           }]
         }],
       }
    },
    methods:{
      handleGetDataSucc (res){
         res=res.data;
         if(res.ret){
           var data=res.data
           this.sightName=data.sightName
           this.gallaryImgs=data.gallaryImgs
           this.bannerImg=data.bannerImg
           this.list=data.categoryList
         }
      },
     getDetailInfo(){
       axios.get('/api/detail.json',{
         params:{
           id:this.$route.params.id
         }
       }).then(this.handleGetDataSucc)
     }
    }
}
</script>
<style lang="stylus" scoped>
.content 
   height  50rem
</style>
