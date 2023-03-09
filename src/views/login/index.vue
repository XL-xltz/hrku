<template>
  <div class="login-container">
    <el-card class="box-card">
      <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="demo-form-inline">
        <el-form-item label="账号" prop="mobile">
          <el-input v-model="loginForm.mobile" placeholder="请输入账号" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginForm.password" type="password" show-password placeholder="请输入密码"> </el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="onSubmit" type="primary" @click="handleLogin">登录</el-button>
          <el-button class="onSubmit" type="primary" @click="getUserInfo">测试</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { userInfo } from '../../api/user'
export default {
  name: 'login',
  components: {},
  data() {
    return {
      // 登录用户
      loginForm: {
        mobile: '13800000002',
        password: '123456'
      },
      // 校验规则
      loginRules: {
        mobile: [{ required: true, trigger: 'blur', message: '请输入正确的账号' }],
        password: [
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
    ...mapActions(['user/login']),
    handleLogin() {
      this.$refs.loginForm.validate(async valid => {
        if (valid) {
          await this['user/login'](this.loginForm)
          await this.$router.push('/')
        }
      })
    },
    async getUserInfo() {
      const res = await userInfo()
      console.log(res)
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
