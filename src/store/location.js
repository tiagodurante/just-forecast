import Vue from 'vue'
import { queryLocationUri } from './routes'
const LOCATION_KEY = 'forecast-location'

export default {
  state: {
    myLocations: [],
    dataLocations: []
  },
  mutations: {
    setDataLocations: (state, payload) => {
      state.dataLocations = payload
    },
    setMyLocationFromLocalStorage: (state, payload) => {
      state.myLocations = payload
    },
    saveMyLocation: (state, { city }) => {
      state.myLocations.push(city)
      localStorage.setItem(LOCATION_KEY, JSON.stringify(state.myLocations))
    },
    deleteMyLocation: (state, { index }) => {
      state.myLocations.splice(index, 1)
      localStorage.setItem(LOCATION_KEY, JSON.stringify(state.myLocations))
    }
  },
  actions: {
    async initLocationFromLocalStorage ({ commit }, payload) {
      const update = Object.assign([], JSON.parse(localStorage.getItem(LOCATION_KEY)))
      if (Array.isArray(update)) {
        return commit('setMyLocationFromLocalStorage', update)
      }
      return commit('setMyLocationFromLocalStorage', [])
    },
    async getLocations ({ commit }, payload) {
      commit('setDataLocations', [])
      const { data } = await Vue.axios.get(queryLocationUri(payload), {
        headers: {
          'Content-Encoding': 'gzip'
        }
      })
      commit('setDataLocations', data)
    }
  },
  getters: {
    myLocations: ({ myLocations }) => myLocations,
    dataLocations: ({ dataLocations }) => dataLocations
  }
}
