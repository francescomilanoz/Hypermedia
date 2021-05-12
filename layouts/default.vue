<template>
  <div class="app-container">
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />

    <TheSideNav :show="displaySidenav" @close="displaySidenav = false" />

    <div class="app-content">
      <nuxt />
    </div>

    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '~/components/navigation/TheHeader'
import TheSideNav from '~/components/navigation/TheSideNav'
import TheFooter from '~/components/navigation/TheFooter'
export default {
  components: {
    TheHeader,
    TheSideNav,
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
</style>
