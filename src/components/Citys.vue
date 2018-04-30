<template>
  <div id="main">
    <button class="btn btn-primary" v-on:click="getData('上海')">上海</button>
    <button class="btn btn-dark" v-on:click="getData('北京')">北京</button>
    <button class="btn btn-warning" v-on:click="getData('广州')">广州</button>
    <button class="btn btn-danger" v-on:click="getData('深圳')">深圳</button>
    <button class="btn btn-success" v-on:click="getData('成都')">成都</button>
    <button class="btn btn-dark" v-on:click="getData('武汉')">武汉</button>
    <button class="btn btn-primary" v-on:click="getData('杭州')">杭州</button>
    <button class="btn btn-warning" v-on:click="getData('南京')">南京</button>
    <button class="btn btn-danger" v-on:click="getData('西安')">西安</button>
    <div id="pie" style="height: 700px; width: 1250px"></div>
  </div>
</template>
<script>
import Vue from 'vue'
import resource from 'vue-resource'
Vue.use(resource)
export default {
  data () {
    return {
      city: ''
    }
  },
  mounted () {
    this.getData('上海')
  },
  methods: {
    getData: function (city) {
      let that = this
      that.job = city
      let myChart = that.$echarts.init(document.getElementById('pie'))
      myChart.showLoading()
      let dataList = []
      Vue.http.get('http://localhost/area?area=' + city).then(function (response) {
        for (let i in response.body.content) {
          dataList.push({value: response.body.content[i], name: i})
        }
        myChart.hideLoading()
        myChart.setOption({
          title: {
            text: city + '主要职位百分比(共' + response.body.total + '条)',
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
              data: dataList.sort(function (a, b) { return a.value - b.value }),
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
                  color: '#999',
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
  #main {
    margin-left:250px;
  }
</style>
