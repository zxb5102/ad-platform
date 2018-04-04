<template>
    <nav class="navbar is-fixed-top is-black">
        <div class="container">
            <div class="navbar-brand">
                <a class="navbar-item" href="#">
                    <img src="../assets/logo-small.png" class="logo"/>
                </a>
                <!-- <el-menu class="el-menu-demo" mode="horizontal" background-color="black">
                    <el-menu-item index="1">处理中心</el-menu-item>
                    <el-menu-item index="2">处理中心</el-menu-item>
                </el-menu> -->
                <router-link tag="span" to=main class="nav-span">
                    <a class="navbar-item t-item" href="#" name="main">
                        <span style="color:white">首页</span>
                    </a>
                </router-link>
                <router-link tag="span" to=about class=nav-span>
                    <a class="navbar-item t-item" href="#" name="about">
                        <span style="color:white">
                            关于我们
                        </span>
                    </a>
                </router-link>
                <div class="navbar-burger" data-target="navMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div id="navMenu" class="navbar-menu" @click="closeMenu">
                <div class="navbar-start" >
                    <router-link tag="span" to=advertiser class=nav-span >
                        <a class="navbar-item t-item drop-down-a t-flag" href="#" name="advertiser" >
                            广告商
                        </a>
                    </router-link>
                    <router-link tag="span" to=affiliate class="nav-span" >
                        <a class="navbar-item t-item drop-down-a t-flag" href="#" name=affiliate>
                            网站主
                        </a>
                    </router-link>
                </div>
                <div class="navbar-end">
                    <div class="navbar-item">
                        <el-button type="text" >
                            <router-link tag="span" to="login" class="t-flag">登入</router-link>
                        </el-button>
                        <el-button type="text" to="register">
                            <router-link tag="span" to="register" class="t-flag">注册</router-link>
                        </el-button>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
import bus from "@/bus";
export default {
  name: "pageheader",
  created() {
    bus.$on("activeTab", tab => {
      var items = document.querySelectorAll(".t-item");
      for (var item of items) {
        item.classList.remove("current-tab");
      }
      var name = tab.name;
      var curr = document.querySelector("a[name=" + name + "]");
      //   console.log(curr);
      curr.classList.add("current-tab");
      //     console.log(items);
      //   console.log(tab);
    });
  },
  methods: {
    closeMenu(e) {
        var flag = e.target.classList.contains('t-flag');
        console.log(e.target);
        if(flag){
            document.querySelector('.navbar-burger').click();
        }
    }
  },
  mounted() {
    document.addEventListener("DOMContentLoaded", function() {
      // Get all "navbar-burger" elements
      var $navbarBurgers = Array.prototype.slice.call(
        document.querySelectorAll(".navbar-burger"),
        0
      );

      // Check if there are any navbar burgers
      if ($navbarBurgers.length > 0) {
        // Add a click event on each of them
        $navbarBurgers.forEach(function($el) {
          $el.addEventListener("click", function() {
            // Get the target from the "data-target" attribute
            var target = $el.dataset.target;
            var $target = document.getElementById(target);
            // debugger;
            // Toggle the class on both the "navbar-burger" and the "navbar-menu"
            $el.classList.toggle("is-active");
            $target.classList.toggle("is-active");
          });
        });
      }
    });
    bus.$emit("activeTab", this.$route);
  }
};
</script>
<style lang="less" scoped>
.logo {
  height: 250px;
}
.current-tab {
  background-color: red;
  color: white !important;
}
.current-tab:hover {
  background-color: red !important;
  color: white !important;
}
.t-item {
  //   color: white !important;
  //   background-color: black;
  &:hover {
    // color: white !important;
    background: black;
  }
  //   background-color: black;
}
.nav-span {
  display: flex;
}
.drop-down-a {
  color: white;
  @media (max-width: 1024px) {
    color: black;
  }
  &:hover {
    color: white;
  }
}
</style>


