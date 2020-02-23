import Vue from 'vue'
import { queryLocationUri } from './routes'

export default {
  state: {
    location: {},
    dataLocations: []
  },
  mutations: {
    setDataLocations: (state, payload) => {
      state.dataLocations = payload
    },
    setLocation: (state, payload) => {
      state.location = payload
    }
  },
  actions: {
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
    location: ({ location }) => location,
    dataLocations: ({ dataLocations }) => dataLocations
  }
}
