<template>
    <div class="list" ref='wrapper'>
        <div>
        <div class="area">
            <div class="title border-topbottom">当前城市</div>
            <div class="button-list">
                 <div class="button">深圳</div>
                 <div class="button">深圳</div>
                 <div class="button">深圳</div>
                 <div class="button">深圳</div>
                 <div class="button">深圳</div>
            </div>
        </div>
        <div class="area">
            <div class="title border-topbottom">热门城市</div>
            <div class="button-list">
                 <div class="button">深圳</div>
                 <div class="button">深圳</div>
                 <div class="button">深圳</div>
                 <div class="button">深圳</div>
                 <div class="button">深圳</div>
            </div>
        </div>
        <div class="area">
            <div class="title border-topbottom">A</div>
            <div class="item-list">
                <div class="item border-bottom">阿克苏地区</div>
                <div class="item border-bottom">阿克苏地区</div>
                <div class="item">阿克苏地区</div>
            </div>
        </div>
        <div class="area">
            <div class="title border-topbottom">A</div>
            <div class="item-list">
                <div class="item border-bottom">阿克苏地区</div>
                <div class="item border-bottom">阿克苏地区</div>
                <div class="item">阿克苏地区</div>
            </div>
        </div>
        <div class="area">
            <div class="title border-topbottom">A</div>
            <div class="item-list">
                <div class="item border-bottom">阿克苏地区</div>
                <div class="item border-bottom">阿克苏地区</div>
                <div class="item">阿克苏地区</div>
            </div>
        </div>
        <div class="area">
            <div class="title border-topbottom">A</div>
            <div class="item-list">
                <div class="item border-bottom">阿克苏地区</div>
                <div class="item border-bottom">阿克苏地区</div>
                <div class="item">阿克苏地区</div>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
    name:'CityList',
    mounted(){
        this.scroll=new BScroll(this.$refs.wrapper)
    }
}
</script>
<style lang="stylus" scoped>
    .border-topbottom
        &:before
            border-color:#ccc
        &:after
            border-color:#ccc  
    .border-bottom
        &:before
            border-color:#ccc     
    .list
        overflow hidden
        position absolute
        top 1.38rem
        left 0
        right 0
        bottom 0    
        .title
            line-height .44rem
            background #eee
            padding-left .2rem
            color:#666
            font-size .26rem
        .button-list 
            padding 0rem .6rem .2rem .3rem
            display flex
            flex-wrap wrap
            .button
                border .02rem solid #ccc
                padding: 0.04rem 0.6rem
                border-radius .02rem
                margin 0.2rem .2rem
                text-align center
        .item-list 
            .item
                padding-left .2rem
                line-height .76rem                           

</style>
