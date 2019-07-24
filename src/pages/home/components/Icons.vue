<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for='(page,index) of pages' :key='index'>
        <div class="icon" v-for='item of page' :key='item.id'>
          <div class="icon-img">
            <img :src='item.imgUrl'/>
          </div>
          <div class="icon-tit">{{item.desc}}</div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import avatar1 from "@/assets/img/icon1.png";
import avatar2 from "@/assets/img/icon2.png";
import avatar3 from "@/assets/img/icon3.png";
import avatar4 from "@/assets/img/icon4.png";
import avatar5 from "@/assets/img/icon5.png";
import avatar6 from "@/assets/img/icon6.png";
import avatar7 from "@/assets/img/icon7.png";
import avatar8 from "@/assets/img/icon8.png";

export default {
  name: "HomeIcons",
  data() {
    return {
      iconList: [
        {
          id: "0001",
          imgUrl: avatar1,
          desc: "景点门票"
        },
        {
          id: "0002",
          imgUrl: avatar2,
          desc: "深圳必游"
        },
        {
          id: "0003",
          imgUrl: avatar3,
          desc: "暑假夜场"
        },
        {
          id: "0004",
          imgUrl: avatar4,
          desc: "深圳必游"
        },
        {
          id: "0005",
          imgUrl: avatar5,
          desc: "海洋馆"
        },
        {
          id: "0006",
          imgUrl: avatar6,
          desc: "广州融创"
        },
        {
          id: "0007",
          imgUrl: avatar7,
          desc: "深圳动物园"
        },
        {
          id: "0008",
          imgUrl: avatar8,
          desc: "世界之窗"
        },
        {
          id: "0009",
          imgUrl: avatar8,
          desc: "东部华侨城"
        }
      ]
    };
  },
  computed:{
      pages () {
         const pages=[]
         this.iconList.forEach((item,index)=>{
             const page=Math.floor(index/8);
             if(!pages[page]){
                 pages[page]=[]
             }
             pages[page].push(item)
         })
         return pages
      }
  }
};
</script>
<style lang="stylus" scoped>
.icons >>> .swiper-container 
  height: 0;
  padding-bottom: 40%;
  margin-top: 0.15rem;
.icon 
  width: 25%;
  height: 1.5rem;
  float: left;
  box-sizing: border-box;
  .icon-img 
    width: 1.1rem;
    height: 1.1rem;
    margin: 0px auto;
    img 
      width: 100%;
      height: 100%;
  .icon-tit 
    text-align: center;
    margin-top: 0.02rem;
    overflow hidden
    white-space no-wrap
    text-overflow ellipsis
 
</style>
