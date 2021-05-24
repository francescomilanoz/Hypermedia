<template>
  <div id="theFooter">
    <div id="footerLogo">
      <nuxt-link to="/">
        <img src="~/assets/img/logov2onlytext.svg" alt="Hypermood text logo" />
      </nuxt-link>
    </div>
    <div id="footerList">
      <ul>
        <li>
          <nuxt-link to="/">
            <img src="~/assets/img/IG.svg" alt="Instagram link" />
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/"
            ><img src="~/assets/img/FB.svg" alt="Facebook link" />
          </nuxt-link>
        </li>
        <li id="last-social-element">
          <nuxt-link to="/"
            ><img src="~/assets/img/TW.svg" alt="Twitter link" />
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
#theFooter {
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  bottom: 0;
  width: 100%;
  background-color: #ffff;
  color: white;
  text-align: center;
}

#footerList li {
  display: inline;
  padding-right: 15px;
  height: 50px;
}

#footerList li img {
  height: 25px;
}

#last-social-element {
  margin-right: 13px;
}

#footerLogo {
  margin: 0 32px;
  float: left;
  opacity: 100%;
}

#footerLogo img {
  height: 30px;
}

@media (max-width: 768px) {
  #footerList li {
    display: inline;
    padding-right: 10px;
    height: 50px;
  }
  #footerLogo {
    margin: 0 10px;
    float: left;
    opacity: 100%;
  }
  #footerLogo img {
    height: 20px;
    margin: 0 10px;
  }
}

@media (max-width: 320px) {
  #footerList li {
    display: inline;
    padding-right: 5px;
    height: 50px;
  }
  #footerList li img {
    height: 16px;
  }
  #footerLogo img {
    height: 15px;
    margin: 0 11px;
  }
}
</style>
