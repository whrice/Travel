<template>
<div>
    <div class='banner' @click="handleBannerClick">
        <img class='banner-img' :src="bannerImg">
        <div class='banner-info'>  
        <!--<router-link tag='div' to='/' class='back iconfont'>&#xe634;</router-link>-->
        <div class="info-tit">{{this.sightName}}</div>
        <div class="info-icon">
        <span class='iconfont back-icon'>&#xe635;</span>
         {{this.gallaryImgs.length}}
        </div>
        </div>
    </div>
    <fade>
    <common-gallary :imgs="gallaryImgs" v-show="showGallary" @close='handleGallaryClick'></common-gallary>
    </fade>
</div>    
</template>
<script>
import CommonGallary from 'common/gallary/Gallary'
import Fade  from 'common/fadeAnimation/Fade'
export default {
    name:'DetailBanner',
    props:{
   sightName:String,
   bannerImg:String,
   gallaryImgs:Array
    },
    data (){
      return{
          showGallary:false,
          imgs:[
              'static/img/banner/w1.jpg',
              'static/img/banner/w2.jpg',
              'static/img/banner/w3.jpg'
          ]
      }
    },
    methods:{
   handleBannerClick (){
       this.showGallary=true
   },
   handleGallaryClick (){
       this.showGallary=false
   }
    },
    components:{
        CommonGallary,
        Fade
    }
}
</script>
<style lang="stylus" scoped>
.banner
    overflow hidden
    height 0
    padding-bottom 55%
    position relative
    .banner-img
        width 100%
    .info-tit
        color red
        position absolute
        bottom: .36rem
        color: #fff;
        font-size: .36rem;
        text-shadow: 0 1px 2px rgba(0,0,0,0.70);
        left .2rem
    .info-icon
        position absolute
        bottom .86rem
        left:.2rem
        color:#fff
        border-radius .2rem
        padding 0.03rem .25rem
        background: rgba(0,0,0,.5);
        font-size .24rem

</style>