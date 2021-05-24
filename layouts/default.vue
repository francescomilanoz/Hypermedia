<template>
  <div class="app-container">
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />

    <TheSidenav :show="displaySidenav" @close="displaySidenav = false" />

    <div class="app-content">
      <nuxt />
    </div>

    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '~/components/navigation/TheHeader'
import TheSidenav from '~/components/navigation/TheSidenav'
import TheFooter from '~/components/navigation/TheFooter'
export default {
  components: {
    TheHeader,
    TheSidenav,
    TheFooter,
  },
  data() {
    return {
      displaySidenav: false,
    }
  },
}
</script>

<style>
html,
body {
  margin: 0;
  height: 100%;
  width: 100%;
}

.app-container {
  position: relative;
}
</style>
