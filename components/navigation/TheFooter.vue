<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 h-100 text-center text-lg-left my-auto">
        <ul class="list-inline mb-2">
          <li class="list-inline-item"><a href="#!">About</a></li>
          <li class="list-inline-item">⋅</li>
          <li class="list-inline-item"><a href="#!">Contact</a></li>
          <li class="list-inline-item">⋅</li>
          <li class="list-inline-item"><a href="#!">Terms of Use</a></li>
          <li class="list-inline-item">⋅</li>
          <li class="list-inline-item"><a href="#!">Privacy Policy</a></li>
        </ul>
        <p class="text-muted small mb-4 mb-lg-0">
          © Your Website 2021. All Rights Reserved.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.col-lg-6 {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}

.h-100 {
  height: 100% !important;
}

.text-center {
  text-align: center !important;
}

@media (min-width: 992px) {
  .text-lg-left {
    text-align: left !important;
  }
}

.my-auto {
  margin-top: auto !important;
}

.mb-2 {
  margin-bottom: 0.5rem !important;
}

.mb-4 {
  margin-bottom: 1.5rem !important;
}

.list-inline {
  padding-left: 0;
  list-style: none;
}

.text-muted {
  color: #6c757d !important;
}

small {
  font-size: 80%;
}

.mb-lg-0 {
  margin-bottom: 0 !important;
}
</style>
