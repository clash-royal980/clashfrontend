<template>
  <div class="tenkinggame">
    <div class="toppic">
        <img src="/img/gamenews.png" alt="" style="position: relative;">
        <!-- <img src="/img/game.png" alt=""> -->
        <div class="time" :style="{zoom:zom}"></div>
    </div>
    <div class="gametitle">
      <img src="/img/tenking/jxz.png" alt="">
      <span>十大天王争霸赛</span>
    </div>
    <div class="gamecontent">
      <span>十大天王争霸赛</span>
      <!-- <span>赛程图</span> -->
      <i style="color:#0284C5;position: absolute;right:0" @click="showpic">赛程图</i>
      <h5>
        <span style="position: absolute;left:0"></span>
        <span style="position: absolute;left:0" @click="prev">上一周</span>
        踢馆赛&冒泡赛{{type}}
        <span style="position: absolute;right:0" @click="next">下一周</span>
        <span style="position: absolute;right:0"></span>
      </h5>
    </div>
    <div class="player">
      <ul v-show="isshow">
        <li v-for="(item,i) of tenkingpeople" :key="i">
          <div class="time">{{item.play_time}}</div>
          <div class="tplay">
            <img :src="`${item.play1_pic}`" alt="">
            <span>{{item.play1_name}}</span>
          </div>
          <div class="bifen">
            <span>{{item.fen1}} : {{item.fen2}}</span>
          </div>
          <div class="tplay">
            <img :src="`${item.play2_pic}`" alt="">
            <span>{{item.play2_name}}</span>
          </div>
          <div class="xizb">
            <router-link :to="`/battle?id=${item.id}`"><span>详细战报</span></router-link>
          </div>
        </li>
      </ul>
      <img :src="`/img/tenking/${picid}.jpg`" alt="" v-show="!isshow">
    </div>  
  </div>
</template>
<script>
export default {
  data(){
    return{
      zom:1,
      isshow:true,
      tenkingpeople:[],
      type:'W3',
      picid:4
    }
  },
  methods: {
    showpic(){
      if(this.isshow==true){
        this.isshow = false
      }else{
        this.isshow = true
      }
    },
    prev(){
      if(this.type=='W3'){
        this.type = 'W2'
        this.picid = 3
      }else if(this.type=='W2'){
        this.type = 'W1'
        this.picid = 2
      }else if(this.type=='W1'){
        this.type = 'W0'
        this.picid = 1
      }
    },
    next(){
      if(this.type=='W0'){
        this.type = 'W1'
        this.picid = 2
      }else if(this.type=='W1'){
        this.type = 'W2'
        this.picid = 3
      }else if(this.type=='W2'){
        this.type = 'W3'
        this.picid = 4
      }
    }
  },
  mounted() {
    let screenh = window.screen.width;
    let suan = screenh/667;
    this.zom = suan;
    this.axios.get(`/tenkingpk?type=${this.type}`).then(result=>{
      console.log(result);
      this.tenkingpeople=result.data.results
    })
  },
  watch:{
    type(newvaule){
      this.axios.get(`/tenkingpk?type=${newvaule}`).then(result=>{
        console.log(result);
        this.tenkingpeople=result.data.results
      })
    }
  }
}
</script>
<style>
.tenkinggame{
  margin-bottom: 5vh;
}
.tenkinggame .toppic{
  position: relative;
}
.tenkinggame .toppic img:first-child{
  width: 100%;
}
.tenkinggame .toppic .time{
  width: 245px;
  height: 70px;
  position: absolute;
  background-image: url(/img/tenking/team_sp.24e9ce0.png);
  background-position: 0 -120px;
  top: 0;
  left: 50%;
  transform: translateX(-60%);
}

.tenkinggame .gametitle img{
    position: absolute;
}
.tenkinggame .gametitle{
  margin: 2vh 5vw;
  background-color: #BDCAD2;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  margin-bottom: 0;
  background-color: #BDCAD2;
  position: relative;
  color: #0284c5;
}
.tenkinggame .gametitle span{
    margin-left: 18px;
}
.tenkinggame .gamecontent{
  position: relative;
  background-color: #E4EDF2;
  margin: 0 auto;
  width: 90%;
  border: 1px solid black;
  border-bottom: 0;
  border-top: 0;
  text-align: center; 
}
.tenkinggame .gamecontent i{
    font-style: inherit;
}
.tenkinggame .gamecontent h5{
  background-color: #BDCAD2;
  padding: 1vh 0;
}
.tenkinggame .gamecontent h5 span:first-child{
  width:30px;
  height: 30px;
  background-image: url(/img/tenking/team_sp.24e9ce0.png);
  background-position: -80px -220px;
}
.tenkinggame .gamecontent h5 span:last-child{
  width:30px;
  height: 30px;
  background-image: url(/img/tenking/team_sp.24e9ce0.png);
  background-position: -80px -267px;
}
.tenkinggame .player ul{
  background-color: #E4EDF2;
  margin: 0 auto;
  width: 90%;
  border-bottom: 1px solid #ddd;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
.tenkinggame .player ul li{
  display: flex;
  justify-content: space-around;
  text-align: center;
  align-items: center;
  border-bottom: 1px solid #ccc;
  margin: 0 2vw;
}
.tenkinggame .player ul li:last-child{
  border-bottom: 0;
}
.tenkinggame .player ul li .xizb span{
  color: #0284c5;
}
.tenkinggame .player>img{
  width: 90%;
  display: block;
  margin: 0 auto;
}

/* 媒体查询 */
@media screen and (min-width:280px) {
    .tenkinggame .gametitle{
      width: 90.09px;
      height: 29.25px;
      line-height: 29.25px;
      font-size: 12px;
    }
    .tenkinggame .gametitle img{
      height: 12.5px;
      top: -10px;
      left: 65px;
    }
    .tenkinggame .gametitle span{
      margin-left: 2px;
    }
    .tenkinggame .gamecontent>span{
      font-size: 12px;
    }
    .tenkinggame .gamecontent i{
      font-size: 12px;
      line-height: 22px;;
    }
    .tenkinggame .gamecontent h5{
      font-size: 12px;
    }
    .tenkinggame .gamecontent h5 span:first-child{
      zoom: .4;
      margin-top: 6px;
      margin-left: 5px;
    }
    .tenkinggame .gamecontent h5 span:nth-child(2){
      margin-left: 15px;
    }
    .tenkinggame .gamecontent h5 span:last-child{
      zoom: .4;
      margin-top: 6px;
      margin-right: 5px;
    }
    .tenkinggame .gamecontent h5 span:nth-child(3){
      margin-right: 15px;
    }
    .tenkinggame .player ul li{
      height: 53.6px;
      font-size: 12px;
    } 
    .tenkinggame .player ul li img{
      width: 18px;
    }
    .tenkinggame .player ul li .tplay{
      display: flex;
      justify-content: center;
      width: 20px;
      flex-wrap: wrap;
    }
}
@media screen and (min-width:320px) {
    .tenkinggame .gametitle{
      width: 102.69px;
      height: 33.14px;
      line-height: 33.14px;
      font-size: 12px;
    }
    .tenkinggame .gametitle img{
      height: 15.5px;
      top: -10px;
      left: 80px;
    }
    .tenkinggame .gametitle span{
      margin-left: 10px;
    }
    .tenkinggame .gamecontent>span{
      font-size: 14px;
  }
}
@media screen and (min-width:360px) {
    .tenkinggame .gametitle{
      width: 120px;
      height: 38.5px;
      line-height: 38.5px;
      font-size: 12px;
    }
    .tenkinggame .gametitle img{
      height: 15.5px;
      top: -10px;
      left: 80px;
    }
    .tenkinggame .gametitle span{
      margin-left: 18px;
    }
    .tenkinggame .gamecontent>span{
      font-size: 16.5px;
    }
}

@media screen and (min-width:400px) {
  .tenkinggame .gametitle{
    width: 131.5px;
    height: 42.19px;
    line-height: 42.19px;
    font-size: 14px;
  }
  .tenkinggame .gametitle img{
    height: 15.5px;
    top: -10px;
    left: 86px;
  }
  .tenkinggame .gamecontent>span{
      font-size: 18.2px;
  }
  .tenkinggame .gamecontent i{
      font-size: 12px;
      line-height: 25px;
  }
  .tenkinggame .gamecontent h5{
      font-size: 14px;
  }
  .tenkinggame .gamecontent h5 span:first-child{
      zoom: .4;
      margin-top: 10px;
      margin-left: 6px;
  }
  .tenkinggame .gamecontent h5 span:last-child{
      zoom: .4;
      margin-top: 10px;
      margin-right: 6px;
  }
  .tenkinggame .player ul li{
      height: 61.27px;
      font-size: 14px;
    }
    .tenkinggame .player ul li img{
      width: 20px;
    }
    .tenkinggame .player ul li .tplay{
      display: flex;
      justify-content: center;
      width: 22px;
      flex-wrap: wrap;
    }
}

@media screen and (min-width:480px) {
  .tenkinggame .gametitle{
    width: 172.78px;
    height: 55.42px;
    line-height: 55.42px;
    font-size: 16px;
  }
  .tenkinggame .gametitle img{
    height: 20px;
    top: -10px;
    left: 110px;
  }
  .tenkinggame .gametitle span{
      margin-left: 28px;
  }
  .tenkinggame .gamecontent>span{
      font-size: 21.4px;
  }
  .tenkinggame .gamecontent i{
      font-size: 15.84px;
      line-height: 30px;
  }
}

@media screen and (min-width:640px) {
  .tenkinggame .gametitle{
    width: 240px;
    height: 77px;
    line-height: 77px;
    font-size: 24px;
  }
  .tenkinggame .gametitle img{
    height: 30px;
    top: -10px;
    left: 150px;
  }
  .tenkinggame .gametitle span{
      margin-left: 28px;
  }
  .tenkinggame .gamecontent>span{
      font-size: 33px;
  }
  .tenkinggame .gamecontent i{
      font-size: 22px;
      line-height: 45px;
  }
  .tenkinggame .gamecontent h5{
      font-size: 22px;
  }
  .tenkinggame .gamecontent h5 span:first-child{
      zoom: .8;
      margin-top: 6px;
      margin-left: 5px;
    }
  .tenkinggame .gamecontent h5 span:nth-child(2){
      margin-left: 30px;
    }
  .tenkinggame .gamecontent h5 span:last-child{
      zoom: .8;
      margin-top: 6px;
      margin-right: 5px;
    }
  .tenkinggame .gamecontent h5 span:nth-child(3){
      margin-right: 30px;
    }
    .tenkinggame .player ul li{
      height: 110px;
      font-size: 25px;
    }
    .tenkinggame .player ul li img{
      width: 35px;
    }
    .tenkinggame .player ul li .tplay{
      display: flex;
      justify-content: center;
      width: 35px;
      flex-wrap: wrap;
    }
}
@media screen and (min-width:1024px) {
  .tenkinggame .gametitle{
    width: 240px;
    height: 77px;
    line-height: 77px;
    font-size: 24px;
  }
  .tenkinggame .gametitle img{
    height: 30px;
    top: -10px;
    left: 150px;
  }
  .tenkinggame .gametitle span{
      margin-left: 28px;
  }
  .tenkinggame .gamecontent>span{
      font-size: 33px;
  }
}
*{
    padding: 0;
    margin: 0;
}

</style>