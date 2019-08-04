<template>
  <div class='header'>
    <div class="header-left">
      <span class='iconfont back-icon'>&#xe632;</span>
    </div>
  
    <div class="header-input">
        <router-link to='/search' class='color'>
      <span class='iconfont'>&#xe600;</span>
       输入城市/景点/游玩主题
        </router-link>
      </div>
     
      <router-link to='/city'>
      <div class="header-right">
        {{this.city}}
        <span  class='iconfont'>&#xe631;</span>
      </div>
      </router-link>
  </div>
</template>
<script>
export default {
  name: "Header" ,//组件的名字
  props:{
    city:String
  }
};
</script>
<style lang='stylus'  scoped>
@import '~styles/varibles.styl';
.header
    display flex
    line-height .86rem
    height .86rem
    background $bgcolor
    color: #fff
    .header-left
        width .64rem
        float left       
        .back-icon
            font-size .4rem
    .header-input
         flex:1
         height .62rem
         line-height .62rem
         margin-top .12rem 
         margin-left .2rem
         background #fff; 
         text-align left
         border-radius .1rem
         color: #ccc
         padding-left .1rem
         min-width 3.68rem
         overflow hidden
         .color
            color #e4e7ea;
    .header-right
         float right
         width 1.24rem
         text-align center
         color #fff
</style>  