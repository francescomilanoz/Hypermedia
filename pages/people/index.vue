<template>
  <div class="app-container">
    <Cover
      title="People"
      preview-text="Founded in Italy in 2000, today Hypermood is a multinational group that focuses its consulting offering on hard technology challenges with large-scale business impact in databases, networking, machine learning and security."
      thumbnail="https://www.sunnywayteambuilding.com/images/news/team-3373638_1920.jpg"
    />
    <div class="filters-container">
      <button class="button" @click="selected = 'All'">ALL</button>

      <button class="button" @click="selected = 'Responsible'">
        RESPONSIBLE
      </button>
      <button class="button" @click="selected = 'Project manager'">
        PROJECT MANAGER
      </button>
      <button class="button" @click="selected = 'Reference'">REFERENCE</button>
      <button class="button" @click="selected = 'Worker'">WORKER</button>

      <br />
    </div>
    <h3>Showing '{{ selected }}'</h3>
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
    <div v-if="selected === 'Responsible'" class="people-container">
      <CardImage
        v-for="person in responsibles"
        :id="person.id"
        :key="person.id"
        link="/people/"
        :thumbnail="person.image"
        :name="person.name"
      />
    </div>
    <div v-if="selected === 'Reference'" class="people-container">
      <CardImage
        v-for="person in references"
        :id="person.id"
        :key="person.id"
        link="/people/"
        :thumbnail="person.image"
        :name="person.name"
      />
    </div>
    <div v-if="selected === 'Worker'" class="people-container">
      <CardImage
        v-for="person in workers"
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
    const projectManagers = []
    const responsibles = []
    const references = []
    const workers = []
    allPerson.forEach((person) => {
      if (person.roleServices !== undefined) {
        person.roleServices.forEach((roleService) => {
          if (roleService.role === 'Project manager') {
            projectManagers.push(person)
          }
          if (roleService.role === 'Reference') {
            references.push(person)
          }
        })
      }

      if (person.roleAreas !== undefined) {
        person.roleAreas.forEach((roleAreas) => {
          if (roleAreas.role === 'Responsible') {
            responsibles.push(person)
          }
          if (roleAreas.role === 'Worker') {
            workers.push(person)
          }
        })
      }
    })

    return {
      allPerson,
      projectManagers,
      responsibles,
      references,
      workers,
    }
  },
  data() {
    return {
      selected: 'All',
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
/* .button.active {
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
} */
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
  margin-right: 20px;
}
.button:active {
  background: var(--blue);
  color: white;
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
.filters-container {
  padding-left: 10%;
  padding-right: 10%;
  padding-bottom: 10px;
}
h3 {
  color: var(--blue);
  padding-left: 10%;
  padding-right: 5%;
  padding-bottom: 20px;
}
</style>
