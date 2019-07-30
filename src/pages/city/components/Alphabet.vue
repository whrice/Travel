<template>
  <ul class="list">
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
     <li class='item'>A</li>
  </ul>
</template>
<script>
export default {
  name: "CityAlpha"
};
</script>
<style lang="stylus" scoped>
.list
    display flex
    flex-direction column
    position absolute
    top 1.38rem
    bottom 0
    right 0
    width .4rem
    justify-content center
    .item
        text-align center
        line-height .44rem 
        color #00bcd4
</style>
