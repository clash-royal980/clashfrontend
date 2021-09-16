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
      <span>账号:</span>
      <span>密码:</span>
      <span>重复密码:</span>
      <span>验证码:</span>
      <input type="text" placeholder="请输入手机号">
      <input type="password" placeholder="请输入密码">
      <input type="password" placeholder="请输入重复密码">
      <div class="yzm">
        <input type="text" placeholder="请输入验证码">
        <!-- <img :src="src" alt="" @click="changpic"> -->
        <div v-html="datapic" class="data" @click="changpic"></div>
      </div>
      
    </div>
    <div class="agree">
      <input type="checkbox" id="mycheck" checked @click="select">
      <label for="mycheck">同意</label>
      <span @click="showreg">《用户注册条款》</span>
    </div>
    <div :class="list">
      <div class="bgpic"></div>
      <span>确认</span>
    </div>
    <van-popup v-model="show" :close-on-click-overlay="false">
      <div class="box">
        <div class="title">
          <h3>用户注册条款</h3>
          <span @click="closek"></span>
        </div>
        <div class="content">
          <p>您看到本条款是由于您正在注册成为CRL皇室战争职业联赛赛事官网的用户，因此Supercell Oy需要您提供一些准确的信息。我们希望通知您了解我们收集您个人信息的目的以及我们将如何使用和保护您的信息。<br>一、我们将收集哪些信息</p>
          <p>注册成为CRL皇室战争职业联赛赛事官网的用户，您将提供以下个人信息：</p>
          <p>(1)联系电话；</p>
          <p>(2)网站昵称（选填）；</p>
          <p>(3)游戏名称（选填）；</p>
          <p>(4)玩家ID（选填）；<br>二、服务说明</p>
          <p>CRL皇室战争职业联赛赛事官网向您提供包括但不限于如下服务：</p>
          <p>1. CRL皇室战争职业联赛赛事官网crlcn.com的主页及子页面。</p>
          <p>2. CRL皇室战争职业联赛赛事官网直接拥有或运营的包括但不限于PC、平板、手机等赛事活动；</p>
          <p>3. CRL皇室战争职业联赛赛事官网视频观看，用户头像，资讯阅读、评论等各项功能。<br>三、我们将如何使用您的信息</p>
          <p>1.为了向您提供更好的产品和服务，Supercell Oy会出于已经向您披露的目的来使用您的个人信息，并且这些用途都是和皇室战争官方服务或活动相关的。例如，我们可能将您的信息用于：</p>
          <p>(1)通知您有关CRL皇室战争职业联赛现场观赛等活动详情；</p>
          <p>(2)推荐您与CRL皇室战争职业联赛现场观赛的其他玩家联系；</p>
          <p>(3)管理并提升我们的服务；</p>
          <p>(4)回复您的评论及问题，并提供客户服务； </p>
          <p>(5)向您发送相关信息，包括确认函、单据、技术通告、更新、安全提醒及支持和管理消息；</p>
          <p>(6)与其他信息链接或合并，例如您向我们提供的皇室战争游戏账户信息。</p>
          <p>2.我们不会将您的个人信息向任何第三方披露，除非：</p>
          <p>(1)我们获得了您的同意； </p>
          <p>(2)经任何有权政府部门或司法部门的要求，或我们确信披露是合法的；</p>
          <p>(3)当Supercell可能聘用其他公司及个人来代表我们提供服务时；</p>
          <p>(4)涉及到Supercell的任何合并和收购。</p>
          <p>请注意，本通知项下对您信息的收集和使用应同时遵守Supercell的一般隐私保护政策：http://supercell.com/en/privacy-policy/cn/<br>四、我们如何保护您的信息</p>
          <p>Supercell采用合理措施以保护您的信息免于任何第三方的非授权访问，或因第三方问题而导致的损失、滥用或更改。如果您的个人信息发生变更或您不再需要我们的服务，您可以更改您的账户设置或通过legal-requests@supercell.com与我们联系来变更、更新或删除不准确的信息，我们将在30日内回复您的访问请求。</p>
        </div>
        <div class="bobtn"><span @click="closek">确认</span></div>
      </div>
    </van-popup>
  </div>
</template>
<script>
export default {
  data(){
    return{
      datapic:'',
      list:{surereg:true,gray:false},
      show:false
    }
  },
  methods:{
    changpic(){
      this.axios.get(`/getcode`).then(result=>{
        this.datapic = result.data
      })
    },
    showreg(){
      this.show = true
    },
    select(e){
      this.list.gray = !e.target.checked
    },
    closek(){
      this.show = false
    }
  },
  mounted() {
      this.axios.get(`/getcode`).then(result=>{
        console.log(result);
        this.datapic = result.data
      })
  }
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
  width: 75%;
  height: .8rem;
  border-radius: .5rem;
  border: 0;
  margin-bottom: 1rem;
  padding:1rem 0 1rem 5rem;
}
.register .useregister .yzm {
  display: flex;
  justify-content: center;
  align-content: center;
}
.register .useregister .yzm input{
  width: 40%;
  margin: 0;
  margin-right: 1rem;
}
.register .useregister .yzm .data svg{
  border: 1px solid black;
  background-color: #ffa631;
  width: 6rem;
  height: 2.5rem;
}
.register .useregister span{
  color: #000;
  position: absolute;
  top: 0;
  left: 0;
  font-size: .9rem;
}
.register .useregister span:first-child{
  top: .7rem;
  left: 1rem;
}
.register .useregister span:nth-child(2){
  top: 4.5rem;
  left: 1rem;
}
.register .useregister span:nth-child(3){
  top: 8.3rem;
  left: 1rem;
}
.register .useregister span:nth-child(4){
  top: 12.1rem;
  left: 1rem;
}
.register .agree{
  color: #fff;
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
}
.register .agree input{
  width: 1rem;
  height: 1rem;
  display: block;
}
.register .agree span{
  color: #b3e9ff;
}
.register .surereg{
  margin: 0 auto;
  width: 620px;
  height: 120px;
  background-image: url(/img/login.png);
  background-position: 0 -78px;
  position: relative;
}
.register .surereg.gray{
  -webkit-filter: grayscale(100%);
}
.register .surereg span{
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  font-size: 2rem;
}
.register .van-popup{
  background-color: transparent;
}
.register .box{
  width: 20rem;
  height: 35rem;
  background-color: #636A7C;
  border-radius: 1rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
}
.register .box .title{
  height: 3rem;
  background-color: #4B5161;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  text-align: center;
  line-height: 3rem;
  position: relative;
}
.register .box .title h3{
  color: #fff;
}
.register .box .title span{
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 40px;
  height: 40px;
  background-image: url(/img/login.png);
  background-position: -185px -10px;
  zoom: .5;
}
.register .box .content{
  width: 80%;
  margin: 0 auto;
  text-indent: 2rem;
  margin-top: 2rem;
  height: 25rem;
  overflow-y: auto;
}
.register .box .content p{
  color: #fff;
  font-size: .7rem;
  line-height: 1.5rem;
}
.register .box .bobtn{
  width: 190px;
  height: 80px;
  background-image: url(/img/btn.png);
  background-position: 0 -85px;
  text-align: center;
  line-height: 6rem;
  color: #000;
  font-size: 1.5rem;
  margin: 2rem auto;
  position: relative;
  color: #fff;
}
.register .box .bobtn span{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-40%,-50%);
}

@media screen and (min-width:280px){  
  html{font-size: 12px !important;}
  .register .mint-button-text .close{
    zoom: .5;
  }
  .register .surereg{
    zoom: .43;
  }
  .register .box .bobtn{
    zoom: .35;
  }
}
@media screen and (min-width:320px){  
  html{font-size: 12.8px !important;}
  .register .mint-header-title{
    height: 14px;
    line-height: 14px;
  }
  .register .surereg{
    zoom: .47;
  }
  .register .box .bobtn{
    zoom: .45;
  }
}
@media screen and (min-width:360px){  
  html{font-size: 15px !important;}
  .register .mint-button-text .close{
    zoom: .6;
  }
  .register .mint-header-title{
    height: 17px;
    line-height: 17px;
  }
  .register .surereg{
    zoom: .55;
  }
  .register .box .bobtn{
    zoom: .5;
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
  .register .surereg{
    zoom: .55;
  }
  .register .box .title span{
    zoom: .6;
  }
  .register .box .title span{
    top: .5rem;
  }
  .register .box .bobtn{
    zoom: .6;
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
  .register .surereg{
    zoom: .8;
  }
  .register .box .title span{
    zoom: .8;
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
  .register .surereg{
    zoom: 1.1;
  }
  .register .surereg span{
    font-size: .8rem;
  }
  .register .box .title span{
    zoom: 1.1;
  }
  .register .box .bobtn{
    zoom: .9;
  }
  .register .box .bobtn{
    font-size: 1rem;
  }
}
@media screen and (min-width:1000px){  
  html{font-size: 40px !important;}
  .register .mint-header-title{
    height: 42px;
    line-height: 42px;
  }
  .register .surereg{
    zoom: 1.45;
  }
  .register .box .title span{
    zoom: 1.3;
  }
}
</style>