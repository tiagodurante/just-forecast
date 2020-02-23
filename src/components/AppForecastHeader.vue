<template>
  <div class="pa-6">
    <div class="mt-6 d-flex flex-column align-center">
      <div v-if="today" :class="`${($vuetify.breakpoint.smAndUp) ? 'headline' : 'title'} font-weight-bold white--text text-center`" v-text="`${today.WeatherText}`"/>
      <div :class="`${($vuetify.breakpoint.smAndUp) ? 'title' : 'subtitle-1'} font-weight-light white--text`" v-text="`${location.LocalizedName}/${location.AdministrativeArea.LocalizedName}`"/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Store from '@/store'
export default {
  name: 'AppForecastHeader',
  data () {
    return {
      today: null,
      entity: 'today'
    }
  },
  computed: {
    ...mapGetters(['location'])
  },
  created () {
    this.today = Store.getters[this.entity]
  }
}
</script>
