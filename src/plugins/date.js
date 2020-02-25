import Vue from 'vue'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/pt-br'

dayjs.locale('pt-br')
dayjs.extend(relativeTime)

Vue.filter('date', function (value) {
  if (!value) return ''
  const formatted = dayjs(value).format('DD/MM')
  return formatted
})

Vue.filter('currentDateTime', function () {
  return dayjs()
})

Vue.filter('getDifferenceHourToUpdate', function (value) {
  if (!value) return ''
  return (dayjs().hour() - dayjs(value).hour()) < 4
})

Vue.filter('timeFromNow', function (value) {
  if (!value) return ''
  return dayjs(value).fromNow()
})

export default dayjs
