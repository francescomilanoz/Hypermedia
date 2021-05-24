<template>
  <div class="container">
    <div class="patina"></div>
    <div
      class="bar-container"
      :style="{ backgroundImage: 'url(' + thumbnail + ')' }"
    ></div>
    <div class="bar-content">
      <h1>{{ title }}</h1>
      <p>{{ previewText }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cover',
  props: {
    title: {
      type: String,
      required: true,
    },
    previewText: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 400px;
  position: relative;
  background-position: center;
  background-size: cover;
  padding: 0px;
  top: -60px; /* Same size as header - It makes it go under it from the beginning */
}

.bar-container {
  width: 100%;
  height: 400px;
  position: relative;
  background-position: center;
  background-size: cover;
  z-index: -1;
}
.patina {
  width: 100%;
  height: 400px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: black;
  opacity: 0.5;
  z-index: +1;
}

.bar-content {
  width: 30%;
  /* height: 100%; */
  position: absolute;
  top: 0;
  left: 0;
  padding-left: 10%;
  padding-top: 100px;
  text-align: left;
  color: white;
  z-index: +2;
}

@media (max-width: 640px) {
  .bar-content {
    width: 70%;
  }
}
</style>
