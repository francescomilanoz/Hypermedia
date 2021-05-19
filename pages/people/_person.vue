<template>
  <div>
    <Cover
      :title="person2.name"
      :preview-text="person2.roleServices[0].service_id"
      thumbnail="https://www.lago.it/wp-content/uploads/2015/03/luoghi-di-lavoro-accoglienti_L2R3272_01.jpg"
    />
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

<style></style>
