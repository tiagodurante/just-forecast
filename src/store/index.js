import Vue from 'vue'
import Vuex from 'vuex'
import location from './location'
import forecast from './forecast'
import today from './today'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    location,
    forecast,
    today
  }
})
