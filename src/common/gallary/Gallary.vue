<template>
  <div class="container" @click="handleBannerClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for='(item,index) in imgs' :key='index'>
          <img class='banner-img'  :src="item" />
        </swiper-slide>
        
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name: "CommonGallary",
  props:{
      imgs:{
          type:Array
      }
  },
  methods:{
    handleBannerClick(){
      this.$emit('close')
    }
  },
  data (){
      return{
          swiperOptions:{
           pagination:'.swiper-pagination',
           paginationType:'fraction',
           observeParents:true,
           observer:true

      }
      }
  }
}
</script>
<style lang="stylus" scoped>
.container >>> .swiper-container
   overflow:inherit
   top:50%;
   transform:translateY(-50%);
.container 
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #000;
    z-index: 10;
    .wrapper 
       width:100%
       height 100%
       position relative
       .banner-img
           width 100%  
       .swiper-pagination
           color #fff
           bottom -0.8rem
           z-index:100
</style>
