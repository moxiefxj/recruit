<template>
    <div id="register">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-row class="title">
              <el-col :span="4" :offset="8">
                <el-link @click="toLogin()" :underline="false">登录</el-link>
              </el-col>
              <el-col :span="1" :offset="2">.</el-col>
              
              <el-col :span="4" :offset="2">
                <el-link  type="primary" :underline="false">注册</el-link>
              </el-col>
            </el-row>
            <el-form-item label="邮箱" prop="email">
                <el-input type="email" v-model="ruleForm.email" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item label="手机号" prop="tel">
                <el-input type="email" v-model="ruleForm.tel" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item label="昵称" prop="name">
                <el-input type="text" v-model="ruleForm.name" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item label="地址" prop="address">
                <el-input type="text" v-model="ruleForm.address" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item> 

            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          password: '',
          checkPass: '',
          email:"",
          tel:"",
          name:"",
          address:""
        },
        rules: {
          email:[
            { required: true, message: '请输入邮箱地址', trigger: 'blur' },
            { type: 'email', message: '请输入正确的邮箱地址', trigger:  'blur' }
          ],
          tel:[
            { required: true, message: "请输入手机号", trigger: 'blur' },
            { min: 11, max: 11, message: '请输入正确的手机号', trigger: 'blur' }
          ],
          name:[
            { required: true, message: '请输入昵称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          address:[
            { required: true, message: '请输入地址', trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this.ruleForm)
            this.$http.post("/user/register",{
              ...this.ruleForm
            }).then( res => {
              console.log(res)
            }).catch( res => {
              console.log(res)
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
      toLogin:function(){
        this.$router.push({
          path:"/login"
        })
      }
    }
  }
</script>
<style>
    #register{
        width: 300px;
        height: 480px;
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