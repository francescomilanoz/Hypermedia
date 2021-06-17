<template>
  <div class="app-container">
    <div id="image">
      <img src="~/assets/img/404.svg" alt="Page not found" />
    </div>
    <div id="center">
      <nuxt-link to="/"> <button id="button">Go Home</button></nuxt-link>
    </div>
  </div>
</template>

<style scoped>
.app-container {
  padding-bottom: 80px;
}
#image {
  margin-left: 30%;
  margin-right: 30%;
  margin-top: 10%;
  margin-bottom: 5%;
}
#center {
  margin: auto;
  width: 10%;
  padding-bottom: 5%;
}
#button {
  min-width: 150px;
  height: 43px;
  border-radius: 30px;
  border-width: 0px;
  cursor: pointer;
  background: var(--blue);
  color: white;
  font-weight: bold;
  padding-left: 20px;
  padding-right: 20px;
}
</style>
