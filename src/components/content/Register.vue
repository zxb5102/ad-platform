<template>
  <div class="register">
    <el-card>
      <el-form ref="form" :model="form" label-width="100px" :rules="rules" v-if="!isSuccess">
        <el-form-item label="用户名称" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pwd">
          <el-input v-model="form.pwd" type="password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="pwd2">
          <el-input v-model="form.pwd2" type="password"></el-input>
        </el-form-item>
        <el-form-item label="QQ" prop="qq">
          <el-input v-model="form.qq"></el-input>
        </el-form-item>
        <el-form-item label="收款银行" prop="bank">
          <el-select v-model="form.bank" placeholder="请选择">
            <el-option v-for="item in banks" :key="item.id" :label="item.name" :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="开户地分行" prop="detailBank">
          <el-input v-model="form.detailBank"></el-input>
        </el-form-item>
        <el-form-item label="收款姓名" prop="bankAccountName">
          <el-input v-model="form.bankAccountName"></el-input>
        </el-form-item>
        <el-form-item label="收款账号" prop="bankAccountId">
          <el-input v-model="form.bankAccountId" @keyup.enter.native="onSubmit"></el-input>
        </el-form-item>
        <el-form-item>
          <div class="wrap-button">
            <el-button type="primary" @click="onSubmit">注册</el-button>
          </div>
        </el-form-item>
        <div role="alert" class="el-alert el-alert--error" style="margin-bottom:22px" v-if="hasError">
          <i class="el-alert__icon el-icon-error"></i>
          <div class="el-alert__content">
            <span class="el-alert__title">{{errorMsg}}</span>
          </div>
        </div>
        <!-- <div class="wrap-protocol" style="display:none">{{protocol}}</div> -->
      </el-form>
      <div v-if="isSuccess" style="text-align:center">
        <svg t="1524018929317" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1047" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200">
          <path d="M512.564498 13.54796c-276.60419 0-500.710033 224.105843-500.710033 500.710033s224.105843 500.710033 500.710033 500.710033 500.145535-224.105843 500.145535-500.710033S788.60419 13.54796 512.564498 13.54796zM789.168688 447.647189C632.802646 536.837927 476.436604 790.297685 476.436604 790.297685c-134.350606-164.269019-241.040794-197.574421-241.040794-197.574421l134.350606-77.900772c63.223815 60.401323 106.690187 103.867696 106.690187 103.867696 176.123484-336.441014 312.732084-379.907387 312.732084-379.907387L789.168688 447.647189z" p-id="1048" fill="#0ec469"></path>
        </svg>
        <p>注册成功</p>
      </div>
    </el-card>
  </div>
</template>
<script>
import axios from "axios";
import testData from "@/testData";
export default {
  data() {
    var checkPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else {
        if (this.form.pwd !== value) {
          callback(new Error("两次输入的密码不一致"));
        }
        callback();
      }
    };
    function validateName(rule, value, callback) {
      var reg = /[\u4E00-\u9FA5\uF900-\uFA2D]/;
      value = value.trim();
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else if (reg.test(value)) {
        callback(new Error("用户名不能含有中文"));
      } else {
        // if (this.ruleForm2.checkPass !== "") {
        //   this.$refs.ruleForm2.validateField("checkPass");
        // }
        callback();
      }
    }
    // function  => {
    //     if (value === '') {
    //       callback(new Error('请输入密码'));
    //     } else {
    //       if (this.ruleForm2.checkPass !== '') {
    //         this.$refs.ruleForm2.validateField('checkPass');
    //       }
    //       callback();
    //     }
    //   };
    return {
      isSuccess: false,
      hasError: false,
      errorMsg: "",
      protocol: testData.protocol,
      banks: [],
      form: {
        name: "",
        pwd: "",
        pwd2: "",
        email: "",
        bank: "",
        detailBank: "",
        qq: "",
        bankAccountName: "",
        bankAccountId: ""
      },
      rules: {
        detailBank: [
          {
            required: true,
            message: "请填写开户地分行"
          }
        ],
        qq: [
          {
            required: true,
            message: "请输入联系qq"
          }
        ],
        name: [
          {
            required: true,
            message: "请输入用户名"
          },
          { validator: validateName, trigger: "blur" }
        ],
        pwd: [
          {
            required: true,
            message: "请输入密码"
          },
          { min: 6, message: "密码至少需要6个字符", trigger: "blur" }
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
  created() {
    axios({
      url: "/Account/ListBank"
    }).then(resp => {
      this.banks = resp.data;
    });
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          axios({
            url: "/Account/Register",
            method: "post",
            data: {
              UserName: this.form.name,
              Password: this.form.pwd,
              QQ: this.form.qq,
              PayMethod: this.form.bank,
              PayUserName: this.form.bankAccountName,
              PayBank: this.form.detailBank,
              PayAccount: this.form.bankAccountId
            }
          }).then(resp => {
            var data = resp.data;
            if (data.code == 0) {
              this.errorMsg = "";
              this.hasError = false;
              this.isSuccess = true;
              //success
            } else {
              this.errorMsg = data.msg;
              this.hasError = true;
              // this.form.pwd = "";
              // this.$refs.form.validate(validate => {
              //   return false;
              // });
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


