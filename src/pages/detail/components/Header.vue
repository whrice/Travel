<template>
    <div>
        <div class="head-re"  v-show="showAbs">
             <router-link tag='div' to='/' class='back iconfont'>&#xe634;</router-link>
        </div>
        <div class='head-fix' v-show='!showAbs'
        :style='opacityStyle'>
            <div class='header'>
                <div class="header-tit">景点详情</div>
                <router-link to='/' >
                     <div class='icon iconfont back-icon'>&#xe632;</div>
                </router-link>      
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'DetailHeader',
    data(){
        return{
            showAbs:true,
            opacityStyle:{
                opacity:0
            }
        }    
    },
    methods:{
        handlScroll (){
            console.log('222')
            const top=document.documentElement.scrollTop;
            if(top>60){
                let opacity=top/140
                opacity=opacity>1?1:opacity
                this.opacityStyle={
                    opacity
                }
               this.showAbs=false
            }else{
                this.showAbs=true
            }
        }
    },
     mounted() {
     window.addEventListener('scroll',this.handlScroll)       
     },
    beforeDestroy () {
        console.log('1111')
        window.removeEventListener('scroll',this.handleScroll)
       console.log('3333')
  }
}
</script>
<style lang="stylus" scoped>
.back
    position absolute
    top .14rem
    padding .12rem
    background: rgba(0,0,0,.5);
    border-radius 50%
    left .14rem
.head-fix
    position fixed
    top 0
    left 0
    right 0
    z-index 100
    .header
        background-color #00bcd4
        position relative
    .icon
       position absolute
       top  .06rem
       left .4rem
       color #fff
       font-size 30px !important
    .header-tit
       text-align center
       color #ffffff
       font-size .32rem
       padding .2rem  
</style>