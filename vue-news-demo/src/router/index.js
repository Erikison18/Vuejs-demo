import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/pages/Home.vue'
import Follow from '../components/pages/Follow.vue'
import Column from '../components/pages/Column.vue'
import UserInfo from '../components/pages/UserInfo.vue'
import Article from '../components/pages/Article'
import Login from '../components/pages/Login.vue'
import Register from '../components/pages/Register.vue'

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
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/acticle:id',
      component: Article
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
