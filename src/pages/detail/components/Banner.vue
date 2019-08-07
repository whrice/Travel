<template>
<div>
    <div class='banner' @click="handleBannerClick">
        <img class='banner-img' src="/static/img/banner/p1.jpg" alt="">
        <div class='banner-info'>  
        <router-link tag='div' to='/' class='back iconfont'>&#xe634;</router-link>
        <div class="info-tit">深圳欢乐谷(AAAAA景区)</div>
        <div class="info-icon">
        <span class='iconfont back-icon'>&#xe635;</span>
         55
        </div>
        </div>
    </div>
    <common-gallary :imgs="imgs" v-show="showGallary" @close='handleGallaryClick'></common-gallary>
</div>    
</template>
<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
    name:'DetailBanner',
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
        CommonGallary
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
    .back
        position absolute
        top .14rem
        padding .12rem
        background: rgba(0,0,0,.5);
        border-radius 50%
        left .14rem
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
