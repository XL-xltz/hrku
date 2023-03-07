<template>
  <div class="login-container">
    <el-card class="box-card">
      <el-form :model="loginForm" :rules="loginRules" class="demo-form-inline">
        <el-form-item label="账号" prop="userName">
          <el-input v-model="loginForm.userName" placeholder="请输入账号" />
        </el-form-item>
        <el-form-item label="密码" prop="passWord">
          <el-input v-model="loginForm.passWord" type="password" show-password placeholder="请输入密码"> </el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="onSubmit" type="primary" @click="handleLogin">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      // 登录用户
      loginForm: {
        userName: 'admin',
        passWord: '1234567'
      },
      // 校验规则
      loginRules: {
        userName: [{ required: true, trigger: 'blur', message: '请输入正确的账号' }],
        passWord: [
          { required: true, message: '请输入正确的密码', trigger: 'blur' },
          { min: 3, max: 8, message: '最小3最大5', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {},
  filters: {},
  watch: {},
  created() {},
  methods: {
    handleLogin() {
      console.log(this.loginForm)
    }
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  display: flex;
  justify-content: center;

  .box-card {
    margin-top: 15%;
    width: 500px;
    height: 300px;
    .onSubmit {
      margin-top: 1%;
      width: 100%;
      margin-left: 0px;
    }
    .onPassword {
      width: 100%;
    }
  }
}
</style>
