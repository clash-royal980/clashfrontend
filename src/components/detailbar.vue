<template>
  <div class="article">
        <!-- 顶部导航开始 -->
        <header>
            <mt-header title="">
                <router-link slot="left" to="/">
                    <mt-button  icon="back"></mt-button>
                </router-link>
            </mt-header>
        </header>
        <!-- 导航导航结束 -->
        <!-- 正文区域开始 -->
        <div class="question" v-for="(item,index) in list" :key="index">
            <!-- 内容开始 -->
            <div class="question-content">
                <div class="rich-content">
                  <div class="title" :style="{fontSize:tfont}">
                    {{item.hi_title}}
                  </div>
                  <div class="subtime">
                    {{moment.unix(item.hi_time).format('YYYY-MM-DD')}}
                  </div>
                  <div class="content" v-html="item.hi_content">
                    
                  </div>
                </div>
            </div>
            <!-- 内容结束 -->
        </div>
    </div>
</template>
<script>
export default {
  data(){
    return{
      list:{}, //数据详情
      pfont:'14px',
      tfont:'16px',
    }
  },
  methods: {
    pchange(){
      let screenh=window.screen.height
      let swipeh=Math.floor(14*screenh/667)+'px';
      this.pfont=swipeh; 
    },
    tchange(){
      let screenh=window.screen.height
      let swipeh=Math.floor(16*screenh/667)+'px';
      this.tfont=swipeh; 
    }
  },
  updated() {
    var btns = document.querySelectorAll('.article .rich-content p')
    for(var i=0;i<btns.length;i++){
      btns[i].style.fontSize=this.pfont;
    }
  },
  mounted() {
    this.pchange();
    this.tchange();
    let id = this.$route.query.id;
    this.axios.get(`/detail?id=${id}`).then(result=>{
        console.log(result.data.results);
        this.list=result.data.results;
    })
  },
}
</script>
<style>
.article{
  position: relative;
  z-index: 10;
  background-image: url(/img/bg.jpg);
  /* height: 100vh; */
  color: #fff;
}
.article .mint-header{
  background-color: transparent;
}
.article .rich-content{
  background-color: rgba(14, 103, 182, 0.6);
  border: 1px solid #114971;
  border-radius: .5rem;
  margin: 0 10px;
  padding: 0 10px;
  padding-top: 20px;
  margin-bottom: 40px;
}
.article .rich-content p{
  line-height: 1.7;
  /* font-size: 14px; */
}
.article .rich-content img{
  max-width:100%;
}
.article .rich-content .title{
  /* font-size: 16px; */
  line-height: 2rem;
}
.article .rich-content .subtime{
  font-size: .5rem;
}
</style>
