<template>
  <div class="app-container">
    <div>
      <Cover
        :title="person2.name"
        :preview-text="person2.email"
        thumbnail="https://www.lago.it/wp-content/uploads/2015/03/luoghi-di-lavoro-accoglienti_L2R3272_01.jpg"
      />
      <h1>Bio</h1>
      <div class="description-person">
        {{ person2.description }}
      </div>
    </div>
    <style scoped>
      #responsible {
        display: none;
      }
    </style>
    <h1 id="responsible">Responsible for</h1>
    <div class="area-element">
      <div v-for="roleArea in person2.roleAreas" :key="roleArea.id">
        <div v-if="roleArea.role === 'Responsible'">
          <style scoped>
            #responsible {
              display: inline;
              padding-bottom: 30px;
            }
          </style>
        </div>
        <CardImage
          v-if="roleArea.role === 'Responsible'"
          :id="roleArea.area.id"
          link="/areas/"
          :thumbnail="roleArea.area.image"
          :name="roleArea.area.name"
        />
      </div>
    </div>
    <style scoped>
      #project-manager {
        display: none;
      }
    </style>
    <h1 id="project-manager">Project manager</h1>
    <div class="area-element">
      <div v-for="roleService in person2.roleServices" :key="roleService.id">
        <div v-if="roleService.role === 'Project manager'">
          <style scoped>
            #project-manager {
              display: inline;
              padding-bottom: 30px;
            }
          </style>
        </div>
        <CardImage
          v-if="roleService.role === 'Project manager'"
          :id="roleService.service.id"
          link="/services/"
          :thumbnail="roleService.service.image"
          :name="roleService.service.name"
        />
      </div>
    </div>
    <style scoped>
      #reference {
        display: none;
      }
    </style>
    <h1 id="reference">Reference</h1>
    <div class="area-element">
      <div v-for="roleService in person2.roleServices" :key="roleService.id">
        <div v-if="roleService.role === 'Reference'">
          <style scoped>
            #reference {
              display: inline;
              padding-bottom: 30px;
            }
          </style>
        </div>
        <CardImage
          v-if="roleService.role === 'Reference'"
          :id="roleService.service.id"
          link="/services/"
          :thumbnail="roleService.service.image"
          :name="roleService.service.name"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Cover from '~/components/Cover'
export default {
  components: {
    Cover,
  },
  async asyncData({ $axios, route }) {
    const { person } = route.params
    const { data } = await $axios.get(
      `${process.env.BASE_URL}/api/people/${person}`
    )
    const person2 = data
    return {
      person2,
    }
  },
}
</script>

<style scoped>
h1 {
  margin-left: 10%;
  margin-right: 10%;
  color: var(--blue);
}

.description-person {
  display: flex;
  flex-wrap: wrap;
  color: var(--blue);
  font-size: 16px;
  width: 70%;
  margin-left: 10%;
  padding-bottom: 30px;
}
.container-person {
  width: 100px;
  height: 100px;
  position: relative;
  text-align: center;
  padding-right: 40px;
  padding-bottom: 40px;
  margin-left: 10%;
}
.person-img {
  width: 100%;
  height: 100%;
  position: relative;
  background-position: center;
  background-size: cover;
  border-radius: 50%;
}
.area-element {
  margin-left: 10%;
}
.app-container {
  padding-bottom: 80px;
}
a {
  text-decoration: none;
}
</style>
