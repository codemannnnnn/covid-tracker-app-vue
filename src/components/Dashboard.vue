<template lang="html">
  <div class="dashboard-wrapper">
    <div class="dash-box-wrap" v-for="item in data" :key="item.key">
      <a id="dash-item">Positive: {{ item.positive }}</a>
      <a id="dash-item">Negative: {{ item.negative }}</a>
    </div>
    <div class="dash-box-wrap" v-for="item in data" :key="item.key">
      <a id="dash-item">Total Test Results: {{ item.totalTestResults }}</a>
      <a id="dash-item"
        >Hospitalized Currently: {{ item.hospitalizedCurrently }}</a
      >
      <a id="dash-item"
        >Hospitalized Cumulative: {{ item.hospitalizedCumulative }}
      </a>
      <a id="dash-item">Currently in ICU: {{ item.inIcuCurrently }}</a>
      <a id="dash-item"
        >On Ventilator Currently: {{ item.onVentilatorCurrently }}</a
      >
      <a id="dash-item">Recovered: {{ item.recovered }}</a>
      <a id="dash-item">Last Updated: {{ item.lastUpdateEt }}</a>
      <a id="dash-item">Death: {{ item.death }}</a>
      <a id="dash-item">Hospitalized: {{ item.hospitalized }}</a>
      <a id="dash-item"></a>
      <a id="dash-item"></a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: []
    };
  },

  methods: {
    getMtData: function() {
      fetch("https://api.covidtracking.com/v1/states/mt/current.json")
        .then(response => response.json())
        .then(data => {
          this.data.push(data);
        });
    }
  },
  created() {
    this.getMtData();
  }
};
</script>

<style lang="css">
.dashboard-wrapper {
  width: 100%;
  padding-bottom: 2%;
}
.dash-box-wrap {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0;
  padding: 10px;
  width: auto;
}
#dash-item {
  display: flex;
  justify-content: space-between;
  width: auto;
  border: 1px solid black;
  border-radius: 20px;
  background: #333;
  color: white;
  padding: 2%;
  margin: 1%;
}
</style>
