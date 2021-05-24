<template>
  <div class="app-container">
    <Cover
      title="Services"
      preview-text="Founded in Italy in 2000, today Hypermood is a multinational group that focuses its consulting offering on hard technology challenges with large-scale business impact in databases, networking, machine learning and security."
      thumbnail="https://www.lago.it/wp-content/uploads/2015/03/luoghi-di-lavoro-accoglienti_L2R3272_01.jpg"
    />
    <div v-for="area in areas" :key="area.area_id">
      <AreaName :id="area.area_id" :name="area.name" :logo="area.area_logo" />
      <ServicesPreviewList :services="area.services" />
    </div>
  </div>
</template>

<script>
import Cover from '~/components/Cover'
import AreaName from '~/components/Areas/AreaName'
import ServicesPreviewList from '~/components/Services/ServicesPreviewList.vue'
export default {
  components: {
    Cover,
    AreaName,
    ServicesPreviewList,
  },
  data() {
    const areas = [
      {
        area_id: '1',
        name: 'Database',
        area_logo:
          'https://icon-library.com/images/database-png-icon/database-png-icon-22.jpg',
        services: [
          {
            id: '1',
            name: 'Database Service 1',
            shortDescription:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          },
          {
            id: '2',
            name: 'Database Service 2',
            shortDescription: 'Database Service 2 Preview',
          },
          {
            id: '3',
            name: 'Database Service 3',
            shortDescription: 'Database Service 3 Preview',
          },
          {
            id: '4',
            name: 'Database Service 4',
            shortDescription: 'Database Service 4 Preview',
          },
          {
            id: '5',
            name: 'Database Service 5',
            shortDescription: 'Database Service 5 Preview',
          },
          {
            id: '6',
            name: 'Database Service 6',
            shortDescription: 'Database Service 6 Preview',
          },
          {
            id: '7',
            name: 'Database Service 7',
            shortDescription: 'Database Service 7 Preview',
          },
        ],
      },
      {
        id: '2',
        name: 'Machine Learning',
        area_logo:
          'https://icon-library.com/images/database-png-icon/database-png-icon-22.jpg',
        services: [
          {
            id: '1',
            name: 'Security Service 1',
            shortDescription: 'Security Service 1 Preview',
          },
          {
            id: '2',
            name: 'Security Service 2',
            shortDescription: 'Security Service 2 Preview',
          },
        ],
      },
    ]
    return { areas }
  },
}
</script>

<style scoped>
.app-container {
  padding-bottom: 80px;
}
</style>
