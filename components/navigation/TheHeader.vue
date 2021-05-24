<template>
  <div class="header-container">
    <header class="the-header">
      <TheSideNavToggle @toggle="$emit('sidenavToggle')" />
      <div class="logo">
        <nuxt-link to="/">
          <img src="~/assets/img/Logov2.svg" alt="Hypermood logo" />
        </nuxt-link>
      </div>
      <div class="spacer"></div>
      <div class="navigation-items">
        <ul class="nav-list">
          <li class="nav-item"><nuxt-link to="/areas">AREAS</nuxt-link></li>
          <li class="nav-item">
            <nuxt-link to="/services">SERVICES</nuxt-link>
          </li>
          <li class="nav-item"><nuxt-link to="/people">PEOPLE</nuxt-link></li>
          <li class="nav-item"><nuxt-link to="/about">ABOUT</nuxt-link></li>
          <li class="nav-item">
            <nuxt-link to="/contact-us">CONTACT US</nuxt-link>
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script>
import TheSideNavToggle from '@/components/Navigation/TheSideNavToggle'

export default {
  name: 'TheHeader',
  components: {
    TheSideNavToggle,
  },
}
</script>

<style scoped>
.header-container {
  height: 60px;
  top: 0;
}

.the-header {
  width: 100%;
  position: fixed;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgb(255, 255, 255, 0.85);
  z-index: 100;
  box-sizing: border-box;
  padding: 0 20px;
  top: 0;
}

.logo img {
  margin: 0 10px;
  float: left;
  height: 50px;
  opacity: 100%;
  padding-top: 5px;
}

@media (max-width: 400px) {
  .logo img {
    margin: 0 10px;
    float: left;
    height: 40px;
    opacity: 100%;
  }
}

.spacer {
  flex: 1;
}

.navigation-items {
  display: none;
}

@media (min-width: 768px) {
  .navigation-items {
    display: block;
  }
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.nav-item {
  margin: 0 10px;
}

.nav-item a {
  text-decoration: none;
  color: var(--blue);
}

.nav-item a:hover,
.nav-item a:active,
.nav-item a.nuxt-link-active {
  text-decoration: underline;
}
</style>
