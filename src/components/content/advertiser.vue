<template>
    <div class="advertiser">
        <div class="wrap-top-img">
            <img src="../../assets/a1.jpg" alt="">
        </div>
        <div class="main">
            <div class="each-item">
                <div class="label">
                    <div class="header">广告商</div>
                    <div class="line">
                        <div class="left"></div>
                        <div class="right"></div>
                    </div>
                </div>
                <div class="content wrap-content">
                    <div class="top-tip">广告商是广告活动的发布者,是在网上销售或宣传自己产品和服务的商家,是联盟营销广告的提供者。</div>
                    <div class=row>
                        <div class=column>
                            <div class=left>
                                <img src="../../assets/advertiser_01.jpg" alt="">
                            </div>
                            <div class=right>
                                <div class=top>计费模式--覆盖主流计费模式</div>
                                <div class=bottom>
                                    <div class=each-list>CPM (弹窗付费)、CPC (点击付费)、CPV (显示效果付费)、CPS (成功销售付费)、CPA (有效注册付费)</div>
                                    <div class=each-list>多种广告投放方式及计费模式，广站主自由选择，满足投放需求</div>
                                </div>
                            </div>
                        </div>
                        <div class=column>
                            <div class=left>
                                <img src="../../assets/advertiser_02.jpg" alt="">
                            </div>
                            <div class=right>
                                <div class=top>节约成本--开源节流，助力品牌提升</div>
                                <div class=bottom>
                                    <div class=each-list>花费比传统广告低廉数倍的费用，收获比传统广告多数倍的效果！</div>
                                    <div class=each-list>过万的各种类型的网站资源，迅速帮助企业网站提升访问量和品牌知名度；</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class=row>
                        <div class=column>
                            <div class=left>
                                <img src="../../assets/advertiser_03.jpg" alt="">
                            </div>
                            <div class=right>
                                <div class=top>计费模式--覆盖主流计费模式</div>
                                <div class=bottom>
                                    <div class=each-list>按照地域、时间、网站类型、星期等多种定向方式投放广告，实现广告精准投放</div>
                                    <div class=each-list>设置广告对每位用户的展示方式，粒度精确到每天、每小时</div>
                                </div>
                            </div>
                        </div>
                        <div class=column>
                            <div class=left>
                                <img src="../../assets/advertiser_04.jpg" alt="">
                            </div>
                            <div class=right>
                                <div class=top>效果监控--让您值得信赖的联盟</div>
                                <div class=bottom>
                                    <div class=each-list>为您提供广告报告、订单报告、联盟推广合作报告等多种详细数据报告，满足您的监控需求</div>
                                    <div class=each-list>实时数据更新，监控广告效果</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="each-item">
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
            </div>
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


