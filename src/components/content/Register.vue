<template>
    <div class="register">
        <el-card>
            <el-form ref="form" :model="form" label-width="80px" :rules="rules">
                <el-form-item label="用户名称" prop="name">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pwd">
                    <el-input v-model="form.pwd" type="password"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="pwd2">
                    <el-input v-model="form.pwd2" type="password"></el-input>
                </el-form-item>
                <el-form-item label="Email" prop="email">
                    <el-input v-model="form.email"></el-input>
                </el-form-item>
                <el-form-item label="收款银行" prop="bank">
                    <el-select v-model="form.bank" placeholder="请选择">
                        <el-option v-for="item in banks" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="收款姓名" prop="bankAccountName">
                    <el-input v-model="form.bankAccountName"></el-input>
                </el-form-item>
                <el-form-item label="收款账号" prop="bankAccountId">
                    <el-input v-model="form.bankAccountId"></el-input>
                </el-form-item>
                <el-form-item>
                    <div class="wrap-button">
                        <el-button type="primary" @click="onSubmit">同意下面的服务条款并注册</el-button>
                    </div>
                </el-form-item>
                <div class="wrap-protocol">{{protocol}}</div>
            </el-form>
        </el-card>
    </div>
</template>
<script>
import testData from "@/testData";
export default {
  data() {
    var checkPass = (rule, value, callback) => {
      console.log(value);
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else {
        if (this.form.pwd !== value) {
          callback(new Error("两次输入的密码不一致"));
        }
        callback();
      }
    };
    return {
      protocol: testData.protocol,
      banks: [
        {
          label: "支付宝",
          value: "1"
        },
        {
          label: "工商银行",
          value: "2"
        },
        {
          label: "建设银行",
          value: "3"
        }
      ],
      form: {
        name: "",
        pwd: "",
        pwd2: "",
        email: "",
        bank: "",
        bankAccountName: "",
        bankAccountId: ""
      },
      rules: {
        name: [
          {
            required: true,
            message: "请输入用户名"
          }
        ],
        pwd: [
          {
            required: true,
            message: "请输入密码"
          }
        ],
        pwd2: [
          {
            required: true,
            message: "请确认密码"
          },
          {
            validator: checkPass,
            trigger: "blur"
          }
        ],
        email: [
          {
            required: true,
            message: "请输入email"
          },
          {
            type: "email",
            message: "请输入有效的email"
          }
        ],
        bank: [
          {
            required: true,
            message: "请选择收款银行"
          }
        ],
        bankAccountName: [
          {
            required: true,
            message: "请输入收款人姓名"
          }
        ],
        bankAccountId: [
          {
            required: true,
            message: "请输入收款人的账号"
          }
        ]
      }
    };
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
        } else {
          return false;
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.register {
  max-width: 700px;
  margin: auto;
  margin-top: 50px;
  @media (max-width: 1024px) {
    max-width: 95%;
    margin-top: 30px;
  }
}
.wrap-button {
  display: flex;
  justify-content: center;
  transform: translateX(-40px);
}
.wrap-protocol {
  height: 150px;
  overflow-y: scroll;
  background-color: #fafafa;
  border: 1px solid #cccccc;
  margin-bottom: 22px;
  font-size: 14px;
  padding: 5px;
}
</style>


