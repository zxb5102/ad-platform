<template>
    <!-- <div class="pageHeader"> -->
        <nav class="navbar is-fixed-top ">
            <div class="container">
                <div class="navbar-brand">
                    <a class="navbar-item" href="#">
                        <img src="../assets/logo-small.png" class="logo" />
                    </a>
                    <a class="navbar-item" href="#">
                        首页
                    </a>
                    <a class="navbar-item" href="#">
                        关于我们
                    </a>
                    <div class="navbar-burger" data-target="navMenu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div id="navMenu" class="navbar-menu">
                    <div class="navbar-start">
                        <a class="navbar-item" href="#">
                            广告商
                        </a>
                        <a class="navbar-item" href="#">
                            网站主
                        </a>
                    </div>

                    <div class="navbar-end">
                        <div class="navbar-item">
                            <div class="field is-grouped">
                                <p class="control">
                                    <a class="button is-info" target="_blank" href="#">
                                        <span>
                                            登入
                                        </span>
                                    </a>
                                    <!-- button is-primary is-rounded -->
                                </p>
                                <p class="control">
                                    <a class="button is-success" href="#">
                                        <span>注册</span>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    <!-- </div> -->
</template>
<script>
export default {
  name: "pageheader",
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
  }
};
</script>
<style lang="less" scoped>
.logo {
  height: 250px;
}
</style>


