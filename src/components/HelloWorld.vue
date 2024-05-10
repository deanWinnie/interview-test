<template>
 <div>
  <el-button type="primary" @click="getTen(false)">获取随机8道题目</el-button>
  <el-button  @click="getTen(true)">清空</el-button>
  <div style="margin-top: 20px;">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="HTML">
      <el-input type="number" v-model="formInline.html" style="width: 100px;"></el-input>
    </el-form-item>
    <el-form-item label="JS">
      <el-input type="number" v-model="formInline.js" style="width: 100px;" ></el-input>
    </el-form-item>
    <el-form-item label="CSS">
      <el-input type="number" v-model="formInline.css" style="width: 100px;"></el-input>
    </el-form-item>
    <el-form-item label="手写">
      <el-input type="number" v-model="formInline.hands" style="width: 100px;"></el-input>
    </el-form-item>
    <el-form-item label="Vue">
      <el-input type="number" v-model="formInline.vue" style="width: 100px;"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">条件获取题目</el-button>
    </el-form-item>
  </el-form>
  </div>
  <el-table
    style="width: 100%"
    :data="dataList"
  >
    <el-table-column
      prop="name"
      label="名称"
      >
    </el-table-column>
    
  </el-table>
 </div>
</template>

<script>
import {dataForCss,dataForJs,dataForHTML,dataForhands,dataForVue} from './../until/dataInfo.js'
import {randomNumber} from './../until/globelFun.js'
export default {
  name: 'HelloWorld',
  props: {
    
  },
  data(){
    return{
      formInline:{
        html:null,
        js:null,
        vue:null,
        hands:null,
        css:null
      },
      dataList:[]
    }
  },
  methods:{
    //随机获取8个题目
    getTen(bol){
      this.dataList = []
      if(bol){
        return
      }
      const arrAll = [
        ...dataForCss,
        ...dataForHTML,
        ...dataForJs,
        ...dataForVue,
        ...dataForhands
      ] 
      const indexArray = randomNumber(arrAll,8)
      indexArray.forEach(key=>{
        this.dataList.push({name:arrAll[key]})
      })
    },
    onSubmit(){
      this.dataList = []
      const cssIndex = randomNumber(dataForCss,this.formInline.css?this.formInline.css:0)
      const htmlIndex = randomNumber(dataForHTML,this.formInline.html?this.formInline.html:0)
      const vueIndex = randomNumber(dataForVue,this.formInline.vue?this.formInline.vue:0)
      const jsIndex = randomNumber(dataForJs,this.formInline.js?this.formInline.js:0)
      const handsIndex = randomNumber(dataForhands,this.formInline.hands?this.formInline.hands:0)
      htmlIndex.forEach(key=>{
        this.dataList.push({name:dataForHTML[key]})
      })
      cssIndex.forEach(key=>{
        this.dataList.push({name:dataForCss[key]})
      })
      jsIndex.forEach(key=>{
        this.dataList.push({name:dataForJs[key]})
      })
      handsIndex.forEach(key=>{
        this.dataList.push({name:dataForhands[key]})
      })
      vueIndex.forEach(key=>{
        this.dataList.push({name:dataForVue[key]})
      })
    }
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
