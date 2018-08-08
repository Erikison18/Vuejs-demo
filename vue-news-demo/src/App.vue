<style lang="scss">
@import './assets/css/base.css';
@import './assets/css/index.css';
</style>

<template>
  <div id="app">
    <v-header v-show="headShow2"></v-header>
    <router-view></router-view>
    <v-footer></v-footer>
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
    'headShow2'
  ]),
  mouted () {
    console.log(this.$route)
    let path = this.$route.path.substring(1)
    this.headerChange(path)
  },
  watch: {
    $route (to) {
      console.log(to.path)
      let path = to.path.substring(1)
      this.headerChange(path)
    }
  },
  methods: {
    headerChange (path) {
      if (path === 'userinfo') {
        this.$store.dispatch('SHOW_HEAD_FAIL')
        console.log(999)
      } else {
        this.$store.dispatch('SHOW_HEAD_SUCC')
      }
    }
  }
}
</script>
