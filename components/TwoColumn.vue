<template>
  <div>
    <div class="grid-container">
      <div id="item-1" class="grid-item">
        <h3>{{ title1 }}</h3>
        <div id="text">
          {{ text1 }}
        </div>
      </div>
      <div id="item-2" class="grid-item">
        <h3>{{ title2 }}</h3>
        <div id="text">
          {{ text2 }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TwoColumn',
  props: {
    title1: {
      type: String,
      required: true,
    },
    title2: {
      type: String,
      required: true,
    },
    text1: {
      type: String,
      required: true,
    },
    text2: {
      type: String,
      required: true,
    },
  },
}
</script>

<style>
.grid-container {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: auto auto;
  padding-left: 10%;
  padding-right: 10%;
  column-width: 50%;
}
.grid-item {
  background-color: white;
  font-size: 30px;
  text-align: left;
}
#item-2 {
  padding-left: 10%;
}
#item-1 {
  background-color: white;
  border-right: 1px solid #7a8d9f;
  padding-bottom: 30px;
  padding-right: 5%;
}
@media (max-width: 640px) {
  .grid-container {
    grid-template-columns: auto;
    column-width: 100%;
  }
  #item-1 {
    border: none;
  }
  #item-2 {
    padding-left: 0px;
  }
}
h3 {
  color: #55ccd9;
}
#text {
  color: #7a8d9f;
  font-size: 20px;
}
</style>
