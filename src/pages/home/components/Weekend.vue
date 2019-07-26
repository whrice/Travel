<template>
  <div>
    <div class="tit">
      <img class="re-img" src="@/assets/img/like.png" />
       周末去哪儿
    </div>
    <div class="items">
      <div class="place" v-for='item of  list' :key='item.id'>
        <div class="like-img">
          <img :src='item.imgUrl' alt />
        </div>
        <div class="like-info">
            <div class="info-tit">{{item.title}}</div>
            <div class="info-des">{{item.desc}}</div>
        </div>
        
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "HomeWeekend",
  props:{
    list:Array
  }
 
};
</script>
<style lang="stylus" scoped>
.tit 
  padding: 0.2rem 0;
  font-size: 0.32rem;
  .re-img 
    margin-left: 0.2rem;
    width: 0.3rem;
    height: 0.3rem;
    display: inline-block;
    vertical-align: baseline;
.items  
  .place 
    padding-bottom :.3rem 
    border-bottom 1px solid #ccc
    .like-img
        img 
            width 100%
            height 100%
    .like-info
          padding-left .2rem
          padding-top .2rem    
          .info-tit
               font-size .28rem
          .info-des
               font-size .24rem
               padding .15rem 0rem
               color: #616161 
          .info-btn
               color  #ff8300  
               margin-top .2rem         

</style>