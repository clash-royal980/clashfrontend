<template>
  <div class="guessdetail">
    <guesstop>
      <div class="warning">
        <p>规则:</p>
        <p>1、请选择你预测的结果进行投注。</p>
        <p>2、如预测错误，失去该竞猜所投注的皇豆。</p>
        <p>3、如预测正确，将按比例赢得该竞猜奖池中的皇豆。</p>
      </div>
    </guesstop>
      <div class="gsdetail">
        <div class="title">
          <p>本赛季个人冠军会属于哪个赛区？</p>
          <img src="/img/myguess/jxz.png" alt="">
        </div>
        <div class="lasttime">
          <p>距离封盘还剩:<span>{{Math.floor(Math.floor(djs/1000)/86400)}}天{{Math.floor(Math.floor(djs/1000)%86400/3600)}}小时{{Math.floor(Math.floor(djs/1000)%3600/60)}}分钟{{Math.floor(djs/1000)%60}}秒</span></p>
        </div>
      </div>
  </div>
</template>
<script>
import guesstop from '../components/guesstopbar.vue'
export default {
  components: {
    guesstop
  },
  data(){
    return{
      djs: (new Date(2021/10/1).getTime()-new Date().getTime())/1000
    }
  },
}
</script>
<style>
.guessdetail .warning{
  position: absolute;
  top: 15%;
  left: 35%;
}
.guessdetail .warning p{
  width: 98%;
  color: #fff;
}
.guessdetail .gsdetail{
  width: 85%;
  height: 306px;
  background-color: #DDE9EB;
  border-radius: 10px;
  border: 1px solid black;
  margin: 0 auto;
  margin-top: 2vh;
}
.guessdetail .gsdetail .title{
  display: flex;
  justify-content: center;
  margin-top: 4vh;
  align-items: center;
}
.guessdetail .gsdetail .title img{
  display: block;
  width: 35px;
}
.guessdetail .gsdetail .title p{
  color: #166099;
  font-size: 12.5px;
  font-weight: bold;
}
.guessdetail .gsdetail .lasttime{
  text-align: center;
  font-size: 12.5px;
  margin-top: 2vh;
}


/* 媒体查询 */
@media screen and (min-width:280px){  
  .guessdetail .warning p{
    font-size: 12px;
    zoom: .7;
  }
}
@media screen and (min-width:320px){  
  .guessdetail .warning p{
    font-size: 12px;
    zoom: .8;
  }
}
@media screen and (min-width:360px){  
  .guessdetail .warning p{
    font-size: 12px;
    zoom: 1;
  }
}
@media screen and (min-width:410px){  
  .guessdetail .warning p{
    font-size: 13px;
  }
}
@media screen and (min-width:540px){  
  .guessdetail .warning p{
    font-size: 17px;
  }
}
@media screen and (min-width:760px){  
  .guessdetail .warning p{
    font-size: 24px;
  }
}
@media screen and (min-width:1000px){  
  .guessdetail .warning p{
    font-size: 30px;
  }
}
</style>