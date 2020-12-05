<template>
  <div class="app">
    <div class="column is-2">
      <h1 class="is-size-3 has-text-white title">Montana</h1>
      <h1 class="is-size-3 has-text-white subtitle">COVID19</h1>
    </div>

    <Dashboard />
    <div class="map">
      <Covid />
    </div>
    <Footer />
  </div>
</template>

<script>
import Dashboard from "./components/Dashboard.vue";
import Footer from "./components/Footer.vue";
import Covid from "./components/Covid.vue";

export default {
  name: "App",
  components: {
    Dashboard,
    Covid,
    Footer
  }
};
</script>

<style>
.map {
  display: flex;
  justify-content: center;
  padding: 4%;
}
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#heading {
  color: white;
  font-size: 50px;
}
@media (max-width: 500px) {
  #heading {
    margin: auto;
    width: 70%;
    margin-bottom: 5%;
  }
}

body {
  background: #222222;
}
</style>
