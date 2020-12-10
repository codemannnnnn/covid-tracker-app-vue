<template lang="html">
  <div class="columns has-text-white is-size-4 custom-col">
    <div class="column is-12">
      <a href="#map"><h1>Map</h1></a>
    </div>
    <div class="column is-12">
      <a href="#chart"><h1>Charts</h1></a>
    </div>
    <div class="column is-12">
      <a href="#links"><h1>Data</h1></a>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {}
};
</script>

<style lang="css">
/* .custom-col {
  padding-left: 10%;
} */
.custom-col {
  padding-top: 20%;
}

.custom-col a {
  color: white;
}
@media (max-width: 500px) {
  .custom-col {
    padding-top: 5%;
    display: flex;
    width: 100%;
  }
}
</style>
