<template>
  <div>
    <nuxt-link :to="'/' + sectionName">
      <div>
        <h1 class="back-arrow">&#8249;</h1>

        <h1>{{ text }}</h1>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'OrientationInfo',

  props: {
    text: {
      type: String,

      required: true,
    },

    sectionName: {
      type: String,

      required: true,
    },
  },
}
</script>

<style scoped>
a {
  text-decoration: none;

  color: white;
}

h1 {
  display: inline;

  font-weight: normal;
}

.back-arrow {
  font-size: 30px;

  vertical-align: top;
}
@media (max-width: 350px) {
  h1 {
    font-size: 25px;
  }
}
</style>
