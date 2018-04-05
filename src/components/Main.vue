<template>
  <div id="Main" style="height: 500px; width: 1200px">
  </div>
</template>
<script>
import Vue from 'vue'
import resource from 'vue-resource'
Vue.use(resource)
export default {
  data () {
    return {
      job: this.$route.query.route
    }
  },
  mounted () {
    this.render()
  },
  watch: {
    '$route' (to, from) {
      this.job = to.query.route
      this.render()
    }
  },
  methods: {
    render: function () {
      var that = this
      var cityList = []
      var jobList = []
      Vue.http.get('http://localhost/' + that.job).then(function (response) {
        for (var city in response.body) {
          cityList.push(city)
          jobList.push(response.body[city]['count'])
          let myChart = that.$echarts.init(document.getElementById('Main'))
          myChart.setOption({
            title: { text: that.job + '相关职业在全国分布' },
            tooltip: {},
            xAxis: {
              data: cityList
            },
            yAxis: {},
            series: [{
              name: '数量',
              type: 'bar',
              data: jobList
            }]
          })
        }
      })
    }
  }
}
</script>
<style scoped>
#Main {
    margin-left:300px;
  }
</style>
