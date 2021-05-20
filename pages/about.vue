<template>
  <div>
    <Cover
      title="About Us"
      preview-text="Founded in Italy in 2000, today Hypermood is a multinational group that focuses its consulting offering on hard technology challenges with large-scale business impact in databases, networking, machine learning and security."
      thumbnail="https://www.lago.it/wp-content/uploads/2015/03/luoghi-di-lavoro-accoglienti_L2R3272_01.jpg"
    />
    <TwoColumn
      title1="Mission"
      text1="Our mission is to empower every person and every organization on the
          planet to achieve more."
      title2="Vision"
      text2="To be Earth’s most customer-centric company, where customers can find
          and discover everything about databases, networking, machine learning
          and security."
    />
    <div class="mapAndTextContainer">
      <div class="containerColumn">
        <h3>Our office</h3>
        <div>
          <p>You can find our main office right next to the Milan cathedral.</p>
          <p>We are open from 9am until 18pm.</p>
          <button id="button" type="button">
            <nuxt-link id="linkButton" to="/contact-us">CONTACT US</nuxt-link>
          </button>
        </div>
      </div>
      <div class="containerColumn">
        <img id="mapImage" src="~/assets/img/map.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.mapAndTextContainer {
  margin-top: 100px;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  padding-left: 10%;
  padding-right: 10%;
  background-color: #e7f5fc;
  align-items: center;
}
.containerColumn {
  flex: 50%;
}
#mapImage {
  width: 100%;
  padding-left: 10px;
}

@media (max-width: 640px) {
  .mapAndTextContainer {
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
h3 {
  font-size: 30px;
  color: #55ccd9;
}
#text {
  color: #7a8d9f;
  font-size: 20px;
}
p {
  color: #7a8d9f;
  font-size: 20px;
}
#button {
  width: 130px;
  min-width: 95px;
  height: 43px;
  border-radius: 30px;
  border-width: 0px;
  cursor: pointer;
  background: #55ccd9;
  color: white;
  font-weight: bold;
  margin-top: 20px;
}
#linkButton {
  color: white;
  font-weight: bold;
  text-decoration: none;
}
</style>
