<template>
  <div class="guesstopbar">
    <div class="pic">
      <img src="/img/myguess/god.png" alt="">
      <slot></slot>
    </div>
    <div class="guess">
      <img src="/img/gamenews.png" alt="">
      <img src="/img/myguess/guess.png" alt="">
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
  .guesstopbar .pic img{
    width: 98%;
    margin: 0 auto;
    display:block
  }
  .guesstopbar .pic{
    position: relative;
  }
  .guesstopbar .guess{
    position: relative;
  }
  .guesstopbar .guess img{
    width: 100%;
    margin: 0 auto;
    display: block;
  }
  .guesstopbar .guess img:last-child{
    width: 70px;
    display: block;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%,-50%);
  }



/* 媒体查询 */
@media screen and (min-width:280px){  
  .guesstopbar .guess img:last-child{
    width: 50px;
  }
}
@media screen and (min-width:320px){  
  .guesstopbar .guess img:last-child{
    width: 60px;
  }
}
@media screen and (min-width:360px){  
  .guesstopbar .guess img:last-child{
    width: 70px;
  }
}
@media screen and (min-width:540px){  
  .guesstopbar .guess img:last-child{
    width: 90px;
  }
}
@media screen and (min-width:760px){  
  .guesstopbar .guess img:last-child{
    width: 120px;
  }
}
@media screen and (min-width:1000px){  
  .guesstopbar .guess img:last-child{
    width: 150px;
  }
}
</style>