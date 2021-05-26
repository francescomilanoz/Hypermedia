<template>
  <div>
    <div class="container">
      <h2>{{ name }}</h2>
      <div
        class="img-container"
        :style="{ backgroundImage: 'url(' + thumbnail + ')' }"
      ></div>
      <p>{{ description }}</p>
      <nuxt-link id="linkButton" :to="link + id">
        <button id="button">Learn More</button></nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardImageBig',
  props: {
    thumbnail: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    description: { type: String, required: true },
  },
}
</script>

<style scoped>
.container {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 400px;
  text-align: center;
  padding-bottom: 40px;
  background: var(--blue);
  border-radius: 15px;
}
.img-container {
  width: 100px;
  height: 100px;
  background-position: center;
  background-size: cover;
  margin-bottom: 15px;
}
.name-image {
  margin-top: 5px;
  color: var(--blue);
}
h2,
p {
  color: white;
  padding-bottom: 15px;
  margin-right: 10%;
  margin-left: 10%;
}
h2 {
  font-size: 22px;
}
#button {
  width: 130px;
  min-width: 95px;
  height: 43px;
  border-radius: 30px;
  border-width: 0px;
  cursor: pointer;
  background: white;
  color: var(--blue);
  font-weight: bold;
  margin-top: 20px;
}
#linkButton {
  color: var(--blue);
  font-weight: bold;
  text-decoration: none;
}
@media (max-width: 685px) {
  .container {
    width: 200px;
    height: 280px;
    padding-bottom: 24px;
    border-radius: 9px;
  }
  .img-container {
    width: 60px;
    height: 60px;
    margin-bottom: 6px;
  }
  p {
    font-size: 12px;
    padding-bottom: 6px;
    margin-right: 10%;
    margin-left: 10%;
  }
  h2 {
    font-size: 17px;
    padding-bottom: 6px;
  }
  #button {
    width: 90px;
    min-width: 50px;
    height: 30px;
    border-radius: 20px;
    border-width: 0px;
    margin-top: 6px;
    margin-bottom: 0px;
    font-size: 10px;
  }
}
</style>
