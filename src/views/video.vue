<template>
  <div class="videopage">
    <van-tabs v-model="active">
      <van-tab title="比赛">
        <div class="gamecontent">
          <h5>
            <span style="position: absolute; left: 0"></span>
            <span style="position: absolute; left: 0" @click="prev">上一周</span>
            七月
            <span style="position: absolute; right: 0" @click="next">下一周</span>
            <span style="position: absolute; right: 0"></span>
          </h5>
        </div>
      </van-tab>
      <van-tab title="采访">采访</van-tab>
      <van-tab title="花絮">花絮</van-tab>
      <van-tab title="攻略">攻略</van-tab>
      <van-tab title="专栏">专栏</van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
  methods: {
    prev() {},
    next() {},
  },
};
</script>
<style>
.videopage {
  width: 95%;
  margin: 1rem auto;
  font-size: 1rem;
}
.videopage .tabs {
  background-color: #2383c5;
}
.videopage .van-tabs--line .van-tabs__wrap {
  height: 2.93rem;
}
.videopage .van-tab {
  background-color: #2383c5;
  color: #fff;
  border-top-right-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
  border: 1px solid #114971;
  font-size: 1rem;
  height: 2.8rem;
}
.videopage .van-tab__text--ellipsis {
  line-height: 1.1rem;
}
.videopage .van-tabs {
  position: static;
  width: 90%;
  margin: 0 auto;
}
.videopage .van-tabs__nav {
  /* position:relative; */
  /* width: 50%; */
}
.videopage .van-tabs__nav {
  background-color: transparent;
}
.videopage .van-tab.van-tab--active {
  background-color: #093055;
  border-bottom: 0;
}
.videopage .van-tabs__line {
  background-color: transparent;
}
.videopage .van-tab__pane {
  border-top: 0;
  background-color: #093055;
  margin-top: -0.15rem;
  overflow: hidden;
}
.videopage .gamecontent {
  position: relative;
  margin: 1rem auto;
  width: 95%;
  /* border: 1px solid black; */
  border-bottom: 0;
  border-top: 0;
  text-align: center;
}
.videopage .gamecontent i {
  font-style: inherit;
}
.videopage .gamecontent h5 {
  background-color: #0c3e6c;
  padding: .8rem 0;
  color: #fff;
  border-radius: .5rem;
}
.videopage .gamecontent h5 span:first-child {
  width: 30px;
  height: 30px;
  background-image: url(/img/tenking/team_sp.24e9ce0.png);
  background-position: -80px -220px;
}
.videopage .gamecontent h5 span:last-child {
  width: 30px;
  height: 30px;
  background-image: url(/img/tenking/team_sp.24e9ce0.png);
  background-position: -80px -267px;
}

@media screen and (min-width: 280px) {
  .videopage .gamecontent > span {
    font-size: 12px;
  }
  .videopage .gamecontent i {
    font-size: 12px;
    line-height: 22px;
  }
  .videopage .gamecontent h5 {
    font-size: 12px;
  }
  .videopage .gamecontent h5 span:first-child {
    zoom: 0.4;
    margin-top: 6px;
    margin-left: 5px;
  }
  .videopage .gamecontent h5 span:nth-child(2) {
    margin-left: 15px;
  }
  .videopage .gamecontent h5 span:last-child {
    zoom: 0.4;
    margin-top: 6px;
    margin-right: 5px;
  }
  .videopage .gamecontent h5 span:nth-child(3) {
    margin-right: 15px;
  }
}
@media screen and (min-width: 320px) {
  .videopage .gamecontent > span {
    font-size: 14px;
  }
}
@media screen and (min-width: 360px) {
  .videopage .gamecontent > span {
    font-size: 16.5px;
  }
}

@media screen and (min-width: 400px) {
  .videopage .gamecontent > span {
    font-size: 18.2px;
  }
  .videopage .gamecontent i {
    font-size: 12px;
    line-height: 25px;
  }
  .videopage .gamecontent h5 {
    font-size: 14px;
  }
  .videopage .gamecontent h5 span:first-child {
    zoom: 0.4;
    margin-top: 10px;
    margin-left: 6px;
  }
  .videopage .gamecontent h5 span:last-child {
    zoom: 0.4;
    margin-top: 10px;
    margin-right: 6px;
  }
}

@media screen and (min-width: 480px) {
  .videopage .gamecontent > span {
    font-size: 21.4px;
  }
  .videopage .gamecontent i {
    font-size: 15.84px;
    line-height: 30px;
  }
}

@media screen and (min-width: 640px) {
  .videopage .gamecontent > span {
    font-size: 33px;
  }
  .videopage .gamecontent i {
    font-size: 22px;
    line-height: 45px;
  }
  .videopage .gamecontent h5 {
    font-size: 22px;
  }
  .videopage .gamecontent h5 span:first-child {
    zoom: 0.8;
    margin-top: 6px;
    margin-left: 5px;
  }
  .videopage .gamecontent h5 span:nth-child(2) {
    margin-left: 30px;
  }
  .videopage .gamecontent h5 span:last-child {
    zoom: 0.8;
    margin-top: 6px;
    margin-right: 5px;
  }
  .videopage .gamecontent h5 span:nth-child(3) {
    margin-right: 30px;
  }
}
@media screen and (min-width: 1024px) {
  .videopage .gamecontent > span {
    font-size: 33px;
  }
}
</style>