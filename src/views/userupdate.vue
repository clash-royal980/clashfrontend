<template>
  <div class="userupdate">
   <header>
        <mt-header title="完善账号信息">
          <router-link slot="left" to="/myguess">
              <mt-button  icon="back" @click="nochange"></mt-button>
          </router-link>
          <router-link slot="right" to="/myguess">
              <mt-button  icon="">
                <div class="close" @click="nochange"></div>
              </mt-button>
          </router-link>
        </mt-header>
   </header>
   <div class="userinfo">
     <div class="userpic">
       <img :src="userinfo.toppic" alt="" @click="toupdate">
       <div class="edit"></div>
     </div>
     <div class="update">
      <span>用户昵称:</span>
      <span>邮箱:</span>
      <span>游戏ID:</span>
      <span>游戏昵称:</span>
      <input type="text" placeholder="请输入昵称" v-model="userinfo.username">
      <input type="text" placeholder="请输入邮箱(选填)" v-model="userinfo.email">
      <input type="text" placeholder="请输入游戏ID(选填)" v-model="userinfo.gameID">
      <input type="text" placeholder="请输入游戏昵称(选填)" v-model="userinfo.gamename">
      <div class="sureupdate" @click="sure">
        <div class="bgpic"></div>
          <span>确认</span>
        </div>
     </div>
   </div>
   <p>如果您需要帮助请联系我们，发邮件至(<span>contact@crlcn.com</span>)
   </p>
  </div>
</template>
<script>
// import {Bus} from '../main.js'
export default {
  data(){
    return{
      userinfo:[],
      picurl:'',
      flag:false
    }
  },
  methods:{
    toupdate(){
      this.$router.push('/updatepic')
    },
    sure(){
      this.axios.post('userup',`pic=${this.userinfo.toppic}&nc=${this.userinfo.username}&email=${this.userinfo.email}&gameID=${this.userinfo.gameID}&gamename=${this.userinfo.gamename}&phone=${this.userinfo.phone}`).then(result=>{
        if(result.data.code==0){
          this.$toast('您未做任何修改');
        }else{
          this.$toast('修改成功');
          this.$router.push('/myguess')
        }  
      })
    },
    nochange(){
      sessionStorage.removeItem('select');
    }
  },
  mounted() {
    let select = sessionStorage.getItem('select')
    // console.log(this.$store.state.islogin);
    this.axios.get(`selectuser?phone=${this.$store.state.userphone}`).then(result=>{
      this.userinfo = result.data.result[0]
      // console.log(this.userinfo);
      this.picurl=this.userinfo.toppic
      if(select){
        this.userinfo.toppic = `/img/toppic/${select}.png`
        // sessionStorage.setItem('select',parseInt(this.picurl.slice(12)));
      }
      
    })
  },
}
</script>
<style>
.userupdate{
  background-color: #154183;
  height: 100vh;
  width: 100vw;
}
.userupdate .mint-header{
  background-color: #0C3A73;
  font-size: 1rem;
  height: 3.3rem;
}
.userupdate .mintui{
  font-size: 1rem;
}
.userupdate .mint-header-button a{
  display: block;
  width: 100%;
  height: 100%;
}
.userupdate .mint-button-text .close{
  width: 50px;
  height: 50px;
  background-image: url(/img/login.png);
  background-position: -18px -13px;
}
.userupdate .mint-header-title{
    /* height: 1.2rem;
    line-height: 1.2rem; */
}
.userupdate .userinfo .userpic{
  margin-top: 1rem;
  position: relative;
}
.userupdate .userinfo img{
  display: block;
  margin: 0 auto;
  width: 6rem;
  border: 2px solid #5175A8;
  border-radius: .5rem;
}
.userupdate .userinfo .edit{
  width: 50px;
  height: 50px;
  background-image: url(/img/login.png);
  background-position: -459px -9px;
  transform: scale(.55);
  position: absolute;
  bottom: -11px;
  left: 195px;
}

.userupdate .update{
  margin: 1rem auto;
  position: relative;
  width: 85%;
}
.userupdate .update input{
  margin: 0 auto;
  display: block;
  width: 75%;
  height: .8rem;
  border-radius: .5rem;
  border: 0;
  margin-bottom: 1rem;
  padding:1rem 0 1rem 5rem;
}
.userupdate .update .yzm {
  display: flex;
  justify-content: center;
  align-content: center;
}
.userupdate .update .yzm input{
  width: 40%;
  margin: 0;
  margin-right: 1rem;
}
.userupdate .update .yzm .data{
  background-color: #ffa631; 
  border: 1px solid black;
}
.userupdate .update .yzm .data svg{
  width: 6rem;
  height: 2.5rem;
}
.userupdate .update span{
  color: #000;
  position: absolute;
  top: 0;
  left: 0;
  font-size: .9rem;
}
.userupdate .update span:first-child{
  top: .7rem;
  left: 1rem;
}
.userupdate .update span:nth-child(2){
  top: 4.5rem;
  left: 1rem;
}
.userupdate .update span:nth-child(3){
  top: 8.3rem;
  left: 1rem;
}
.userupdate .update span:nth-child(4){
  top: 12.1rem;
  left: 1rem;
}
.userupdate .userinfo  .sureupdate .bgpic{
  /* margin: 0 auto;  */
  width: 620px;
  height: 120px;
  background-image: url(/img/login.png);
  background-position: 0 -78px;
  position: relative;
}
.userupdate .userinfo  .sureupdate{
  /* margin: 0 auto; */
  position: relative;
}
.userupdate .userinfo .sureupdate span{
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  font-size: 2rem;
}
.userupdate>p{
  color: #fff;
  font-size: .8rem;
  text-align: center;
}
.userupdate>p>span{
  color: #78b7fe;
}


@media screen and (min-width:280px){  
  html{font-size: 12px !important;}
  .userupdate .mint-button-text .close{
    zoom: .4;
  }
  .userupdate .userinfo .edit{
    transform: scale(.45);
    bottom: -13px;
    left: 141px;
  }
  .userupdate .userinfo .sureupdate{
    zoom: .38;
  }
}
@media screen and (min-width:320px){  
  html{font-size: 12.8px !important;}
  .userupdate .userinfo .edit{
    transform: scale(.5);
    bottom: -12px;
    left: 162px;
  }
  .userupdate .userinfo .sureupdate{
    zoom: .43 ;
  }
}
@media screen and (min-width:360px){  
  html{font-size: 15px !important;}
  .userupdate .mint-button-text .close{
    zoom: .6;
  }
  .userupdate .userinfo .edit{
    transform: scale(.55);
    bottom: -10px;
    left: 187px;
  }
  .userupdate .userinfo .sureupdate{
    zoom: .49;
  }
}
@media screen and (min-width:375px){  
  html{font-size: 15px !important;}
  .userupdate .mint-button-text .close{
    zoom: .6;
  }
  .userupdate .userinfo .edit{
    transform: scale(.55);
    bottom: -11px;
    left: 195px;
  }
  .userupdate .userinfo .sureupdate{
    zoom: .5;
  }
}
@media screen and (min-width:410px){  
  html{font-size: 17px !important;}
  .userupdate .mint-button-text .close{
    zoom: .65;
  }
  .userupdate .userinfo .edit{
    transform: scale(.6);
    bottom: -9px;
    left: 218px;
  }
  .userupdate .userinfo .sureupdate{
    zoom: .55;
  }
}
@media screen and (min-width:540px){  
  html{font-size: 21.6px !important;}
  .userupdate .mint-button-text .close{
    zoom: .75;
  }
  .userupdate .userinfo .edit{
    transform: scale(.8);
    bottom: -5px;
    left: 292px;
  }
  .userupdate .userinfo .sureupdate{
    zoom: .73;
  }
  .userupdate .userinfo .sureupdate span{
    font-size: 1.4rem;
  }
}
@media screen and (min-width:760px){  
  html{font-size: 30px !important;}
  .userupdate .mint-button-text .close{
    zoom: .9;
  }
  .userupdate .userinfo .edit{
    transform: scale(1);
    bottom:0px;
    left: 426px;
  }
  .userupdate .userinfo .sureupdate{
    zoom: 1;
  }
  .userupdate .userinfo .sureupdate span{
    font-size: .9rem;
  }
}
@media screen and (min-width:1000px){  
  html{font-size: 40px !important;}
  .userupdate .userinfo .edit{
    transform: scale(1.2);
    bottom:5px;
    left: 578px;
  }
  .userupdate .userinfo .sureupdate{
    zoom: 1.38;
  }
  .userupdate .userinfo .sureupdate span{
    font-size: .7rem;
  }
}
</style>