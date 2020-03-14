<template>
  <div class="pa-2">
    <v-card-title class="overline white--text text--darken-1 font-weight-medium">{{$options.filters.parseHeadlinePeriod(selected.forecast.Headline.EffectiveDate, selected.forecast.Headline.EndDate)}}</v-card-title>
    <v-container fluid v-if="selected.forecast.Headline">
      <p class="white--text text-center" v-text="`${selected.forecast.Headline.Text}.`"/>
    </v-container>
  </div>
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
