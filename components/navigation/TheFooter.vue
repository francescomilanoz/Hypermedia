<template>
  <footer id="theFooter">
    <div id="footerLogo">
      <nuxt-link to="/">
        <img src="~/assets/img/logov2onlytext.svg" alt="Hypermood text logo" />
      </nuxt-link>
    </div>
    <div>
      <div id="footerFirstCenterText">Copyright © 2021</div>
      <div id="footerSecondCenterText">Hypermood is 100% carbon neutral</div>
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
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
}
</script>

<style scoped>
#theFooter {
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  bottom: 0;
  width: 100%;
  border-top-width: 10px;
  border-top-style: solid;
  border-color: var(--blue);
  background-color: white;
  text-align: center;
  z-index: 1;
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
  opacity: 1;
}

#footerLogo img {
  height: 30px;
}

#footerFirstCenterText {
  color: var(--blue);
}

#footerSecondCenterText {
  color: var(--blue);
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
    opacity: 1;
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

@media (max-width: 805px) {
  #footerFirstCenterText {
    font-size: 13px;
  }
  #footerSecondCenterText {
    font-size: 13px;
  }
}
@media (max-width: 530px) {
  #footerSecondCenterText {
    font-size: 0px;
  }
  @media (max-width: 430px) {
    #footerFirstCenterText {
      font-size: 0px;
    }
  }
}
</style>
