<template>
    <div class="about">
        <div class="wrap-top-img">
            <img src="http://www.visvn.cn/templates/index/def/images/contact.jpg" alt="">
        </div>
        <div class="main">
            <div class="each-item">
                <div class="label">
                    <div class="header">关于我们</div>
                    <div class="line">
                        <div class="left"></div>
                        <div class="right"></div>
                    </div>
                </div>
                <div class="content">{{aboutMsg}}</div>
            </div>
        </div>
        <div class="main">
            <div class="each-item">
                <div class="label">
                    <div class="header">联系我们</div>
                    <div class="line">
                        <div class="left"></div>
                        <div class="right"></div>
                    </div>
                </div>
                <div class="content">
                    <div class="list-info">
                        <div class="left">公司名称：</div>
                        <div class="right">中航长江建设工程有限公司</div>
                    </div>
                    <!-- <div class="list-info">
                        <div class="left">公司电话：</div>
                        <div class="right">123456789</div>
                    </div> -->
                    <div class="list-info">
                        <div class="left">公司地址：</div>
                        <div class="right">江西省南昌市青云谱区洪都生活五区长江装饰楼</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import testData from "@/testData";
export default {
  data() {
    return {
      aboutMsg: testData.aboutMsg
    };
  }
};
</script>
<style lang="less" scoped>
* {
  font-size: 12px;
  line-height: 22px;
}
.wrap-top-img {
  font-size: 0px;
  line-height: 0px;
  text-align: center;
  background-color: #d7ddeb;
  @media (max-width: 1024px) {
    display: none;
  }
}
.main {
  width: 960px;
  margin: auto;
  margin-top: 30px;
  @media (max-width: 1024px) {
    max-width: 95%;
  }
  .each-item {
    .content {
      color: #777777;
      margin-top: 20px;
    }
    .label {
      .line {
        display: flex;
        align-items: center;
        justify-content: center;
        & > div {
          height: 2px;
        }
        .left {
          width: 120px;
          background-color: red;
        }
        .right {
          flex: 1;
          background-color: gray;
        }
      }
      .header {
        margin-bottom: 5px;
        font-size: 16px;
        font-weight: bold;
        color: #785a3a;
      }
    }
  }
}
.list-info {
  & > div {
    display: inline-block;
  }
  .left {
  }
  .right {
  }
}
</style>


