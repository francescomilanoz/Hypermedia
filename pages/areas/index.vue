<template>
  <div class="app-container">
    <Cover
      title="Areas"
      preview-text="Hypermood operates mainly in 4 major areas: databases, networking, machine learning and security. Read this page to find out more!"
      thumbnail="https://www.ciporistano.it/media/k2/items/cache/ccbca3752adf58a776d876d7a7de9edc_XL.jpg"
    />
    <div v-for="area in allAreas" id="all-areas" :key="area.area_id">
      <AreaName
        :id="area.id"
        :name="area.name"
        :logo="area.image"
        :short-description="area.shortDescription"
      />
    </div>
  </div>
</template>

<script>
import Cover from '~/components/Cover'
import AreaName from '~/components/Areas/AreaName'
export default {
  components: {
    Cover,
    AreaName,
  },
  async asyncData({ $axios, route }) {
    const { data } = await $axios.get(`${process.env.BASE_URL}/api/areas`)
    const allAreas = data
    return {
      allAreas,
    }
  },
}
</script>

<style scoped>
.app-container {
  padding-bottom: 80px;
}

#all-areas {
  padding-right: 10%;
}
</style>
