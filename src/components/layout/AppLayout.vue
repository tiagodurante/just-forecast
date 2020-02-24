<template>
  <v-container class="fill-height">
    <AppContentAvailable/>
    <v-row class="mx-0" align="center" justify="center">
      <slot/>
    </v-row>
  </v-container>
</template>
<script>
import AppContentAvailable from '@/components/AppContentAvailable'
export default {
  name: 'AppLayout',
  components: {
    AppContentAvailable
  }
}
</script>
