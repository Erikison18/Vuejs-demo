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
      this.$http('/static/data/follow.data').then(res => {
        console.log('follow.data', res.data)
        _this.dataList = res.data
      }).catch(req => {
        console.log(req)
      })
    }
  }
}
</script>
