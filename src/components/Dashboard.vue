<template lang="html">
  <div class="dashboard-wrapper">
    <div class="dash-box-wrap-top" v-for="item in data" :key="item.key">
      <div id="dash-item-top">
        {{ item.positive }}
        <br />
        <a id="dash-item-top-title">Positive</a>
      </div>
      <div id="dash-item-top">
        {{ item.negative }} <br /><a id="dash-item-top-title">Negative</a>
      </div>
    </div>
    <div class="dash-box-wrap" v-for="item in data" :key="item.key">
      <div id="dash-item">
        {{ item.totalTestResults }}<br /><a id="dash-item-top-content"
          >Total Test Results</a
        >
      </div>
      <div id="dash-item">
        {{ item.hospitalizedCurrently }}<br />

        <a id="dash-item-top-content">Hospitalized Currently</a>
      </div>
      <div id="dash-item">
        {{ item.hospitalizedCumulative }}<br />

        <a id="dash-item-top-content">Hospitalized Cumulative</a>
      </div>
      <div id="dash-item">
        {{ item.inIcuCurrently }}<br />

        <a id="dash-item-top-content">Currently in ICU</a>
      </div>
      <div id="dash-item">
        {{ item.onVentilatorCurrently }}<br />

        <a id="dash-item-top-content">Currently On Ventilator</a>
      </div>
      <div id="dash-item">
        {{ item.recovered }}<br />

        <a id="dash-item-top-content">Recovered</a>
      </div>

      <div id="dash-item">
        {{ item.death }}<br />

        <a id="dash-item-top-content">Deaths</a>
      </div>
      <!-- <div id="dash-item">
        {{ item.hospitalized }}<br />

        <a id="dash-item-top-content">Hospitalized</a>
      </div> -->
    </div>
    <div id="dash-item-bottom">
      {{ data[0].lastUpdateEt }}<br />

      <a id="dash-item-bottom-content">Last Updated</a>
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
.dash-box-wrap-top {
  display: flex;
  justify-content: space-around;
}
#dash-item-top {
  display: flex;
  flex-direction: column;
  background: ORANGERED;
  margin: 3%;
  padding: 5%;
  border-radius: 10px;
  color: white;
  font-size: 30px;
}
#dash-item-top-title {
  font-size: 20px;
}
#dash-item-top-content {
  font-size: 15px;
}
/* #dash-item-bottom-content {
  font-size: 12px;
} */
#dash-item-bottom {
  color: white;
  font-size: 13px;
}
.dash-box-wrap {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0;
  padding: 10px;
  width: auto;
}
#dash-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: auto;
  border-radius: 10px;
  background: #444;
  color: white;
  padding: 2%;
  margin: 1%;
  font-size: 20px;
}
</style>
