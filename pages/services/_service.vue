<template>
  <div class="app-container">
    <Cover
      :title="service.name"
      :preview-text="service.shortDescription"
      :thumbnail="service.image"
    />
    <div class="descritpion-container">
      <OrientationInfo text="Services" section-name="services" />
      <h1>Descritpion</h1>
      <p>{{ service.description }}</p>
    </div>
    <div class="flex-container">
      <div class="flex-item-left">
        <h1>Team</h1>
        <div class="people-container">
          <CardImage
            v-for="person in team"
            :id="person.id"
            :key="person.id"
            link="/people/"
            thumbnail="https://www.lago.it/wp-content/uploads/2015/03/luoghi-di-lavoro-accoglienti_L2R3272_01.jpg"
            :name="person.name"
          />
        </div>
      </div>
      <div class="flex-item-right">
        <div class="area-container">
          <h1 class="area-name">Area</h1>
          <div class="area-element">
            <CardImage
              :id="area.id"
              link="/areas/"
              thumbnail="https://www.lago.it/wp-content/uploads/2015/03/luoghi-di-lavoro-accoglienti_L2R3272_01.jpg"
              :name="area.name"
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
import OrientationInfo from '~/components/Navigation/OrientationInfo.vue'
export default {
  components: {
    Cover,
    CardImage,
    OrientationInfo,
  },
  data() {
    const service = {
      id: '1',
      name: 'Amazon Aurora',
      shortDescription:
        'Database relazionale compatibile con MySQL e PostgreSQL creato per il cloud. Prestazioni e disponibilità dei database commerciali a un decimo del costo.',
      image: 'https://i.ytimg.com/vi/RQ3Rj-WsGk0/maxresdefault.jpg',
      description:
        "Amazon Aurora è un database relazionale compatibile con MySQL e PostgreSQL creato per il cloud che unisce le prestazioni e la disponibilità dei database enterprise tradizionale alla semplicità e al costo ridotto dei database open source.  Amazon Aurora è cinque volte più veloce dei database MySQL standard e tre volte più veloce dei database PostgreSQL standard. Offre la sicurezza, la disponibilità e l'affidabilità dei database commerciali a un decimo del costo. Amazon Aurora è completamente gestito da Amazon Relational Database Service (RDS), che automatizza le attività amministrative che richiedono molto tempo quali il provisioning dell'hardware, la configurazione dei database, l'applicazione di patch e l'esecuzione di backup.",
    }
    const team = [
      { id: '1', name: 'Jessica Lucchetta' },
      { id: '2', name: 'Pietro Lentini' },
      { id: '3', name: 'Francesco Milano' },
    ]
    const area = { id: 1, name: 'Database' }
    return { service, team, area }
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

.people-container {
  display: flex;
  flex-wrap: wrap;
  padding-left: 10px;
}

.area-name {
  text-align: center;
}

.area-container {
  /* display: inline-block; */
  float: right;
}

.area-element {
  display: flex;
  flex-wrap: wrap;
  padding-left: 10px;
  justify-content: center;
  margin-right: -40px;
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

  .people-container {
    /* justify-content: center; */
    margin-right: -40px;
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
