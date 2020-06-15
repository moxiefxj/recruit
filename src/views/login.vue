<template>
    <div id="login">
        <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="100px" class="demo-loginForm">
            <el-row class="title">
              <el-col :span="4" :offset="8">
                <el-link type="primary" :underline="false">登录</el-link>
              </el-col>
              <el-col :span="1" :offset="2">.</el-col>
              
              <el-col :span="4" :offset="2">
                <el-link @click="toRegister()" :underline="false">注册</el-link>
              </el-col>
            </el-row>
            <el-form-item label="邮箱" prop="email">
                <el-input type="email" v-model="loginForm.email" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
                <el-button @click="resetForm('loginForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    data() {
      return {
        loginForm: {
          password: '',
          email:""
        },
        rules: {
          email:[
            { required: true, message: '请输入邮箱地址', trigger: 'blur' },
            { type: 'email', message: '请输入正确的邮箱地址', trigger:  'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur'  }
          ]
        }
      };
    },
    methods: {
      ...mapMutations(['changeLogin']),
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$http.post("/user/login",{
              ...this.loginForm
            }).then( res => {
              if(res.data.success){
                this.$message({
                  message: '登录成功',
                  type: 'success'
                });
                // 存信息 到首页
                this.toUser(res.data)
                
              }else{
                // 登陆错误
                console.log("登陆错误")
              }
              
             
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      toUser:function(data){
        var usertoken = ""
        // data.token = "Bearer " + data.token
        // console.log(usertoken)
        // 储存在vuex
        this.changeLogin(data.token)
        sessionStorage.setItem("name", data.detail.name);
        sessionStorage.setItem("email", data.detail.email);
        sessionStorage.setItem("id", data.detail.id);

        // 跳转首页
        this.$router.replace({
          path:'/'
        })
      },
      toRegister:function(){
        this.$router.push({
          path:'/register'
        })
      }
    }
  }
</script>
<style scoped>
    #login{
        width: 300px;
        height: 300px;
        margin: 20px auto;
        padding-right: 40px;
        padding-top: 40px;
        border-radius: 10px;
        background-color:  #E1F5FE;
    }
    .title{
      margin-bottom: 10px;
    }
</style>