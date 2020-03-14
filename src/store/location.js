import Vue from 'vue'
import { queryLocationUri } from './routes'
import { eventBus } from '@/main'
const LOCATION_KEY = 'forecast-location'

export default {
  state: {
    myLocations: [],
    dataLocations: []
  },
  mutations: {
    setDataLocations: (state, payload) => {
      state.dataLocations = payload
      eventBus.$emit('APP_LOADING', false)
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
    },
    async saveMyLocation ({ state, commit }, { city }) {
      const { myLocations } = state
      const result = myLocations.filter((item) => item.Key === city.Key)
      if (!result.length) {
        myLocations.push(city)
        return localStorage.setItem(LOCATION_KEY, JSON.stringify(myLocations))
      }
    }
  },
  getters: {
    myLocations: ({ myLocations }) => myLocations,
    dataLocations: ({ dataLocations }) => dataLocations
  }
}
