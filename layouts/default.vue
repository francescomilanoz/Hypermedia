<template>
  <div class="app-container">
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />

    <TheSidenav :show="displaySidenav" @close="displaySidenav = false" />

    <div class="app-content">
      <Chatbot :chat-list="list" />
      <nuxt />
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '~/components/navigation/TheHeader'
import TheSidenav from '~/components/navigation/TheSidenav'
import TheFooter from '~/components/navigation/TheFooter'
import Chatbot from '~/components/Chatbot'
import MMCCMixin from '~/mixins/mmcc-mixin'
export default {
  components: {
    TheHeader,
    TheSidenav,
    TheFooter,
    Chatbot,
  },
  mixins: [MMCCMixin],
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
  min-height: 84vh;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
}
</style>
