<template>
  <div id="Main" style="height: 500px; width: 1200px">
    Hello Main
  </div>
</template>
<script>
import Vue from 'vue'
import resource from 'vue-resource'
Vue.use(resource)
export default {
  data () {
    return {
    }
  },
  mounted () {
    this.test()
  },
  methods: {
    test: function () {
      var that = this
      var cityList = []
      var jobList = []
      Vue.http.get('http://localhost/python').then(function (response) {
        for (var city in response.body) {
          cityList.push(city)
          jobList.push(response.body[city]['count'])
          let myChart = that.$echarts.init(document.getElementById('Main'))
          myChart.setOption({
            title: { text: 'Python相关职业在全国分布' },
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
