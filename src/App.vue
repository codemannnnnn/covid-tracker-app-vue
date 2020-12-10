<template>
  <div class="app">
    <div class="custom-nav-col">
      <div class="column is-4 ">
        <h1 class="is-size-3 has-text-white title">Montana</h1>
        <h1 class="is-size-3 has-text-white subtitle">COVID19</h1>
      </div>

      <div>
        <Navbar />
      </div>
    </div>
    <hr />
    <Dashboard />
    <div class="map">
      <a name="map"><Covid /></a>
    </div>
    <div>
      <a name="chart"><ChartTemplate /></a>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Dashboard from "./components/Dashboard.vue";
import Footer from "./components/Footer.vue";
import Covid from "./components/Covid.vue";
import ChartTemplate from "./components/ChartTemplate.vue";

export default {
  name: "App",
  components: {
    Dashboard,
    Covid,
    Footer,
    ChartTemplate,
    Navbar
  }
};
</script>

<style>
.custom-nav-col {
  display: flex;
  justify-content: space-around;
  width: 50%;
  align-items: center;
}
@media (max-width: 500px) {
  .custom-nav-col {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
}
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
