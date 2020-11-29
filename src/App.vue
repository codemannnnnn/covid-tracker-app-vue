<template>
  <div id="app">
    <div class="header">
      <h1 id="heading">Montana COVID-19 Tracking</h1>
    </div>
    <Dashboard />
    <Covid />
  </div>
</template>

<script>
import Covid from "./components/Covid.vue";
import Dashboard from "./components/Dashboard.vue";
export default {
  name: "App",
  components: {
    Covid,
    Dashboard
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
.header {
}
body {
  background: #222222;
}
</style>
