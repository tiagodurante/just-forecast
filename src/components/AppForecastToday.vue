<template>
  <v-card-text v-if="selected.today">
    <v-row justify="center">
      <v-img
        :src="require(`@/assets/icons/${selected.today.WeatherIcon}.png`)"
        alt="Sunny image"
        contain
        max-width="150"
      ></v-img>
    </v-row>
    <v-row class="mt-10 mb-6" justify="center">
      <p class="display-3 font-weight-thin white--text text--darken-4" v-html="`${selected.today.Temperature.Metric.Value}&deg;C`"></p>
    </v-row>
  </v-card-text>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'AppForecastHeader',
  computed: {
    ...mapGetters(['selected'])
  }
}
</script>
