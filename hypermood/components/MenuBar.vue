<template>
  <div>
    <nav class="navbar navbar-light bg-light static-top">
      <div class="container">
        <NuxtLink id="logo-area" to="/ciao">
          <img id="logo" src="~/assets/img/logo.png"
        /></NuxtLink>
        <div class="col-lg-6 h-100 text-center text-lg-left my-auto">
          <ul class="list-inline-header">
            <li class="list-inline-item-header"><a href="#!">About</a></li>
            <li class="list-inline-item-header"><a href="#!">Contact</a></li>
            <li class="list-inline-item-header"><a href="#!">Contact</a></li>
            <li class="list-inline-item-header">
              <a href="#!">Terms of Use</a>
            </li>
            <li class="list-inline-item-header">
              <a href="#!">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {}
</script>

<style>
#logo-area {
  max-width: 20%;
  min-width: 100px;
}
#logo {
  max-width: 100%;
}
.list-inline-item-header {
  display: inline-block;
}
.list-inline-item-header:not(:first-child) {
  margin-left: 2rem;
}

.list-inline-header {
  list-style: none;
  vertical-align: middle;
}
</style>
