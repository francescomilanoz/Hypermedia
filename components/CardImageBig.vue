<template>
  <div>
    <div id="container">
      <h2 id="card-name">{{ name }}</h2>
      <div
        id="img-container"
        :style="{ backgroundImage: 'url(' + thumbnail + ')' }"
      ></div>
      <p id="card-description">{{ description }}</p>
      <nuxt-link class="link-white-button" :to="link + id">
        <button id="button" class="white-button">Learn More</button></nuxt-link
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
#container {
  width: 250px;
  height: 400px;
  text-align: center;
  padding-bottom: 40px;
  background: var(--blue);
  border-radius: 15px;
  position: relative;
}
#img-container {
  position: absolute;
  left: 75px;
  top: 70px;
  width: 100px;
  height: 100px;
  background-size: cover;
}
#card-name {
  padding-top: 20px;
}
#card-description {
  padding-top: 140px;
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
  position: absolute;
  left: 60px;
  bottom: 40px;
}
@media (max-width: 685px) {
  #container {
    width: 200px;
    height: 280px;
    padding-bottom: 24px;
    border-radius: 9px;
  }
  #img-container {
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
  #card-description {
    padding-top: 90px;
  }
}
</style>
