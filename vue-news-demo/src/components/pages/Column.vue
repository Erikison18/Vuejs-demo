<style>
.content.mt70{
  margin-top: 70px;
}
</style>

<template>
  <div class="content mt70">
    <div class="newsList">
      <ul>
        <li v-for="(item, index) in dataList" :key="index">
          <a :href="item.time">
            <h2>{{index + 1}}.{{item.title}}</h2>
            <p v-html="item.content"></p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
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
      this.$http('/static/data/article.data').then(res => {
        console.log('article.data', res.data)
        _this.dataList = res.data
      }).catch(req => {
        console.log(req)
      })
    }
  }
}
</script>
