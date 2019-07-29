<template>
  <div class='header'>
     <div class="header-tit">城市选择</div>
     <div class="header-tab">
       <ul>
         <li>境内</li>
         <li>境外-港澳台</li>
       </ul>
     </div>
  </div>
</template>
<script>
export default {
 name:'CityHeader'
};
</script>
<style lang='stylus'  scoped>
.header
    background-color #00bcd4
    .header-tit
       text-align center
       color #ffffff
       font-size .32rem
       padding .2rem 
    .header-tab
       width 90%
       margin 0 auto
       ul
           display flex
           margin-bottom  .2rem
           li
               border 1px solid #fff
               color:#fff;
               padding .08rem
               flex 1
               font-size 0.28rem
               text-align center
               margin-bottom .2rem
               box-sizing border-box
               overflow hidden
</style>  