<template>
  <div class="tenkingsj">
    <div class="twopic">
        <img src="/img/gamenews.png" alt="" style="position: relative;">
        <!-- <img src="/img/game.png" alt=""> -->
        <div class="sj" :style="{zoom:zom}"></div>
    </div>
    <div class="cardsj">
      <van-tabs v-model="active">
        <van-tab title="标签 1">内容 1</van-tab>
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
</style>