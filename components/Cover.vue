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
.post-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  width: 90%;
}

a {
  text-decoration: none;
  color: black;
}

@media (min-width: 850px) {
  .post-preview {
    width: 400px;
    margin: 10px;
  }
}
.container {
  width: 100%;
  height: 300px;
  position: relative;
  background-position: center;
  background-size: cover;
  top: -60px; /* Same size as header - It makes it go under it from the beginning */
}

.bar-container {
  width: 100%;
  height: 300px;
  position: relative;
  background-position: center;
  background-size: cover;
  z-index: -1;
}
.patina {
  width: 100%;
  height: 300px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: black;
  opacity: 50%;
  z-index: +1;
}

.bar-content {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px;
  text-align: left;
  color: white;
  z-index: +2;
}
</style>
