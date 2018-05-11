<template>
  <div id="salary">
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
      let Echarts = that.$echarts.init(document.getElementById('salary'))
      Echarts.showLoading()
      Vue.http.get('/salary/show?job=' + that.job).then(function (response) {
        Echarts.hideLoading()
        let salaryArr = []
        let cityArr = []
        let job = ''
        for (let i in response.body) {
          cityArr.push(response.body[i].city)
          salaryArr.push(response.body[i].salary)
        }
        for (let i in that.jobMap) {
          if (that.jobMap[i].route === that.job) {
            job = that.jobMap[i].name
          }
        }
        Echarts.setOption({
          title: {
            text: job + '相关职业在全国起薪分布',
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
            data: cityArr
          },
          yAxis: {},
          series: [{
            horizon: true,
            name: '起薪(K)',
            type: 'bar',
            data: salaryArr,
            itemStyle: {
              normal: {
                color: '#666666'
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
  #salary {
    margin-left:250px;
    height: 700px;
    width: 1250px
  }
</style>
