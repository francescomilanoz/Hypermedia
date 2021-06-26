<template>
  <div class="app-container">
    <Cover
      title="Services"
      preview-text="Founded in Italy in 2000, today Hypermood is a multinational group that focuses its consulting offering on hard technology challenges with large-scale business impact in databases, networking, machine learning and security."
      thumbnail="https://static.wixstatic.com/media/357df1_02076c63bb6646aca086fd34f7f60292~mv2.jpg"
    />
    <h1>All our services, divided by areas</h1>
    <div v-for="area in areas" :key="area.id">
      <AreaName :id="area.id" :name="area.name" :logo="area.image" />
      <ServicesPreviewList :services="area.services" />
    </div>
  </div>
</template>

<script>
import Cover from '~/components/Cover'
import AreaName from '~/components/Areas/AreaName'
import ServicesPreviewList from '~/components/Services/ServicesPreviewList'
export default {
  components: {
    Cover,
    AreaName,
    ServicesPreviewList,
  },
  async asyncData({ $axios, route }) {
    const { data } = await $axios.get(
      `${process.env.BASE_URL}/api/areaservices`
    )
    const areas = data
    return {
      areas,
    }
  },
  head() {
    return {
      title: 'Services - Hypermood',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Click here to find out more about Hypermood services!',
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
  margin-left: 10%;
  margin-right: 10%;
  text-align: center;
}
@media (max-width: 350px) {
  h1 {
    font-size: 25px;
  }
}
</style>
