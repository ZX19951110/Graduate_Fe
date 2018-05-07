<template>
  <div class="hello">
    <br/>
    <p class="h2">欢迎使用互联网行业发展信息平台</p>
    <p class="h4">本平台数据来自拉勾网爬虫，数据仅作为展示与参考使用。</p>
    <br/>
    <p class="h4">本平台提供十种常见互联网相关职位的数据并使用可视化工具展示，可作为您将来理想工作的参考。</p>
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th>
          职业名称
        </th>
        <th>
          介绍
        </th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>Python</td>
        <td>高层次的结合了解释性、编译性、互动性和面向对象的脚本语言</td>
      </tr>
      <tr>
        <td>PHP</td>
        <td>PHP 是一种创建动态交互性站点的强有力的服务器端脚本语言。</td>
      </tr>
      <tr>
        <td>大数据</td>
        <td>从各种各样类型的数据中，快速获得有价值信息的技术</td>
      </tr>
      <tr>
        <td>C++</td>
        <td>C++ 进一步扩充和完善了 C 语言，是一种面向对象的程序设计语言。</td>
      </tr>
      <tr>
        <td>IOS</td>
        <td>在iOS的开发中使用的是Objective C语言，它是一种面向对象的语言，因而对于已经掌握面向对象语言知识的编程者来说是非常简单的。</td>
      </tr>
      <tr>
        <td>Java</td>
        <td>Java语言的语法与C语言和C++语言很接近，使得大多数程序员很容易学习和使用。</td>
      </tr>
      <tr>
        <td>数据挖掘</td>
        <td>数据挖掘通过统计、在线分析处理、情报检索、机器学习、专家系统（依靠过去的经验法则）和模式识别等诸多方法来收集有效数据</td>
      </tr>
      <tr>
        <td>产品经理</td>
        <td>产品经理是企业中专门负责产品管理的职位，产品经理负责市场调查并根据用户的需求，确定开发何种产品，选择何种技术、商业模式等。</td>
      </tr>
      <tr>
        <td>Web</td>
        <td>web前端工程师的职责是制作标准优化的代码，并增加交互动态功能，进行丰富互联网的Web开发，致力于通过技术改善用户体验。</td>
      </tr>
      <tr>
        <td>机器学习</td>
        <td>机器学习是实现人工智能的一个途径，即以机器学习为手段解决人工智能中的问题。</td>
      </tr>
      </tbody>
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
.hello {
    margin-left: 250px;
    height: 300px;
}

table {
  position: relative;
  margin-left: 80px;
  width: 1100px;
  height: 500px
}
table th {
  text-align: center;
  font-size: 18px;
}
table td {
    margin-top: 15px;
}
</style>
