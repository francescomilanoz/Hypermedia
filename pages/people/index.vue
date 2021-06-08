<template>
  <div class="app-container">
    <Cover
      title="People"
      preview-text="Founded in Italy in 2000, today Hypermood is a multinational group that focuses its consulting offering on hard technology challenges with large-scale business impact in databases, networking, machine learning and security."
      thumbnail="https://www.sunnywayteambuilding.com/images/news/team-3373638_1920.jpg"
    />

    <button id="button" @click="selected = 'All'">ALL</button>
    <button id="button" @click="selected = 'Responsible'">RESPONSIBLE</button>
    <button id="button" @click="selected = 'Project manager'">
      PROJECT MANAGER
    </button>
    <button id="button" @click="selected = 'Reference'">REFERENCE</button>
    <button id="button" @click="selected = 'Worker'">WORKER</button>

    <br />
    <div v-if="selected === 'All'" class="people-container">
      <CardImage
        v-for="person in allPerson"
        :id="person.id"
        :key="person.id"
        link="/people/"
        :thumbnail="person.image"
        :name="person.name"
      />
    </div>
    <div v-if="selected === 'Project manager'" class="people-container">
      <CardImage
        v-for="person in projectManagers"
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
  // props: {
  //   selected: {
  //     type: String,
  //     default: 'all',
  //   },
  // },
  async asyncData({ $axios, route }) {
    const { data } = await $axios.get(`${process.env.BASE_URL}/api/people`)
    const allPerson = data
    const projectManagers = []
    allPerson.forEach((person) => {
      if (person.roleServices !== undefined) {
        person.roleServices.forEach((roleService) => {
          if (roleService.role === 'Project manager') {
            projectManagers.push(person)
          }
        })
      }
    })

    return {
      allPerson,
      projectManagers,
    }
  },
  data() {
    return {
      selected: 'all',
    }
  },
  head() {
    return {
      title: 'People - Hypermood',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Click here to find out more about Hypermood team!',
        },
      ],
    }
  },
  // env: {
  //   selected: 'all',
  // },
  methods: {
    changeVar(value) {
      this.selected = value
    },
  },
}
</script>

<style scoped>
.people-container {
  padding-left: 3%;
  padding-right: 3%;
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
