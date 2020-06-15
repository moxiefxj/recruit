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
            <div class="userVerify" v-if="!islogin">
                <el-menu-item class="login" index="/login" >登录</el-menu-item>
            </div>
            <div class="userVerify" v-else>
                <!-- 个人主页 -->
                <el-submenu index="2" class="HomePage">
                    <template slot="title">{{name}}</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                </el-submenu>
            </div> 
        </el-menu>
        

</template>
  <script>
  export default {
      props:['islogin',"name"],
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
    .HomePage{
        margin-right: 30px !important;
    }
</style>

