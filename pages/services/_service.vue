<template>
  <div class="app-container">
    <Cover
      :title="serviceRetreived.name"
      :preview-text="serviceRetreived.shortDescription"
      :thumbnail="serviceRetreived.image"
      parent-section-text="Services"
      parent-section-name="services"
    />
    <div class="descritpion-container">
      <div class="description">
        <h1>Descritpion of the {{ serviceRetreived.name }} Service</h1>
        <p>{{ serviceRetreived.description }}</p>
      </div>
      <div class="flex-item-right">
        <div class="area-container">
          <h1 class="area-name">From the Area</h1>
          <div class="area-element">
            <CardImage
              :id="serviceRetreived.area.id"
              link="/areas/"
              :thumbnail="serviceRetreived.area.image"
              :name="serviceRetreived.area.name"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="flex-container">
      <div class="flex-item-left">
        <h1>The service team</h1>
        <PeoplePreview :people="team" has-description="true" />
      </div>
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
    const { service } = route.params
    if (isNaN(service) || isNaN(parseFloat(service))) redirect('/error')
    const { data } = await $axios.get(
      `${process.env.BASE_URL}/api/services/${service}`
    )
    const serviceRetreived = data
    if (serviceRetreived == null) redirect('/error')
    let team = []

    if (data.roleServices !== []) {
      let person1 // person1 is the Project Manger
      let person2 // person2 is the Reference for assistance

      if (data.roleServices[0].role === 'Project manager') {
        person1 = data.roleServices[0].person
        person2 = data.roleServices[1].person
      } else {
        person1 = data.roleServices[1].person
        person2 = data.roleServices[0].person
      }

      const p1 = { ...person1, role: 'Project manager' }
      const p2 = { ...person2, role: 'Reference for assistance' }

      team = [p1, p2]
    }

    return {
      serviceRetreived,
      team,
    }
  },
  head() {
    return {
      title: `${this.serviceRetreived.name} - Hypermood`,
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
h1 {
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
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5%;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: -20px;
}
.description {
  max-width: 65%;
}
.flex-container {
  margin-left: 10%;
  margin-right: 10%;
}

.flex-item-right {
  flex: 30%;
}

.area-name {
  text-align: center;
}

.area-container {
  float: right;
}

.area-element {
  display: flex;
  flex-wrap: wrap;
  /* Uncomment this below for a graphically nice padding */
  /* padding-left: 10px; */
  justify-content: center;
}

/* Responsive layout - makes a one column-layout instead of a two-column layout */
@media (max-width: 700px) {
  /* Uncomment this below if you want to center the titles in this page when the screen is on a small screen */
  /* h1 {
    text-align: center;
  } */

  /* Comment this below to center the area-name */
  .area-name {
    text-align: left;
  }

  .flex-item-right,
  .flex-item-left {
    flex: 100%;
  }

  .area-container {
    float: unset;
  }

  /* Comment this below to center the area-element */
  .area-element {
    justify-content: left;
  }
}

.app-container {
  padding-bottom: 120px;
}
@media (max-width: 350px) {
  h1 {
    font-size: 25px;
  }
}
@media (max-width: 700px) {
  .description {
    max-width: 100%;
  }
}
</style>
