<template>
  <div class="app-container">
    <Cover
      title="People"
      preview-text="Founded in Italy in 2000, today Hypermood is a multinational group that focuses its consulting offering on hard technology challenges with large-scale business impact in databases, networking, machine learning and security."
      thumbnail="https://www.sunnywayteambuilding.com/images/news/team-3373638_1920.jpg"
    />
    <div id="filter">
      Filter by
      <button
        class="button active"
        type="button"
        onclick="filterSelection('all')"
      >
        ALL
      </button>
      <button class="button" type="button">
        <nuxt-link class="linkButton" to="/contact-us">RESPONSIBLE</nuxt-link>
      </button>
      <button class="button" type="button">
        <nuxt-link class="linkButton" to="/contact-us"
          >PROJECT MANAGER</nuxt-link
        >
      </button>
      <button class="button" type="button">
        <nuxt-link class="linkButton" to="/contact-us">REFERENCE</nuxt-link>
      </button>
      <button class="button" type="button">
        <nuxt-link class="linkButton" to="/contact-us">WORKER</nuxt-link>
      </button>
    </div>
    <br />
    <div class="people-container">
      <CardImage
        v-for="person in allPerson"
        :id="person.id"
        :key="person.id"
        link="/people/"
        :thumbnail="person.image"
        :name="person.name"
      />
    </div>
  </div>
</template>

<script>
import CardImage from '~/components/CardImage'
export default {
  components: {
    CardImage,
  },
  async asyncData({ $axios, route }) {
    const { data } = await $axios.get(`${process.env.BASE_URL}/api/people`)
    const allPerson = data
    return {
      allPerson,
    }
  },
}
</script>

<style scoped>
.people-container {
  padding-left: 10%;
  padding-right: 10%;
  display: inline-flex;
  flex-wrap: wrap;
  gap: 40px;
}
@media (max-width: 640px) {
  .people-container {
    padding-right: 10%;
    justify-content: center;
    padding-left: 10%;
    gap: 30px;
  }
}
a {
  text-decoration: none;
}
.app-container {
  padding-bottom: 80px;
}
.button.active {
  min-width: 100px;
  height: 43px;
  border-radius: 30px;
  border-width: 0px;
  cursor: pointer;
  background: var(--blue);
  color: white;
  font-weight: bold;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: 20px;
}
.button {
  min-width: 100px;
  height: 43px;
  border-radius: 30px;
  border-width: 0px;
  cursor: pointer;
  border-color: var(--blue);
  border-width: 1px;
  background: white;
  color: var(--blue);
  font-weight: bold;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: 20px;
}
#filter {
  color: var(--blue);
  font-weight: bold;
  margin-left: 10%;
  font-size: 20px;
  margin-bottom: 30px;
}
.linkButton {
  font-weight: bold;
  text-decoration: none;
  color: var(--blue);
}
#linkButton-clicked {
  font-weight: bold;
  text-decoration: none;
  color: white;
}
</style>
