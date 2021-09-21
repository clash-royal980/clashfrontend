<template>
    <div class="shopdetail">
        <header>
            <mt-header title="">
                <router-link slot="left" to="/shopbuy">
                    <mt-button  icon="back"></mt-button>
                </router-link>
            </mt-header>
        </header>
        <div class="infobox">
            <img :src="`${shopdetail.sp_pic}`" alt="">
            <p>{{shopdetail.sp_name}}</p>
            <h3>{{shopdetail.sp_price}}皇豆</h3>
        </div>
        <div class="suminfo">
            <p>兑换数量 剩余:{{shopdetail.sp_other}}</p>
            <h4 v-show="shopdetail.sp_other==0">不可兑换</h4>
        </div>
        <div class="btnhuan">
            <div class="info">{{shopdetail.sp_info}}</div>
            <div class="surebuy">
                <p>需消耗{{shopdetail.sp_price}}皇豆</p>
                <img src="/img/buy.png" alt="" @click="changeshow">
            </div>
        </div>
    <van-popup v-model="show">
      <div class="box">
        <div class="title">
          <h3>请输入收货信息</h3>
          <span @click="hideshow"></span>
        </div>
        <div class="content">
            <div class="item">
                <p>地区:</p>
                <van-address-edit :area-list="areaList" :area-columns-placeholder="['请选择', '请选择', '请选择']" :search-result="searchResult"/>
            </div>
            <div class="item">
                <p>详细地址:</p>
                <input type="text" placeholder="请输入详细地址" v-model="address">
            </div>
            <div class="item">
                <p>姓名:</p>
                <input type="text" placeholder="请输入姓名" v-model="name">
            </div>
            <div class="item">
                <p>手机号码:</p>
                <input type="text" placeholder="请输入手机号码" v-model="phone">
            </div>
            <div class="item">
                <p>备注:</p>
                <input type="text" placeholder="请留言选择的款式/号码" v-model="say">
            </div>
        </div>
        <div class="bobtn" @click="submit"><span>确认</span></div>
      </div>
    </van-popup>
    </div>
</template>
<script>
import areaList from '../assets/js/areaList.js'
export default {
    data(){
        return{
            shopdetail:{},
            show:false,
            areaList,
            searchResult:[],
            userinfo:{},
            address:'',
            name:'',
            phone:'',
            say:''
        }
    },
    created(){
        this.$nextTick(()=>{
            
        })
    },
    methods:{
        changeshow(){
          if(this.shopdetail.sp_other==0){
            this.$toast('数量为0,不可兑换');
            return;
          }
          if(this.userinfo.goldmoney<this.shopdetail.sp_price){
            this.$toast('亲,您的皇豆不够哟');
            return;
          }
            this.show=true
            let timer = setTimeout(function(){
            let zindex = document.querySelector('.van-overlay')
            let zindex2 = document.querySelector('.van-popup')
            zindex.style.zIndex=`90`;
            zindex2.style.zIndex=`100`;
            let btn = document.querySelector('.van-address-edit .van-address-edit__buttons');
            let xm = document.querySelector('.van-address-edit .van-cell:first-child');
            let dh = document.querySelector('.van-address-edit .van-cell:nth-child(2)')
            let last = document.querySelector('.van-address-edit .van-cell:nth-child(4)')
            btn.remove();
            xm.remove();
            dh.remove();
            last.remove();
            let all = document.querySelector('.van-address-edit');
            all.style.padding=`0`
            let dqpadding = document.querySelector('.van-address-edit .van-cell--clickable')
            dqpadding.style.padding=`0`;
            let dqspan = document.querySelector('.van-address-edit .van-cell__title.van-field__label');
            dqspan.remove();
            let dqinput=document.querySelector('.van-address-edit .van-field__control');
            dqinput.style.padding=`0`;
            let body = document.querySelector('.van-address-edit .van-field__right-icon');
            body.style.backgroundColor=`#B6C9D9`
            dqinput.style.height=`2rem`
            body.style.height=`2rem`
            let before = document.querySelector('.van-address-edit .van-icon-arrow');
            before.style.fontSize=`1rem`
            before.style.lineHeight=`2rem`
            let inputclass = document.querySelector('.van-address-edit .van-field__body input');
            inputclass.classList.remove('van-field__control');
            let display = document.querySelector('.van-picker-column')
            display.style.overflow=`hidden`;
            },0)
        },
        hideshow(){
            this.show=false
        },
        submit(){
          let time = new Date();
          time=time.getMonth() + 1+'-'+time.getDate()+' '+time.getHours()+':'+time.getMinutes();
          let inputclass = document.querySelector('.van-address-edit .van-field__body input');
          if(!inputclass.value){
            this.$toast('请选择地区');
            inputclass.value = '';
            return;
          }
          if(!this.address){
            this.$toast('详细地址不能为空');
            this.address = '';
            return;
          }
          if(!/^[\u4e00-\u9fa5]{2,4}$/.test(this.name)){
            this.$toast('请输入正确的姓名');
            this.name = '';
            return;
          }
          if(this.phone!=sessionStorage.getItem('userphone')){
            this.$toast('与登录时的手机号不一致');
            this.phone = '';
            return;
          }
          this.axios.post('userorder',`or_shop=${this.shopdetail.sp_name}&or_pic=${this.shopdetail.sp_pic}&or_name=${this.name}&or_address=${inputclass.value.split('/').join('')}${this.address}&or_sap=${this.say}&or_time=${time}&or_phone=${this.phone}&or_price=${this.shopdetail.sp_price}`).then(()=>{
            this.$toast('购买成功');
            this.$router.push(`/shopbuy`)
          })
        }
    },
    mounted(){
        let shopid = this.$route.query.id
        console.log(shopid);
        this.axios.get(`/selectshop?id=${shopid}`).then(result=>{
            console.log(result.data.result[0]);
            this.shopdetail=result.data.result[0]
            // this.show=false
        })
        this.axios.get(`selectuser?phone=${this.$store.state.userphone}`).then(result=>{
          this.userinfo = result.data.result[0]
        })
    }
}
</script>
<style>
.shopdetail .mint-header{
  
  background-color: transparent;
}
.shopdetail ::-webkit-input-placeholder{
  font-size: 1rem;
}
.shopdetail .infobox{
    width: 90%;
    margin: 0 auto;
    border:1px solid black;
    border-radius: 5px;
    background-color: rgba(18,100,166,.7);
}
.shopdetail .infobox img{
    width: 100%;
    display: block;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}
.shopdetail .infobox p{
    color: #fff;
    font-size: 1rem;
    margin: 1rem;
}
.shopdetail .infobox h3{
    text-align: right;
    color: #d7c258;
    margin: 1rem;
}
.shopdetail .suminfo{
    width: 90%;
    margin: 1rem auto;
    border:1px solid black;
    border-radius: 5px;
    background-color: rgba(18,100,166,.7);
    clear: both;
}
.shopdetail .suminfo p{
    color: #fff;
    margin-left: 1rem;
    padding: .5rem 0;
    display: inline;
}
.shopdetail .suminfo h4{
    display: inline;
    color: #f00;
    float: right;
    margin-right: 1rem;
}
.shopdetail .btnhuan{
    width: 90%;
    margin: 1rem auto;
    border:1px solid black;
    border-radius: 5px;
    background-color: rgba(18,100,166,.7);
    clear: both;
    border-bottom: 0;
}
.shopdetail .btnhuan .info{
    color: #fff;
    text-indent: 2rem;
    margin: 1rem 1rem;
}
.shopdetail .btnhuan .surebuy{
    background-color: #0F4B81;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border-bottom: 1px solid #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.shopdetail .btnhuan .surebuy p{
    color: #fff;
    margin-left: 1rem;
    padding: .8rem 0;
}
.shopdetail .btnhuan img{
    width: 4.66rem;
    height: 1.93rem;
    display: block;
    margin-right: 1rem;
}
.shopdetail .van-popup{
  background-color: transparent;
}
.shopdetail .box{
  width: 20rem;
  background-color: #636A7C;
  border-radius: 1rem;
  margin-bottom: 1rem;
}
.shopdetail .box .title{
  height: 3rem;
  background-color: #4B5161;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  text-align: center;
  line-height: 3rem;
  position: relative;
}
.shopdetail .box .title h3{
  color: #fff;
}
.shopdetail .box .title span{
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 40px;
  height: 40px;
  background-image: url(/img/login.png);
  background-position: -185px -10px;
  zoom: .5;
}
.shopdetail .box .content{
  width: 90%;
  margin: 0 auto;
  background-color: #EAF4FF;
  margin-top: 1rem;
  border-radius: 5px;
  font-size: .8rem;
  color: #000;
}
.shopdetail .box .content .item:first-child{
    padding-top: 1rem;
}
.shopdetail .box .content .item{
    padding-bottom: .5rem;
    padding-left: 1rem;
}
.shopdetail .box .content .item input{
    border-radius: 2px;
    outline: none;
    border:0;
    width: 90%;
    background-color: #B6C9D9;
    padding: .3rem;
    display: block;
}
.shopdetail .box .bobtn{
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
.shopdetail .box .bobtn span{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-40%,-50%);
}
.van-popup--bottom{
  height: 50vh;
  font-size: 1rem;
}
.van-picker__cancel,.van-picker__confirm{
  font-size: 1rem !important;
}
.van-ellipsis{
  font-size: 1rem;
}
/* .van-picker-column{
  height: 40vh;
} */
@media screen and (min-width:280px){  
  .shopdetail .box .title span{
    zoom: .5;
  }
  .shopdetail .box .bobtn{
     zoom: .5; 
  }
}
@media screen and (min-width:320px){  
  
}
@media screen and (min-width:360px){  
  .shopdetail .box .title span{
    zoom: .55;
  }
  .shopdetail .box .bobtn{
     zoom: .55; 
  }
}
@media screen and (min-width:410px){  
  .shopdetail .box .title span{
    zoom: .65;
  }
  .shopdetail .box .bobtn{
     zoom: .65; 
  }
}
@media screen and (min-width:540px){  
  .shopdetail .box .title span{
    zoom: .75;
  }
  .shopdetail .box .bobtn{
     zoom: .75; 
  }
}
@media screen and (min-width:760px){  
  .shopdetail .box .title span{
    zoom: .9;
  }
  .shopdetail .box .bobtn{
     zoom: .9; 
  }
  .shopdetail .box .bobtn span{
      font-size: .8rem;
  }
}
@media screen and (min-width:1000px){  
  .shopdetail .box .title span{
    zoom: 1;
  }
  .shopdetail .box .bobtn{
     zoom: 1.2; 
  }
}
</style>