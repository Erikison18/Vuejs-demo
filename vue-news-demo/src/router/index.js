import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Follow from '../components/Follow.vue'
import Column from '../components/Column.vue'
import UserInfo from '../components/UserInfo.vue'
import Article from '../components/Article'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/follow',
      component: Follow
    },
    {
      path: '/column',
      component: Column
    },
    {
      path: '/userinfo',
      component: UserInfo
    },
    {
      path: '/acticle/:id',
      component: Article
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
