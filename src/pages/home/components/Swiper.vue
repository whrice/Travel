<template>
 <div class='wrapper'>
  <swiper :options="swiperOption" >
    <!-- slides -->
    
    <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class='swiper-img' :src="item.imgUrl">
    </swiper-slide>
    
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>

 </div>
</template>
<script>
import avatar1 from '@/assets/img/slide1.jpg'
import avatar2 from '@/assets/img/slide2.jpg'
import avatar3 from '@/assets/img/slide3.jpg'
export default {
  name: "HomeSwiper",
  data () {
    return{
       swiperOption: {
          pagination:'.swiper-pagination',
          loop: true
      },
      swiperList:[{
         id:'0001',
         imgUrl:avatar1
      },{
         id:'0002',
         imgUrl:avatar2
      },{
          id:'0003',
           imgUrl:avatar3
      }]
    }
  }
};
</script>
<style lang='stylus' scoped>
.wrapper>>>  .swiper-pagination-bullet-active
        background #fff !important
.wrapper
    width 100%
    height 0
    overflow  hidden
    padding-bottom 26.5%   //保持宽高比自适应为32.5%
    .swiper-img
        width 100%
</style>
