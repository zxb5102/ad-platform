<template>
  <div class="mainContent">
    <!-- <input type="text" @keyup.enter="onSubmit"> -->
    <div class="top-swiper">
      <!-- <div class="wrap-column"> -->
      <div class="each-column slide-column">
        <swiper :options="swiperOption" ref="mySwiper">
          <!-- slides -->
          <swiper-slide v-for="(banner,dex) in banners" :key="dex">
            <div class="each-slide">
              <div class="wrap-banner">
                <img :src="banner" alt="">
              </div>
            </div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination">
          </div>
        </swiper>
      </div>
      <div class="each-column form-column" v-if="!isLogin">
        <div class="hold-login el-card">
          <el-form ref="form" :model="form" label-width="80px" label-position="top" :rules="rules">
            <el-form-item label="用户名" prop="name">
              <el-input v-model="form.name" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pwd">
              <el-input v-model="form.pwd" placeholder="请输入密码" type="password"  @keyup.enter.native="onSubmit"></el-input>
            </el-form-item>
            <div role="alert" class="el-alert el-alert--error" style="margin-bottom:22px" v-if="hasError">
              <i class="el-alert__icon el-icon-error"></i>
              <div class="el-alert__content">
                <span class="el-alert__title">{{errorMsg}}</span>
              </div>
            </div>
            <el-form-item>
              <div class="wrap-login-button">
                <el-button type="primary" @click="onSubmit">登入</el-button>
              </div>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
    <div class="process">
      <div class="each-item">
        <div class="label">
          <div class="info">计费方式（部分）</div>
          <div class="line">
            <div class="left"></div>
            <div class="right"></div>
          </div>
        </div>
        <div class="content">
          <div class="row">
            <div class="column">
              <div class="left">
                <div class="header">
                  <span>CPA （每行动成本）</span>
                </div>
                <span class="content">CPA （每行动成本，Cost Per Action）计价方式是指按广告投放实际效果，即按规定的要求和单价来推广，而不限广告投放量。CPA广告是网络中最常见的一种广告形式，当用户按规定要求完成这个cpa广告后，站长就会获得相应的收入。</span>
              </div>
              <div class="right">
                <div class="wrap-img">
                  <img src="http://www.visvn.cn/templates/index/def/images/cpm.jpg" alt="">
                </div>
              </div>
            </div>
            <div class="column">
              <div class="left">
                <div class="header">
                  <span>CPS(销售效果付费)</span>
                </div>
                <span class="content">CPS（销售效果付费，Cost per sale）：按照用户最终购买或者消费服务商联盟活动产品的数量或者金额的一定比例进行分成。这种方式最大化保证了广告商的利益，成本可控，当然如果站长同时有好的资源，这种合作方式也是很不错的。</span>
              </div>
              <div class="right">
                <div class="wrap-img">
                  <img src="http://www.visvn.cn/templates/index/def/images/cp1.jpg" alt="">
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="column">
              <div class="left">
                <div class="header">
                  <span>移动插屏广告(移动广告专用)</span>
                </div>
                <span class="content">插屏广告是一种新兴的广告形式，一般在网页中间或全屏形式插入广告，插屏广告采用了自动广告适配和缓存优化技术，用户可自己定义“全屏展示”“半屏展示”，点击率较高。</span>
              </div>
              <div class="right">
                <div class="wrap-img">
                  <img src="http://www.visvn.cn/templates/index/def/images/cp.jpg" alt="">
                </div>
              </div>
            </div>
            <div class="column">
              <div class="left">
                <div class="header">
                  <span>移动通栏广告(移动广告专用)</span>
                </div>
                <span class="content">即横幅广告条，是在一个手机网站的顶部或是底部区域内固定展示广告，点击广告之后会有 跳转到手机网页、下载手机应用。</span>
              </div>
              <div class="right">
                <div class="wrap-img">
                  <img src="http://www.visvn.cn/templates/index/def/images/banner.jpg" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import bus from "@/bus";
// import Vue from 'vue'
// import axios from "axios";
var axios = require("axios");
// Vue.prototype.$http = axios
export default {
  name: "mainContent",
  data() {
    return {
      isLogin: false,
      hasError: false,
      errorMsg: "",
      form: {
        name: "",
        pwd: ""
      },
      rules: {
        name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        pwd: [{ required: true, message: "请输入密码", trigger: "blur" }]
      },
      banners: [
        "http://www.visvn.cn/templates/index/def/images/slider_1.jpg",
        "http://www.visvn.cn/templates/index/def/images/slider_2.jpg",
        "http://www.visvn.cn/templates/index/def/images/slider_3.jpg"
      ],
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        autoplay: true
      }
      //   swiperSlides: [1, 2, 3,]
    };
  },
  created() {
    bus.$on('logOut',()=>{
      this.isLogin = false; 
    });
    axios({
      method: "post",
      url: "/Account/GetInfo"
    }).then(resp => {
      var data = resp.data;
      if (!data.userName) {
        this.isLogin = false;
      } else {
        this.isLogin = true;
      }
    });
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
              this.isLogin = true;
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
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // console.log("this is current swiper instance object", this.swiper);
    this.swiper.slideTo(3, 1000, false);
  }
};
</script>
<style lang="less" scoped>
.top-swiper {
  background-color: #f7f6ef;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  .each-column {
    overflow: hidden;
  }
  .form-column {
    width: 300px;
    overflow: unset;
    margin-left: 20px;
    @media (max-width: 1024px) {
      display: none;
    }
  }
  .slide-column {
    width: 660px;
  }
  .each-slide {
    // height: 340px;
    max-width: 660px;
    margin: auto;
    background-color: gray;
    .wrap-banner {
      font-size: 0px;
      img {
        width: 100%;
      }
    }
  }
  .hold-login {
    // position: absolute;
    // width: 290px;
    // height: 330px;
    background-color: white;
    // right: 20%;
    // top: 10px;
    padding: 10px 20px 10px 20px;
    .form-header {
      padding-left: 24px;
      font-size: 16px;
      color: #785a3a;
      h2 {
        font-weight: bold;
      }
    }
  }
  .wrap-button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0px 10px 0px;
  }
  .wrap-login-button {
    display: flex;
    justify-content: center;
  }
}
.process {
  max-width: 960px;
  margin: auto;
  padding-top: 20px;
  @media (max-width: 1024px) {
    width: 95%;
  }
  .each-item {
    .row {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: auto;
      margin-bottom: 10px;
      @media (max-width: 1024px) {
        display: block;
        margin-bottom: 10px;
      }
    }
    .column:nth-child(1) {
      margin-right: 5px;

      @media (max-width: 1024px) {
        margin: 0px;
        margin-bottom: 10px;
      }
    }
    .column {
      flex: 1;
      // width:458px;
      min-height: 230px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #f7f6ef;
      border: 1px solid #eeeeee;
      .left {
        flex: 2;
        @media (max-width: 1024px) {
          flex: 3;
        }
        padding: 10px;
        .content {
          font-size: 12px;
          color: #777777;
          min-height: 110px;
          display: inline-block;
        }
        .header {
          padding: 10px 0px 10px 10px;
          background-color: #3b84ad;
          color: #fff;
          font-size: 14px;
          margin-bottom: 20px;
          max-width: 80%;
          @media (max-width: 1024px) {
            max-width: 100%;
          }
        }
      }
      .right {
        flex: 1.5;
      }
    }
    .label {
      margin-bottom: 20px;
      .info {
        color: #785a3a;
        font-size: 16px;
        font-weight: bold;
        padding-bottom: 5px;
      }
      .line {
        display: flex;
        align-items: center;
        justify-content: center;
        & > div {
          height: 2px;
        }
        .left {
          flex: 1;
          background-color: red;
        }
        .right {
          flex: 3;
          background-color: gray;
        }
      }
    }
  }
}
</style>


