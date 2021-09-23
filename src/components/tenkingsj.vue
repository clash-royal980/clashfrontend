<template>
  <div class="tenkingsj">
    <div class="twopic">
        <img src="/img/gamenews.png" alt="" style="position: relative;">
        <!-- <img src="/img/game.png" alt=""> -->
        <div class="sj" :style="{zoom:zom}"></div>
    </div>
    <div class="cardsj">
      <van-tabs v-model="active">
        <van-tab title="选手排名" name="0">
          <table rules=none>
            <thead>
              <tr>
                <td>排名</td>
                <td>选手</td>
                <td>胜</td>
                <td>负</td>
                <td>胜率</td>
                <td>场均皇冠数</td>
                <td>积分</td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item,index) of tenkingdata" :key='index'>
                <td>{{item.player_rank}}</td>
                <td>{{item.player_name}}</td>
                <td>{{item.win}}</td>
                <td>{{item.lose}}</td>
                <td>{{item.player_crown}}</td>
                <td>{{item.player_integral}}</td>
                <td>200</td>
              </tr>
            </tbody>
            <div class="first">1</div>
            <div class="secend">2</div>
            <div class="third">3</div>
          </table>
        </van-tab>
        <van-tab title="卡组数据"  name="1">
          <div class="tkcard">
            <div class="tktitle">
              <div class="list">
                <div :class="issl" @click="changesl">
                  <span>胜率</span>
                  <span :class="slg"></span>
                </div>
                <div :class="isdcs" @click="changdcs">
                  <span>登场数</span>
                  <span :class="dcs"></span>
                </div>
                <div :class="ishgs" @click="changehgs">
                  <span>平均皇冠数</span>
                  <span :class="hgs"></span>
                </div>
              </div>
            </div>
            <div class="cardrank">
              <ul>
                <li v-for="(item,index) of tenkingcard" :key="index">
                  <div class="rank">{{index+1}}</div>
                  <div class="right">
                    <div class="card" v-html="item.card_content">
                      <!-- <img src="/img/tenking/card/68.png" alt="">
                      <img src="/img/tenking/card/11.png" alt="">
                      <img src="/img/tenking/card/5.png" alt="">
                      <img src="/img/tenking/card/2.png" alt="">
                      <img src="/img/tenking/card/81.png" alt="">
                      <img src="/img/tenking/card/15.png" alt="">
                      <img src="/img/tenking/card/7.png" alt="">
                      <img src="/img/tenking/card/1.png" alt=""> -->
                    </div>
                    <div class="info">
                      <p>胜率：{{item.card_sl*100}}%</p>
                      <p>登场数:{{item.card_dcs}}</p>
                      <p>场均皇冠数:{{item.card_hgs}}</p>
                    </div>
                  </div>
                </li>
              </ul>
                <div class="first"><span>1</span></div>
                <div class="secend"><span>2</span></div>
                <div class="third"><span>3</span></div>
            </div>
            <div class="tkcontent"></div>
          </div>
        </van-tab>
        <van-tab title="荣誉殿堂" name="2">内容 3</van-tab>
      </van-tabs> 
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      zom:1,
      active:'0',
      tenkingdata:[],
      tenkingcard:[],
      issl:{sheng:true,active:true},
      slg:{shengpic:true,active:true},
      isdcs:{dzj:true,active:false},
      dcs:{dzjpic:true,active:false},
      ishgs:{pjhs:true,active:false},
      hgs:{pjhspic:true,active:false},
      type:'card_sl'
    }
  },
  methods: {
    changesl(){
      this.issl.active=true;
      this.slg.active=true;
      this.isdcs.active=false;
      this.dcs.active=false;
      this.ishgs.active=false;
      this.hgs.active=false;
      this.type='card_sl';
    },
    changdcs(){
      this.issl.active=false;
      this.slg.active=false;
      this.isdcs.active=true;
      this.dcs.active=true;
      this.ishgs.active=false;
      this.hgs.active=false;
      this.type='card_dcs';
    },
    changehgs(){
      this.issl.active=false;
      this.slg.active=false;
      this.isdcs.active=false;
      this.dcs.active=false;
      this.ishgs.active=true;
      this.hgs.active=true;
      this.type='card_hgs';
    }
  },
   mounted() {
    let screenh = window.screen.width;
    let suan = screenh/667;
    this.zom = suan;
     this.axios.get(`/tenkingdata`).then(result=>{
      console.log(result);
      this.tenkingdata=result.data.results
    })
    this.axios.get(`/tenkingcard?type=card_sl`).then(result=>{
      console.log(result);
      this.tenkingcard=result.data.results
    })
    this.$nextTick(()=>{
      var first = document.querySelector('.tenkingsj .cardsj table tbody:first-child tr:first-child td')
    })
   },
   watch:{
     type(newvalue){
       this.axios.get(`/tenkingcard?type=${newvalue}`).then(result=>{
        console.log(result);
        this.tenkingcard=result.data.results
        console.log(this.tenkingcard);
      })
     }
   }
}
</script>
<style>
.tenkingsj{
  position: relative;
  margin-bottom: 15vh;
}
.tenkingsj .twopic img:first-child{
  width: 100%;
}
.tenkingsj .twopic .sj{
  width: 230px;
  height: 50px;
  position: absolute;
  background-image: url(/img/tenking/team_sp.24e9ce0.png);
  background-position: -200px -250px;
  top: 0;
  left: 50%;
  transform: translateX(-60%);
}
.tenkingsj .cardsj{
  margin-top: 2vh;
}
.tenkingsj .van-tab__pane{
  margin-bottom: 10vh;
  margin: 0 auto;
}
/* .tenkingsj .van-tabs .van-tabs__wrap{
  height: 37.44px;
} */
.tenkingsj .van-tab{
  background-color: #2383C5;
  color: #fff;
  border-top-right-radius: .5rem;
  border-top-left-radius: .5rem;
  /* border: 1px solid #75B7E6; */
  margin: 0 5px;
}
.tenkingsj .van-tabs{
  position: static;
}
.tenkingsj .van-tabs__nav{
  position:relative;
}
.tenkingsj .van-tabs__nav{
  background-color: transparent;
  width: 90%;
  margin: 0 auto;
}
.tenkingsj .van-tab.van-tab--active{
  background-color: #0A345C;
  border-bottom: 0;
}
.tenkingsj .van-tabs__line{
  background-color: transparent;
}
.tenkingsj .van-tab__pane{
  border: 1px solid #114971;
  border-top: 0;
  background-color: #0A345C;
  border-bottom-right-radius: .5rem;
  border-bottom-left-radius: .5rem;
}

.tenkingsj .cardsj table{
  width: 100%;
  color: #fff;
  text-align: center;
  position: relative;
}
.tenkingsj .cardsj table thead tr{
  background-color: #0E3C68;
}
.tenkingsj .cardsj table tbody tr td:first-child{
  background-color: #0E3C68;
}
.tenkingsj .cardsj table tbody tr td:nth-child(2){
  color: #ffdf4f;
}
.tenkingsj .cardsj table .first{
  width: 50px;
  height: 50px;
  position: absolute;
  background-image: url(/img/tenking/下载.png);
  background-position: 0 -265px;
}
.tenkingsj .cardsj table .secend{
  width: 50px;
  height: 50px;
  position: absolute;
  background-image: url(/img/tenking/下载.png);
  background-position: -60px -265px;
}
.tenkingsj .cardsj table .third{
  width: 50px;
  height: 50px;
  position: absolute;
  background-image: url(/img/tenking/下载.png);
  background-position: -120px -265px;
}
.tenkingsj .cardsj .tktitle{
  overflow: hidden;
}
.tenkingsj .cardsj .tktitle .list{
  background-color: #0C3E6C;
  color: #fff;
  display: flex;
  justify-content: flex-start;
  align-content: center;
  border: 2px solid #013153;
}
.tenkingsj .cardsj .tktitle .list .sheng .shengpic{
  display: inline-block;
  width: 16px;
  height: 16px;
  background-position: -209px -110px;
  background-image: url(/img/tenking/下载.png);
}
.tenkingsj .cardsj .tktitle .list .sheng .shengpic.active{
  background-position: -182px -110px;
}
.tenkingsj .cardsj .tktitle .list .sheng.active{
  color: #f7d84a;
}
.tenkingsj .cardsj .tktitle .list .dzj .dzjpic{
  display: inline-block;
  width: 16px;
  height: 16px;
  background-position: -209px -110px;
  background-image: url(/img/tenking/下载.png);
}
.tenkingsj .cardsj .tktitle .list .dzj .dzjpic.active{
  background-position: -182px -110px;
}
.tenkingsj .cardsj .tktitle .list .dzj.active{
  color: #f7d84a;
}
.tenkingsj .cardsj .tktitle .list .pjhs .pjhspic{
  display: inline-block;
  width: 16px;
  height: 16px;
  background-position: -209px -110px;
  background-image: url(/img/tenking/下载.png);
}
.tenkingsj .cardsj .tktitle .list .pjhs .pjhspic.active{
  background-position: -182px -110px;
}
.tenkingsj .cardsj .tktitle .list .pjhs.active{
  color: #f7d84a;
}
.tenkingsj .cardsj .cardrank ul li{
  display: flex;
  /* justify-content: space-between; */
  color: #fff;
  border-top: 1px solid #084070;
}
.tenkingsj .cardsj .cardrank ul li .rank{
  background-color: #0F3C66;
  text-align: center;
}
.tenkingsj .cardsj .cardrank ul li .right{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.tenkingsj .cardsj .cardrank ul li .right .card{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 1vh;
  margin-right: 1vh;
}
.tenkingsj .cardsj .cardrank ul li .right .info{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.tenkingsj .cardsj .cardrank{
  position: relative;
}
.tenkingsj .cardsj .cardrank .first{
  width: 50px;
  height: 50px;
  position: absolute;
  background-image: url(/img/tenking/下载.png);
  background-position: 0 -265px;
}
.tenkingsj .cardsj .cardrank .secend{
  width: 50px;
  height: 50px;
  position: absolute;
  background-image: url(/img/tenking/下载.png);
  background-position: -60px -265px;
}
.tenkingsj .cardsj .cardrank .third{
  width: 50px;
  height: 50px;
  position: absolute;
  background-image: url(/img/tenking/下载.png);
  background-position: -120px -265px;
}

/* 媒体查询 */
@media screen and (min-width:280px) {
  .tenkingsj .van-tab{
    height: 29.11px;
    font-size: 12px;
  }
  .tenkingsj .van-tabs .van-tabs__wrap{
    height: 29.11px;
  }
  .tenkingsj .cardsj table tr{
    height: 33.35px;
    font-size: 12px;
  }
  .tenkingsj .van-tab__pane{
    width: 86.2%;
  }
  .tenkingsj .cardsj table .first{
    top: 116px;
    left: 15px;
    font-size: 26px;
    line-height: 50px;
    zoom: .35;
  }
  .tenkingsj .cardsj table .secend{
    top: 215px;
    left: 15px;
    font-size: 26px;
    line-height: 50px;
    zoom: .35;
  }
  .tenkingsj .cardsj table .third{
    top: 310px;
    left: 15px;
    font-size: 26px;
    line-height: 50px;
    zoom: .35;
  }
  .tenkingsj .cardsj .tktitle{
    height: 43.56px;
  }
  .tenkingsj .cardsj .tktitle .list{
    height: 27px;
    line-height: 27px;
    margin: 8.3px 4.5px;
    font-size: 12px;
    border: 2px solid #013153;
  }
  .tenkingsj .cardsj .tktitle .list div{
    padding: 0 10px;
  }
  .tenkingsj .cardsj .tktitle .list .sheng .shengpic{
    zoom: .6;
    margin-left: 5px;
    transform: translateY(1px);
  }
  .tenkingsj .cardsj .tktitle .list .dzj .dzjpic{
    zoom: .6;
    margin-left: 5px;
    transform: translateY(1px);
  }
  .tenkingsj .cardsj .tktitle .list .pjhs .pjhspic{
    zoom: .6;
    margin-left: 5px;
    transform: translateY(1px);
  }
  .tenkingsj .cardsj .cardrank ul li{
    height: 79.89px;
    line-height: 79.89px;
  }
  .tenkingsj .cardsj .cardrank ul li .rank{
    width: 26.73px;
    font-size: 12px;
  }
  .tenkingsj .cardsj .cardrank ul li .right .card{
    width: 120px;
  }
  .tenkingsj .cardsj .cardrank ul li .right .info{
    font-size: 12px;
    width: 80px;
    height: 51px;
  }
  .tenkingsj .cardsj .cardrank ul li .right .info p{
    height: 17px;
    line-height: 17px;
  }
  .tenkingsj .cardsj .cardrank ul li .right .card img{
    width: 24.63px;
    height: 29.69px;
  }
  .tenkingsj .cardsj .cardrank .first{
    zoom: .4;
    top: 70px;
    left: 5px;
    color: #fff;
    font-size: 36px;
    line-height: 50px;
  }
  .tenkingsj .cardsj .cardrank .first span{
    margin-left: 10px;
  }
  .tenkingsj .cardsj .cardrank .secend{
    zoom: .4;
    top: 270px;
    left: 5px;
    color: #fff;
    font-size: 36px;
    line-height: 50px;
  }
  .tenkingsj .cardsj .cardrank .secend span{
    margin-left: 10px;
  }
  .tenkingsj .cardsj .cardrank .third{
    zoom: .4;
    top: 470px;
    left: 5px;
    color: #fff;
    font-size: 36px;
    line-height: 50px;
  }
  .tenkingsj .cardsj .cardrank .third span{
    margin-left: 10px;
  }
}
@media screen and (min-width:320px){                           
   .tenkingsj .van-tab{
    height: 33.28px;
    font-size: 12px;
  }
  .tenkingsj .van-tabs .van-tabs__wrap{
    height: 33.28px;
  }
  .tenkingsj .cardsj table tr{
    height: 36.35px;
  }
  .tenkingsj .van-tab__pane{
    width: 87%;
  }
  .tenkingsj .cardsj table .first{
    top: 95px;
    left: 11px;
    font-size: 26px;
    line-height: 50px;
    zoom: .45;
    font-size: 20px;
  }
  .tenkingsj .cardsj table .secend{
    top: 176px;
    left: 11px;
    font-size: 26px;
    line-height: 50px;
    zoom: .45;
    font-size: 20px;
  }
  .tenkingsj .cardsj table .third{
    top:257px;
    left: 11px;
    font-size: 26px;
    line-height: 50px;
    zoom: .45;
    font-size: 20px;
  }
  .tenkingsj .cardsj .tktitle .list .sheng .shengpic{
    transform: translateY(2px);
  }
  .tenkingsj .cardsj .tktitle .list .dzj .dzjpic{
    transform: translateY(2px);
  }
  .tenkingsj .cardsj .tktitle .list .pjhs .pjhspic{
    transform: translateY(2px);
  }
  .tenkingsj .cardsj .cardrank ul li{
    height: 91.3px;
    line-height: 91.3px;
  }
  .tenkingsj .cardsj .cardrank ul li .rank{
    width: 32.84px;
    font-size: 13px;
  }
  .tenkingsj .cardsj .cardrank ul li .right .card{
    width: 140px;
  }
  .tenkingsj .cardsj .cardrank ul li .right .info{
    font-size: 13px;
    width: 90px;
    height: 51px;
  }
  .tenkingsj .cardsj .cardrank ul li .right .info p{
    height: 17px;
    line-height: 17px;
  }
  .tenkingsj .cardsj .cardrank ul li .right .card img{
    width: 28.16px;
    height: 33.95px;
  }
   .tenkingsj .cardsj .cardrank .first{
    zoom: .4;
    top: 80px;
    left: 12px;
  }
  .tenkingsj .cardsj .cardrank .first span{
    margin-left: 15px;
  }
  .tenkingsj .cardsj .cardrank .secend{
    zoom: .4;
    top: 320px;
    left: 12px;
  }
  .tenkingsj .cardsj .cardrank .secend span{
    margin-left: 15px;
  }
  .tenkingsj .cardsj .cardrank .third{
    zoom: .4;
    top: 550px;
    left: 12px;
  }
  .tenkingsj .cardsj .cardrank .third span{
    margin-left: 15px;
  }
}
@media screen and (min-width:360px) {
  .tenkingsj .van-tab{
    height: 37.23px;
    font-size: 13px;
  }
  .tenkingsj .van-tabs .van-tabs__wrap{
    height: 37.23px;
  }
  .tenkingsj .cardsj table tr{
    height: 44.5px;
    font-size: 13px;
  }
  .tenkingsj .van-tab__pane{
    width: 87%;
  }
  .tenkingsj .cardsj table .first{
    top: 108px;
    left: 11px;
    font-size: 26px;
    line-height: 50px;
    zoom: .5;
    font-size: 20px;
  }
  .tenkingsj .cardsj table .secend{
    top: 200px;
    left: 11px;
    font-size: 26px;
    line-height: 50px;
    zoom: .5;
    font-size: 20px;
  }
  .tenkingsj .cardsj table .third{
    top: 286px;
    left: 11px;
    font-size: 26px;
    line-height: 50px;
    zoom: .5;
    font-size: 20px;
  }
  .tenkingsj .cardsj .tktitle{
    height: 57px;
  }
  .tenkingsj .cardsj .tktitle .list{
    height: 35px;
    line-height: 35px;
    margin: 10.5px 6.3px;
    font-size: 12px;
    border: 2px solid #013153;
  }
  .tenkingsj .cardsj .tktitle .list div{
    padding: 0 15px;
  }
  .tenkingsj .cardsj .tktitle .list .sheng .shengpic{
    zoom: .7;
    margin-left: 5px;
    transform: translateY(3px);
  }
  .tenkingsj .cardsj .tktitle .list .dzj .dzjpic{
    zoom: .7;
    margin-left: 5px;
    transform: translateY(3px);
  }
  .tenkingsj .cardsj .tktitle .list .pjhs .pjhspic{
    zoom: .7;
    margin-left: 5px;
    transform: translateY(3px);
  }
  .tenkingsj .cardsj .cardrank ul li{
    height: 107px;
    line-height: 107px;
  }
  .tenkingsj .cardsj .cardrank ul li .rank{
    width: 38.5px;
    font-size: 13px;
  }
  .tenkingsj .cardsj .cardrank ul li .right .card{
    width: 160px;
  }
  .tenkingsj .cardsj .cardrank ul li .right .info{
    font-size: 13px;
    width: 100px;
    height: 51px;
  }
  .tenkingsj .cardsj .cardrank ul li .right .info p{
    height: 17px;
    line-height: 17px;
  }
  .tenkingsj .cardsj .cardrank ul li .right .card img{
    width: 33px;
    height: 42.45px;
  }
  .tenkingsj .cardsj .cardrank .first{
    zoom: .5;
    top: 85px;
    left: 12px;
  }
  .tenkingsj .cardsj .cardrank .secend{
    zoom: .5;
    top: 300px;
    left: 12px;
  }
  .tenkingsj .cardsj .cardrank .third{
    zoom: .5;
    top: 520px;
    left: 12px;
  }
}

@media screen and (min-width:400px) {
  .tenkingsj .van-tab{
    height: 49.21px;
    font-size: 13.1px;
  }
  .tenkingsj .van-tabs .van-tabs__wrap{
    height: 42.74px;
  }
  .tenkingsj .cardsj table tr{
    height: 49.21px;
    font-size: 13.1px;
  }
  .tenkingsj .van-tab__pane{
    width: 87.8%;
  }
  .tenkingsj .cardsj table .first{
    top: 108px;
    left: 15px;
    font-size: 26px;
    line-height: 50px;
    zoom: .55;
    font-size: 20px;
  }
  .tenkingsj .cardsj table .secend{
    top: 200px;
    left: 15px;
    font-size: 26px;
    line-height: 50px;
    zoom: .55;
    font-size: 20px;
  }
  .tenkingsj .cardsj table .third{
    top: 286px;
    left: 15px;
    font-size: 26px;
    line-height: 50px;
    zoom: .55;
    font-size: 20px;
  }
  .tenkingsj .cardsj .tktitle{
    height: 62.08px;
  }
  .tenkingsj .cardsj .tktitle .list{
    height: 37px;
    line-height: 37px;
    margin: 11.5px 6.3px;
    font-size: 13px;
    border: 2px solid #013153;
  }
  .tenkingsj .cardsj .tktitle .list div{
    padding: 0 20px;
  }
  .tenkingsj .cardsj .tktitle .list .sheng .shengpic{
    margin-left: 5px;
    transform: translateY(2px);
  }
  .tenkingsj .cardsj .tktitle .list .dzj .dzjpic{
    margin-left: 5px;
    transform: translateY(2px);
  }
  .tenkingsj .cardsj .tktitle .list .pjhs .pjhspic{
    margin-left: 5px;
    transform: translateY(2px);
  }
  .tenkingsj .cardsj .cardrank ul li{
    height: 117.27px;
    line-height: 117.27px;
  }
  .tenkingsj .cardsj .cardrank ul li .rank{
    width: 42.19px;
    font-size: 14px;
  }
  .tenkingsj .cardsj .cardrank ul li .right .card{
    width: 180px;
  }
  .tenkingsj .cardsj .cardrank ul li .right .info{
    font-size: 14px;
    width: 100px;
    height: 51px;
  }
  .tenkingsj .cardsj .cardrank ul li .right .info p{
    height: 19px;
    line-height: 19px;
  }
  .tenkingsj .cardsj .cardrank ul li .right .card img{
    width: 36.16px;
    height: 47.45px;
  }
  .tenkingsj .cardsj .cardrank .first{
    zoom: .5;
    top: 95px;
    left: 14px;
  }
  .tenkingsj .cardsj .cardrank .secend{
    zoom: .5;
    top: 330px;
    left: 15px;
  }
  .tenkingsj .cardsj .cardrank .third{
    zoom: .5;
    top: 565px;
    left: 15px;
  }
}

@media screen and (min-width:480px) {
  .tenkingsj .van-tab{
    height: 56.15px;
    font-size: 17.28px;
  }
  .tenkingsj .van-tabs .van-tabs__wrap{
    height: 56.15px;
  }
  .tenkingsj .cardsj table tr{
    height: 56.15px;
    font-size: 17.28px;
  }
  .tenkingsj .van-tab__pane{
    width: 88.5%;
  }
  .tenkingsj .cardsj table .first{
    top: 94px;
    left: 15px;
    font-size: 26px;
    line-height: 50px;
    zoom: .7;
    font-size: 20px;
  }
  .tenkingsj .cardsj table .secend{
    top: 178px;
    left: 15px;
    font-size: 26px;
    line-height: 50px;
    zoom: .7;
    font-size: 20px;
  }
  .tenkingsj .cardsj table .third{
    top: 256px;
    left: 15px;
    font-size: 26px;
    line-height: 50px;
    zoom: .7;
    font-size: 20px;
  }
  .tenkingsj .cardsj .tktitle{
    height: 80.03px;
  }
  .tenkingsj .cardsj .tktitle .list{
    height: 49px;
    line-height: 49px;
    margin: 12.5px 6.3px;
    font-size: 13px;
    border: 2px solid #013153;
  }
  .tenkingsj .cardsj .tktitle .list div{
    padding: 0 25px;
  }
  .tenkingsj .cardsj .tktitle .list .sheng .shengpic{
    zoom: .8;
    transform: translateY(3px);
  }
  .tenkingsj .cardsj .tktitle .list .dzj .dzjpic{
    zoom: .8;
    transform: translateY(3px);
  }
  .tenkingsj .cardsj .tktitle .list .pjhs .pjhspic{
    zoom: .8;
    transform: translateY(3px);
  }
  .tenkingsj .cardsj .cardrank ul li{
    height: 154.08px;
    line-height: 154.08px;
  }
  .tenkingsj .cardsj .cardrank ul li .rank{
    width: 55.44px;
    font-size: 16px;
  }
  .tenkingsj .cardsj .cardrank ul li .right .card{
    width: 220px;
  }
  .tenkingsj .cardsj .cardrank ul li .right .info{
    font-size: 16px;
    width: 150px;
  }
  .tenkingsj .cardsj .cardrank ul li .right .info p{
    height: 19px;
    line-height: 19px;
  }
  .tenkingsj .cardsj .cardrank ul li .right .card img{
    width: 47.52px;
    height: 57.3px;
  }
  .tenkingsj .cardsj .cardrank .first{
    zoom: .7;
    top: 95px;
    left: 10px;
  }
  .tenkingsj .cardsj .cardrank .secend{
    zoom: .7;
    top: 310px;
    left: 10px;
  }
  .tenkingsj .cardsj .cardrank .third{
    zoom: .7;
    top: 535px;
    left: 10px;
  }
}

@media screen and (min-width:640px) {
  .tenkingsj .van-tab{
    height: 78px;
    font-size: 26px;
  }
  .tenkingsj .van-tabs .van-tabs__wrap{
    height: 78px;
  }
  .tenkingsj .van-tab__text--ellipsis{
    overflow:inherit;
  }
  .tenkingsj .cardsj table tr{
    height: 78px;
    font-size: 26px;
  }
  .tenkingsj .van-tab__pane{
    width: 88.9%;
  }
  .tenkingsj .cardsj table .first{
    top: 92px;
    left: 15px;
    font-size: 26px;
    line-height: 50px;
    zoom: 1;
  }
  .tenkingsj .cardsj table .secend{
    top: 170px;
    left: 15px;
    font-size: 26px;
    line-height: 50px;
    zoom: 1;
  }
  .tenkingsj .cardsj table .third{
    top: 248px;
    left: 15px;
    font-size: 26px;
    line-height: 50px;
    zoom: 1;
  }
  .tenkingsj .cardsj .tktitle{
    height: 110px;
  }
  .tenkingsj .cardsj .tktitle .list{
    height: 68px;
    line-height: 68px;
    margin: 18px 6.3px;
    font-size: 22px;
    border: 2px solid #013153;
  }
  .tenkingsj .cardsj .tktitle .list div{
    padding: 0 30px;
  }
  .tenkingsj .cardsj .tktitle .list .sheng .shengpic{
    zoom: 1.3;
  }
  .tenkingsj .cardsj .tktitle .list .dzj .dzjpic{
    zoom: 1.3;
  }
  .tenkingsj .cardsj .tktitle .list .pjhs .pjhspic{
    zoom: 1.3;
  }
  .tenkingsj .cardsj .cardrank ul li{
    height: 214px;
    line-height: 214px;
  }
  .tenkingsj .cardsj .cardrank ul li .rank{
    width: 77px;
    font-size: 26px;
  }
  .tenkingsj .cardsj .cardrank ul li .right .card{
    width: 320px;
  }
  .tenkingsj .cardsj .cardrank ul li .right .info{
    font-size: 26px;
    width:200px;
    height: 90px;
  }
  .tenkingsj .cardsj .cardrank ul li .right .info p{
    height: 30px;
    line-height: 30px;
  }
  .tenkingsj .cardsj .cardrank ul li .right .card img{
    width: 66px;
    height: 79.58px;
  }
  .tenkingsj .cardsj .cardrank .first{
    zoom: 1;
    top: 95px;
    left: 10px;
  }
  .tenkingsj .cardsj .cardrank .secend{
    zoom: 1;
    top: 300px;
    left: 10px;
  }
  .tenkingsj .cardsj .cardrank .third{
    zoom: 1;
    top: 515px;
    left: 10px;
  }
}
@media screen and (min-width:1024px) {
  .tenkingsj .cardsj table .first{
    top: 92px;
    left: 26px;
    font-size: 26px;
    line-height: 50px;
  }
  .tenkingsj .cardsj table .secend{
    top: 170px;
    left: 26px;
    font-size: 26px;
    line-height: 50px;
  }
  .tenkingsj .cardsj table .third{
    top: 248px;
    left: 26px;
    font-size: 26px;
    line-height: 50px;
  }
  .tenkingsj .cardsj .tktitle .list{
    font-size: 26px;
  }
  .tenkingsj .cardsj .tktitle .list div{
    padding: 0 40px;
  }
  .tenkingsj .cardsj .cardrank ul li{
    height: 214px;
    line-height: 214px;
    font-size: 28px;
  }
  .tenkingsj .cardsj .cardrank ul li .rank{
    width: 90px;
  }
  .tenkingsj .cardsj .cardrank ul li .right .card{
    width: 360px;
  }
  .tenkingsj .cardsj .cardrank ul li .right .info{
    font-size: 28px;
    width:240px;
    height: 105px;
  }
  .tenkingsj .cardsj .cardrank ul li .right .info p{
    height: 35px;
    line-height: 35px;
  }
  .tenkingsj .cardsj .cardrank ul li .right .card img{
    width:75px;
    height: 87.6px;
  }
  .tenkingsj .cardsj .cardrank .first{
    zoom: 1.2;
    top: 75px;
    left: 10px;
  }
  .tenkingsj .cardsj .cardrank .secend{
    zoom: 1.2;
    top: 245px;
    left: 10px;
  }
  .tenkingsj .cardsj .cardrank .third{
    zoom: 1.2;
    top: 430px;
    left: 10px;
  }
}
</style>