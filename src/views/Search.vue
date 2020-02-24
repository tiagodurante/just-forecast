<template>
  <AppLayout>
    <v-col cols="12" sm="10" md="6">
      <v-autocomplete
        label="procure uma cidade"
        :items="dataLocations"
        v-model="city"
        :search-input.sync="search"
        autofocus
        solo
        :color="`#4f3961`"
        clearable
        hide-no-data
        @click:append-outer="goToForecast"
        hide-selected
        single-line
        append-outer-icon="subdirectory_arrow_right"
        :item-text="cityName"
        hint="apenas previsão do tempo"
        persistent-hint
        return-object
      ></v-autocomplete>
    </v-col>
  </AppLayout>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import AppLayout from '@/components/layout/AppLayout'
export default {
  name: 'AppSearch',
  components: {
    AppLayout
  },
  data () {
    return {
      search: '',
      city: null,
      timeout: null
    }
  },
  computed: {
    ...mapGetters(['dataLocations'])
  },
  watch: {
    search (val) {
      clearTimeout(this.timeout)
      if (val) {
        this.timeout = setTimeout(() => {
          this.getLocations(val)
        }, 800)
      }
    }
  },
  methods: {
    ...mapActions(['getLocations']),
    ...mapMutations(['setLocation']),
    cityName: (item) => `${item.LocalizedName}/${item.AdministrativeArea.LocalizedName}`,
    goToForecast () {
      if (this.city) {
        this.setLocation(this.city)
        this.$router.push({
          name: 'forecast-index',
          params: {
            location: this.city.Key
          }
        })
      }
    }
  }
}
</script>
