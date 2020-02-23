import Vue from 'vue'
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'

dayjs.locale('pt-br')

Vue.filter('date', function (value) {
  if (!value) return ''
  const formatted = dayjs(value).format('DD/MM')
  return formatted
})

export default dayjs
