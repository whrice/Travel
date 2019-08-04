<template>
  <div class='header'>
     <div class="header-tit">城市选择</div>
      <router-link to='/' >
            <div class='icon iconfont back-icon'>&#xe632;</div>
      </router-link>      
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
    position relative
    .icon
       position absolute
       top  .2rem
       left .4rem
       color #fff
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
           padding 0 .4rem
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
               margin-left:-1px
</style>  