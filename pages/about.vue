<template>
  <div>
    <Cover
      title="About Us"
      preview-text="Founded in Italy in 2000, today Hypermood is a multinational group that focuses its consulting offering on hard technology challenges with large-scale business impact in databases, networking, machine learning and security."
      thumbnail="https://static.wixstatic.com/media/357df1_61c14cc3209648238ae672cb3f3ffa43~mv2.jpg"
    />
    <div>
      <div id="grid-container">
        <div id="item-1" class="grid-item">
          <h1 class="item-title">Our Mission</h1>
          <div id="text">
            Our mission is to empower every person and every organization on the
            planet to achieve more.
          </div>
        </div>
        <div id="item-2" class="grid-item">
          <h1 class="item-title">Our Vision</h1>
          <div id="text">
            To be Earth’s most customer-centric company, where customers can
            find and discover everything about databases, networking, machine
            learning and security.
          </div>
        </div>
      </div>
    </div>
    <div id="mapAndTextContainer">
      <div class="containerColumn">
        <h2>Our office</h2>
        <div>
          <p>P.za del Duomo, 20122 Milano MI (right next to the cathedral)</p>
          <p>We are open from 9am until 18pm.</p>

          <nuxt-link class="link-white-button" to="/contact-us">
            <button id="button" class="white-button" type="button">
              CONTACT US
            </button></nuxt-link
          >
        </div>
      </div>
      <div class="containerColumn">
        <iframe
          id="mapImage"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2150.298457130481!2d9.190527308187068!3d45.46405331687542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6aec34636a1%3A0xab7f4e27101a2e13!2sDuomo%20di%20Milano!5e0!3m2!1sit!2sit!4v1622038308381!5m2!1sit!2sit"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
        <!-- <img id="mapImage" src="~/assets/img/map.png" /> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'About us - Hypermood',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Click here to find out more about our company Hypermood',
        },
      ],
    }
  },
}
</script>

<style scoped>
#mapAndTextContainer {
  margin-top: 40px;
  padding-top: 40px;
  padding-bottom: 100px;
  display: flex;
  padding-left: 10%;
  padding-right: 10%;
  background-color: var(--blue);
  align-items: center;
}
.containerColumn {
  flex: 50%;
}
#mapImage {
  width: 100%;
  height: 400px;
  padding-left: 10px;
}

@media (max-width: 640px) {
  #mapAndTextContainer {
    display: block;
    padding-left: 0%;
    padding-right: 0%;
  }
  .containerColumn {
    padding-bottom: 50px;
    padding-left: 10%;
    padding-right: 10%;
  }
  #mapImage {
    padding-left: 0%;
    padding-right: 0%;
  }
}
h2 {
  font-size: 30px;
  color: white;
}
#text {
  color: white;
  font-size: 20px;
}
p {
  color: white;
  font-size: 20px;
}
#button {
  margin-top: 20px;
}
#grid-container {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: auto auto;
  padding-left: 10%;
  padding-right: 10%;
  margin-top: -30px;
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
  border-right: 1px solid var(--blue);
  padding-bottom: 30px;
  padding-right: 5%;
}
@media (max-width: 640px) {
  #grid-container {
    grid-template-columns: auto;
    column-width: 100%;
  }
  #item-1 {
    border: none;
    padding-bottom: 0px;
  }
  #item-2 {
    padding-left: 0px;
  }
}
.item-title {
  color: var(--blue);
  font-size: 37px;
}
#text {
  color: var(--blue);
  font-size: 20px;
}
@media (max-width: 350px) {
  h1 {
    font-size: 25px;
  }
  h2 {
    font-size: 25px;
  }
}
</style>
