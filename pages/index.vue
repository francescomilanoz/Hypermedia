<template>
  <div class="app-container">
    <Cover
      title="HYPERMOOD"
      preview-text="We are the leading IT consulting company in various areas. Visit this site to find out more, or click the 'contact us' button to speak directly with one of our experts!"
      thumbnail="https://www.lavoroediritti.com/wp-content/uploads/2017/07/consegna-azienda-1.jpg"
    />
    <h3 id="blue-text">Our Areas</h3>
    <br />
    <div class="areas-container">
      <CardImageBig
        v-for="area in allAreas"
        :id="area.id"
        :key="area.id"
        link="/areas/"
        :thumbnail="area.image"
        :name="area.name"
        :description="area.shortDescription"
      />
    </div>
    <div id="best-services-container">
      <h3 id="white-text">Our Best Services</h3>
      <ServicesPreviewList :services="bestServices" />
    </div>
    <div class="finalTwoColumns">
      <div class="containerColumn">
        <h3 class="blue-text">LEFT</h3>
        <div>
          <button id="button" type="button">
            <nuxt-link id="linkButton" to="/contact-us">CONTACT US</nuxt-link>
          </button>
        </div>
      </div>
      <h3 class="blue-text">LEFT</h3>
    </div>
  </div>
</template>

<script>
import CardImageBig from '~/components/CardImageBig'
import ServicesPreviewList from '~/components/Services/ServicesPreviewList.vue'
export default {
  components: {
    CardImageBig,
    ServicesPreviewList,
  },
  async asyncData({ $axios, route }) {
    const { data } = await $axios.get(`${process.env.BASE_URL}/api/areas`)
    const allAreas = data
    const { data2 } = await $axios.get(
      `${process.env.BASE_URL}/api/best-services`
    )
    const bestServices = data2
    return {
      allAreas,
      bestServices,
    }
  },
}
</script>

<style scoped>
.areas-container {
  padding-left: 10%;
  padding-right: 10%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
}
#best-services-container {
  background-color: var(--blue);
  margin-top: 65px;
  height: 350px;
  display: flex;
  justify-content: center;
}
@media (max-width: 640px) {
  .areas-container {
    padding-right: 1%;
    justify-content: center;
    padding-left: 1%;
    gap: 30px;
  }
}
a {
  text-decoration: none;
}
.app-container {
  padding-bottom: 80px;
}

h3 {
  font-size: 30px;
}

#white-text {
  color: white;
}

#blue-text {
  display: flex;
  justify-content: center;
  color: var(--blue);
}
.finalTwoColumns {
  margin-top: 100px;
  padding-top: 20px;
  padding-bottom: 100px;
  display: flex;
  padding-left: 10%;
  padding-right: 10%;
  align-items: center;
}
.containerColumn {
  flex: 50%;
}
#button {
  width: 130px;
  min-width: 95px;
  height: 43px;
  border-radius: 30px;
  border-width: 0px;
  cursor: pointer;
  background: var(--blue);
  color: var(--blue);
  font-weight: bold;
  margin-top: 20px;
}
#linkButton {
  color: white;
  font-weight: bold;
  text-decoration: none;
}
@media (max-width: 640px) {
  .finalTwoColumns {
    display: block;
    padding-left: 0%;
    padding-right: 0%;
  }
  .containerColumn {
    padding-bottom: 50px;
    padding-left: 10%;
    padding-right: 10%;
  }
}
</style>
