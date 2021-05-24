<template>
  <div>
    <nuxt-link :to="'/areas/' + id"
      ><div class="area-container">
        <img class="area-logo" :src="logo" :alt="name" />
        <h1 class="area-name">{{ name }}</h1>
        <p class="area-description">{{ description }}</p>
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
    description: {
      type: String,
      default: '',
      required: false,
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
  padding-left: 10%;
  padding-right: 10%;
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

.area-description {
  color: var(--blue);
  font-size: 16px;
  grid-template-columns: auto;
  word-wrap: normal;
  padding-left: 6.5em;
  padding-bottom: 15px;
}

@media (max-width: 600px) {
  .area-description {
    padding-top: 25px;
    padding-left: 1.8em;
  }
}

@media (max-width: 335px) {
  .area-container {
    padding-left: 1%;
    padding-right: 1%;
  }
}
</style>
