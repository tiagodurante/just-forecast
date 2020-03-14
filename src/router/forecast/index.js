import Forecast from '../../views/Forecast'
import Store from '../../store'
import { eventBus } from '@/main'

export default [
  {
    path: '/forecast/:Key',
    name: 'forecast-index',
    props: true,
    meta: {
      showTemp: {
        type: 'Maximum',
        icon: 'expand_less',
        colorIcon: 'red'
      }
    },
    beforeEnter: async (to, params, next) => {
      const Key = to.params
      if (!Key) {
        return next({
          name: 'search-index'
        })
      }

      eventBus.$emit('APP_LOADING', true)
      await Store.dispatch('verifyKeyDataForecast', Key)
      await Store.dispatch('setCurrentForecast', Key)
      eventBus.$emit('APP_LOADING', false)

      next()
    },
    component: Forecast
  }
]
