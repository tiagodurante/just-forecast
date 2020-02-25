<template>
  <AppLayout>
    <v-col cols="12" sm="8" md="6" xl="2">
      <v-card
        flat
        class="card-today-background"
      >
        <AppForecastHeader />
        <AppForecastToday />
      </v-card>
      <v-card
        flat
        class="card-details-background"
      >
        <AppForecastFiveDays />
      </v-card>
    </v-col>
  </AppLayout>
</template>

<script>
import AppLayout from '@/components/layout/AppLayout'
import { mapGetters } from 'vuex'
import AppForecastHeader from '@/components/AppForecastHeader'
import AppForecastToday from '@/components/AppForecastToday'
import AppForecastFiveDays from '@/components/AppForecastFiveDays'
export default {
  name: 'AppForecast',
  components: {
    AppLayout,
    AppForecastHeader,
    AppForecastToday,
    AppForecastFiveDays
  },
  computed: {
    ...mapGetters(['dataForecast'])
  }
}
</script>

<style scoped>
.card-today-background {
  background: #fc9d9d;
}
.card-details-background {
  background: #fff;
}
</style>
