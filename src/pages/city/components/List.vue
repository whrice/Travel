<template>
    <div class="list" ref='wrapper'>
        <div>
        <div class="area">
            <div class="title border-topbottom">当前城市</div>
            <div class="button-list">
                 <div class="button">{{this.currentCity}}</div>  
            </div>
        </div>
        <div class="area">
            <div class="title border-topbottom">热门城市</div>
            <div class="button-list">
                 <div class="button" 
                 v-for="item of hotcities" 
                 :key="item.id"
                 @click='handleCityClick(item.name)'>
                     {{item.name}}
                 </div>
            </div>
        </div>
        <div class="area" v-for='(item, key) of cities' :key="key" :ref="key">
            <div class="title border-topbottom">{{key}}</div>
            <div class="item-list">
                <div class="item border-bottom"  
                v-for="innerItem of item" 
                :key='innerItem.id'
                 @click='handleCityClick(innerItem.name)'>
                    {{innerItem.name}}
                </div>
               
            </div>
        </div>
        </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
import { mapState } from 'vuex'
export default {
    name:'CityList',
    props:{
        hotcities:Array,
        cities:Object,
        letter:String
    },
    computed:{
       ...mapState({
           currentCity:'city'
       })
    },
    mounted(){
        this.scroll=new BScroll(this.$refs.wrapper)
    },
    methods:{
       handleCityClick(city){
          // console.log(city)
           this.$store.dispatch('changeCity',city);
             this.$router.push('/')
       }
    },
    watch:{
       letter(){
          
           if(this.letter){
               const ele=this.$refs[this.letter][0];//获取到对应key值的区域
               this.scroll.scrollToElement(ele) //自动滚动到某个元素的区域上
           }
           
       }
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
            padding 0.16rem .6rem .16rem .3rem
            display flex
            flex-wrap wrap
            .button
                border .02rem solid #ccc
                padding: 0.14rem 0.6rem
                border-radius .02rem
                margin 0.2rem .2rem
                text-align center
        .item-list 
            .item
                padding-left .2rem
                line-height .76rem                           

</style>
