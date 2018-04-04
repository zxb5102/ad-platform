<template>
    <!-- <div class="affiliate">
    </div> -->
        <div class="affiliate">
        <div class="wrap-top-img">
            <img src="../../assets/a2.jpg" alt="">
        </div>
        <div class="main">
            <div class="each-item">
                <div class="label">
                    <div class="header">网站主</div>
                    <div class="line">
                        <div class="left"></div>
                        <div class="right"></div>
                    </div>
                </div>
                <div class="content wrap-content">
                    <div class="top-tip">在自已网站上投放广通过本平台收取佣金。</div>
                    <div class=row>
                        <div class=column>
                            <div class=left>
                                <img src="../../assets/affiliate_01.jpg" alt="">
                            </div>
                            <div class=right>
                                <div class=top>丰富多样的广告形式模式</div>
                                <div class=bottom>
                                    <div class=each-list>弹窗、图片、Flash、富媒体、网摘、对联、主题多种类型的广告形式</div>
                                    <!-- <div class=each-list>多种广告投放方式及计费模式，广站主自由选择，满足投放需求</div> -->
                                </div>
                            </div>
                        </div>
                        <div class=column>
                            <div class=left>
                                <img src="../../assets/affiliate_02.jpg" alt="">
                            </div>
                            <div class=right>
                                <div class=top>便捷广告位的管理</div>
                                <div class=bottom>
                                    <div class=each-list>一个广告位智能轮播广告，后台管理随时增加、删除合适广告</div>
                                    <!-- <div class=each-list>过万的各种类型的网站资源，迅速帮助企业网站提升访问量和品牌知名度；</div> -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class=row>
                        <div class=column>
                            <div class=left>
                                <img src="../../assets/affiliate_03.jpg" alt="">
                            </div>
                            <div class=right>
                                <div class=top>公品、公正放心信誉</div>
                                <div class=bottom>
                                    <div class=each-list>雄厚的资金支持，完善的支付系统，保证你的收入准确，及时到帐</div>
                                    <!-- <div class=each-list>设置广告对每位用户的展示方式，粒度精确到每天、每小时</div> -->
                                </div>
                            </div>
                        </div>
                        <div class=column>
                            <div class=left>
                                <img src="../../assets/affiliate_04.jpg" alt="">
                            </div>
                            <div class=right>
                                <div class=top>成熟、先进的系统</div>
                                <div class=bottom>
                                    <div class=each-list>成熟、先进的系统及商业运作模式，使你操作更简单，赚钱更快</div>
                                    <!-- <div class=each-list>实时数据更新，监控广告效果</div> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div class="each-item">
                <div class="label">
                    <div class="header">投放流程</div>
                    <div class="line">
                        <div class="left"></div>
                        <div class="right"></div>
                    </div>
                </div>
                <div class="img-wrap-05">
                    <img src="../../assets/advertiser_05.jpg" alt="">
                </div>
            </div> -->
        </div>
    </div>
</template>
<script>
export default {};
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
    margin-bottom: 20px;
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
.wrap-content {
  .row {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    @media (max-width: 1024px) {
      display: block;
      margin-bottom: 0px;
    }
    .column {
      display: flex;
      align-content: center;
      justify-content: center;
      //   @media (max-width: 1024px) {
      //     display: block;
      //   }
      .left {
        flex: 1;
        text-align: center;
        font-size: 0px;
        // vertical-align: middle;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          line-height: 0px;
        }
      }
      .right {
        flex: 4;
        .top {
          font-size: 14px;
          font-weight: bold;
          height: 30px;
        }
        .bottom {
          .each-list {
            min-height: 45px;
            padding-left: 15px;
            background-image: url(../../assets/list_03.jpg);
            background-position: left;
            background-position-y: 20%;
            background-repeat: no-repeat;
          }
        }
      }
    }
  }
  .top-tip {
    margin-bottom: 20px;
  }
}
.img-wrap-05 {
  margin-top: 20px;
}
</style>


