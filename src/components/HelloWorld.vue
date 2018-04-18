<template>
  <div class="hello">
    <b>欢迎使用互联网行业发展信息平台</b>
    <h4>本平台数据来自拉勾网爬虫，数据仅作为展示与参考使用。</h4>
    <h5>本平台提供十种常见互联网相关职位的数据并使用可视化工具展示，可作为您将来理想工作的参考。</h5>
    <table class="table table-bordered">
      <tr>
        <th>
          职业名称
        </th>
        <th>
          介绍
        </th>
      </tr>
      <tr>
        <td>Python</td>
        <td>一种后端语言</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  template {
  }
b {
  font-weight: normal;
  font-size: 30px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
table {
  position: relative;
  margin-left: 530px;
  width: 500px;
}
table th {
  text-align: center;
}
</style>
