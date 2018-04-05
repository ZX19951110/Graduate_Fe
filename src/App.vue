<template>
  <div id="app">
    <div class="navbar-collapse collapse templatemo-sidebar">
      <ul class="templatemo-sidebar-menu">
        <li class="active"><a href="/"><i class="fa fa-home"></i>Home</a></li>
        <li class="sub open">
          <a href="javascript:;">
            <i class="fa fa-database"></i> Nested Menu <div class="pull-right"><span class="caret"></span></div>
          </a>
          <ul class="templatemo-submenu" >
            <li v-bind:key="index" v-for="(job, index) in jobMap"><router-link :to="{path: '/main', query: {route: job.route}}">{{job.name}}</router-link></li>
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
        {name: '大数据', route: 'big_data'},
        {name: 'C++', route: 'c_plus'},
        {name: 'IOS', route: 'ios'},
        {name: 'JAVA', route: 'java'}
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
