<template>
  <AppLayout>
    <v-col cols="12" sm="10" md="6">
      <v-autocomplete
        label="procure uma cidade"
        :items="dataLocations"
        v-model="city"
        :search-input.sync="search"
        autofocus
        :loading="loading"
        solo
        :color="`#4f3961`"
        clearable
        hide-no-data
        :menu-props="menuProps"
        hide-selected
        single-line
        :item-text="cityName"
        hint="apenas previsão do tempo"
        persistent-hint
        return-object
      />
      <v-card v-if="myLocations.length > 0" class="mt-4">
        <v-card-title class="overline grey--text font-weight-medium" v-text="`Minhas cidades (${myLocations.length} de ${cityLimit})`"/>
          <v-list>
            <v-list-item
              v-for="(item, i) in myLocations"
              :key="i"
              @click="goToForecast(item.Key)"
            >
              <v-list-item-avatar>
                <v-icon
                  v-text="`wb_cloudy`"
                ></v-icon>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title v-text="`${item.LocalizedName}/${item.AdministrativeArea.ID}`"></v-list-item-title>
              </v-list-item-content>

              <v-list-item-action>
                <v-btn icon @click.stop="remove(i)">
                  <v-icon color="#4f3961">remove</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>
      </v-card>
    </v-col>
  </AppLayout>
</template>

<script>
import { eventBus } from '@/main'
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
      timeout: null,
      cityLimit: 5,
      menuProps: {
        closeOnContentClick: true,
        openOnClick: false
      }
    }
  },
  computed: {
    ...mapGetters(['dataLocations', 'myLocations', 'loading'])
  },
  watch: {
    search (val) {
      clearTimeout(this.timeout)
      if (val) {
        this.timeout = setTimeout(() => {
          eventBus.$emit('APP_LOADING', true)
          this.getLocations(val)
        }, 800)
      }
    },
    city (val) {
      if (val.Key && typeof val === 'object' && this.myLocations.lenght <= this.cityLimit) {
        return this.saveMyLocation({
          city: val
        })
      }
      delete this.city
      return alert(`É permitido guardar apenas ${this.cityLimit} cidades na lista.`)
    }
  },
  methods: {
    ...mapActions(['getLocations', 'saveMyLocation']),
    ...mapMutations(['deleteMyLocation', 'setLoading']),
    cityName: (item) => `${item.LocalizedName}/${item.AdministrativeArea.LocalizedName}`,
    goToForecast (Key) {
      return this.$router.push({
        name: 'forecast-index',
        params: {
          Key
        }
      })
    },
    save () {
      if (!this.city) return alert('Selecione pelo menos uma cidade.')
      if (typeof this.city === 'object') {
        return this.saveMyLocation({
          city: this.city
        })
      }
    },
    remove (index) {
      return this.deleteMyLocation({
        index
      })
    }
  },
  mounted () {
    eventBus.$on('APP_LOADING', (bool) => {
      this.setLoading(bool)
    })
  }
}
</script>
