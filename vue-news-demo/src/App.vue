<style lang="scss">
@import './assets/css/base.css';
@import './assets/css/index.css';
.slide-down-enter-active, .slide-down-leave-active {
  transition: all .4s cubic-bezier(0, 1.2, 1, 0.5);
  opacity: .7;
  transform: translate3d(0, 6em, 0);
}
.slide-down-enter, .slide-down-leave-active {
  opacity: .1;
  transform: translate3d(0, 6em, 0);
}
</style>

<template>
  <div id="app">
    <v-header v-show="headShow2"></v-header>
    <transition name="slide-down">
      <router-view></router-view>
    </transition>
    <v-footer v-show="footShow"></v-footer>
    <Loading v-if="isLoad"></Loading>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import {mapGetters} from 'vuex'

export default {
  name: 'App',
  components: {
    'v-header': Header,
    'v-footer': Footer
  },
  computed: mapGetters([
    'headShow2',
    'isLoad',
    'footShow'
  ]),
  mounted () {
    let path = this.$route.path.substring(1)
    this.headerChange(path)
  },
  watch: {
    $route (to) {
      let path = to.path.substring(1)
      this.headerChange(path)
      this.footerChange(path)
    }
  },
  methods: {
    headerChange (path) {
      if (path === 'userinfo' || path === 'login' || path === 'register' || path.indexOf('acticle') !== -1) {
        this.$store.dispatch('SHOW_HEAD_FAIL')
      } else {
        this.$store.dispatch('SHOW_HEAD_SUCC')
      }
    },
    footerChange (path) {
      if (path.indexOf('acticle') !== -1) {
        this.$store.dispatch('SHOW_FOOT_FAIL')
      } else {
        this.$store.dispatch('SHOW_FOOT_SUCC')
      }
    }
  }
}
</script>
