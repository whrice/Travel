<template>
  <ul class="list">
    <li class="item" 
     @click='handleLetter' 
     v-for='item of letters ' 
     :key='item'
     @touchstart='handleTouchStart'
     @touchmove='handleTouchMove'
     @touchend='handleTouchEnd'
     :ref="item"
     >
      {{item}}
    </li>
   
  </ul>
</template>
<script>
export default {
  name: "CityAlpha",
  props:{
    cities:Object
  },
  computed:{

  },
  data(){
      return{
        touchStatus:false,
        startY:0,
        timer:null
      }
  },
  updated(){
    this.startY=this.$refs['A'][0].offsetTop
  },
  computed:{
     //定义一个数组类型的数据
     letters(){
       const letters=[]
       for(let i in this.cities){
          letters.push(i)
       }
        return letters
     }
  },
  methods:{
   handleLetter(e){
    this.$emit('change',e.target.innerText)
   },
   handleTouchStart(e){
        this.touchStatus=true
   },
   handleTouchMove(e){
           if(this.touchStatus){
             if(this.timer){
               clearTimeout(this.timer);
             }
             this.timer=setTimeout(()=>{
                // const startY=this.$refs['A'][0].offsetTop;
             //console.log(startY)元素距离顶部的高度
             const touchY=e.touches[0].clientY-70;
             const index=Math.floor((touchY-this.startY)/22);
            // console.log(index);
             if(index>=0 &&index<this.letters.length){
               this.$emit('change',this.letters[index]);
             }
             },16)
            
             
           }
   },
   handleTouchEnd(e){
      this.touchStatus=false
   }
  }
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
    cursor pointer
    .item
        text-align center
        line-height .44rem 
        color #00bcd4

</style>
