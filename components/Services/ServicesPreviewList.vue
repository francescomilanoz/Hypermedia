<template>
  <div>
    <div class="service-container">
      <div class="service-grid">
        <div
          v-for="service in services"
          :key="service.service_id"
          class="service-element"
        >
          <div>
            <ServicePreview
              :id="service.service_id"
              :name="service.name"
              :preview-text="service.preview"
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

/* Screen larger than 600px? 2 column*/
@media (min-width: 600px) {
  .service-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  /* Adds a margin to reach the beginning of the word (same size as image before area name + margin) */
  .service-container {
    margin-left: 10%;
    margin-right: 10%;
  }
  .service-element {
    width: auto;
    margin: 0;
  }
}

/* Screen larger than 950px? 3 column */
@media (min-width: 950px) {
  .service-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Screen larger than 1200px? 4 column */
@media (min-width: 1200px) {
  .service-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

/* Screen larger than 1550px? 5 columns */
@media (min-width: 1550px) {
  .service-grid {
    grid-template-columns: repeat(5, 1fr);
  }
}
</style>
