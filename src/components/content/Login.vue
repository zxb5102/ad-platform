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
        </el-card>
    </div>
</template>
<script>
export default {
  data() {
    return {
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
          if(validate){
          }else{
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


