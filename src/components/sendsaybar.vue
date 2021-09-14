<template>
  <div class="sendsaybar">
      <input type="text" placeholder="请输入您的评论">
      <div class="send">1</div>
      <div class="icon"></div>
  </div>
</template>
<script>
export default {
  data(){
    return{
    }
  },
  mounted() {
  },
}
</script>
<style>
.sendsaybar{
  position: fixed;
  background-color: #58647A;
  bottom: 0;
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: space-around;
  padding: 5px 0;
  z-index: 10;
}
.sendsaybar input{
  height: 34px;
  width: 65%;
  border-radius: .5rem;
  outline: none;
  border: 0;
  background-color: #384152;
  font-size:14px;
  color: #fff;
  padding-left: 2rem;
}
.sendsaybar .icon{
  width: 50px;
  height: 50px;
  background-image: url(/img/send.png);
  background-repeat: no-repeat;
  background-position: -195px -130px;
  position: absolute;
  left: 20px;
  top: 8px;
  zoom: .7;
}
.sendsaybar .send{
  width: 152px;
  height: 65px;
  background-image: url(/img/send.png);
  background-position: 0 -109px;
  zoom: .55;
}

@media screen and (min-width:280px) {
  .sendsaybar input{
    height: 25px;
    border-radius: .5rem;
    font-size:12px;
    padding-left: 2rem;
  }
  .sendsaybar .icon{
    left: 27px;
    top: 12px;
    zoom: .5;
  }
  .sendsaybar .send{
    zoom: .4;
  }
}
@media screen and (min-width:320px){                           
  .sendsaybar input{
    height: 30px;
    border-radius: .5rem;
    font-size:13px;
    padding-left: 2rem;
  }
  .sendsaybar .icon{
    left: 27px;
    top: 14px;
    zoom: .55;
  }
  .sendsaybar .send{
    zoom: .47;
  }
}
@media screen and (min-width:360px) {
  .sendsaybar .icon{
    left: 35px;
    top: 14px;
    zoom: .55;
  }
}

@media screen and (min-width:400px) {
   .sendsaybar input{
    height: 35px;
    border-radius: .5rem;
    font-size:15px;
    padding-left: 2rem;
  }
  .sendsaybar .icon{
    left: 27px;
    top: 15px;
    zoom: .6;
  }
  .sendsaybar .send{
    zoom: .55;
  }
}

@media screen and (min-width:480px) {
  .sendsaybar input{
    height: 40px;
    border-radius: .5rem;
    font-size:16px;
    padding-left: 2rem;
  }
  .sendsaybar .icon{
    left: 38px;
    top: 12px;
    zoom: .7;
  }
  .sendsaybar .send{
    zoom: .6;
  }
}

@media screen and (min-width:640px) {
  .sendsaybar input{
    height: 55px;
    border-radius: .5rem;
    font-size:25px;
    padding-left: 3rem;
  }
  .sendsaybar .icon{
    left: 38px;
    top: 10px;
    zoom: 1;
  }
  .sendsaybar .send{
    zoom: .85;
  }
}
@media screen and (min-width:1024px) {
  .sendsaybar input{
    height: 65px;
    border-radius: .5rem;
    font-size:30px;
    padding-left: 5rem;
  }
  .sendsaybar .icon{
    left: 38px;
    top: 2px;
    zoom: 1.5;
  }
  .sendsaybar .send{
    zoom: 1;
  }
}
</style>