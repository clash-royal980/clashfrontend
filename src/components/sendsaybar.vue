<template>
  <div class="sendsaybar">
      <input type="text" placeholder="请您的输入评论">
      <div class="send" :style="{zoom:zom}">1</div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      zom:0.6
    }
  },
  mounted() {
    let screenh = window.screen.height;
    let screenw = window.screen.width;
    let suan = screenh*0.6/667;
    this.zom = suan;
  },
}
</script>
<style>
.sendsaybar{
  position: fixed;
  /* height: 45px; */
  background-color: #58647A;
  bottom: 0;
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  padding: .3rem 0;
}
.sendsaybar input{
  height: 5vh;
  width: 65%;
  border-radius: .5rem;
  outline: none;
  border: 0;
  background-color: #384152;
  font-size:4.25vw;
  color: #fff;
  background-image: url(/img/send.png);
  background-repeat: no-repeat;
  padding-left: 2rem;
  background-position: -195px -130px;
  /* zoom: 1; */
}
.sendsaybar .send{
  width: 152px;
  height: 67px;
  background-image: url(/img/send.png);
  background-position: 0 -109px;
  /* zoom: .6; */
}
</style>