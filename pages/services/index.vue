<template>
  <div class="app-container">
    <Cover
      title="Services"
      preview-text="Founded in Italy in 2000, today Hypermood is a multinational group that focuses its consulting offering on hard technology challenges with large-scale business impact in databases, networking, machine learning and security."
      thumbnail="https://www.lago.it/wp-content/uploads/2015/03/luoghi-di-lavoro-accoglienti_L2R3272_01.jpg"
    />
    <div v-for="area in areas" :key="area.name">
      <nuxt-link :to="'/areas/' + area.area_id"
        ><div class="area-container">
          <img class="area-logo" :src="area.area_logo" :alt="area.name" />
          <h1 class="area-title">{{ area.name }}</h1>
        </div></nuxt-link
      >

      <div class="service-container">
        <div class="service-grid">
          <div
            v-for="service in area.services"
            :key="service.service_id"
            class="service-element"
          >
            <div>
              <Service
                :id="service.service_id"
                :name="service.name"
                :preview-text="service.preview"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cover from '~/components/Cover'
import Service from '~/components/Services/Service'
export default {
  components: {
    Cover,
    Service,
  },
  data() {
    const areas = [
      {
        area_id: '1',
        name: 'Database',
        area_logo:
          'https://cdn.icon-icons.com/icons2/1502/PNG/512/officedatabase_103574.png',
        services: [
          {
            service_id: '1',
            name: 'Database Service 1',
            preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          },
          {
            service_id: '2',
            name: 'Database Service 2',
            preview: 'Database Service 2 Preview',
          },
          {
            service_id: '3',
            name: 'Database Service 3',
            preview: 'Database Service 3 Preview',
          },
          {
            service_id: '4',
            name: 'Database Service 4',
            preview: 'Database Service 4 Preview',
          },
          {
            service_id: '5',
            name: 'Database Service 5',
            preview: 'Database Service 5 Preview',
          },
          {
            service_id: '6',
            name: 'Database Service 6',
            preview: 'Database Service 6 Preview',
          },
          {
            service_id: '7',
            name: 'Database Service 7',
            preview: 'Database Service 7 Preview',
          },
        ],
      },
      {
        area_id: '2',
        name: 'Security',
        area_logo:
          'https://cdn.icon-icons.com/icons2/1502/PNG/512/officedatabase_103574.png',
        services: [
          {
            service_id: '1',
            name: 'Security Service 1',
            preview: 'Security Service 1 Preview',
          },
          {
            service_id: '2',
            name: 'Security Service 2',
            preview: 'Security Service 2 Preview',
          },
        ],
      },
    ]
    return { areas }
  },
}
</script>

<style scoped>
h1 {
  margin-top: 3rem;
  margin-bottom: -1rem;
}

a {
  text-decoration: none;
}

.area-container {
  max-width: 1550px;
  margin: auto;
}

.area-title {
  text-align: left;
  margin-left: 1rem;
  height: 50px;
  color: var(--blue);
}

.area-logo {
  width: 3rem;
  height: 3rem;
  float: left;
  margin: -6px 24px 0 32px;
}

.service-container {
  margin-left: auto;
  margin-right: auto;
}

.service-grid {
  display: grid;
  grid-gap: 0.8rem;
  max-width: 1400px;
  margin: 1rem auto;
}

.service-element {
  padding: 1rem;
  width: 80%;
  margin: auto;
}

/* Screen larger than 550px? 2 column*/
@media (min-width: 550px) {
  .service-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  /* Adds a margin to reach the beginning of the word (same size as image before area name + margin) */
  .service-container {
    margin-left: 4rem;
  }
  .service-element {
    width: auto;
    margin: 0;
  }
}

/* Screen larger than 800px? 3 column */
@media (min-width: 800px) {
  .service-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Screen larger than 1100px? 4 column */
@media (min-width: 1100px) {
  .service-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

/* Screen larger than 1300px? 5 columns */
@media (min-width: 1300px) {
  .service-grid {
    grid-template-columns: repeat(5, 1fr);
  }
}
.app-container {
  padding-bottom: 80px;
}
</style>
