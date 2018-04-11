<template>
  <div id="Main" style="height: 700px; width: 1250px">
  </div>
</template>
<script>
import Vue from 'vue'
import resource from 'vue-resource'
Vue.use(resource)
export default {
  data () {
    return {
      job: this.$route.query.route,
      jobMap: [
        {name: 'Python', route: 'python'},
        {name: 'PHP', route: 'php'},
        {name: '大数据', route: 'big-data'},
        {name: 'C++', route: 'c-plus'},
        {name: 'IOS', route: 'ios'},
        {name: 'JAVA', route: 'java'},
        {name: '数据挖掘', route: 'data-mining'},
        {name: '产品经理', route: 'program-manager'},
        {name: 'Web', route: 'web'},
        {name: '机器学习', route: 'ml'}
      ]
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
      let that = this
      let myChart = that.$echarts.init(document.getElementById('Main'))
      let cityList = []
      let jobList = []
      myChart.showLoading()
      Vue.http.get('http://localhost/main/' + that.job).then(function (response) {
        let job = ''
        myChart.hideLoading()
        for (let city in response.body) {
          cityList.push(city)
          jobList.push(response.body[city]['count'])
        }
        for (let item in that.jobMap) {
          if (that.jobMap[item].route === that.job) {
            job = that.jobMap[item].name
          }
        }
        myChart.setOption({
          title: {
            text: job + '相关职业在全国分布',
            x: 'center'
          },
          tooltip: {},
          xAxis: {
            axisLine: {
              lineStyle: {
                color: 'black',
                width: 1
              }
            },
            axisLabel: {
              interval: 0,
              rotate: 45,
              show: true,
              textStyle: {
                color: '#000',
                fontSize: 12
              }
            },
            data: cityList
          },
          yAxis: {},
          series: [{
            horizon: true,
            name: '数量',
            type: 'bar',
            data: jobList,
            itemStyle: {
              normal: {
                color: '#66ccff'
              }
            },
            label: {
              normal: {
                show: true
              }
            }
          }]
        })
      })
    }
  }
}
</script>
<style scoped>
#Main {
    margin-left:250px;
  }
</style>
