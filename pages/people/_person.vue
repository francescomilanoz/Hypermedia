<template>
  <div id="app-container">
    <div>
      <Cover
        :title="person2.name"
        :preview-text="person2.email"
        thumbnail="https://www.lago.it/wp-content/uploads/2015/03/luoghi-di-lavoro-accoglienti_L2R3272_01.jpg"
        parent-section-text="People"
        parent-section-name="people"
      />
      <h1>Bio of {{ person2.name }}</h1>
      <div id="description-person">
        <div id="person-img">
          <img
            id="photo"
            :src="person2.image"
            :alt="person2.name + ' profile picture'"
          />
        </div>
        <div id="bio">
          {{ person2.description }}
        </div>
      </div>
    </div>

    <div v-if="area">
      <h2>Responsible for Area:</h2>
      <div class="area-element">
        <CardImage
          :id="area.id"
          link="/areas/"
          :thumbnail="area.image"
          :name="area.name"
          alternative-text-to-append=" area logo"
        />
      </div>
    </div>

    <div v-if="pmServices.length !== 0">
      <h2 v-if="pmServices.length === 1">Project manager for the service:</h2>
      <h2 v-else>Project manager for the services:</h2>
      <div class="service-elements">
        <ServicesPreviewList :services="pmServices" />
      </div>
    </div>

    <div v-if="rServices.length !== 0">
      <h2 v-if="rServices.length === 1">
        Reference for assistance for service:
      </h2>
      <h2 v-else>Reference for assistance for the services:</h2>
      <div class="service-elements">
        <ServicesPreviewList :services="rServices" />
      </div>
    </div>
  </div>
</template>

<script>
import Cover from '~/components/Cover'
import ServicesPreviewList from '~/components/Services/ServicesPreviewList'
import CardImage from '~/components/CardImage'
export default {
  components: {
    Cover,
    CardImage,
    ServicesPreviewList,
  },
  async asyncData({ $axios, route, redirect }) {
    const { person } = route.params
    if (isNaN(person) || isNaN(parseFloat(person))) redirect('/error')
    const { data } = await $axios.get(
      `${process.env.BASE_URL}/api/people/${person}`
    )
    const person2 = data
    if (person2 == null) redirect('/error')

    let area
    person2.roleAreas.forEach((element) => {
      if (element.role === 'Responsible') {
        area = element.area
      }
    })

    const pmServices = []
    const rServices = []

    person2.roleServices.forEach((element) => {
      if (element.role === 'Project manager') {
        pmServices.push(element.service)
      } else if (element.role === 'Reference') {
        rServices.push(element.service)
      }
    })
    return {
      person2,
      area,
      pmServices,
      rServices,
    }
  },
  head() {
    return {
      title: `${this.person2.name}'s page - Hypermood`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${this.person2.name}'s public page at Hypermood`,
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
  margin-top: -20px;
}

h2 {
  margin-left: 10%;
  margin-right: 10%;
  color: var(--blue);
  padding-bottom: 0px;
}
#photo {
  border-radius: 50%;
  height: 100px;
  width: 100px;
}

#description-person {
  display: flex;
  align-content: center;
  align-items: center;
  justify-items: center;
  color: var(--blue);
  font-size: 16px;
  margin-left: 10%;
  margin-right: 10%;
  padding-bottom: 30px;
  column-gap: 30px;
}
.container-person {
  width: 100px;
  height: 100px;
  position: relative;
  text-align: center;
  padding-right: 40px;
  padding-bottom: 40px;
  margin-left: 10%;
}
.area-element {
  margin-left: 10%;
}
.service-elements {
  margin-top: 40px;
}
#app-container {
  padding-bottom: 80px;
}
a {
  text-decoration: none;
}
@media (max-width: 350px) {
  h1 {
    font-size: 25px;
  }
  #description-person {
    flex-wrap: wrap;
  }
}
</style>
