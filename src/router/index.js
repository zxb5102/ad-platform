import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Main from '@/components/Main'
import Register from '@/components/content/Register'
import Login from '@/components/content/Login'
import About from '@/components/content/About'
import Advertiser from '@/components/content/Advertiser'
import Affiliate from '@/components/content/Affiliate'
import bus from '@/bus'

Vue.use(Router)
var router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: "/main",
      component: Index,
      children: [
        {
          path: "affiliate",
          name:"affiliate",
          component: Affiliate
        },
        {
          path: "main",
          name: "main",
          component: Main
        },
        {
          path: "about",
          name: "about",
          component: About
        },
        {
          path: "register",
          name: "main",
          component: Register
        },
        {
          path: "login",
          name: "main",
          component: Login
        }, {
          path: "advertiser",
          name: "advertiser",
          component: Advertiser
        }
      ]
    }
  ]
});
router.afterEach((to, from) => {
  bus.$emit('activeTab',to);
})
export default router;
