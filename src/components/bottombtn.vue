<template>
  <div class="bottombtnbar" v-show="flag">
    <mt-tabbar v-model="selected" class="tabbar" fixed :style="{height:height}">
      <mt-tab-item id="1" class="item">
        <img slot="icon" src="/img/1.png">
        <span :style="{fontSize:parseInt(height)*14/50+'px'}" id="firstspan">资讯</span>
        <div slot="icon"></div>
      </mt-tab-item>
      <mt-tab-item id="2" class="item">
        <img slot="icon" src="/img/2.png">
        <span :style="{fontSize:parseInt(height)*14/50+'px'}">十大天王</span>
        <div slot="icon"></div>
      </mt-tab-item>
      <mt-tab-item id="3" class="item">
        <img slot="icon" src="/img/3.png">
        <span :style="{fontSize:parseInt(height)*14/50+'px'}">CRL</span>
        <div slot="icon"></div>   
      </mt-tab-item>
      <mt-tab-item id="4" class="item">
        <img slot="icon" src="/img/4.png">
        <span :style="{fontSize:parseInt(height)*14/50+'px'}">视频</span>
        <div slot="icon"></div>
      </mt-tab-item>
      <mt-tab-item id="5" class="item">
        <img slot="icon" src="/img/5.png">
        <span :style="{fontSize:parseInt(height)*14/50+'px'}" id="lastspan">我的</span>
        <div slot="icon"></div>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  data(){
    return{
      selected:'1',
      height:'50px',
      btn:'26px',
      flag:true,
    }
  },
  mounted(){
    let screenh=window.screen.height //屏幕宽度的像素
    let swipeh=Math.floor(50*screenh/667)+'px';
    this.height=swipeh;
    let btnh = Math.floor(26*screenh/667)+'px';
    this.btn=btnh;
  },
  created() {
    this.$nextTick(function(){
      var btn = document.querySelectorAll('.bottombtnbar .mint-tab-item-icon')
      for(var i=0;i<btn.length;i++){
        btn[i].style.height = this.btn;
        btn[i].style.width = this.btn;
      }
      if(location.pathname.slice(1)=='tenking'){
        this.selected = '2';
      }
      if(location.pathname.slice(1)=='myguess'){
        this.selected = '5';
      }
      if(/detail/.test(location.pathname)){
        this.flag = false
      }
      if(/battle/.test(location.pathname)){
        this.flag = false
      }
      if(/login/.test(location.pathname)){
        this.flag = false
      }
      if(/register/.test(location.pathname)){
        this.flag = false
      }
    })
  },
  watch:{
    selected(newvalue){
      if(newvalue=='1'){
        this.$router.push('/')
      }else if(newvalue=='2'){
        if(location.pathname.slice(1)=='tenking') return;
        this.$router.push('/tenking')
      }
      else if(newvalue=='5'){
        if(location.pathname.slice(1)=='myguess') return;
        this.$router.push('/myguess')
      } 
    },
    $route(to){
      if(/detail/.test(to.path)||/battle/.test(to.path)||/login/.test(to.path)||/register/.test(to.path)){
        this.flag = false
      }else{
        this.flag = true
      }
      if(/myguess/.test(to.path)){
        this.selected = '5'
      }
    }
  }
}
</script>
<style>
.bottombtnbar .tabbar .item{
  background-color: #384152;
  color: #fff;
  border-right: .01rem solid #181c23;
  border-left: .01rem solid #181c23;
  padding: 0;
  /* bottom: 10px; */
}
.bottombtnbar .tabbar .item.is-selected{
  background-color: #57718F;
  /* padding: 0 .2rem; */
  transition: all 1s;
  font-size: .5rem;  
}
.bottombtnbar .tabbar .item span{
  position: relative;
}
.bottombtnbar .tabbar .is-selected span::after{
  content: '123';
  color: transparent;
  background-image: url(/img/right.png);
  background-size: 40%;
  background-repeat: no-repeat;
  position: absolute;
  right: -7vw;
}
.bottombtnbar .tabbar .is-selected span::before{
  content: '123';
  color: transparent;
  background-image: url(/img/left.png);
  background-size: 40%;
  background-repeat: no-repeat;
  position: absolute;
  top: -0.1vh;
  left: -3vw;
}
.bottombtnbar .tabbar .item.is-selected span{
  /* top: -.5rem; */
  display: inline-block;
  transform: translateY(-.5rem);
  color: #fff;
  transition: all 1s;
}
.bottombtnbar .tabbar .item.is-selected img{
  transform: scale(1.5) translateY(-.5rem);
  transition: all 1s;
}
</style>