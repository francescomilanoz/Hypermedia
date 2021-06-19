<template>
  <div class="app-container">
    <Cover
      title="HYPERMOOD"
      preview-text="We are the leading IT consulting company in various areas. Visit this site to find out more, or click the 'contact us' button to speak directly with one of our experts!"
      thumbnail="https://www.lavoroediritti.com/wp-content/uploads/2017/07/consegna-azienda-1.jpg"
    />
    <a id="our-areas" name="our-areas" class="anchor"></a>
    <h1 id="blue-text">Our Areas</h1>
    <br />
    <div class="areas-container">
      <CardImageBig
        v-for="area in allAreas"
        :id="area.id"
        :key="area.id"
        link="/areas/"
        :thumbnail="area.whiteimage"
        :name="area.name"
        :description="area.shortDescription"
      />
    </div>
    <a id="our-services" name="our-best-services" class="anchor"></a>
    <div id="best-services-container">
      <div>
        <h2 id="blue-text">Our Best Services</h2>
      </div>
      <div>
        <ServicesPreviewList id="best-services-list" :services="bestServices" />
      </div>
    </div>
    <div class="finalTwoColumns">
      <div class="containerColumn">
        <h2 class="white-text">More questions?</h2>
        <div>
          <nuxt-link id="linkButton" to="/contact-us"
            ><button id="button" type="button">CONTACT US</button></nuxt-link
          >
        </div>
      </div>
      <div class="containerColumn">
        <h2 class="white-text">Discover our story</h2>

        <nuxt-link id="linkButton" to="/about">
          <button id="button" type="button">ABOUT US</button></nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import CardImageBig from '~/components/CardImageBig'
import ServicesPreviewList from '~/components/Services/ServicesPreviewList'
export default {
  components: {
    CardImageBig,
    ServicesPreviewList,
  },
  async asyncData({ $axios }) {
    const [areasData, articlesData] = await Promise.all([
      $axios.get(`${process.env.BASE_URL}/api/areas`),
      $axios.get(`${process.env.BASE_URL}/api/best-services`),
    ])

    return {
      allAreas: areasData.data,
      bestServices: articlesData.data,
    }
  },
  head() {
    return {
      title: 'Hypermood',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Hypermood home page',
        },
      ],
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (this.$route.hash) {
        const el = document.querySelector(this.$route.hash)
        if (el) {
          window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
        }
      }
    })
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
.anchor {
  display: block;
  margin: 0;
  padding: 0;
}
#best-services-container {
  height: 350px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
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
  padding-bottom: 55px;
}
h1 {
  margin-top: -20px;
  font-size: 40px;
  padding-left: 10%;
  padding-right: 10%;
}

h2 {
  font-size: 30px;
  padding-left: 10%;
  padding-right: 10%;
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
  background-color: var(--blue);
  padding-top: 20px;
  padding-bottom: 100px;
  display: flex;
  padding-left: 10%;
  padding-right: 10%;
  align-items: center;
}
.containerColumn {
  flex: 50%;
  justify-content: center;
  color: white;
  text-align: center;
}
#button {
  width: 130px;
  min-width: 95px;
  height: 43px;
  border-radius: 30px;
  border-width: 0px;
  cursor: pointer;
  background: white;
  color: white;
  font-weight: bold;
  margin-top: 20px;
  color: var(--blue);
}
#linkButton {
  color: var(--blue);
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
@media (max-width: 601px) {
  #best-services-container {
    padding-top: 80px;
    padding-bottom: 200px;
  }
  .finalTwoColumns {
    margin-top: -80px;
  }
}
@media (max-width: 350px) {
  h2 {
    font-size: 25px;
  }
}
@media (max-width: 300px) {
  #best-services-container {
    padding-top: 150px;
  }
}
</style>
