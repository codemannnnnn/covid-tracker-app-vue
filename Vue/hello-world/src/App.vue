<template>
  <div id="app">
    <Gif msg="Cody Branson" />
    <div class="mid-box">
      <New />
      <MapV />
    </div>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

import Gif from "./components/Gif.vue";
import New from "./components/New.vue";
import MapV from "./components/MapV.vue";

export default {
  name: "App",
  components: {
    Gif,
    New,
    MapV
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

.mid-box {
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  width: 70%;
  margin: auto;
  padding: 5%;
}
</style>
