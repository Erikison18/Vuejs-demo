<style lang="scss" scoped>
.nav {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: #fff;
  ul {
    width: 438px;
    height: 60px;
    margin: 0 auto;
    li {
      float: left;
      a {
        display: block;
        width: 146px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        font-size: 0.3rem;
        color: #9e9a95;
      }
    }
    .active a {
      height: 50px;
      border-bottom: 10px solid #5477b2;
      color: #5477b2;
    }
  }
}
</style>

<template>
  <div class="nav">
    <ul>
      <router-link tag="li" to="/home" active-class="active"><a href="javascripts:;">首页</a></router-link>
      <router-link tag="li" to="/follow" active-class="active"><a href="javascripts:;">关注</a></router-link>
      <router-link tag="li" to="/column" active-class="active"><a href="javascripts:;">栏目</a></router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'v-header'
}
</script>
