<template>
  <div class="guessdetail">
    <header>
        <mt-header title="">
            <router-link slot="left" to="/myguess">
                <mt-button  icon="back"></mt-button>
            </router-link>
        </mt-header>
    </header>
    <guesstop>
      <div class="warning">
        <p>规则:</p>
        <p>1、请选择你预测的结果进行投注。</p>
        <p>2、如预测错误，失去该竞猜所投注的皇豆。</p>
        <p>3、如预测正确，将按比例赢得该竞猜奖池中的皇豆。</p>
      </div>
    </guesstop>
      <div class="gsdetail" v-if="id==1">
        <div class="title">
          <p>本赛季个人冠军会属于哪个赛区？</p>
          <img src="/img/myguess/jxz.png" alt="">
        </div>
        <div class="lasttime">
          <p>距离封盘还剩:<span>{{djs}}</span></p>
          <div class="xiazhu">
              <div class="content">
                <p>中国大陆赛区<span style="color:#176ca2;background-color:#DDE9EB;">已下注:1019690</span></p>
                <van-progress
                percentage="70" stroke-width="8"  pivot-text="" color="#FF9306" track-color="#666"/>
              </div>
              <div class="xzpic">
                <img src="/img/myguess/xiazhu.png" alt="">
              </div>
          </div>
          <div class="xiazhu">
              <div class="content">
                <p>日本赛区<span style="color:#176ca2;background-color:#DDE9EB;">已下注:253983</span></p>
                <van-progress
                percentage="25" stroke-width="8"  pivot-text="" color="#FF9306" track-color="#666"/>
              </div>
              <div class="xzpic">
                <img src="/img/myguess/xiazhu.png" alt="">
              </div>
          </div>
          <div class="xiazhu">
              <div class="content">
                <p>东南亚赛区<span style="color:#176ca2;background-color:#DDE9EB;">已下注:94600</span></p>
                <van-progress
                percentage="10" stroke-width="8"  pivot-text="" color="#FF9306" track-color="#666"/>
              </div>
              <div class="xzpic">
                <img src="/img/myguess/xiazhu.png" alt="">
              </div>
          </div>
          <div class="xiazhu">
              <div class="content">
                <p>韩国赛区<span style="color:#176ca2;background-color:#DDE9EB;">已下注:37548</span></p>
                <van-progress
                percentage="5" stroke-width="8"  pivot-text="" color="#FF9306" track-color="#666"/>
              </div>
              <div class="xzpic">
                <img src="/img/myguess/xiazhu.png" alt="">
              </div>
          </div>
        </div>
      </div>
      <div class="gsdetail" v-else-if="id==2">
        <div class="title">
          <p>本赛季哪个赛区会获得团体赛冠军？</p>
          <img src="/img/myguess/jxz.png" alt="">
        </div>
        <div class="lasttime">
          <p>距离封盘还剩:<span>{{djs2}}</span></p>
          <div class="xiazhu">
              <div class="content">
                <p>中国大陆赛区<span style="color:#176ca2;background-color:#DDE9EB;">已下注:879011</span></p>
                <van-progress
                percentage="65" stroke-width="8"  pivot-text="" color="#FF9306" track-color="#666"/>
              </div>
              <div class="xzpic">
                <img src="/img/myguess/xiazhu.png" alt="">
              </div>
          </div>
          <div class="xiazhu">
              <div class="content">
                <p>韩国赛区<span style="color:#176ca2;background-color:#DDE9EB;">已下注:132365</span></p>
                <van-progress
                percentage="20" stroke-width="8"  pivot-text="" color="#FF9306" track-color="#666"/>
              </div>
              <div class="xzpic">
                <img src="/img/myguess/xiazhu.png" alt="">
              </div>
          </div>
          <div class="xiazhu">
              <div class="content">
                <p>日本赛区<span style="color:#176ca2;background-color:#DDE9EB;">已下注:148964</span></p>
                <van-progress
                percentage="20" stroke-width="8"  pivot-text="" color="#FF9306" track-color="#666"/>
              </div>
              <div class="xzpic">
                <img src="/img/myguess/xiazhu.png" alt="">
              </div>
          </div>
          <div class="xiazhu">
              <div class="content">
                <p>东南亚赛区<span style="color:#176ca2;background-color:#DDE9EB;">已下注:53343</span></p>
                <van-progress
                percentage="5" stroke-width="8"  pivot-text="" color="#FF9306" track-color="#666"/>
              </div>
              <div class="xzpic">
                <img src="/img/myguess/xiazhu.png" alt="">
              </div>
          </div>
        </div>
      </div>
      <div class="gsdetail" v-else style="height:80vh;margin-bottom:5vh">
        <div class="title">
          <p>谁将成为CRL本月月度决赛冠军？</p>
          <img src="/img/myguess/jxz.png" alt="">
        </div>
        <div class="lasttime">
          <p>距离封盘还剩:<span>{{djs3}}</span></p>
          <div class="xiazhu">
              <div class="content">
                <p>Lucas<span style="color:#176ca2;background-color:#DDE9EB;">已下注:3073</span></p>
                <van-progress
                percentage="40" stroke-width="8"  pivot-text="" color="#FF9306" track-color="#666"/>
              </div>
              <div class="xzpic">
                <img src="/img/myguess/xiazhu.png" alt="">
              </div>
          </div>
          <div class="xiazhu">
              <div class="content">
                <p>Sandbox<span style="color:#176ca2;background-color:#DDE9EB;">已下注:2700</span></p>
                <van-progress
                percentage="35" stroke-width="8"  pivot-text="" color="#FF9306" track-color="#666"/>
              </div>
              <div class="xzpic">
                <img src="/img/myguess/xiazhu.png" alt="">
              </div>
          </div>
          <div class="xiazhu">
              <div class="content">
                <p>Higher<span style="color:#176ca2;background-color:#DDE9EB;">已下注:1300</span></p>
                <van-progress
                percentage="25" stroke-width="8"  pivot-text="" color="#FF9306" track-color="#666"/>
              </div>
              <div class="xzpic">
                <img src="/img/myguess/xiazhu.png" alt="">
              </div>
          </div>
          <div class="xiazhu">
              <div class="content">
                <p>Arabacı<span style="color:#176ca2;background-color:#DDE9EB;">已下注:0</span></p>
                <van-progress
                percentage="0" stroke-width="8"  pivot-text="" color="#FF9306" track-color="#666"/>
              </div>
              <div class="xzpic">
                <img src="/img/myguess/xiazhu.png" alt="">
              </div>
          </div>
          <div class="xiazhu">
              <div class="content">
                <p>Guriko<span style="color:#176ca2;background-color:#DDE9EB;">已下注:100</span></p>
                <van-progress
                percentage="4" stroke-width="8"  pivot-text="" color="#FF9306" track-color="#666"/>
              </div>
              <div class="xzpic">
                <img src="/img/myguess/xiazhu.png" alt="">
              </div>
          </div>
          <div class="xiazhu">
              <div class="content">
                <p>Bob<span style="color:#176ca2;background-color:#DDE9EB;">已下注:100</span></p>
                <van-progress
                percentage="4" stroke-width="8"  pivot-text="" color="#FF9306" track-color="#666"/>
              </div>
              <div class="xzpic">
                <img src="/img/myguess/xiazhu.png" alt="">
              </div>
          </div>
          <div class="xiazhu">
              <div class="content">
                <p>Ardetoas<span style="color:#176ca2;background-color:#DDE9EB;">已下注:200</span></p>
                <van-progress
                percentage="8" stroke-width="8"  pivot-text="" color="#FF9306" track-color="#666"/>
              </div>
              <div class="xzpic">
                <img src="/img/myguess/xiazhu.png" alt="">
              </div>
          </div>
          <div class="xiazhu">
              <div class="content">
                <p>Adriel<span style="color:#176ca2;background-color:#DDE9EB;">已下注:300</span></p>
                <van-progress
                percentage="12" stroke-width="8"  pivot-text="" color="#FF9306" track-color="#666"/>
              </div>
              <div class="xzpic">
                <img src="/img/myguess/xiazhu.png" alt="">
              </div>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
import guesstop from '../components/guesstopbar.vue'
import moment from 'moment'
export default {
  components: {
    guesstop
  },
  data(){
    return{
      djs: '',
      djs2:'',
      djs3:'',
      id:1
    }
  },
  mounted(){
    let id = this.$route.query.id;
    this.id = id;
    setInterval(() => {
      let start = moment(new Date());//获取开始时间
      let end = moment(new Date("2021/10/1"));//结束时间1
      let end2 = moment(new Date("2021/9/27"));//结束时间2
      let end3 = moment(new Date("2021/9/23"));//结束时间3
      let diff = end-start;//时间差1
      let diff2 = end2-start;//时间差2
      let diff3 = end3-start;//时间差3
      this.djs = `${moment.duration(diff).days()}天${moment.duration(diff).hours()}时${moment.duration(diff).minutes()}分${moment.duration(diff).seconds()}秒`
      this.djs2 = `${moment.duration(diff2).days()}天${moment.duration(diff2).hours()}时${moment.duration(diff2).minutes()}分${moment.duration(diff2).seconds()}秒`
      this.djs3 = `${moment.duration(diff3).days()}天${moment.duration(diff3).hours()}时${moment.duration(diff3).minutes()}分${moment.duration(diff3).seconds()}秒`
    }, 1000)
  }
}
</script>
<style>
.guessdetail .mint-header{
  background-color: transparent;
}
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
.guessdetail .gsdetail .lasttime span{
  background-color: #1C9AFF;
  border-radius: 5px;
}
.guessdetail .gsdetail .lasttime .xiazhu{
  display: flex;
  justify-content: space-around;
  align-content: center;
  margin-top: 4vh;
}
.guessdetail .gsdetail .lasttime .xiazhu .content{
  width: 60%;
}
.guessdetail .gsdetail .lasttime .xiazhu .content p{
  text-align: left;
  font-weight:bold;
}
.guessdetail .gsdetail .lasttime .xiazhu .content p span{
  margin-left: 5vw;
}
.guessdetail .gsdetail .lasttime .xiazhu .xzpic img{
  width: 53px;
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