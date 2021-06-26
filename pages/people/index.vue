<template>
  <div class="app-container">
    <Cover
      title="People"
      preview-text="Founded in Italy in 2000, today Hypermood is a multinational group that focuses its consulting offering on hard technology challenges with large-scale business impact in databases, networking, machine learning and security."
      thumbnail="https://static.wixstatic.com/media/357df1_9c36c10331734c9b8bea7357fb13431e~mv2.jpg"
    />
    <h1>The whole Hypermood team</h1>
    <div class="filters-container">
      <p>Filter by</p>
      <button
        v-if="selected === 'All'"
        class="button-selected"
        @click="selected = 'All'"
      >
        ALL
      </button>

      <button v-else class="button" @click="selected = 'All'">ALL</button>

      <button
        v-if="selected === 'Responsible'"
        class="button-selected"
        @click="selected = 'Responsible'"
      >
        AREA RESPONSIBLES
      </button>

      <button v-else class="button" @click="selected = 'Responsible'">
        AREA RESPONSIBLES
      </button>

      <button
        v-if="selected === 'Project manager'"
        class="button-selected"
        @click="selected = 'Project manager'"
      >
        PROJECT MANAGERS
      </button>

      <button v-else class="button" @click="selected = 'Project manager'">
        PROJECT MANAGERS
      </button>

      <button
        v-if="selected === 'Reference'"
        class="button-selected"
        @click="selected = 'Reference'"
      >
        SERVICE REFERENCES
      </button>

      <button v-else class="button" @click="selected = 'Reference'">
        SERVICE REFERENCES
      </button>

      <button
        v-if="selected === 'Worker'"
        class="button-selected"
        @click="selected = 'Worker'"
      >
        ENGINEERS
      </button>

      <button v-else class="button" @click="selected = 'Worker'">
        ENGINEERS
      </button>
    </div>
    <div v-if="selected === 'All'" class="p-container">
      <PeoplePreview :people="allPerson" :has-description="false" />
    </div>
    <div v-if="selected === 'Project manager'" class="p-container">
      <PeoplePreview :people="projectManagers" :has-description="false" />
    </div>
    <div v-if="selected === 'Responsible'" class="p-container">
      <PeoplePreview :people="responsibles" :has-description="false" />
    </div>
    <div v-if="selected === 'Reference'" class="p-container">
      <PeoplePreview :people="references" :has-description="false" />
    </div>
    <div v-if="selected === 'Worker'" class="p-container">
      <PeoplePreview :people="workers" :has-description="false" />
    </div>
  </div>
</template>

<script>
import PeoplePreview from '~/components/people/PeoplePreview'
export default {
  components: {
    PeoplePreview,
  },

  async asyncData({ $axios, route }) {
    const { data } = await $axios.get(`${process.env.BASE_URL}/api/people`)
    const allPerson = data
    let projectManagers = []
    let responsibles = []
    let references = []
    let workers = []
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

    allPerson.sort(function (person1, person2) {
      return person1.name.localeCompare(person2.name)
    })

    projectManagers = projectManagers.filter(
      (value, index) => projectManagers.indexOf(value) === index
    )
    projectManagers.sort(function (person1, person2) {
      return person1.name.localeCompare(person2.name)
    })
    responsibles = responsibles.filter(
      (value, index) => responsibles.indexOf(value) === index
    )
    responsibles.sort(function (person1, person2) {
      return person1.name.localeCompare(person2.name)
    })
    references = references.filter(
      (value, index) => references.indexOf(value) === index
    )
    references.sort(function (person1, person2) {
      return person1.name.localeCompare(person2.name)
    })
    workers = workers.filter((value, index) => workers.indexOf(value) === index)

    workers.sort(function (person1, person2) {
      return person1.name.localeCompare(person2.name)
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
  methods: {
    changeVar(value) {
      this.selected = value
    },
  },
}
</script>

<style scoped>
.p-container {
  padding-left: 10%;
  padding-right: 10%;
  margin-bottom: 40px;
}
h1 {
  color: var(--blue);
  display: flex;
  justify-content: center;
  margin-top: -20px;
  margin-left: 10%;
  margin-right: 10%;
  text-align: center;
}
p {
  color: var(--blue);
  font-size: 20px;
  margin-bottom: auto;
}
@media (max-width: 740px) {
  .p-container {
    margin: auto;
  }
  .people-container {
    justify-content: center;
    gap: 30px;
  }
}
a {
  text-decoration: none;
}
.app-container {
  padding-bottom: 80px;
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
  margin-top: 10px;
}
.button:active {
  background: var(--blue);
  color: white;
}
.button-selected {
  min-width: 100px;
  height: 43px;
  border-radius: 30px;
  border-width: 0px;
  cursor: pointer;
  border-color: var(--blue);
  border-width: 1px;
  background: var(--blue);
  color: white;
  font-weight: bold;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 10px;
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
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 10px;
  margin-bottom: 40px;
  display: flex;
  flex-wrap: wrap;
  column-gap: 20px;
  justify-content: center;
}
h3 {
  color: var(--blue);
  padding-left: 10%;
  padding-right: 5%;
  padding-bottom: 20px;
}
@media (max-width: 350px) {
  h1 {
    font-size: 25px;
  }
}
</style>
