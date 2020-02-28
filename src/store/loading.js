export default {
  state: {
    loading: false
  },
  mutations: {
    setLoading: (state, payload) => {
      state.loading = payload
    }
  },
  getters: {
    loading: ({ loading }) => loading
  }
}
