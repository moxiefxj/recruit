<template>
  <div>
    <!-- 搜索 -->
    <el-row class="search">
      <el-col :span="12" :offset="6">
        <el-input placeholder="请输入内容" v-model="search" class="input-with-select">
        <el-button slot="append" icon="el-icon-search">搜索</el-button>
      </el-input>
      </el-col>
      
      
    </el-row>
    <!-- 推荐 -->
    <el-row class="recommend"> 推荐</el-row>
    <!-- 热门职位 -->
    <el-row class="hotposition"> 热门职位</el-row>
    <!-- 热门公司 -->
    <el-row class="hotcompany"> 热门公司</el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search:""
    }
  },
}
</script>

<style>
  .search{
    margin: 20px 0;
  }
  .recommend{
    height: 260px;
    background-color: blueviolet;
  }
  .hotposition{
    height: 300px;
    background-color: cadetblue;
  }
  .hotcompany{
    height: 300px;
    background-color: coral;
  }
</style>