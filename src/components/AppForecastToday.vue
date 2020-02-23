<template>
  <v-card-text v-if="today">
    <v-row justify="center">
      <v-img
        :src="require(`@/assets/icons/${this.today.WeatherIcon}.png`)"
        alt="Sunny image"
        contain
        max-width="150"
      ></v-img>
    </v-row>
    <v-row class="mt-10 mb-6" justify="center">
      <p class="display-3 font-weight-thin white--text text--darken-4" v-html="`${today.Temperature.Metric.Value}&deg;C`"></p>
    </v-row>
  </v-card-text>
</template>

<script>
import Store from '@/store'
export default {
  name: 'AppForecastHeader',
  data () {
    return {
      today: null,
      image: null,
      entity: 'today'
    }
  },
  created () {
    this.today = Store.getters[this.entity]
  }
}
</script>
