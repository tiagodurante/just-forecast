import Forecast from '../../views/Forecast'
import Store from '../../store'

export default [
  {
    path: '/forecast/:location',
    name: 'forecast-index',
    props: true,
    beforeEnter: async (to, params, next) => {
      const { location } = to.params
      await Store.dispatch('getForecastByLocation', location)
      await Store.dispatch('getCurrentByLocation', location)
      next()
    },
    component: Forecast
  }
]
