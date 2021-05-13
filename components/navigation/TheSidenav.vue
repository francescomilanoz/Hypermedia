<template>
  <div class="sidenav-container">
    <div v-if="show" class="sidenav-backdrop" @click="$emit('close')"></div>
    <transition name="slide-side">
      <div v-if="show" class="sidenav">
        <div class="logo">
          <nuxt-link to="/">
            <img src="~/assets/img/textlogo.png" alt="Hypermood text logo" />
          </nuxt-link>
        </div>
        <ul class="nav-list" @click="$emit('close')">
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
    </transition>
  </div>
</template>

<script>
export default {
  name: 'TheSidenav',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
.logo img {
  margin: 0px 20px 20px 0px;
  float: left;
  height: 50px;
  opacity: 100%;
}

.sidenav-container {
  height: 100%;
  width: 100%;
}

.sidenav-backdrop {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
}

.sidenav {
  height: 100%;
  width: 300px;
  background-color: white;
  z-index: 10000;
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding: 30px;
}

.slide-side-enter-active,
.slide-side-leave-active {
  transition: all 0.3s ease-out;
}
.slide-side-enter,
.slide-side-leave-to {
  transform: translateX(-100%);
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-item {
  margin: 20px 0;
}

.nav-item a {
  text-decoration: none;
  color: var(--blue);
  font-size: 1.5rem;
}

.nav-item a:hover,
.nav-item a:active,
.nav-item a.nuxt-link-active {
  text-decoration: underline;
}
</style>
