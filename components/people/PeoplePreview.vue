<template>
  <div class="people-container">
    <CardImage
      v-for="person in people"
      :id="person.id"
      :key="person.id"
      link="/people/"
      thumbnail="https://www.lago.it/wp-content/uploads/2015/03/luoghi-di-lavoro-accoglienti_L2R3272_01.jpg"
      :name="person.name"
    />
  </div>
</template>

<script>
export default {
  name: 'PeoplePreview',
  props: {
    people: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
.people-container {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 40px;
}
</style>
