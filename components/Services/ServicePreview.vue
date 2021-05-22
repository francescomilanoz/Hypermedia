<template>
  <nuxt-link :to="'/services/' + id">
    <div class="container">
      <h1>{{ name }}</h1>
      <p>{{ previewText }}</p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'ServicePreview',
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    previewText: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
h1 {
  font-weight: bold;
  font-size: 22px;
  line-height: 24px;
  text-align: center;
}
p {
  font-weight: normal;
  font-size: 18px;
  /* line-height: 24px; */
  text-align: center;
}

a {
  text-decoration: none;
}

.container {
  color: var(--blue);
  /* margin: auto; */
  width: 100%;
  height: auto;
  /* Uncomment this below to help you visualize the element */
  /* border-width: 1px;
  border-style: solid; */
}
</style>
