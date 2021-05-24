<template>
  <div class="app-container">
    <Cover
      :title="areaRetrieved.name"
      :preview-text="areaRetrieved.shortDescription"
      :thumbnail="areaRetrieved.bigImage"
    />
    <h1>Description</h1>
    <div class="descritpion-container">
      <p>{{ areaRetrieved.description }}</p>
    </div>
    <br />
    <br />
    <h1>Area Services</h1>
    <ServicesPreviewList :services="areaRetrieved.services" />
    <br />
    <br />
    <h1>Area Responsible</h1>
    <div class="people-container">
      <div v-for="roleAreas in areaRetrieved.roleAreas" :key="roleAreas.id">
        <CardImage
          :id="roleAreas.person_id.id"
          :thumbnail="roleAreas.person_id.image"
          :name="roleAreas.person_id.name"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Cover from '~/components/Cover'
export default {
  components: {
    Cover,
  },
  async asyncData({ $axios, route }) {
    const { area } = route.params
    const { data } = await $axios.get(
      `${process.env.BASE_URL}/api/areas/${area}`
    )
    const areaRetrieved = data
    return {
      areaRetrieved,
    }
  },
}
</script>

<style scoped>
h1 {
  margin-left: 10%;
  margin-right: 10%;
  color: var(--blue);
}

p {
  color: var(--blue);
  font-size: 16px;
}

a {
  text-decoration: none;
}

.descritpion-container {
  margin-left: 10%;
  margin-right: 10%;
}

.people-container {
  display: flex;
  flex-wrap: wrap;
  padding-left: 10%;
  padding-right: 5%;
}
@media (max-width: 640px) {
  .people-container {
    justify-content: center;
    padding-right: 10%;
    margin-right: -40px;
  }
}

.app-container {
  padding-bottom: 80px;
}
</style>
