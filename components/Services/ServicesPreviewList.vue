<template>
  <div>
    <div id="service-container">
      <div id="service-grid">
        <div v-for="service in services" id="service-element" :key="service.id">
          <div>
            <ServicePreview
              :id="service.id"
              :name="service.name"
              :preview-text="service.shortDescription"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ServicePreview from '~/components/Services/ServicePreview'
export default {
  name: 'ServicesPreviewList',
  components: {
    ServicePreview,
  },
  props: {
    services: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
#service-container {
  margin-left: auto;
  margin-right: auto;
  margin-top: -20px;
}

#service-grid {
  display: grid;
  column-gap: 50px;
  max-width: 1400px;
  margin: 1rem auto;
}

#service-element {
  width: 80%;
  margin: auto;
}
@media (max-width: 600px) {
  #service-container {
    margin-top: -30px;
  }
}

/* Screen larger than 600px? 2 column*/
@media (min-width: 600px) {
  #service-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  /* Adds a margin to reach the beginning of the word (same size as image before area name + margin) */
  #service-container {
    margin-left: 10%;
    margin-right: 10%;
  }
  #service-element {
    width: auto;
    margin: 0;
  }
}

/* Screen larger than 950px? 3 column */
@media (min-width: 950px) {
  #service-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Screen larger than 1200px? 4 column */
@media (min-width: 1200px) {
  #service-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
