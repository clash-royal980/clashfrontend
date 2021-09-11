<template>
  <div class="tenkingsj">
    <div class="twopic">
        <img src="/img/gamenews.png" alt="" style="position: relative;">
        <!-- <img src="/img/game.png" alt=""> -->
        <div class="sj" :style="{zoom:zom}"></div>
    </div>
    <div class="cardsj">
      <van-tabs v-model="active">
        <van-tab title="标签 1">
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
              <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </van-tab>
        <van-tab title="标签 2">内容 2</van-tab>
        <van-tab title="标签 3">内容 3</van-tab>
      </van-tabs> 
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      zom:1,
      active:'1'
    }
  },
   mounted() {
    let screenh = window.screen.width;
    let suan = screenh/667;
    this.zom = suan;
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
  width: 84.5%;
  margin: 0 auto;
}
.tenkingsj .van-tabs .van-tabs__wrap{
  height: 37.44px;
}
.tenkingsj .van-tab{
  background-color: #2383C5;
  color: #fff;
  border-top-right-radius: .5rem;
  border-top-left-radius: .5rem;
  /* border: 1px solid #75B7E6; */
  margin: 0 10px;
  height: 37.44px;
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
}
.tenkingsj .cardsj table thead tr{
  background-color: #0E3C68;
}
.tenkingsj .cardsj table tbody tr td:first-child{
  background-color: #0E3C68;
}
</style>