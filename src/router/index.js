import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter)
export default new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'editor',
      component: () => import(/* webpackChunkName: "Home" */ '../page/editor.vue')

    },

  ]
})