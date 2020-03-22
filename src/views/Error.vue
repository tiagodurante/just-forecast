<template>
  <AppLayout>
    <v-col cols="12">
      <v-row justify="center" align="center">
        <v-img
          :height="($vuetify.breakpoint.xsOnly) ? '100' : '150'"
          width="200"
          contain
          :src="require('@/assets/file.png')"
        ></v-img>
      </v-row>
    </v-col>
    <v-col cols="12">
      <v-row justify="center" align="center">
        <p :class="`${($vuetify.breakpoint.xsOnly) ? 'title' : 'display-1'} font-weight-light font-weight-medium`">Ocorreu um erro inesperado.</p>
      </v-row>
      <v-row justify="center" align="center">
        <v-btn color="#4f3961" class="text--darken-2 font-weight-light font-weight-medium" text @click="goToIndex" :x-large="!$vuetify.breakpoint.xsOnly">ir para o início<v-icon class="ml-2">arrow_forward</v-icon></v-btn>
      </v-row>
    </v-col>
  </AppLayout>
</template>

<script>
import AppLayout from '@/components/layout/AppLayout'
export default {
  name: 'AppSearch',
  components: {
    AppLayout
  },
  methods: {
    goToIndex () {
      this.$router.push({
        name: 'search-index'
      })
    }
  }
}
</script>
<style scoped>
.card-error {
  background: #f3d4d4;
}
</style>
