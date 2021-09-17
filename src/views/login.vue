<template>
  <div class="login">
    <header>
        <mt-header title="登录">
          <router-link slot="left" to="/myguess">
              <mt-button  icon="back"></mt-button>
          </router-link>
        </mt-header>
    </header>
    <div class="userlogin">
      <span>账号:</span>
      <input type="text" placeholder="请输入注册时的手机号" v-model="pname">
      <input type="password" placeholder="请输入密码" v-model="pwd">
      <span>密码:</span>
    </div>
    <div class="loginbtn" @click="godo">
      <div class="bgpic"></div>
      <span>登录</span>
    </div>
    <div class="bttext">
      <span @click="goregister">我要注册</span>
      <span>忘记密码</span>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      pname:'',
      pwd:''
    }
  },
  methods: {
    goregister(){
      this.$router.push('/register')
    },
    godo(){
      this.axios.post(
        '/userlogin',`pho=${this.pname}&pwd=${this.pwd}`).then(result=>{
        console.log(result);
        if(result.data.code==100){
          this.$toast('用户名或密码错误');
          this.pname='';
          this.pwd='';
          return;
        }else{
          this.$toast('登录成功');
          this.$store.commit('changephone',this.pname);
          sessionStorage.setItem('islogin',true);
          sessionStorage.setItem('userphone',this.pname)
          this.$router.push('/myguess')
        }
      })
    }
  },
}
</script>
<style>
@media screen and (min-width:280px){  
  html{font-size: 12px !important;}
  .login .userlogin span:first-child{
    top: .8rem; 
    left: 1rem;
  }
  .login .userlogin span:last-child{
    top: 4.8rem; 
    left: 1rem;
  }
  .login .loginbtn .bgpic{
    zoom: .43;
  }
}
@media screen and (min-width:320px){  
  html{font-size: 12.8px !important;}
  .login .userlogin span:first-child{
    top: .85rem; 
    left: 2rem;
  }
  .login .userlogin span:last-child{
    top: 4.85rem; 
    left: 2rem;
  }
  .login .loginbtn .bgpic{
    zoom: .47;
  }
}
@media screen and (min-width:360px){  
  html{font-size: 15px !important;}
  .login .userlogin span:first-child{
    top: .95rem; 
    left: 2rem;
  }
  .login .userlogin span:last-child{
    top: 4.97rem; 
    left: 2rem;
  }
  .login .loginbtn .bgpic{
    zoom: .55;
  }
}
@media screen and (min-width:410px){  
  html{font-size: 17px !important;}
  .login .userlogin span:first-child{
    top: .95rem; 
    left: 1.5rem;
  }
  .login .userlogin span:last-child{
    top: 4.95rem; 
    left: 1.5rem;
  }
  .login .loginbtn .bgpic{
    zoom: .63;
  }
}
@media screen and (min-width:540px){  
  html{font-size: 21.6px !important;}
  .login .userlogin span:first-child{
    top: .95rem; 
    left: 2rem;
  }
  .login .userlogin span:last-child{
    top: 4.95rem; 
    left: 2rem;
  }
  .login .loginbtn .bgpic{
    zoom: .8;
  }
}
@media screen and (min-width:760px){  
  html{font-size: 30px !important;}
  .login .userlogin span:first-child{
    top: .9rem; 
    left: 2.4rem;
  }
  .login .userlogin span:last-child{
    top: 4.9rem; 
    left: 2.4rem;
  }
  .login .loginbtn .bgpic{
    zoom: 1.1;
  }
}
@media screen and (min-width:1000px){  
  html{font-size: 40px !important;}
  .login .loginbtn .bgpic{
    zoom: 1.45;
  }
}

.login{
  background-color: #154183;
  height: 100vh;
  width: 100vw;
}
.login .mint-header{
  background-color: #0C3A73;
  font-size: 1rem;
  height: 3.3rem;
}
.login .mintui{
  font-size: 1rem;
}
.login .userlogin{
  margin: 1rem auto;
  position: relative;
}
.login .userlogin input{
  margin: 0 auto;
  display: block;
  width: 17rem;
  height: 1rem;
  border-radius: .8rem;
  border: 0;
  margin-bottom: 1rem;
  padding:1rem 2.5rem;
}
.login .userlogin span{
  color: #000;
  position: absolute;
  font-size: .8rem;
}
.login .loginbtn {
  position: relative;
}
.login .loginbtn .bgpic{
  margin: 0 auto;
  width: 620px;
  height: 120px;
  background-image: url(/img/login.png);
  background-position: 0 -78px;
}
.login .loginbtn span{
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.login .bttext{
  display: flex;
  justify-content: space-between;
  width: 21rem;
  margin: 0 auto;
}
.login .bttext span{
  color: #fff;
  font-size: .9rem;
}
</style>