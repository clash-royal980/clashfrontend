<template>
    <div class="updatepic">
        <header>
            <mt-header title="修改头像">
            <router-link slot="left" to="/userupdate">
                <mt-button  icon="back"></mt-button>
            </router-link>
            <router-link slot="right" to="/userupdate">
                <mt-button  icon="">
                    <div class="close"></div>
                </mt-button>
            </router-link>
            </mt-header>
        </header>
        <div class="picbox">
            <img :src="`/img/toppic/${item}.png`" alt="" v-for="(item,i) of 24" :key="i" @click="changepic(item)">
        </div>
        <div class="userpic" @click="submit">
          <div class="bgpic"></div>
          <span>确认</span>
        </div>
    </div>
</template>
<script>
// import {Bus} from '../main.js'
export default {
  data(){
    return{
      select:0
    }
  },
  methods:{
    changepic(index){
      this.select = index;
      // console.log(index);
      let pics = document.querySelectorAll(`.updatepic .picbox img`)
      pics.forEach(item=>{
        item.style.border=`2px solid #5175a8`
      })
      let pic = document.querySelector(`.updatepic .picbox img:nth-child(${index})`);
      pic.style.border=`2px solid #ffd25a`
    },
    submit(){
      if(this.select==0){return}
        // Bus.$emit('msg', this.select);
        this.$router.push('/userupdate')
        sessionStorage.setItem('select',this.select);
      }
    },
    mounted(){
      this.axios.get(`selectuser?phone=${this.$store.state.userphone}`).then(result=>{
      sessionStorage.setItem('select',parseInt(result.data.result[0].toppic.slice(12)));
      })
    }
}
</script>
<style>
.updatepic{
  background-color: #154183;
  height: 100vh;
  /* width: 100vw; */
  overflow-y: auto;
}
.updatepic .mint-header{
  background-color: #0C3A73;
  font-size: 1rem;
  height: 3.3rem;
}
.updatepic .mintui{
  font-size: 1rem;
}
.updatepic .mint-header-button a{
  display: block;
  width: 100%;
  height: 100%;
}
.updatepic .mint-button-text .close{
  width: 50px;
  height: 50px;
  background-image: url(/img/login.png);
  background-position: -18px -13px;
}
.updatepic .picbox{
    width: 95%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-content: center;
    margin: 0 auto;
}
.updatepic .picbox img{
    margin-top: .5rem;
    display: block;
    width: 5rem;
    border: 2px solid #5175a8;
    border-radius: .33rem;
}
.updatepic .userpic .bgpic{
  margin: 0 auto; 
  width: 620px;
  height: 120px;
  background-image: url(/img/login.png);
  background-position: 0 -78px;
  position: relative;
}
.updatepic .userpic{
  /* margin: 0 auto; */
  position: relative;
}
.updatepic .userpic span{
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-55%);
  font-size: 2rem;
}


@media screen and (min-width:280px){  
  .updatepic .mint-button-text .close{
    zoom: .4;
  }
  .updatepic .userpic{
    zoom: .4;
  }
}
@media screen and (min-width:320px){  
 .updatepic .userpic{
    zoom: .45;
  }
}
@media screen and (min-width:360px){  
  .updatepic .mint-button-text .close{
    zoom: .6;
  }
  .updatepic .userpic{
    zoom: .5;
  }
}
@media screen and (min-width:375px){  
  .updatepic .mint-button-text .close{
    zoom: .6;
  }
}
@media screen and (min-width:410px){  
  .updatepic .mint-button-text .close{
    zoom: .65;
  }
  .updatepic .userpic{
    zoom: .6;
  }
}
@media screen and (min-width:540px){  
  .updatepic .mint-button-text .close{
    zoom: .75;
  }
  .updatepic .userpic{
    zoom: .8;
  }
}
@media screen and (min-width:760px){  
  .updatepic .mint-button-text .close{
    zoom: .9;
  }
  .updatepic .userpic{
    zoom: 1;
  }
  .updatepic .userpic span{
      font-size: 1rem;
  }
}
@media screen and (min-width:1000px){  
  .updatepic .userpic{
    zoom: 1.5;
  }
  .updatepic .userpic span{
      font-size: .8rem;
  }
}
</style>