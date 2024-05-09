<template>
 <div>
  <el-button>获取随机10道题目</el-button>
  <el-table
    style="width: 100%"
  >
    <el-table-column
      prop="date"
      label="名称"
      >
    </el-table-column>
    
  </el-table>
 </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
</style>
