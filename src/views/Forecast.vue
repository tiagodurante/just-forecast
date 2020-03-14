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
        class="card-headline-background mt-4"
      >
        <AppForecastHeadline/>
      </v-card>
      <v-card
        flat
        class="card-details-background mt-4"
      >
        <AppForecastFiveDays />
      </v-card>
    </v-col>
  </AppLayout>
</template>

<script>
import AppLayout from '@/components/layout/AppLayout'
import AppForecastHeader from '@/components/AppForecastHeader'
import AppForecastToday from '@/components/AppForecastToday'
import AppForecastFiveDays from '@/components/AppForecastFiveDays'
import AppForecastHeadline from '@/components/AppForecastHeadline'
export default {
  name: 'AppForecast',
  components: {
    AppLayout,
    AppForecastHeader,
    AppForecastToday,
    AppForecastFiveDays,
    AppForecastHeadline
  }
}
</script>

<style scoped>
.card-today-background {
  background: #fc9d9d;
}
.card-headline-background {
  background: #4f3961;
}
.card-details-background {
  background: #fff;
}
</style>
