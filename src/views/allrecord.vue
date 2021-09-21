<template>
    <div class="allrecord">
        <header>
            <mt-header title="">
                <router-link slot="left" to="/myguess">
                    <mt-button  icon="back"></mt-button>
                </router-link>
            </mt-header>
        </header>
        <van-tabs v-model="active">
            <van-tab title="投注记录">
              <div class="ordertitle">
                <span>竞猜时间</span>
                <span>下注电话</span>
                <span>下注结果</span>
                <span>下注皇豆</span>
                <span>竞猜赛事</span>
                <span>皇豆变化</span>
              </div>
              <div v-if="userguess.length!=0">
                <div class="item" v-for="(item,index) of userguess" :key="index">
                  <span>{{item.gd_time}}</span>
                  <span>{{item.gd_phone.slice(0,6)}}<br>{{item.gd_phone.slice(6)}}</span>
                  <span>{{item.gd_detail}}</span>
                  <span>{{item.gd_buy}}</span>
                  <span>{{item.gd_game}}</span>
                  <span>{{item.gd_answer}}</span>
                </div>
              </div>
              <div v-else>
                <h4 style="text-align:center;color:#fff">
                  您暂无下注数据
                </h4>
              </div>
            </van-tab>
            <van-tab title="商城兑换">
              <div class="ordertitle">
                <span>商品图片</span>
                <span>商品名称</span>
                <span>兑换时间</span>
                <span>联系号码</span>
                <span>联系地址</span>
                <span>订单状态</span>
              </div>
              <div v-if="userorder.length!=0">
                <div class="item" v-for="(item,index) of userorder" :key="index">
                  <img :src="`${item.or_pic}`" alt="">
                  <span>{{item.or_shop}}</span>
                  <span>{{item.or_time}}</span>
                  <span>{{item.or_phone.slice(0,6)}}<br>{{item.or_phone.slice(6)}}</span>
                  <span>{{item.or_address}}</span>
                  <span>{{item.or_staus}}</span>
                </div>
              </div>
              <div v-else>
                <h4 style="text-align:center;color:#fff">
                  您暂无订单数据
                </h4>
              </div>
            </van-tab>
        </van-tabs>
    </div>
</template>
<script>
export default {
    data(){
        return{
            active:1,
            userorder:[],
            userguess:[]
        }
    },
    mounted(){
      // console.log(sessionStorage.getItem('userphone'));
      this.axios.get(`/selectorder?phone=${sessionStorage.getItem('userphone')}`).then(results=>{
        console.log(results.data.results);
        this.userorder = results.data.results
      })
      this.axios.get(`/userguess?phone=${sessionStorage.getItem('userphone')}`).then(results=>{
        console.log(results.data.results);
        this.userguess = results.data.results
      })
    }
}
</script>
<style>
.allrecord .mint-header{
  background-color: transparent;
}
.allrecord .mintui{
  font-size: 1rem;
}
.allrecord .tabs{
  background-color: #2383C5;
}
.allrecord .van-tabs--line .van-tabs__wrap{
  height: 2.93rem;
}
.allrecord .van-tab{
  background-color: #2383C5;
  color: #fff;
  border-top-right-radius: .5rem;
  border-top-left-radius: .5rem;
  border: 1px solid #114971;
  font-size: 1rem;
  height: 2.8rem;
}
.allrecord .van-tab__text--ellipsis{
  line-height: 1.1rem;
}
.allrecord .van-tabs{
  position: static;
  width: 90%;
  margin: 0 auto;
}
.allrecord .van-tabs__nav{
  /* position:relative; */
  width: 50%;
}
.allrecord .van-tabs__nav{
  background-color: transparent;
}
.allrecord .van-tab.van-tab--active{
  background-color: #093055;
  border-bottom: 0;
}
.allrecord .van-tabs__line{
  background-color: transparent;
}
.allrecord .van-tab__pane{
  border-top: 0;
  background-color: #093055;
  margin-top: -0.15rem;
}
.allrecord .ordertitle{
  display: flex;
  justify-content: space-between;
  color: #fff;
  font-size: .8rem;
  height: 2rem;
  line-height: 2rem;
  border-bottom: 1px solid #2F5C88;
  flex: 1;
  padding: 0 .5rem;
}
.allrecord  .item{
  display: flex;
  justify-content: space-between;
  padding: .5rem;
  text-align: center;
  align-items: center;
  border-bottom: 1px solid #2F5C88;
}
.allrecord  .item img{
  width: 3.2rem;
  height: 3.2rem;
}
.allrecord  .item span{
  width: 3.2rem;
  /* height: 3.2rem; */
  font-size: .8rem;
  color: #fff;
}
/* .allrecord  .item span:nth-child(3){
  padding-top: .5rem;
}
.allrecord  .item span:nth-child(4){
  padding-top: .5rem;
}
.allrecord  .item span:nth-child(6){
  padding-top: .7rem;
} */

@media screen and (min-width: 280px){
  .allrecord .ordertitle span{
    zoom: .8;
  }
  .allrecord  .item span:nth-child(5){
    zoom: .45;
  }
}
@media screen and (min-width: 320px){
  .allrecord .ordertitle span{
    zoom: .8;
  }
  .allrecord  .item span:nth-child(5){
    zoom: .5;
  }
}
@media screen and (min-width: 360px){
  .allrecord .ordertitle span{
    zoom: 1;
  }
  .allrecord  .item span:nth-child(5){
    zoom: .7;
  }
}
</style>