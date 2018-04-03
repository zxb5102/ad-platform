<template>
    <div class="mainContent">
        <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide v-for="(banner,dex) in banners" :key="dex">
                <div class="each-slide">
                    <div class="wrap-banner">
                        <img :src="banner" alt="">
                    </div>
                </div>
            </swiper-slide>
            <!-- Optional controls -->
            <!-- <div class="swiper-pagination" slot="pagination"></div> -->
            <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
            <!-- <div class="swiper-button-next" slot="button-next"></div> -->
            <div class="swiper-pagination" slot="pagination">
            </div>
            <!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
        </swiper>
    </div>
</template>
<script>
export default {
  name: "mainContent",
  data() {
    return {
      banners: [
        "http://cyy.zhcjjs.com/static/indexTop/big1.jpg",
        "http://cyy.zhcjjs.com/static/indexTop/big2.jpg",
        "http://cyy.zhcjjs.com/static/indexTop/big5.jpg"
      ],
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        }
      }
      //   swiperSlides: [1, 2, 3,]
    };
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
.each-slide {
  height: 400px;
  //   width: 200px;
  margin: auto;
  background-color: gray;
}
.wrap-banner{
    img{
        width: 100%;
    }
}
</style>


