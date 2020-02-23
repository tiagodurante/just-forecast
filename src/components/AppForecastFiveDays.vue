<template>
  <div class="pa-2">
    <v-card-title class="overline grey--text font-weight-medium">Próximos previsões</v-card-title>
    <v-container fluid v-if="forecast.DailyForecasts.length">
      <v-row justify="space-between" v-for="(day, i) in forecast.DailyForecasts" :key="i">
        <v-col cols="4" class="font-weight-light d-flex flex-column justify-center" v-html="`${$options.filters.date(day.Date)} `">
        </v-col>
        <v-col cols="4" align="center">
          <v-img
            :src="require(`@/assets/icons/${day.Day.Icon}.png`)"
            :alt="day.Day.IconPhrase"
            contain
            max-width="30"
          ></v-img>
        </v-col>
        <v-col cols="4" class="text-end font-weight-light d-flex flex-column justify-center" v-html="`${day.Temperature.Maximum.Value}&deg;C`">
          <!-- <p v-html="`${day.Temperature.Maximum.Value}&deg;C`" />
          <p v-if="$vuetify.breakpoint.smAndUp" class="ml-2 grey--text" v-html="`${day.Temperature.Minimum.Value}&deg;C`" /> -->
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'AppForecastHeader',
  computed: {
    ...mapGetters(['forecast'])
  }
}
</script>
