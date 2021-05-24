import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    meta: {
      name: "首页"
    },
    component: Index
  },
]

const router = new VueRouter({
  routes
})

export default router
