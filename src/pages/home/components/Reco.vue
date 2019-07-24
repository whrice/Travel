<template>
  <div>
    <div class="tit">
      <img class="re-img" src="@/assets/img/like.png" />
      猜你喜欢
    </div>
    <div class="items">
      <div class="place" v-for='item of  recoList' :key='item.id'>
        <div class="like-img">
          <img :src='item.imgUrl' alt />
        </div>
        <div class="like-info">
            <div class="info-tit">{{item.title}}</div>
            <div class="info-des">{{item.desc}}</div>
            <div class="info-btn">查看详情</div>
        </div>
        
      </div>
    </div>
  </div>
</template>
<script>
import avatar1 from '@/assets/img/like/like1.jpg'
import avatar2 from '@/assets/img/like/like2.jpg'
import avatar3 from '@/assets/img/like/like3.jpg'
export default {
  name: "HomeReco",
  data (){
      return{
          recoList:[{
              id:'0001',
              imgUrl: avatar1 ,
              title:'北京欢乐谷',
              desc:'亚洲唯一飞行式过山车等你来挑战'
          },{
              id:'0002',
              imgUrl: avatar1 ,
              title:'北京欢乐谷',
              desc:'亚洲唯一飞行式过山车等你来挑战'
          },{
              id:'0003',
              imgUrl: avatar1 ,
              title:'北京欢乐谷',
              desc:'亚洲唯一飞行式过山车等你来挑战'
          },{
              id:'0004',
              imgUrl: avatar1 ,
              title:'北京欢乐谷',
              desc:'亚洲唯一飞行式过山车等你来挑战'
          }]
      }
  }
};
</script>
<style lang="stylus" scoped>
.tit 
  padding: 0.2rem 0;
  font-size: 0.32rem;
  .re-img 
    margin-left: 0.2rem;
    width: 0.3rem;
    height: 0.3rem;
    display: inline-block;
    vertical-align: baseline;
.items 
   
  .place 
    padding-top .4rem
    display:flex
    padding-bottom :.4rem 
    padding-left .2rem
    border-bottom 1px solid #ccc
    .like-img
        width: 2rem;
        height: 1.8rem;
        margin-right .2rem
        img 
            width 100%
            height 100%
    .like-info
          padding-top .4rem    
          .info-tit
               font-size .32rem
          .info-des
               font-size .24rem
               padding .15rem 0rem
               color: #616161 
          .info-btn
               color  #ff8300  
               margin-top .2rem         

</style>