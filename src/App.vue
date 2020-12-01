<template>
  <div id="app">
    <div class="header">
      <h1 id="heading">Montana COVID-19 Data</h1>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
