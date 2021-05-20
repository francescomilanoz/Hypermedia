<template>
  <nuxt-link :to="'/person/' + id">
    <div class="container">
      <div
        class="img-container"
        :style="{ backgroundImage: 'url(' + thumbnail + ')' }"
      ></div>
      <div class="name-image">{{ name }}</div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'CardImage',
  props: {
    thumbnail: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },
}
</script>

<style scoped>
.container {
  width: 100px;
  height: 100px;
  position: relative;
  text-align: center;
  padding-right: 40px;
}

.img-container {
  width: 100%;
  height: 100%;
  position: relative;
  background-position: center;
  background-size: cover;
  border-radius: 50%;
}
.name-image {
  margin-top: 5px;
  color: var(--blue);
}
</style>
