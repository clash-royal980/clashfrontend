<template>
  <div class="tenkingsj">
    <div class="twopic">
        <img src="/img/gamenews.png" alt="" style="position: relative;">
        <!-- <img src="/img/game.png" alt=""> -->
        <div class="sj" :style="{zoom:zom}"></div>
    </div>
    <div class="cardsj">
      <van-tabs v-model="active">
        <van-tab title="选手排名">
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
        <van-tab title="卡组数据">内容 2</van-tab>
        <van-tab title="荣誉殿堂">内容 3</van-tab>
      </van-tabs> 
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      zom:1,
      active:'1',
      tenkingdata:[]
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
    this.$nextTick(()=>{
      var first = document.querySelector('.tenkingsj .cardsj table tbody:first-child tr:first-child td')
    })
   },
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
  top: 248px;
  left: 15px;
  font-size: 26px;
  line-height: 50px;
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
}
@media screen and (min-width:320px) {
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
}
</style>