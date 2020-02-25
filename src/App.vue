<template>
  <v-app style="background: #f3d4d4">
    <router-view></router-view>
  </v-app>
</template>

<script>
// import Store from '@/store'
export default {
  name: 'AppMain'
  // created () {
  //   Store.dispatch('initLocationFromLocalStorage')
  //   console.log('foi')
  // }
}
</script>
