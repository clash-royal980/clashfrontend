<template>
    <div class="shopbuy">
        <header>
            <mt-header title="">
                <router-link slot="left" to="/myguess">
                    <mt-button  icon="back"></mt-button>
                </router-link>
            </mt-header>
        </header>
        <div class="shopbox">
            <p>如果您在兑换的过程中遇到问题，请发邮件至(contact@crlcn.com)</p>
            <p>赛季期每周五晚18:00将会更新商城商品，敬请期待！</p>
            <div class="shopinfo">
                <div class="item" v-for="(item,index) of shopinfo" :key="index">
                    <router-link :to="`/shopdetail?id=${item.id}`">
                        <img :src="`${item.sp_pic}`" alt="">
                        <p>{{item.sp_name}}</p>
                        <div class="bominfo">
                            <p><span>已兑换{{item.sp_sum}}</span></p>
                            <p><strong>{{item.sp_price}}皇豆</strong></p>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            shopinfo:[]
        }
    },
    mounted(){
        this.axios.get('allshop').then((results)=>{
            console.log(results);
            this.shopinfo = results.data.result
        })
    }
}
</script>
<style>
.shopbuy .mint-header{
  background-color: transparent;
}
.shopbuy .shopbox{
    width: 95%;
    margin: 0 auto;
    margin-top: 1rem;
    background-color: #093055;
    color: #fff;
    border-radius: 5px;
    font-size: .8rem;
}
.shopbuy .shopbox>p{
    text-align: center;
}
.shopbuy .shopbox a{
    color: #fff;
}
.shopbuy .shopbox .shopinfo{
    margin: 1rem;
    padding-bottom: 2rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.shopbuy .shopbox .shopinfo .item{
    width: 10rem;
    background-color: #0B5BA2;
    border: 1px solid #0B5BA2;
    border-radius: 5px;  
    margin-bottom: 1rem;
}
.shopbuy .shopbox .shopinfo .item img{
    width: 100%;
    height: 8.86rem;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    display: block;
}
.shopbuy .shopbox .shopinfo .item p{
    margin: .5rem;
}
.shopbuy .shopbox .shopinfo .item .bominfo{
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
}
.shopbuy .shopbox .shopinfo .item .bominfo p:first-child span{
    color: #9bcdff;
}
.shopbuy .shopbox .shopinfo .item .bominfo p:last-child strong{
    color: #d7c258;
}
</style>