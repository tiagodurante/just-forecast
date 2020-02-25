import Vue from 'vue'
import Store from '@/store'
import Router from '@/router'
import { queryForecastUri, queryCurrentUri } from './routes'
const FORECAST_DATA_KEY = 'forecast-data'

export default {
  state: {
    forecast: {},
    today: {},
    city: {},
    dataForecast: [],
    selected: {}
  },
  mutations: {
    setForecast: (state, payload) => {
      state.forecast = Object.assign({}, payload)
    },
    setSelectedCity: (state, payload) => {
      state.selected = Object.assign({}, payload)
    },
    setToday: (state, payload) => {
      state.today = Object.assign({}, payload)
    },
    setCity: (state, payload) => {
      state.city = Object.assign({}, payload)
    },
    setMyForecastFromLocalStorage: (state, payload) => {
      state.dataForecast = payload
    },
    makeObject: (state) => {
      const { city, today, forecast } = state
      const updatedAt = Vue.options.filters.currentDateTime()
      state.dataForecast.push({
        city, today, forecast, updatedAt
      })
      localStorage.setItem(FORECAST_DATA_KEY, JSON.stringify(state.dataForecast))
    }
  },
  actions: {
    async initForecastFromLocalStorage ({ commit }, payload) {
      const update = Object.assign([], JSON.parse(localStorage.getItem(FORECAST_DATA_KEY)))
      if (Array.isArray(update)) {
        return commit('setMyForecastFromLocalStorage', update)
      }
      return commit('setMyForecastFromLocalStorage', [])
    },
    async getForecastByLocation ({ commit, state }, payload) {
      const { data } = await Vue.axios.get(queryForecastUri(payload), {
        headers: {
          'Content-Encoding': 'gzip'
        }
      })
      commit('setForecast', data)
    },
    async getCurrentByLocation ({ commit, state }, payload) {
      const { data } = await Vue.axios.get(queryCurrentUri(payload), {
        headers: {
          'Content-Encoding': 'gzip'
        }
      })
      commit('setToday', data.pop())
    },
    async getCityByMyLocation ({ commit, state }, payload) {
      const { myLocations } = Store.getters
      const city = myLocations.filter((item) => item.Key === payload)
      if (city.length === 0) {
        return Router.push({
          name: 'search-index'
        })
      }
      commit('setCity', city.pop())
    },
    async verifyKeyOnDataForecast ({ dispatch, commit, state }, { Key }) {
      const { dataForecast } = state
      const result = await dataForecast.filter((item) => item.city.Key === Key && Vue.options.filters.getDifferenceHourToUpdate(item.updatedAt))
      if (!result.length) {
        await dispatch('getCityByMyLocation', Key)
        await dispatch('getForecastByLocation', Key)
        await dispatch('getCurrentByLocation', Key)
        return commit('makeObject')
      }
      return commit('setSelectedCity', result.pop())
    },
    async setCurrent ({ dispatch, commit, state }, { Key }) {
      const { dataForecast } = state
      const result = await dataForecast.filter((item) => item.city.Key === Key) // verificar o tempo da ultima request
      if (!result.length) {
        return Router.push({
          name: 'search-index'
        })
      }
      return commit('setSelectedCity', result.pop())
    }
  },
  getters: {
    dataForecast: ({ dataForecast }) => dataForecast,
    selected: ({ selected }) => selected
  }
}
