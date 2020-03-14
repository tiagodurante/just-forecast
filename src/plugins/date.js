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
  const data = (dayjs().diff(dayjs(value), 'hour')) < 4
  return data
})

Vue.filter('timeFromNow', function (value) {
  if (!value) return ''
  return dayjs(value).fromNow()
})

Vue.filter('parseHeadlinePeriod', function (start, end) {
  if (!dayjs(start).isSame(dayjs(end), 'day')) {
    return `Aviso para o dia ${dayjs(start).format('DD/MM')} as ${dayjs(start).format('HH:mm')} até ${dayjs(end).format('DD/MM')} as ${dayjs(end).format('HH:mm')}`
  }
  if (dayjs(start).isSame(dayjs(end), 'day')) {
    return `Aviso para o dia ${dayjs(start).format('DD/MM')}, das ${dayjs(start).format('HH:mm')} as ${dayjs(end).format('HH:mm')}`
  }
  if (start && !end) {
    return `Aviso para o dia ${dayjs(start).format('DD/MM')}, a partir das ${dayjs(start).format('HH:mm')}`
  }
  return ''
})

export default dayjs
