<template>
        <el-menu :default-active="this.$route.path"
            class="el-menu-demo nav"
            mode="horizontal"
            background-color="#FFCC80"
            text-color="#606266"
            active-text-color="#00796B"
            router> 
            <el-menu-item class="title">招聘</el-menu-item>
            
            <el-menu-item index="/">首页</el-menu-item>
            <el-menu-item index="/position">职位</el-menu-item>
            <el-menu-item index="/company">公司</el-menu-item>
            <div class="userVerify">
                <el-menu-item class="login" index="/login" >登录</el-menu-item>
            </div>
            
            
        </el-menu>
        

</template>
  <script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
    }
  }
</script>

<style>
    .nav{
        
    }
    .title{
        padding: 0 46px !important;
    }
    .userVerify{
        display: flex;
        justify-content: flex-end;
    }
    .login{
        float: right;
    }
    .register{
        float: right;
    }
</style>

