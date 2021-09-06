<template>
  <div class="carouselbar">
     <mt-swipe :style="{height:h,marginBottom:parseInt(h)*0.05+'px'}" :speed="1000" :auto="1000" :showIndicators="false" :continuous="true" class="mtswipe"  ref="swipe">
        <mt-swipe-item v-for="(item,index) in carouse" :key="index">
            <p :style="{top:parseInt(h)-parseInt(ph)+'px',height:ph,lineHeight:ph,fontSize:fs}">
            {{item.title}}</p>
            <img :src="`${item.img}`" alt="">
            <span :style="{marginTop: parseInt(h)-parseInt(ph)+'px',lineHeight:ph,fontSize:fs}">{{item.id}}<a :style="{fontSize:parseFloat(fs)*0.8+'rem'}">/{{carouse.length}}</a></span>
        </mt-swipe-item>
      </mt-swipe>
      <div class="gamepic">
        <img src="/img/gamenews.png" alt="" style="position: relative;">
        <img src="/img/game.png" alt="">
      </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      h:'298px',
      ph:'40px',
      fs:'1rem',
      carouse:[
        {id:1,title:'《你问我来答》EP2之翻牌大会',img:'/img/carouserl/1.png'},
        {id:2,title:'诛神之夜！日本“魔鬼”新人一穿五夺冠',img:'/img/carouserl/2.png'},
        {id:3,title:' C博士呕血新作 史上最全卡组教学来了！',img:'/img/carouserl/3.png'},
        {id:4,title:'天王再临！十大天王争霸赛第二赛季震撼回归 ',img:'/img/carouserl/4.png'},
        {id:5,title:'赛制详解！你离1000万只差这份攻略！',img:'/img/carouserl/5.jpg'}]
    }
  },
  methods:{
     initSwipeHeight(){
      let picw=960;
      let pich=764;
      let screenw=window.screen.width //屏幕宽度的像素
      let swipeh=Math.floor(pich*screenw/picw)+'px';
      this.h=swipeh; 
    },
    PHeight(){
      let swipeh=Math.floor(parseInt(this.h)*40/298)+'px';
      this.ph=swipeh; 
    },
    Fs(){
      let swipeh=parseInt(this.ph)*1/40+'rem';
      this.fs=swipeh; 
    },
  },
  mounted(){
    this.initSwipeHeight();
    this.PHeight();
    this.Fs();
  },
}
</script>
<style>
.carouselbar .mtswipe{
  position: relative;
}
.carouselbar .mtswipe img{width: 100%;}
.carouselbar .mtswipe p{
  position: absolute;
  /* top: 258px; */
  left: 0;
  background-color: rgba(0,0,0,.5);
  /* height:40px; */
  width: 100%;
  margin: 0;
  /* line-height: 40px; */
  color: #fff;
  /* font-size: 1rem; */
}
.carouselbar .mtswipe span{
  position: absolute;
  right: 0;
  color:#fff;
  display: inline-block;
}
.carouselbar .mtswipe span a{
  color: #aaa;
  font-size: .8rem;
}
.carouselbar .gamepic{
  position: relative;
}
.carouselbar .gamepic img:first-child{
  width: 100%;
}
.carouselbar .gamepic img:nth-child(2){
  width: 25%;
  position: absolute;
  top: 8%;
  left: 38%;
}
</style>