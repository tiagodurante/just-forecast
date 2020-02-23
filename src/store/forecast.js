import Vue from 'vue'
import { queryForecastUri } from './routes'

export default {
  state: {
    forecast: {}
  },
  mutations: {
    setForecast: (state, payload) => {
      state.forecast = payload
    }
  },
  actions: {
    async getForecastByLocation ({ commit, state }, payload) {
      commit('setForecast', [])
      const { data } = await Vue.axios.get(queryForecastUri(payload), {
        headers: {
          'Content-Encoding': 'gzip'
        }
      })
      commit('setForecast', data)
    }
  },
  getters: {
    forecast: ({ forecast }) => forecast
  }
}
