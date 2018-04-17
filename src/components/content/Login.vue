<template>
  <div class="login">
    <el-card>
      <el-form ref="form" :model="form" label-width="80px" :rules="rules">
        <el-form-item label="用户名" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pwd">
          <el-input v-model="form.pwd"></el-input>
        </el-form-item>
        <el-form-item>
          <div class="wrap-button">
            <el-button type="primary" @click="onSubmit">登入</el-button>
          </div>
        </el-form-item>
      </el-form>
      <div role="alert" class="el-alert el-alert--error" style="margin-bottom:22px" v-if="hasError">
        <i class="el-alert__icon el-icon-error"></i>
        <div class="el-alert__content">
          <span class="el-alert__title">{{errorMsg}}</span>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
import axios from "axios";
import bus from "@/bus";
export default {
  data() {
    return {
      hasError: false,
      errorMsg: "",
      form: {
        pwd: "",
        name: ""
      },
      rules: {
        name: [{ required: true, message: "请输入用户名" }],
        pwd: [{ required: true, message: "请输入密码" }]
      }
    };
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(validate => {
        if (validate) {
          axios({
            method: "post",
            url: "/Account/Login",
            data: {
              UserName: this.form.name,
              Password: this.form.pwd
            }
          }).then(resp => {
            var data = resp.data;
            if (data.code == 0) {
              this.errorMsg = "";
              this.hasError = false;
              window.location.href = "/static/backstage.html";
            } else {
              this.errorMsg = data.msg;
              this.hasError = true;
              this.form.pwd = "";
              this.$refs.form.validate(validate => {
                return false;
              });
            }
          });
        } else {
          return false;
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.login {
  max-width: 700px;
  margin: auto;
  margin-top: 50px;
  @media (max-width: 1024px) {
    max-width: 95%;
    margin-top: 50px;
  }
}
.wrap-button {
  display: flex;
  justify-content: center;
  transform: translateX(-40px);
}
</style>


