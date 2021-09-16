<template>
  <div class="register">
    <header>
        <mt-header title="注册">
          <router-link slot="left" to="/login">
              <mt-button  icon="back"></mt-button>
          </router-link>
          <router-link slot="right" to="/login">
              <mt-button  icon="">
                <div class="close"></div>
              </mt-button>
          </router-link>
        </mt-header>
    </header>
    <div class="useregister">
      <!-- <span>账号:</span> -->
      <input type="text" placeholder="请输入手机号">
      <input type="password" placeholder="请输入密码">
      <input type="password" placeholder="请输入重复密码">
      <div class="yzm">
        <input type="text" placeholder="请输入验证码">
        <img src="" alt="">
      </div>
      <!-- <span>密码:</span> -->
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
.register{
  background-color: #154183;
  height: 100vh;
  width: 100vw;
}
.register .mint-header{
  background-color: #0C3A73;
  font-size: 1rem;
  height: 3.3rem;
}
.register .mintui{
  font-size: 1rem;
}
.register .mint-header-button a{
  display: block;
  width: 100%;
  height: 100%;
}
.register .mint-button-text .close{
  width: 50px;
  height: 50px;
  background-image: url(/img/login.png);
  background-position: -18px -13px;
}
.register .useregister{
  margin: 1rem auto;
  position: relative;
  width: 85%;
}
.register .useregister input{
  margin: 0 auto;
  display: block;
  height: .8rem;
  border-radius: .5rem;
  border: 0;
  margin-bottom: 1rem;
  padding:1rem 3rem;
}
.register .useregister .yzm {
  display: flex;
  justify-content: space-between;
  align-content: center;
}
.register .useregister .yzm input{
  width: 7rem;
  margin: 0 auto;
}


@media screen and (min-width:280px){  
  html{font-size: 12px !important;}
  .register .mint-button-text .close{
    zoom: .5;
  }
}
@media screen and (min-width:320px){  
  html{font-size: 12.8px !important;}
  .register .mint-header-title{
    height: 14px;
    line-height: 14px;
  }
}
@media screen and (min-width:360px){  
  html{font-size: 15px !important;}
  .register .mint-button-text .close{
    zoom: .6;
  }
}
@media screen and (min-width:410px){  
  html{font-size: 17px !important;}
  .register .mint-header-title{
    height: 17px;
    line-height: 17px;
  }
  .register .mint-button-text .close{
    zoom: .65;
  }
}
@media screen and (min-width:540px){  
  html{font-size: 21.6px !important;}
  .register .mint-header-title{
    height: 22px;
    line-height: 22px;
  }
  .register .mint-button-text .close{
    zoom: .75;
  }
}
@media screen and (min-width:760px){  
  html{font-size: 30px !important;}
  .register .mint-header-title{
    height: 30px;
    line-height: 30px;
  }
  .register .mint-button-text .close{
    zoom: .9;
  }
}
@media screen and (min-width:1000px){  
  html{font-size: 40px !important;}
  .register .mint-header-title{
    height: 42px;
    line-height: 42px;
  }
}
</style>