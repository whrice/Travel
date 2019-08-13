<template>
    <div>
        <div class="item" v-for='(item,index) of list' :key="index ">
            <div class="item-tit">
                <span class='item-tit-icon'></span>
                {{item.title}}
            </div>
            <div v-if='item.children' class='item-children'>
                <detail-menu :list='item.children'></detail-menu>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'DetailMenu',
    props:{
        list:Array
    }
}
</script>
<style lang='stylus' scoped>
.item-tit
    border-bottom 1px solid #ccc;
    font-size:.3rem
    padding  .2rem 0.16rem
    .item-tit-icon
        position relative
        display: inline-block
        width .36rem
        height .36rem
        background url(/static/img/detail/details.png) 0 -.45rem no-repeat ;
        background-size: .4rem 3rem;
        top:.02rem
.item-children
    padding 0 .4rem        
</style>