import Vue from 'vue'
import VueRouter from 'vue-router'
import Search from './search'
import Store from '@/store'
import Forecast from './forecast'

Vue.use(VueRouter)

const routes = [
  ...Search,
  ...Forecast
]

const router = new VueRouter({
  mode: process.env.VUE_APP_ROUTE_MODE,
  routes
})

router.beforeEach(async (to, from, next) => {
  await Store.dispatch('initForecastFromLocalStorage')
  await Store.dispatch('initLocationFromLocalStorage')
  next()
})

export default router
