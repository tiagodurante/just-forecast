import Forecast from '../../views/Forecast'
import Store from '../../store'

export default [
  {
    path: '/forecast/:Key',
    name: 'forecast-index',
    props: true,
    beforeEnter: async (to, params, next) => {
      const Key = to.params
      if (!Key) {
        return next({
          name: 'search-index'
        })
      }

      await Store.dispatch('verifyKeyOnDataForecast', Key)
      await Store.dispatch('setCurrent', Key)

      next()
    },
    component: Forecast
  }
]
