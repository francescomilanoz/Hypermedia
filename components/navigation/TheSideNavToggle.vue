<template>
  <div id="drawer-toggle" role="button" @click="$emit('toggle')">
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
  </div>
</template>

<script>
export default {
  name: 'TheSideNavToggle',
}
</script>

<style scoped>
#drawer-toggle {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 40%;
  width: 35px;
  cursor: pointer;
}

@media (min-width: 768px) {
  #drawer-toggle {
    display: none;
  }
}

#drawer-toggle .bar {
  width: 90%;
  height: 2px;
  background-color: var(--blue);
}
</style>
