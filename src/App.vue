<template>
  <div id="app">
    <div class="navbar-collapse collapse templatemo-sidebar">
      <ul class="templatemo-sidebar-menu">
        <li class="active"><a href="#"><i class="fa fa-home"></i>Dashboard</a></li>
        <li class="sub open">
          <a href="javascript:;">
            <i class="fa fa-database"></i> Nested Menu <div class="pull-right"><span class="caret"></span></div>
          </a>
          <ul class="templatemo-submenu">
            <li><router-link to="/main">test</router-link>
            <li><a href="#">Pellentesque</a></li>
            <li><a href="#">Congue</a></li>
            <li><a href="#">Interdum</a></li>
            <li><a href="#">Facilisi</a></li>
          </ul>
          <li class="templatemo-submenu"></li>
          <li class="templatemo-submenu"></li>
          <li class="templatemo-submenu"></li>
      </ul>
    </div><!--/.navbar-collapse -->
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App'
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
