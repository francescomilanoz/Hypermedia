<template>
  <div class="app-container">
    <Cover
      :title="areaRetrieved.name"
      :preview-text="areaRetrieved.shortDescription"
      :thumbnail="areaRetrieved.bigImage"
      parent-section-text="Areas"
      parent-section-name="areas"
    />
    <h1>Description of the {{ areaRetrieved.name }} Area</h1>
    <div class="descritpion-container">
      <p>{{ areaRetrieved.description }}</p>
    </div>
    <br />
    <br />
    <h1>Services of the {{ areaRetrieved.name }} Area</h1>
    <ServicesPreviewList :services="areaRetrieved.services" />
    <br />
    <br />
    <h1>Responsible for the {{ areaRetrieved.name }} Area</h1>
    <div class="p-container">
      <CardImage
        v-if="responsible"
        :id="responsible.id"
        link="/people/"
        :thumbnail="responsible.image"
        :name="responsible.name"
      />
    </div>
    <br />
    <br />
    <h1>The area team</h1>
    <div class="p-container">
      <PeoplePreview :people="team" :has-description="false" />
    </div>
  </div>
</template>

<script>
import Cover from '~/components/Cover'
import CardImage from '~/components/CardImage'
import PeoplePreview from '~/components/people/PeoplePreview'
export default {
  components: {
    Cover,
    CardImage,
    PeoplePreview,
  },

  async asyncData({ $axios, route, redirect }) {
    const { area } = route.params
    if (isNaN(area) || isNaN(parseFloat(area))) redirect('/error')

    const { data } = await $axios.get(
      `${process.env.BASE_URL}/api/areas/${area}`
    )
    const areaRetrieved = data
    if (areaRetrieved == null) redirect('/error')

    const team = []
    let responsible

    areaRetrieved.roleAreas.forEach((element) => {
      if (element.role === 'Responsible') {
        responsible = element.person
      }

      if (element.role === 'Worker') {
        team.push(element.person)
      }
    })

    return {
      areaRetrieved,
      responsible,
      team,
    }
  },
  head() {
    return {
      title: `${this.areaRetrieved.name} - Hypermood`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Hypermood ${this.areaRetrieved.name} area page`,
        },
      ],
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

#orientation-info {
  margin-left: 10%;
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

.p-container {
  padding-left: 10%;
  padding-right: 5%;
}

.app-container {
  padding-bottom: 120px;
}
@media (max-width: 350px) {
  h1 {
    font-size: 25px;
  }
}
</style>
