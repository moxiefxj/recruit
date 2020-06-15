<template>
  <div id="app">
    <el-container>
      <!-- 导航栏 -->
    <el-header>
      <nav-com></nav-com>
    </el-header>
    <!-- 主体 -->
    <el-main>
      <router-view/>
    </el-main>
    <!-- 底部 -->
    <el-footer class="footer">
      <footer-com></footer-com>
    </el-footer>
  </el-container>
  </div>
    
</template>

<script>
import navCom from './components/navCom'
import footerCom from './components/footerCom';
export default {
  components:{
    navCom,
    footerCom
  }
}
</script>

<style>
  #app{

    background-color: aquamarine;
  }
  .el-header,.el-footer{
      padding: 0 !important;
  }
  .el-main{
    padding: 0 !important;
  }

</style>
