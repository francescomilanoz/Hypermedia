<template>
  <div>
    <nuxt-link :to="'/areas/' + id"
      ><div class="area-container">
        <img class="area-logo" :src="logo" :alt="name" />
        <h1 class="area-name">{{ name }}</h1>
      </div></nuxt-link
    >
  </div>
</template>

<script>
export default {
  name: 'AreaName',
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
h1 {
  margin-top: 3rem;
  margin-bottom: -1rem;
}

a {
  text-decoration: none;
}

.area-container {
  max-width: 1550px;
  margin: auto;
}

.area-name {
  text-align: left;
  margin-left: 1rem;
  height: 50px;
  color: var(--blue);
}

.area-logo {
  width: 3rem;
  height: 3rem;
  float: left;
  margin: -6px 24px 0 32px;
}
</style>
