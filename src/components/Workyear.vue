<template>
  <div id="workyear"></div>
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
  watch: {
    '$route' (to, from) {
      this.job = to.query.route
      this.render()
    }
  },
  mounted () {
    this.render()
  },
  methods: {
    render: function () {
      let that = this
      let myChart = that.$echarts.init(document.getElementById('workyear'))
      myChart.showLoading()
      Vue.http.get('http://localhost/work/workyear?job=' + that.job).then(function (response) {
        let resList = []
        let job = ''
        for (let i in response.body.content) {
          resList.push({value: response.body.content[i], name: i})
        }
        for (let i in that.jobMap) {
          if (that.jobMap[i].route === that.job) {
            job = that.jobMap[i].name
          }
        }
        myChart.hideLoading()
        myChart.setOption({
          title: {
            text: job + '主要职位百分比(共' + response.body.count + '条)',
            left: 'center',
            top: 20,
            textStyle: {
              color: '#000'
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          series: [
            {
              name: '职位',
              type: 'pie',
              radius: '55%',
              center: ['50%', '50%'],
              data: resList.sort(function (a, b) { return a.value - b.value }),
              roseType: 'radius',
              label: {
                normal: {
                  textStyle: {
                    color: 'rgba(0, 0, 0, 0.3)'
                  }
                }
              },
              labelLine: {
                normal: {
                  lineStyle: {
                    color: 'rgba(0, 0, 0, 0.3)'
                  },
                  smooth: 0.2,
                  length: 10,
                  length2: 20
                }
              },
              itemStyle: {
                normal: {
                  color: '#966',
                  shadowBlur: 150,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              },

              animationType: 'scale',
              animationEasing: 'elasticOut',
              animationDelay: function (idx) {
                return Math.random() * 200
              }
            }
          ]
        })
      })
    }
  }
}
</script>
<style scoped>
  #workyear {
    margin-left:250px;
    height: 700px;
    width: 1250px
  }
</style>
