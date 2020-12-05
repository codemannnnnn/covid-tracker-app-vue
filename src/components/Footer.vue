<template lang="html">
  <div class="component-wrapper has-text-white">
    <h4>Data Sources</h4>
    <div class="source-info" v-for="item in data" :key="item.key">
      <strong class="has-text-white">{{ item.title }}</strong> -
      <a id="source-link" :href="item.website"
        >Website <font-awesome-icon :icon="externalLink"
      /></a>
      &nbsp;
      <a id="source-link" :href="item.api"
        >API <font-awesome-icon :icon="externalLink"
      /></a>
    </div>
    <br />
    <div></div>
  </div>
</template>

<script>
import footerData from "../data/footerData";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
export default {
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      data: footerData,
      externalLink: faExternalLinkAlt
    };
  }
};
</script>

<style lang="css">
.component-wrapper {
  padding-top: 20%;
  padding-bottom: 5%;
  color: white;
}
#source-link {
  text-decoration: none;
  color: white;
}
</style>
