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
          <div class="xiazhu" v-for="(item,index) of guesscontent" :key="index">
              <div class="content">
                <p>{{item.gu_name}}<span style="color:#176ca2;background-color:#DDE9EB;">已下注:{{item.gu_sum}}</span></p>
                <van-progress
                :percentage="`${item.gu_sum/sum*100}`" stroke-width="8"  pivot-text="" color="#FF9306" track-color="#666"/>
              </div>
              <div class="xzpic">
                <img src="/img/myguess/xiazhu.png" alt="" @click="islogin(item.gu_name)">
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
                <img src="/img/myguess/xiazhu.png" alt="" @click="islogin">
              </div>
          </div>
          <div class="xiazhu">
              <div class="content">
                <p>韩国赛区<span style="color:#176ca2;background-color:#DDE9EB;">已下注:132365</span></p>
                <van-progress
                percentage="20" stroke-width="8"  pivot-text="" color="#FF9306" track-color="#666"/>
              </div>
              <div class="xzpic">
                <img src="/img/myguess/xiazhu.png" alt="" @click="islogin">
              </div>
          </div>
          <div class="xiazhu">
              <div class="content">
                <p>日本赛区<span style="color:#176ca2;background-color:#DDE9EB;">已下注:148964</span></p>
                <van-progress
                percentage="20" stroke-width="8"  pivot-text="" color="#FF9306" track-color="#666"/>
              </div>
              <div class="xzpic">
                <img src="/img/myguess/xiazhu.png" alt="" @click="islogin">
              </div>
          </div>
          <div class="xiazhu">
              <div class="content">
                <p>东南亚赛区<span style="color:#176ca2;background-color:#DDE9EB;">已下注:53343</span></p>
                <van-progress
                percentage="5" stroke-width="8"  pivot-text="" color="#FF9306" track-color="#666"/>
              </div>
              <div class="xzpic">
                <img src="/img/myguess/xiazhu.png" alt="" @click="islogin">
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
                <img src="/img/myguess/xiazhu.png" alt="" @click="islogin">
              </div>
          </div>
          <div class="xiazhu">
              <div class="content">
                <p>Sandbox<span style="color:#176ca2;background-color:#DDE9EB;">已下注:2700</span></p>
                <van-progress
                percentage="35" stroke-width="8"  pivot-text="" color="#FF9306" track-color="#666"/>
              </div>
              <div class="xzpic">
                <img src="/img/myguess/xiazhu.png" alt="" @click="islogin">
              </div>
          </div>
          <div class="xiazhu">
              <div class="content">
                <p>Higher<span style="color:#176ca2;background-color:#DDE9EB;">已下注:1300</span></p>
                <van-progress
                percentage="25" stroke-width="8"  pivot-text="" color="#FF9306" track-color="#666"/>
              </div>
              <div class="xzpic">
                <img src="/img/myguess/xiazhu.png" alt="" @click="islogin">
              </div>
          </div>
          <div class="xiazhu">
              <div class="content">
                <p>Arabacı<span style="color:#176ca2;background-color:#DDE9EB;">已下注:0</span></p>
                <van-progress
                percentage="0" stroke-width="8"  pivot-text="" color="#FF9306" track-color="#666"/>
              </div>
              <div class="xzpic">
                <img src="/img/myguess/xiazhu.png" alt="" @click="islogin">
              </div>
          </div>
          <div class="xiazhu">
              <div class="content">
                <p>Guriko<span style="color:#176ca2;background-color:#DDE9EB;">已下注:100</span></p>
                <van-progress
                percentage="4" stroke-width="8"  pivot-text="" color="#FF9306" track-color="#666"/>
              </div>
              <div class="xzpic">
                <img src="/img/myguess/xiazhu.png" alt="" @click="islogin">
              </div>
          </div>
          <div class="xiazhu">
              <div class="content">
                <p>Bob<span style="color:#176ca2;background-color:#DDE9EB;">已下注:100</span></p>
                <van-progress
                percentage="4" stroke-width="8"  pivot-text="" color="#FF9306" track-color="#666"/>
              </div>
              <div class="xzpic">
                <img src="/img/myguess/xiazhu.png" alt="" @click="islogin">
              </div>
          </div>
          <div class="xiazhu">
              <div class="content">
                <p>Ardetoas<span style="color:#176ca2;background-color:#DDE9EB;">已下注:200</span></p>
                <van-progress
                percentage="8" stroke-width="8"  pivot-text="" color="#FF9306" track-color="#666"/>
              </div>
              <div class="xzpic">
                <img src="/img/myguess/xiazhu.png" alt="" @click="islogin">
              </div>
          </div>
          <div class="xiazhu">
              <div class="content">
                <p>Adriel<span style="color:#176ca2;background-color:#DDE9EB;">已下注:300</span></p>
                <van-progress
                percentage="12" stroke-width="8"  pivot-text="" color="#FF9306" track-color="#666"/>
              </div>
              <div class="xzpic">
                <img src="/img/myguess/xiazhu.png" alt="" @click="islogin">
              </div>
          </div>
        </div>
      </div>
      <van-popup v-model="show" v-if="!$store.state.islogin">
        <div class="mypop">
          <div class="title"><p>请输入游戏信息</p></div>
          <div class="content"><p>您需要登录后才能下注</p></div>
          <div class="btns">
            <div class="btn2" @click="gologin">前往登录</div>
            <div class="btn1" @click="quxiao">取消</div>
          </div>
        </div>
      </van-popup>
      <van-popup v-model="show" v-else>
        <div class="myguess">
          <div class="title">
            <p>本赛季哪个赛区会获得团体赛冠军？</p>
            <img src="/img/myguess/close.png" alt="" @click="quxiao">
          </div>
          <div class="content">
            <p>已选择:{{name}}</p>
            <div class="numinput">
              <input type="text" placeholder="请输入投注数量" v-model="buynum">
              <span @click="clearn">清空</span>
            </div>
            <div class="btns">
              <button @click="change1">100</button>
              <button @click="change2">200</button>
              <button @click="change5">500</button>
              <button @click="change10">1000</button>
              <button @click="changemax">最大</button>
            </div>
            <div class="meinfo">
              <p>您的皇豆数量:{{this.userinfo.goldmoney}}</p>
              <p>投注须知：单次下注皇豆数量不得低于10，并且多次下注累计不超过10万</p>
            </div>
          </div>
          <div class="suresubmit">
              <img src="/img/myguess/sure.png" alt="" @click="tijiao">
            </div>
        </div>
      </van-popup>
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
      id:1,
      show:false,
      guesscontent:[],
      sum:0,
      name:'',
      userinfo:{},
      buynum:''
    }
  },
  methods: {
    clearn(){
      this.buynum='';
    },
    change1(){
      let zindex = document.querySelector('.van-overlay')
      let zindex2 = document.querySelector('.van-popup')
      zindex.style.zIndex=`90`;
      zindex2.style.zIndex=`100`;
      if(this.userinfo.goldmoney<100){
        this.$toast('您的皇豆数不足哟!');
        return;
      }
      this.buynum=100;
    },
    change2(){
      let zindex = document.querySelector('.van-overlay')
      let zindex2 = document.querySelector('.van-popup')
      zindex.style.zIndex=`90`;
      zindex2.style.zIndex=`100`;
      if(this.userinfo.goldmoney<200){
        this.$toast('您的皇豆数不足哟!');
        return;
      }
      this.buynum=200;
    },
    change5(){
      let zindex = document.querySelector('.van-overlay')
      let zindex2 = document.querySelector('.van-popup')
      zindex.style.zIndex=`90`;
      zindex2.style.zIndex=`100`;
      if(this.userinfo.goldmoney<500){
        this.$toast('您的皇豆数不足哟!');
        return;
      }
      this.buynum=500;
    },
    change10(){
      let zindex = document.querySelector('.van-overlay')
      let zindex2 = document.querySelector('.van-popup')
      zindex.style.zIndex=`90`;
      zindex2.style.zIndex=`100`;
      if(this.userinfo.goldmoney<1000){
        this.$toast('您的皇豆数不足哟!');
        return;
      }
      this.buynum=1000;
    },
    changemax(){
      this.buynum=this.userinfo.goldmoney
    },
    islogin(name){
      this.show = true;
      this.name = name;
    },
    quxiao(){
      this.show = false
    },
    gologin(){
      this.$router.push('/myguess')
    },
    tijiao(){
      let zindex = document.querySelector('.van-overlay')
      let zindex2 = document.querySelector('.van-popup')
      zindex.style.zIndex=`90`;
      zindex2.style.zIndex=`100`;
      if(!/^([0-9]*)$/.test(this.buynum)){
        this.$toast('请输入正整数!');
        this.buynum='';
        return;
      }else if(this.buynum<10||this.buynum>100000){
        this.$toast('下注皇豆数量不得低于10且不得超过10万');
        this.buynum='';
        return;
      }else if(this.userinfo.goldmoney<this.buynum){
        this.$toast('您的皇豆数不足哟!');
        this.buynum='';
        return;
      }
      let time = new Date();
          time=time.getMonth() + 1+'-'+time.getDate()+' '+time.getHours()+':'+time.getMinutes();
      this.axios.post('insertguess',`gd_time=${time}&gd_game=本赛季哪个赛区会获得团体赛冠军？&gd_detail=${this.name}&gd_buy=${this.buynum}&gd_phone=${this.userinfo.phone}`).then(()=>{
        let zindex = document.querySelector('.van-overlay')
        let zindex2 = document.querySelector('.van-popup')
        zindex.style.zIndex=`90`;
        zindex2.style.zIndex=`100`;
        this.buynum='';
        this.$toast('下注成功!');
        this.$router.push('/myguess')
      })
    }
  },
  mounted(){
    let id = this.$route.query.id;
    this.id = id;
    setInterval(() => {
      let start = moment(new Date());//获取开始时间
      let end = moment(new Date("2021/10/1"));//结束时间1
      let end2 = moment(new Date("2021/9/27"));//结束时间2
      let end3 = moment(new Date("2021/9/29"));//结束时间3
      let diff = end-start;//时间差1
      let diff2 = end2-start;//时间差2
      let diff3 = end3-start;//时间差3
      this.djs = `${moment.duration(diff).days()}天${moment.duration(diff).hours()}时${moment.duration(diff).minutes()}分${moment.duration(diff).seconds()}秒`
      this.djs2 = `${moment.duration(diff2).days()}天${moment.duration(diff2).hours()}时${moment.duration(diff2).minutes()}分${moment.duration(diff2).seconds()}秒`
      this.djs3 = `${moment.duration(diff3).days()}天${moment.duration(diff3).hours()}时${moment.duration(diff3).minutes()}分${moment.duration(diff3).seconds()}秒`
    }, 1000)
    this.axios.get('selectguess').then(results=>{
      console.log(results);
      this.guesscontent=results.data.results;
      let sum=0;
      for(var key of this.guesscontent){
        sum += key.gu_sum
      }
      console.log(sum);
      this.sum = sum;
    })
    this.axios.get(`selectuser?phone=${this.$store.state.userphone}`).then(result=>{
        this.userinfo = result.data.result[0]
        // console.log(this.userinfo.goldmoney);
    })
  }
}
</script>
<style>
.guessdetail .mint-header{
  background-color: transparent;
  
}
.guessdetail .mintui{
  font-size: 1rem;
}
.guessdetail .van-popup{
  width: 21.66rem;
  /* height: 164px; */
  border-radius: 8px;
  background-color: #636A7C;
  color: #fff;
}
.guessdetail .van-popup .mypop p{
  text-align: center;
  margin-top: 1vh;
  font-size: 1rem;
}
.guessdetail .van-popup .mypop .content p{
  text-align: center;
  margin-top: 5vh;
  font-size: 1rem;
}
.guessdetail .van-popup .btns{
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 5vh;
}
.guessdetail .van-popup .btns .btn1{
  width: 190px;
  height: 80px;
  background-image: url(/img/btn.png);
  /* zoom: .5;  */
  text-align: center;
  line-height: 90px;
  color: #000;
  font-size: 1.66rem;
}
.guessdetail .van-popup .btns .btn2{
  width: 190px;
  height: 80px;
  background-image: url(/img/btn.png);
  background-position: 0 -85px;
  /* zoom: .5; */
  text-align: center;
  line-height: 90px;
  color: #000;
  font-size: 1.66rem;
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
.guessdetail .van-popup .myguess{
  margin-bottom: .5rem;
}
.guessdetail .van-popup .myguess .title{
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: .5rem;
}
.guessdetail .van-popup .myguess .title p{
  padding-left: 1.5rem;
}
.guessdetail .van-popup .myguess .title img{
  width: 1.2rem;
  height: 1.2rem;
  display: block;
}
.guessdetail .van-popup .myguess .content{
  width: 97%;
  height: 14.5rem;
  background-color: #fff;
  margin: .5rem auto 0;
  border-radius: .5rem;
  color: #000;
  font-size: .8rem;
}
.guessdetail .van-popup .myguess .content p{
  text-align: center;
  padding: 1rem;
}
.guessdetail .van-popup .myguess .content .numinput{
  display: flex;
  justify-content: center;
  background-color: #EAF4FF;
  height: 4.2rem;
  align-items: center;
  
}
.guessdetail .van-popup .myguess .content .numinput input{
  height: 1.5rem;
  width: 60%;
  border: 0;
  background-color: #B6C9D9;
  border-radius: .2rem;
  padding-left: .5rem;
}
.guessdetail .van-popup .myguess .content .numinput span{
  margin-left: 1rem;
}
.guessdetail .van-popup .myguess .content .btns{
  background-color: #EAF4FF;
  margin: 0;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.guessdetail .van-popup .myguess .content .btns button{
  height: 1.33rem;
  width: 2.86rem;
  margin: .5rem;
  border: 0;
  background-color: #C2D5DC;
  border-radius: 3px;
}
.guessdetail .van-popup .myguess .content .meinfo{
  color: #000;
  background-color: #EAF4FF;
  height: 4.32rem;
  border-radius: .5rem;
} 
.guessdetail .van-popup .myguess .content .meinfo p{
  text-align: left;
  padding: 0 1.5rem;
}
.guessdetail .van-popup .myguess .suresubmit{
  clear: both;
  margin-top: .5rem;
  margin-right: .5rem;
}
.guessdetail .van-popup .myguess .suresubmit img{
  width: 4.9rem;
  float: right;
}


/* 媒体查询 */
@media screen and (min-width:280px){  
  .guessdetail .warning p{
    font-size: 12px;
    zoom: .7;
  }
  .guessdetail .gsdetail .title p{
    font-size: 12px;
  }
  .guessdetail .gsdetail .lasttime{
    font-size: 12px;
    zoom: .8;
  }
  .guessdetail .gsdetail .lasttime .xiazhu .xzpic img{
    width: 46px;
  }
  .guessdetail .van-popup .btns .btn1{
    zoom: .5;
  }
  .guessdetail .van-popup .btns .btn2{
    zoom: .5;
  }
}
@media screen and (min-width:320px){  
  .guessdetail .warning p{
    font-size: 12px;
    zoom: .8;
  }
  .guessdetail .gsdetail .title p{
    font-size: 12.5px;
  }
  .guessdetail .gsdetail .lasttime{
    font-size: 12.5px;
    zoom: .9;
  }
  .guessdetail .gsdetail .lasttime .xiazhu .xzpic img{
    width: 50px;
  }
}
@media screen and (min-width:360px){  
  .guessdetail .warning p{
    font-size: 12px;
    zoom: 1;
  }
  .guessdetail .gsdetail .title p{
    font-size: 12.5px;
  }
  .guessdetail .gsdetail .lasttime{
    font-size: 12.5px;
    zoom: 1;
  }
  .guessdetail .gsdetail .lasttime .xiazhu .xzpic img{
    width: 63px;
  }
}
@media screen and (min-width:410px){  
  .guessdetail .warning p{
    font-size: 13px;
  }
  .guessdetail .gsdetail{
    height:380px;
  }
  .guessdetail .gsdetail .title p{
    font-size: 12.5px;
  }
  .guessdetail .gsdetail .lasttime{
    font-size: 12.5px;
    zoom: 1;
  }
  .guessdetail .gsdetail .lasttime .xiazhu .xzpic img{
    width: 63px;
  }
  .guessdetail .van-popup .btns .btn1{
    zoom: .6;
  }
  .guessdetail .van-popup .btns .btn2{
    zoom: .6;
  }
}
@media screen and (min-width:540px){  
  .guessdetail .warning p{
    font-size: 17px;
  }
  .guessdetail .gsdetail{
    height:380px;
  }
  .guessdetail .gsdetail .title p{
    font-size: 14px;
  }
  .guessdetail .gsdetail .lasttime{
    font-size: 14px;
  }
  .guessdetail .gsdetail .lasttime .xiazhu .xzpic img{
    width: 72px;
  }
}
@media screen and (min-width:760px){  
  .guessdetail .warning p{
    font-size: 24px;
  }
  .guessdetail .gsdetail{
    height:480px;
  }
  .guessdetail .gsdetail .title p{
    font-size: 20px;
  }
  .guessdetail .gsdetail .lasttime{
    font-size: 20px;
  }
  .guessdetail .gsdetail .lasttime .xiazhu .xzpic img{
    width: 80px;
  }
  .guessdetail .van-popup .btns .btn1{
    zoom: .8;
    font-size: .8rem;
  }
  .guessdetail .van-popup .btns .btn2{
    zoom: .8;
    font-size: .8rem;
  }
}
@media screen and (min-width:1000px){  
  .guessdetail .warning p{
    font-size: 30px;
  }
  .guessdetail .gsdetail{
    height:550px;
  }
  .guessdetail .gsdetail .title p{
    font-size: 24px;
  }
  .guessdetail .gsdetail .lasttime{
    font-size: 24px;
  }
  .guessdetail .gsdetail .lasttime .xiazhu .xzpic img{
    width: 90px;
  }
  .guessdetail .van-popup .btns .btn1{
    zoom: 1;
  }
  .guessdetail .van-popup .btns .btn2{
    zoom: 1;
  }
}
</style>