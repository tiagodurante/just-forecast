<template>
  <v-app style="background: #f3d4d4">
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: 'AppMain',
  created () {
    screen.orientation.lock('portrait')
  }
}
</script>
