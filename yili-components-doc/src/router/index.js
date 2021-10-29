import Vue from 'vue'
import VueRouter from 'vue-router'
import routerConfig from './config'
import DocItems from '../config/menu'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/doc'
}, {
  path: '/doc',
  component: () => import(/* webpackChunkName: "document" */ '../views/doc'),
  children: [{
    path: '/',
    redirect: '/doc/guide-start'
  }, ...routerConfig.getRouterData(DocItems, '../views/doc/')]
}, {
  path: '/login',
  name: 'login',
  component: () => import(/* webpackChunkName: "login" */ '../views/login')
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
