import Vue from 'vue'
import { queryCurrentUri } from './routes'

export default {
  state: {
    today: {}
  },
  mutations: {
    setToday: (state, payload) => {
      state.today = payload
    }
  },
  actions: {
    async getCurrentByLocation ({ commit, state }, payload) {
      commit('setToday', [])
      const { data } = await Vue.axios.get(queryCurrentUri(payload), {
        headers: {
          'Content-Encoding': 'gzip'
        }
      })
      commit('setToday', data.pop())
    }
  },
  getters: {
    today: ({ today }) => today
  }
}
