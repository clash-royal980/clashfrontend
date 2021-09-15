<template>
  <div class="myguess">
    <guesstop>
      <div class="userinfo">
        <img src="/img/myguess/user.png" alt="">
        <p>您还未登录<br>请先<span>登录</span></p>
        <span></span>
      </div>
    </guesstop>
    <ul>
      <li>
        <img src="/img/myguess/guing.png" alt="">
        <p><router-link to="/guessdetail?id=1">本赛季个人冠军会属于哪个赛区？</router-link></p>
        <img src="/img/myguess/goguess.png" alt="" @click="todetail(1)">
      </li>
      <li>
        <img src="/img/myguess/guing.png" alt="">
        <p><router-link to="/guessdetail?id=2">本赛季哪个赛区会获得团体赛冠军？</router-link></p>
        <img src="/img/myguess/goguess.png" alt="" @click="todetail(2)">
      </li>
      <li>
        <img src="/img/myguess/guing.png" alt="">
        <p><router-link to="/guessdetail?id=3">谁将成为CRL本月月度决赛冠军？</router-link></p>
        <img src="/img/myguess/goguess.png" alt="" @click="todetail(3)">
      </li>
    </ul>
  </div>
</template>
<script>
import guesstop from '../components/guesstopbar.vue'
export default {
  components: {
    guesstop
  },
  methods: {
    todetail(i){
      this.$router.push(`/guessdetail?id=${i}`)
    }
  },
}
</script>
<style>
.myguess{
  margin-bottom: 10vh;
}
.myguess .userinfo{
  position: absolute;
  top: 30%;
  left: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.myguess .userinfo img{
  width: 45px;
  border-radius: 5px;
  border: 1px solid #87B4D5;
  display: block;
}
.myguess .userinfo p{
  font-size: 13px;
  text-align: center;
  color: #fff;
  margin-left: 1vw;
}
.myguess .userinfo p span{
  color:#ffe042;
}
.myguess ul{
  width: 80%;
  margin: 0 auto;
  margin-top: 1vh;
}
.myguess ul li{
  width: 100%;
  height: 115px;
  background-color: #E3EEF3;
  margin-top: 1vh;
  border-radius: 10px;
}
.myguess ul li img:first-child{
  display: block;
  margin: 0 auto;
  width: 50px;
  padding-top: 1vh;
}
.myguess ul li p{
  text-align: center;
  font-size: 12px;
  margin-top: 1vh;
}
.myguess ul li p a{
  color: #166099;
}
.myguess ul li img:last-child{
  display: block;
  margin: 0 auto;
  width: 80px;
  padding-top: 3vh;
}

/* 媒体查询 */
@media screen and (min-width:280px){  
  .myguess .userinfo img{
    width: 35px;
  }
  .myguess .userinfo p{
    font-size: 12px;
  }
  .myguess ul li{
    height: 100px;
  }
  .myguess ul li img:first-child{
    width: 40px;
  }
  .myguess ul li p{
    font-size: 12px;
  }
  .myguess ul li img:last-child{
    width: 60px;
  }
}
@media screen and (min-width:320px){  
  .myguess .userinfo img{
    width: 40px;
  }
  .myguess .userinfo p{
    font-size: 12px;
  }
  .myguess ul li{
    height: 108px;
  }
  .myguess ul li img:first-child{
    width: 50px;
  }
  .myguess ul li p{
    font-size: 12px;
  }
  .myguess ul li img:last-child{
    width: 80px;
  }
}
@media screen and (min-width:360px){  
  .myguess .userinfo img{
    width: 45px;
  }
  .myguess .userinfo p{
    font-size: 13px;
  }
  .myguess ul li{
    height: 115px;
  }
  .myguess ul li img:first-child{
    width: 50px;
  }
  .myguess ul li p{
    font-size: 12px;
  }
  .myguess ul li img:last-child{
    width: 80px;
  }
}
@media screen and (min-width:410px){  
  .myguess .userinfo img{
    width: 50px;
  }
  .myguess .userinfo p{
    font-size: 14px;
  }
  .myguess ul li{
    height: 125px;
  }
  .myguess ul li img:first-child{
    width: 60px;
  }
  .myguess ul li p{
    font-size: 13px;
  }
  .myguess ul li img:last-child{
    width: 90px;
  }
}
@media screen and (min-width:540px){  
  .myguess .userinfo img{
    width: 60px;
  }
  .myguess .userinfo p{
    font-size: 16px;
  }
  .myguess ul li{
    height: 155px;
  }
  .myguess ul li img:first-child{
    width: 70px;
  }
  .myguess ul li p{
    font-size: 15px;
  }
  .myguess ul li img:last-child{
    width: 100px;
  }
}
@media screen and (min-width:760px){  
  .myguess .userinfo img{
    width: 90px;
  }
  .myguess .userinfo p{
    font-size: 24px;
  }
  .myguess ul li{
    height: 220px;
  }
  .myguess ul li img:first-child{
    width: 95px;
  }
  .myguess ul li p{
    font-size: 22px;
  }
  .myguess ul li img:last-child{
    width: 150px;
  }
}
@media screen and (min-width:1000px){  
  .myguess .userinfo img{
    width: 110px;
  }
  .myguess .userinfo p{
    font-size: 28px;
  }
  .myguess ul li{
    height: 250px;
  }
  .myguess ul li img:first-child{
    width: 105px;
  }
  .myguess ul li p{
    font-size: 25px;
  }
  .myguess ul li img:last-child{
    width: 170px;
  }
}
</style>