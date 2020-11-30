<template>
  <div id="app">
    <div class="header">
      <h1 id="heading">Montana COVID-19 Data</h1>
    </div>

    <Dashboard />

    <Footer />
  </div>
</template>

<script>
import Dashboard from "./components/Dashboard.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Dashboard,
    Footer
  }
};
</script>

<style>
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

body {
  background: #222222;
}
</style>
