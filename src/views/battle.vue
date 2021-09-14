<template>
  <div class="battlepage">
    <header>
      <mt-header title="">
          <router-link slot="left" to="/tenking">
              <mt-button icon="back"></mt-button>
          </router-link>
      </mt-header>
    </header>
    <div class="battelcontent">
      <div class="tippic">
        <img src="/img/battle.png" alt="">
      </div>
      <div class="battlevs">
        <div class="score">
          <div class="player">
            <div class="people">
             <img :src="`${datalist.play1_pic}`" alt="">
             <span>{{datalist.play1_name}}</span> 
            </div>
          </div>
          <div class="vsscore">
            <div class="fen">
              <span>{{datalist.fen1}}</span>
              <img src="/img/tenking/vs.png" alt="">
              <span>{{datalist.fen2}}</span>
            </div>
            <div class="fang">
              <img src="/img/tenking/hf.png" alt="">
            </div>
          </div>
          <div class="player">
            <div class="people">
             <img :src="`${datalist.play2_pic}`" alt="">
             <span>{{datalist.play2_name}}</span> 
            </div>
          </div>
        </div>
          <div v-html="datalist.tenkingdata"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      datalist:{}
    }
  },
  methods: {
    
  },
  mounted() {
    let id = this.$route.query.id;
    console.log(id);
    this.axios.get(`/tenkingdetail?id=${id}`).then(result=>{
        console.log(result.data.results[0]);
        this.datalist=result.data.results[0];
    })
  },
}
</script>
<style>
.battlepage .mint-header{
  background-color: transparent;
}
.battlepage .battelcontent{
  width: 90%;
  margin: 0 auto;
  border-radius: 10px;
  border: 1px solid #12304F;
  border-top: 0;
  margin-bottom: 5vh;
}
.battlepage .battelcontent .tippic img{
  width: 100%;
  display: block;
}
.battlepage .battelcontent .battlevs{
  width: 100%;
  background-color: #E3EEF3;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  /* height: 500px; */
}
.battlepage .battelcontent .battlevs .vspan:last-child{
  border-bottom: 0;
}
.battlepage .battelcontent .battlevs .score{
  height: 101px;
  border-bottom: 2px solid #9FA8B4;
  display: flex;
  justify-content: space-around;
}
.battlepage .battelcontent .battlevs .score .player .people{
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  width: 40px;
  margin-top: 20px;
  font-size: 12px;
}
.battlepage .battelcontent .battlevs .score .player img{
  width: 40px;
  display: block;
}
.battlepage .battelcontent .battlevs .score .vsscore{
  display: flex;
  width: 100px;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
}
.battlepage .battelcontent .battlevs .score .vsscore .fen{
  font-size: 26px;
}
.battlepage .battelcontent .battlevs .score .vsscore .fen img{
  width: 40px;
  vertical-align: middle;
  margin: 0 10px;
}
.battlepage .battelcontent .battlevs .score .vsscore .fang img{
  width: 94.5px;
}
.battlepage .battelcontent .battlevs .vspan{
  height: 190px;
  border-bottom: 2px solid #9FA8B4;
  position: relative;
}
.battlepage .battelcontent .battlevs .vspan p{
  text-align: center;
  font-size: 12px;
  padding-top: 20px;
}
.battlepage .battelcontent .battlevs .vspan .member{
  height: 33.5px;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  position: relative;
  margin: 0 .5vw;
}
.battlepage .battelcontent .battlevs .vspan .member img{
  width: 25px;
  height: 25px;
  vertical-align: middle;
}
.battlepage .battelcontent .battlevs .vspan .member .battle img{
  width: 50%;
  position: absolute;
  left: 0;
  transform: translateX(50%);
}
.battlepage .battelcontent .battlevs .vspan .member .bf{
  position: absolute;
  top: 5px;
  left: 155px;
  color: #fff;
  font-size: 15px;
}
.battlepage .battelcontent .battlevs .vspan .bavscontent{
  display: flex;
  justify-content: space-around;
}
.battlepage .battelcontent .battlevs .vspan .card{
  display: flex;
  width: 130px;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: center;
  margin: 10px 0;
} 
.battlepage .battelcontent .battlevs .vspan .card img{
  width: 29px;
  height: 35px;
}
.battlepage .battelcontent .battlevs .vspan .battlemin img{
  width: 30px;
  height: 30px;
  margin-top: 30px;
  position:relative;
  z-index: 10;
}
.battlepage .battelcontent .battlevs .vspan .line{
  width: 1px;
  height: 128px;
  background-color: #C4D3DC;
  position: absolute;
  top: 61px;
  left: 168px;
}

/* 媒体查询 */
@media screen and (min-width:280px) {
  .battlepage .battelcontent .battlevs .score{
    height: 80px;
  }
  .battlepage .battelcontent .battlevs .score .player .people{
    width: 30px;
    margin-top: 20px;
    font-size: 12px;
  }
  .battlepage .battelcontent .battlevs .score .player img{
    width: 30px;
  }
  .battlepage .battelcontent .battlevs .score .vsscore{
    width: 90px;
  }
  .battlepage .battelcontent .battlevs .score .vsscore .fen{
    font-size: 20px;
  }
  .battlepage .battelcontent .battlevs .score .vsscore .fen img{
    width: 37.3px;
    margin: 0 10px;
  }
  .battlepage .battelcontent .battlevs .score .vsscore .fang img{
    width: 70.5px;
  }
  .battlepage .battelcontent .battlevs .vspan{
    height: 140px;
  }
  .battlepage .battelcontent .battlevs .vspan p{
    font-size: 12px;
    padding-top: 15px;
  }
  .battlepage .battelcontent .battlevs .vspan .member{
    height: 18.66px;
    font-size: 12px;
  }
  .battlepage .battelcontent .battlevs .vspan .member img{
    width: 18.66px;
    height: 18.66px;
  }
  .battlepage .battelcontent .battlevs .vspan .member .bf{
    top: 4px;
    left: 115px;
    font-size: 12px;
  }
  .battlepage .battelcontent .battlevs .vspan .card{
    width: 94px;
    margin: 10px 0;
  } 
  .battlepage .battelcontent .battlevs .vspan .card img{
    width: 21.64px;
    height: 26.13px;
  }
  .battlepage .battelcontent .battlevs .vspan .battlemin img{
    width: 22.39px;
    height: 22.39px;
    margin-top: 30px;
  }
  .battlepage .battelcontent .battlevs .vspan .line{
    width: 1px;
    height: 90px;
    top: 50px;
    left: 126px;
  }
}
@media screen and (min-width:320px){  
  .battlepage .battelcontent .battlevs .score{
    height: 94px;
  }
  .battlepage .battelcontent .battlevs .score .player .people{
    width: 40px;
    margin-top: 20px;
    font-size: 12px;
  }
  .battlepage .battelcontent .battlevs .score .player img{
    width: 34.13px;
  }
  .battlepage .battelcontent .battlevs .score .vsscore{
    width: 90px;
  }
  .battlepage .battelcontent .battlevs .score .vsscore .fen{
    font-size: 24px;
  }
  .battlepage .battelcontent .battlevs .score .vsscore .fen img{
    margin: 0 8px;
  }
  .battlepage .battelcontent .battlevs .score .vsscore .fang img{
    width: 80.5px;
  }
  .battlepage .battelcontent .battlevs .vspan{
    height: 162.13px;
  }
  .battlepage .battelcontent .battlevs .vspan p{
    font-size: 12px;
    padding-top: 15px;
  }
  .battlepage .battelcontent .battlevs .vspan .member{
    height: 21.33px;
    font-size: 12px;
  }
  .battlepage .battelcontent .battlevs .vspan .member img{
    width: 21.33px;
    height: 21.33px;
  }
  .battlepage .battelcontent .battlevs .vspan .member .bf{
    top: 4px;
    left: 130px;
    font-size: 12.8px;
  }
  .battlepage .battelcontent .battlevs .vspan .card{
    width: 110px;
    margin: 10px 0;
  } 
  .battlepage .battelcontent .battlevs .vspan .card img{
    width: 24.73px;
    height: 29.86px;
  }
  .battlepage .battelcontent .battlevs .vspan .battlemin img{
    width: 25.39px;
    height: 25.39px;
    margin-top: 30px;
  }
  .battlepage .battelcontent .battlevs .vspan .line{
    width: 1px;
    height: 110px;
    top: 52px;
    left: 144px;
  }
}
@media screen and (min-width:360px){
  .battlepage .battelcontent .battlevs .vspan .member .bf{
    top: 5px;
    left: 148px;
    font-size: 15px;
  }
  .battlepage .battelcontent .battlevs .vspan .line{
    width: 1px;
    height: 107px;
    top: 55px;
    left: 162px;
  }
}
@media screen and (min-width:375px) {
  .battlepage .battelcontent .battlevs .score{
    height: 91px;
  }
  .battlepage .battelcontent .battlevs .score .player .people{
    width: 40px;
    margin-top: 20px;
    font-size: 12px;
  }
  .battlepage .battelcontent .battlevs .score .player img{
    width: 40px;
  }
  .battlepage .battelcontent .battlevs .score .vsscore{
    width: 90px;
  }
  .battlepage .battelcontent .battlevs .score .vsscore .fen{
    font-size: 28px;
  }
  .battlepage .battelcontent .battlevs .score .vsscore .fen img{
    width: 37.3px;
    margin: 0 10px;
  }
  .battlepage .battelcontent .battlevs .score .vsscore .fang img{
    width: 94.5px;
  }
  .battlepage .battelcontent .battlevs .vspan{
    height: 190px;
  }
  .battlepage .battelcontent .battlevs .vspan p{
    font-size: 12px;
    padding-top: 15px;
  }
  .battlepage .battelcontent .battlevs .vspan .member{
    height: 25px;
    font-size: 12px;
  }
  .battlepage .battelcontent .battlevs .vspan .member img{
    width: 25px;
    height: 25px;
  }
  .battlepage .battelcontent .battlevs .vspan .member .bf{
    top: 6px;
    left: 153px;
    font-size: 15px;
  }
  .battlepage .battelcontent .battlevs .vspan .card{
    width: 130px;
    margin: 18px 0;
  } 
  .battlepage .battelcontent .battlevs .vspan .card img{
    width: 29px;
    height: 35px;
  }
  .battlepage .battelcontent .battlevs .vspan .battlemin img{
    width: 30px;
    height: 30px;
    margin-top: 35px;
  }
  .battlepage .battelcontent .battlevs .vspan .line{
    width: 1px;
    height: 134px;
    top: 56px;
    left: 168px;
  }
}
@media screen and (min-width:400px) {
  .battlepage .battelcontent .battlevs .score{
    height: 121px;
  }
  .battlepage .battelcontent .battlevs .score .player .people{
    width: 43.83px;
    margin-top: 30px;
    font-size: 12px;
  }
  .battlepage .battelcontent .battlevs .score .player img{
    width: 43.83px;
  }
  .battlepage .battelcontent .battlevs .score .vsscore{
    width: 95px;
  }
  .battlepage .battelcontent .battlevs .score .vsscore .fen{
    font-size: 30px;
  }
  .battlepage .battelcontent .battlevs .score .vsscore .fen img{
    width: 35px;
    margin: 0 13px;
  }
  .battlepage .battelcontent .battlevs .score .vsscore .fang img{
    width: 103px;
  }
  .battlepage .battelcontent .battlevs .vspan{
    height: 206px;
  }
  .battlepage .battelcontent .battlevs .vspan p{
    font-size: 13.2px;
    padding-top: 20px;
  }
  .battlepage .battelcontent .battlevs .vspan .member{
    height: 27.39px;
    font-size: 12px;
  }
  .battlepage .battelcontent .battlevs .vspan .member img{
    width: 27.39px;
    height: 27.39px;
  }
  .battlepage .battelcontent .battlevs .vspan .member .bf{
    top: 6px;
    left: 168px;
    font-size: 16.44px;
  }
  .battlepage .battelcontent .battlevs .vspan .card{
    width: 140px;
    margin: 20px 0;
  } 
  .battlepage .battelcontent .battlevs .vspan .card img{
    width: 31.78px;
    height: 38.36px;
  }
  .battlepage .battelcontent .battlevs .vspan .battlemin img{
    width: 32.88px;
    height: 32.88px;
    margin-top: 40px;
  }
  .battlepage .battelcontent .battlevs .vspan .line{
    width: 1px;
    height: 142px;
    top: 64px;
    left: 185px;
  }
}

@media screen and (min-width:480px) {
  .battlepage .battelcontent .battlevs .score{
    height: 160px;
  }
  .battlepage .battelcontent .battlevs .score .player .people{
    width: 57.59px;
    margin-top: 50px;
    font-size: 14.4px;
  }
  .battlepage .battelcontent .battlevs .score .player img{
    width: 57.59px;
  }
  .battlepage .battelcontent .battlevs .score .vsscore{
    width: 135px;
  }
  .battlepage .battelcontent .battlevs .score .vsscore .fen{
    font-size: 40.3px;
  }
  .battlepage .battelcontent .battlevs .score .vsscore .fen img{
    width: 43.1px;
    margin: 0 13px;
  }
  .battlepage .battelcontent .battlevs .score .vsscore .fang img{
    width: 136px;
  }
  .battlepage .battelcontent .battlevs .vspan{
    height: 271.3px;
  }
  .battlepage .battelcontent .battlevs .vspan p{
    font-size: 17.28px;
    padding-top: 30px;
  }
  .battlepage .battelcontent .battlevs .vspan .member{
    height: 36px;
    font-size: 14.4px;
  }
  .battlepage .battelcontent .battlevs .vspan .member img{
    width: 36px;
    height: 36px;
  }
  .battlepage .battelcontent .battlevs .vspan .member .bf{
    top: 8px;
    left: 220px;
    font-size: 21.6px;
  }
  .battlepage .battelcontent .battlevs .vspan .card{
    width: 185px;
    margin: 20px 0;
  } 
  .battlepage .battelcontent .battlevs .vspan .card img{
    width: 41.75px;
    height: 50.39px;
  }
  .battlepage .battelcontent .battlevs .vspan .battlemin img{
    width: 43.19px;
    height: 43.19px;
    margin-top: 45px;
  }
  .battlepage .battelcontent .battlevs .vspan .line{
    width: 1px;
    height: 182px;
    top: 89px;
    left: 243px;
  }
}

@media screen and (min-width:640px) {
  .battlepage .battelcontent .battlevs .score{
    height: 222px;
  }
  .battlepage .battelcontent .battlevs .score .player .people{
    width: 80px;
    margin-top: 50px;
    font-size: 22px;
  }
  .battlepage .battelcontent .battlevs .score .player img{
    width: 80px;
  }
  .battlepage .battelcontent .battlevs .score .vsscore{
    width: 155px;
  }
  .battlepage .battelcontent .battlevs .score .vsscore .fen{
    font-size: 56px;
  }
  .battlepage .battelcontent .battlevs .score .vsscore .fen img{
    width: 60px;
    margin: 0 13px;
  }
  .battlepage .battelcontent .battlevs .score .vsscore .fang img{
    width: 189px;
  }
  .battlepage .battelcontent .battlevs .vspan{
    height:379px;
  }
  .battlepage .battelcontent .battlevs .vspan p{
    font-size: 24px;
    padding-top: 40px;
  }
  .battlepage .battelcontent .battlevs .vspan .member{
    height: 50px;
    font-size: 22px;
  }
  .battlepage .battelcontent .battlevs .vspan .member img{
    width: 50px;
    height: 50px;
  }
  .battlepage .battelcontent .battlevs .vspan .member .bf{
    top: 10px;
    left: 315px;
    font-size: 30px;
  }
  .battlepage .battelcontent .battlevs .vspan .card{
    width: 255px;
    margin: 30px 0;
  } 
  .battlepage .battelcontent .battlevs .vspan .card img{
    width: 58px;
    height: 70px;
  }
  .battlepage .battelcontent .battlevs .vspan .battlemin img{
    width: 60px;
    height: 60px;
    margin-top: 60px;
  }
  .battlepage .battelcontent .battlevs .vspan .line{
    width: 1px;
    height: 259px;
    top: 120px;
    left: 344px;
  }
}
@media screen and (min-width:1024px) {
  .battlepage .battelcontent .battlevs .score{
    height: 252px;
  }
  .battlepage .battelcontent .battlevs .score .player .people{
    width: 100px;
    margin-top: 50px;
    font-size: 26px;
  }
  .battlepage .battelcontent .battlevs .score .player img{
    width: 100px;
  }
  .battlepage .battelcontent .battlevs .score .vsscore{
    width: 155px;
  }
  .battlepage .battelcontent .battlevs .score .vsscore .fen{
    font-size: 60px;
  }
  .battlepage .battelcontent .battlevs .score .vsscore .fen img{
    width: 70px;
    margin: 0 9px;
  }
  .battlepage .battelcontent .battlevs .score .vsscore .fang img{
    width: 200px;
  }
  .battlepage .battelcontent .battlevs .vspan{
    height:400px;
  }
  .battlepage .battelcontent .battlevs .vspan p{
    font-size: 28px;
    padding-top: 50px;
  }
  .battlepage .battelcontent .battlevs .vspan .member{
    height: 70px;
    font-size: 28px;
  }
  .battlepage .battelcontent .battlevs .vspan .member img{
    width: 70px;
    height: 70px;
  }
  .battlepage .battelcontent .battlevs .vspan .member .bf{
    top: 15px;
    left: 420px;
    font-size: 40px;
  }
  .battlepage .battelcontent .battlevs .vspan .card{
    width: 295px;
    margin: 30px 0;
  } 
  .battlepage .battelcontent .battlevs .vspan .card img{
    width: 66px;
    height: 80px;
  }
  .battlepage .battelcontent .battlevs .vspan .battlemin img{
    width: 80px;
    height: 80px;
    margin-top: 60px;
  }
  .battlepage .battelcontent .battlevs .vspan .line{
    width: 1px;
    height: 247px;
    top: 154px;
    left: 458px;
  }
}
</style>