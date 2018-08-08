<template>
  <div class="content">
    <Slide></Slide>
    <div class="newsList">
      <ul>
        <li v-for="(item, index) in dataList" :key="index">
          <a :href="item.id">
            <h2>{{index + 1}}.{{item.title}}</h2>
            <p>{{item.detail}}</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Slide from './Slide'
export default {
  components: {
    Slide
  },
  data () {
    return {
      dataList: []
    }
  },
  mounted () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      let _this = this
      this.$http.get('static/data/index.data').then(res => {
        console.log('index.data', res.data)
        _this.dataList = res.data
      }).catch(req => {
        console.log(req)
      })
    }
  }
}
</script>
