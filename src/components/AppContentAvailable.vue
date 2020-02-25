<template>
  <v-snackbar color="#4f3961" multi-line v-model="snackbar" top :timeout="timeout">Feche e abra o aplicativo para atualizar. <v-icon dark>system_update</v-icon></v-snackbar>
</template>

<script>
import { eventBus } from '@/main'
export default {
  data () {
    return {
      snackbar: false,
      timeout: 4000
    }
  },
  created () {
    eventBus.$on('APP_CONTENT_AVAILABLE', errors => {
      this.snackbar = true
    })
  }
}
</script>
