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
      <i style="color:#0284C5;position: absolute;right:0">赛程图</i>
      <h5>
        <span style="position: absolute;left:0"></span>
        <span style="position: absolute;left:0">上一周</span>
        踢馆赛&冒泡赛W3
        <span style="position: absolute;right:0">下一周</span>
        <span style="position: absolute;right:0"></span>
      </h5>
    </div>
    <div class="player">
      <ul>
        <li>
          <div class="time">09-04</div>
          <div class="fplay">
            <img src="/img/tenking/people/1.png" alt="">
            <span>Smuki</span>
          </div>
          <div class="bifen">
            <span>1 : 2</span>
          </div>
          <div class="tplay">
            <img src="/img/tenking/people/2.png" alt="">
            <span>guoyuan</span>
          </div>
          <div class="xizb">
            <span>详细战报</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      zom:1
    }
  },
  mounted() {
    let screenh = window.screen.width;
    let suan = screenh/667;
    this.zom = suan;
  },
}
</script>
<style>
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
}
.tenkinggame .player ul li{
  display: flex;
  justify-content: center;
  text-align: center;
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
    .tenkinggame .player ul li{
      height: 53.6px;
    }
    .tenkinggame .player ul li .time{
      font-size: 12px;
      line-height: 53.6px;
      margin-right: 15px;
    }
    .tenkinggame .player ul li .xizb{
      font-size: 12px;
      line-height: 53.6px;
      margin-left: 18px;
      color: #0284c5;
    }
    .tenkinggame .player ul li img{
      width: 18px;
      margin-top: 10px;
    }
    .tenkinggame .player ul li .bifen{
      margin-top: 18px;
    }
    .tenkinggame .player ul li .fplay{
      width: 50px;
      font-size: 14px;
    }
    .tenkinggame .player ul li .tplay{
      width: 50px;
      font-size: 14px;
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