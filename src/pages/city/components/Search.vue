<template>
    <div>
        <div class="search">
            <router-link to='/'>
            <div class='icon iconfont back-icon'>&#xe632;</div>
            </router-link>
            <input v-model='keyword' class='ipt' type="text" placeholder="输入城市或景点">
            <a href="" class='btn'>搜索</a>
        </div>
        <div class="search-content" ref='search' v-show='keyword'>
            <ul>
                <li class='search-item' v-for="item of list" :key='item.id' 
                 @click="handleCityClick(item.name)">
                    {{item.name}}
                </li>
                 <li class='search-item' v-show='hasnoData'>
                     没有找到匹配数据
                  
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import Bscroll from 'better-scroll'
export default {
    name:'CitySearch',
    data(){
        return {
          keyword:'',
          list:[],
          timer:null,
          cities:{},
        }
    },
    computed:{
        hasnoData(){
            return !this.list.length
        }
    },
    watch:{
        keyword(){
            console.log(this.keyword)
            console.log(this.cities)
            if(this.timer){
                clearTimeout(this.timer)
            }
            if(!this.keyword){
                this.list=[];
                return
            }
            this.timer=setTimeout(()=>{
                 const result=[];
                 for (let i in this.cities){
                    this.cities[i].forEach(value => {
                        if(value.spell.indexOf(this.keyword)>-1||value.name.indexOf(this.keyword)>-1){
                            result.push(value)
                        }
                    });
                 }
                 this.list=result
            },100)
            
        }
    },
    methods:{
        getCityInfo(){
               axios.get('/api/city.json').then(this.HandleGetCityInfoSucc)
        },
        handleCityClick(city){
            console.log(city)
         this.$store.dispatch('changeCity',city)
         this.$router.push('/')
        },
         HandleGetCityInfoSucc(res){
           res=res.data
           if(res.ret&&res.data){
               const data=res.data;
               this.cities=data.cities;
               this.hotcities=data.hotCities
           }
         
       }
    },
    mounted(){
         this.getCityInfo()
         this.scroll=new Bscroll(this.$refs.search)
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
        color: black !important 
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
    background #eee
    .search-item
        color:#666
        background #fff
        padding .2rem 0.4rem
        line-height .4rem 
</style>