<template>
  <div v-if="!hasDescription" class="people-container">
    <CardImage
      v-for="person in people"
      :id="person.id"
      :key="person.id"
      link="/people/"
      :thumbnail="person.image"
      :name="person.name"
      alternative-text-to-append=" profile picture"
    />
  </div>
  <div v-else class="people-container">
    <CardImage
      v-for="person in people"
      :id="person.id"
      :key="person.id"
      link="/people/"
      :thumbnail="person.image"
      :name="person.name"
      :description="person.role"
      alternative-text-to-append=" profile picture"
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
    hasDescription: {
      type: Boolean,
      required: false,
      default: false,
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
