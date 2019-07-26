<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for='(page,index) of pages' :key='index'>
        <div class="icon" v-for='item of page' :key='item.id'>
          <div class="icon-img">
            <img :src='item.imgUrl'/>
          </div>
          <div class="icon-tit">{{item.desc}}</div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeIcons",
  props:{
    list:Array
  },
  data () {
    return {
      swiperOption: {
       autoplay:false
      }
    }
  },
  computed:{
      pages () {
         const pages=[]
         this.list.forEach((item,index)=>{
             const page=Math.floor(index/8);
             if(!pages[page]){
                 pages[page]=[]
             }
             pages[page].push(item)
         })
         return pages
      }
  }
};
</script>
<style lang="stylus" scoped>
.icons >>> .swiper-container 
  height: 0;
  padding-bottom: 40%;
  margin-top: 0.15rem;
.icon 
  width: 25%;
  height: 1.5rem;
  float: left;
  box-sizing: border-box;
  .icon-img 
    width: 1.1rem;
    height: 1.1rem;
    margin: 0px auto;
    img 
      width: 100%;
      height: 100%;
  .icon-tit 
    text-align: center;
    margin-top: 0.02rem;
    overflow hidden
    white-space no-wrap
    text-overflow ellipsis
 
</style>
