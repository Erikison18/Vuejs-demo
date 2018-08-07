<template>
  <div class="foot-btn">
    <ul>
      <li class="home">
        <a href="javascript:;"></a>
      </li>
      <li class="write">
        <a href="javascript:;"></a>
      </li>
      <li class="my">
        <a href="javascript:;"></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'v-footer'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.foot-btn{
  width: 100%;
  height: 80px;
  background: #fff;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 10;
  border-top: 1px solid #9e9a95;
  ul{
    width: 408px;
    margin: 0 auto;
    li{
      float: left;
    }
    .home{
      width: 44px;
      height: 59px;
      margin-top: 10px;
      background-image: url(../assets/img/home1.png);
      background-size: 100% 100%;
    }
    .write{
      width: 82px;
      height: 81px;
      background-image: url(../assets/img/write.png);
      background-size: 100%;
      margin-left: 118px;
    }
    .my{
      width: 39px;
      height: 63px;
      margin-left: 118px;
      margin-top: 8px;
      background-image: url(../assets/img/my1.png);
      background-size: 100%;
    }
  }
}
</style>
