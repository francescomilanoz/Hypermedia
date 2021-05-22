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
import TheHeader from '~/components/Navigation/TheHeader'
import TheSidenav from '~/components/Navigation/TheSidenav'
import TheFooter from '~/components/Navigation/TheFooter'
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
