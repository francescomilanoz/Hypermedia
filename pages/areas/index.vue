<template>
  <div class="app-container">
    <Cover
      title="Areas"
      :preview-text="description"
      thumbnail="https://static.wixstatic.com/media/357df1_2bc8afdf6a7049e4ba767b04521c8bb6~mv2.jpg"
    />
    <h1>Our four Areas</h1>
    <div v-for="area in allAreas" id="all-areas" :key="area.area_id">
      <AreaName
        :id="area.id"
        :name="area.name"
        :logo="area.image"
        :description="area.description"
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
  data() {
    return {
      description:
        'Hypermood operates mainly in 4 major areas: databases, networking, machine learning and security. Read this page to find out more!',
    }
  },
  head() {
    return {
      title: 'Areas - Hypermood',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description,
        },
      ],
    }
  },
}
</script>

<style scoped>
.app-container {
  padding-bottom: 80px;
}
h1 {
  color: var(--blue);
  display: flex;
  justify-content: center;
  margin-top: -20px;
}
@media (max-width: 350px) {
  h1 {
    font-size: 25px;
  }
}
</style>
