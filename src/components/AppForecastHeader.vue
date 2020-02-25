<template>
  <div class="pa-6">
    <div class="mt-6 d-flex flex-column align-center">
      <div v-if="selected.today" :class="`${($vuetify.breakpoint.smAndUp) ? 'headline' : 'title'} font-weight-bold white--text text-center`" v-text="`${selected.today.WeatherText}`"/>
      <div :class="`${($vuetify.breakpoint.smAndUp) ? 'title' : 'subtitle-1'} font-weight-light white--text`" v-text="`${selected.city.LocalizedName}/${selected.city.AdministrativeArea.LocalizedName}`"/>
    </div>
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
