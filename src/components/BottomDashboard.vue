<template lang="html">
  <div id="dash-item-bottom" style="padding-top: 10px">
    {{ data[0].lastUpdateEt }}
    <br />
    <a id="dash-item-bottom-content">Last Updated</a>
  </div>
</template>

<script>
export default {
  props: ["data"]
};
</script>

<style lang="css"></style>
