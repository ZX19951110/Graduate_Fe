<template>
  <div id="app">
    <div class="navbar-collapse collapse templatemo-sidebar">
      <div onclick="window.location.href = './'" class="active"><a><i class="fa fa-home"></i>Home</a></div>
      <ul class="templatemo-sidebar-menu" v-bind:key="index" v-for="(job, index) in jobMap">
        <li class="sub">
          <a href="javascript:;">
            <i class="fa fa-database"></i> {{job.name}} <div class="pull-right"><span class="caret"></span></div>
          </a>
          <ul class="templatemo-submenu" >
            <li><router-link :to="{path: '/main', query: {route: job.route}}">全国分布</router-link></li>
          </ul>
        </li>
      </ul>
    </div><!--/.navbar-collapse -->
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App',
  data () {
    return {
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
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
