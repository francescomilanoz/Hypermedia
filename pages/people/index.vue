<template>
  <div class="app-container">
    <Cover
      title="People"
      preview-text="Founded in Italy in 2000, today Hypermood is a multinational group that focuses its consulting offering on hard technology challenges with large-scale business impact in databases, networking, machine learning and security."
      thumbnail="https://www.sunnywayteambuilding.com/images/news/team-3373638_1920.jpg"
    />
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
  display: flex;
  flex-wrap: wrap;
  padding-left: 10%;
  padding-right: 5%;
}
@media (max-width: 640px) {
  .people-container {
    justify-content: center;
    padding-right: 10%;
    margin-right: -40px;
  }
}
a {
  text-decoration: none;
}
.app-container {
  padding-bottom: 80px;
}
</style>
