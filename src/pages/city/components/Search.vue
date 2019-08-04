<template>
    <div>
        <div class="search">
            <div class='icon iconfont back-icon'>&#xe632;</div>
            <input v-model='keyword' class='ipt' type="text" placeholder="输入城市或景点">
            <a href="" class='btn'>搜索</a>
        </div>
        <div class="search-content"></div>
    </div>
</template>
<script>
export default {
    name:'CitySearch',
    props:{
      cities:Object
    },
    data(){
        return {
          keyword:'',
          list:[],
          timer:null
        }
    },
    watch:{
        keyword(){
            if(this.timer){
                clearTimeout(this.timer)
            }
            this.timer=setTimeout(()=>{
                 const result=[];
                 for(let i in this.cities){
                    this.cities[i].forEach(value => {
                        if(value.spell.indexOf(this.keyword)>-1||value.name.indexOf(this.keyword)>-1){
                            result.push(value)
                        }
                    });
                 }
                 this.list=result
            },100)
        }
    }
}
</script>
<style lang="stylus" scoped>
*
   margin 0
   padding 0
.search
    padding .18rem .2rem
    display flex;
    line-height .6rem
    background #fff 
    .icon
        width .4rem
        line-height .5rem  
    .ipt       
        flex 1
        padding .12rem 0rem
        text-align center
        background: #f2f2f2
        border-radius .2rem
        font-size .28rem
        margin 0 .2rem
        font-family: "Microsoft Yahei",Arial;
    .btn
       color: black
       line-height .6rem  
.search-content
    top:.98rem
    left:0
    right:0
    bottom 0
    overflow hidden
    position absolute
    background green       
</style>