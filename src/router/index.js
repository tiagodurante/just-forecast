import Vue from 'vue'
import VueRouter from 'vue-router'
import Search from './search'
import Forecast from './forecast'

Vue.use(VueRouter)

const routes = [
  ...Search,
  ...Forecast
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
