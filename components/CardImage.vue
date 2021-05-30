<template>
  <div class="container">
    <nuxt-link :to="link + id">
      <div
        class="img-container"
        :style="{ backgroundImage: 'url(' + thumbnail + ')' }"
      ></div>
      <div class="name-image">{{ name }}</div>
      <div v-if="!(description === '')" class="description">
        {{ description }}
      </div>
    </nuxt-link>
  </div>
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
    link: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
      default: '',
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
  padding-bottom: 40px;
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
  /* font-weight: bold; */
}
.description {
  color: var(--blue);
  /* color: grey; */
  font-size: small;
}
a {
  text-decoration: none;
}
</style>
