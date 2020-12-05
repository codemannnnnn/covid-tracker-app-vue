<template>
  <!-- <div id="dash-item-bottom" style="padding-top: 10px">
    {{ data[0].lastUpdateEt }}
    <br />
    <a id="dash-item-bottom-content">Last Updated</a>
  </div> -->
  <div class="has-text-white">
    <p class="heading">{{ data[0].lastUpdateEt }}</p>
    <p class="heading">Last Updated</p>
  </div>
</template>

<script>
export default {
  props: ["data"]
};
</script>
