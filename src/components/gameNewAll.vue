<template>
  <div class="gamenewlistbar">
    <van-tabs v-model="active">
      <van-tab title="热门" infinite-scroll-distance="70" infinite-scroll-disabled="busy" v-infinite-scroll="loadmore"  :infinite-scroll-immediate-check="true">
        <div class="articleItem" v-for="(item,index) in articles" :key="index">
          <router-link :to="`/detail?id=${item.hi_id}`">
            <!-- 文章图文信息开始 -->
            <div class="articleItem-wrapper">
              <div class="articleImg">
                <img :src="`${item.hi_pic}`" :style="{width:imgw}"/>
              </div>
              <div class="articleDes" :style="{fontSize:navFont}">
                <span>{{item.hi_title}}</span>
                <div class="time" :style="{marginTop:itemtop}">{{moment.unix(item.hi_time).format('YYYY-MM-DD')}}</div> 
              </div>
            </div>
            <!-- 文章图文信息结束 -->
          </router-link>
        </div>
      </van-tab>
      <van-tab title="战报">战报</van-tab>
      <van-tab title="深度">深度</van-tab>
      <van-tab title="采访">采访</van-tab>
      <van-tab title="花絮">花絮</van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  data(){
    return{
      active:this.$store.state.type,
      articles:[],
      navh:"44px",
      navFont:'14px',
      data:Date.parse(new Date()),
      imgw:"71px",
      itemtop:"4px",
      busy:false,
      page:1,      //当前页码
      count:0,   //总页码
      flag:false,
    }
  },
  methods:{
     navHeight(){
      let screenh=window.screen.height 
      let swipeh=Math.floor(44*screenh/667)+'px';
      this.navh=swipeh; 
    },
    navFon(){
      let screenh=window.screen.height 
      let swipeh=Math.floor(14*screenh/667)+'px';
      this.navFont=swipeh; 
    },
    imgwidth(){
      let screenw=window.screen.width 
      let swipew=Math.floor(71*screenw/375)+'px';
      this.imgw=swipew; 
    },
    itemt(){
      let screenh=window.screen.height 
      let swipeh=Math.floor(4*screenh/667)+'px';
      this.itemtop=swipeh; 
    },
    loadmore(){
      if(this.flag){return}
      if(this.page==this.count){
        this.$toast({
          message: '没有更多数据了',
          position: 'bottom',
          duration: 1000
        });
        this.flag=true;
        this.$indicator.close();
        return;
      }
      this.$indicator.open({
        text:'加载中',
        // spinnerType:'fading-circle'
        // spinnerType:'snake'
        // spinnerType:'double-bounce'
        spinnerType:'triple-bounce'
      })
      this.busy=true;//防止重复调用loadmore
      let cid = this.active;
      this.page++;
      // 发送http请求
      this.axios.get(`/newsall?cid=${cid}&page=${this.page}`).then(result=>{
        console.log(result);
        this.articles.push(...result.data.results);
        this.busy=false;
        this.$indicator.close();
      })
    }
  },
  created(){
    this.$nextTick(function(){
      var navh = document.querySelector('.gamenewlistbar .van-tabs .van-tabs__wrap')
      navh.style.height = this.navh;
      var navfont = document.querySelector('.gamenewlistbar')
      navfont.style.fontSize = this.navFont
      console.log(navfont.style.fontSize);
    })
  },
  mounted() {
    this.navHeight();
    this.navFon();
    this.imgwidth();
    this.$indicator.open({
        text:'加载中',
        // spinnerType:'fading-circle'
        // spinnerType:'snake'
        // spinnerType:'double-bounce'
        spinnerType:'triple-bounce'
    })
    this.axios.get(`/newsall?cid=${this.active}&page=1`).then(result=>{
        console.log(result);
        this.articles=result.data.results;
        this.count=result.data.pagecount
        this.$indicator.close();
      })
  },
  watch:{
    active(newvalue){
      this.page=1;
      // 将滚动条滚到页面顶部
      window.scrollTo(0,0);
      this.axios.get(`/newsall?cid=${newvalue}&page=1`).then(result=>{
        console.log(result.data.results);
        this.articles=result.data.results;
      });
      this.$store.commit('changetype',this.active)
    }
  },
}

</script>
<style>
.gamenewlistbar{
  width: 95%;
  margin: 0 auto;
  background-color: rgba(14, 97, 170, .6); 
}
.gamenewlistbar .van-tab__pane{
  margin-bottom: 10vh;
}
.gamenewlistbar .tabs{
  background-color: #227FC1;
}
.gamenewlistbar .van-tab{
  background-color: #227FC1;
  color: #fff;
  border-top-right-radius: .5rem;
  border-top-left-radius: .5rem;
  border: 1px solid #114971;
}
.gamenewlistbar .van-tabs{
  position: static;
}
.gamenewlistbar .van-tabs__nav{
  position:relative;
}
.gamenewlistbar .van-tabs__nav{
  background-color: transparent;
}
.gamenewlistbar .van-tab.van-tab--active{
  background-color: rgba(14, 97, 170, .2);
  border-bottom: 0;
}
.gamenewlistbar .van-tabs__line{
  background-color: transparent;
}
.gamenewlistbar .van-tab__pane{
  border: 1px solid #114971;
  border-top: 0;
}
.gamenewlistbar .articleItem {
  margin: 0 10px;
  border-bottom: 1px solid #0C5CA4;
  padding-top: 1vh;
}
.gamenewlistbar .articleItem-wrapper {
  display: flex;
  align-items: center;
}
.gamenewlistbar .articleImg {
  margin-right: 15px;
}
.gamenewlistbar .articleImg img {
  border-radius: 5px;
}
.gamenewlistbar .articleDes {
  /* height: 50px; */
  /* font-size: .24rem; */
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 21px;
  letter-spacing: normal;
  color: #9BCDFF;
}
.gamenewlistbar .articleDes span{
  color: #fff;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.gamenewlistbar .articleDes .time{
  margin: 0;
}
</style>