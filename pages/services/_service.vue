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
      <h1>Descritpion</h1>
      <p>{{ serviceRetreived.description }}</p>
    </div>
    <div class="flex-container">
      <div class="flex-item-left">
        <h1>Team</h1>
        <PeoplePreview :people="team" has-description="true" />
      </div>
      <div class="flex-item-right">
        <div class="area-container">
          <h1 class="area-name">Area</h1>
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
  async asyncData({ $axios, route }) {
    const { service } = route.params
    const { data } = await $axios.get(
      `${process.env.BASE_URL}/api/services/${service}`
    )
    const serviceRetreived = data
    let team = []

    if (data.roleServices === []) {
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
  // data() {
  //   const serviceRetreived = {
  //     id: '1',
  //     name: 'Amazon Aurora',
  //     shortDescription:
  //       'Database relazionale compatibile con MySQL e PostgreSQL creato per il cloud. Prestazioni e disponibilità dei database commerciali a un decimo del costo.',
  //     image: 'https://i.ytimg.com/vi/RQ3Rj-WsGk0/maxresdefault.jpg',
  //     description:
  //       "Amazon Aurora è un database relazionale compatibile con MySQL e PostgreSQL creato per il cloud che unisce le prestazioni e la disponibilità dei database enterprise tradizionale alla semplicità e al costo ridotto dei database open source.  Amazon Aurora è cinque volte più veloce dei database MySQL standard e tre volte più veloce dei database PostgreSQL standard. Offre la sicurezza, la disponibilità e l'affidabilità dei database commerciali a un decimo del costo. Amazon Aurora è completamente gestito da Amazon Relational Database Service (RDS), che automatizza le attività amministrative che richiedono molto tempo quali il provisioning dell'hardware, la configurazione dei database, l'applicazione di patch e l'esecuzione di backup.",
  //     area: {
  //       id: 1,
  //       name: 'Database',
  //       image:
  //         'https://www.lago.it/wp-content/uploads/2015/03/luoghi-di-lavoro-accoglienti_L2R3272_01.jpg',
  //     },
  //   }
  //   const p1 = { id: '1', name: 'Mario Rossi' }
  //   const p2 = { id: '2', name: 'Rossi Mario' }
  //   const person1 = { ...p1, role: 'Project manager' }
  //   const person2 = { ...p2, role: 'Reference for assistance' }

  //   const team = [person1, person2]

  //   return { serviceRetreived, team }
  // },
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
  margin-left: 10%;
  margin-right: 10%;
}

.flex-container {
  display: flex;
  flex-wrap: wrap;
  margin-left: 10%;
  margin-right: 10%;
}

.flex-item-left {
  flex: 70%;
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
  padding-bottom: 80px;
}
</style>
