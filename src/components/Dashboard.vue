<template lang="html">
  <!-- <section class="dash-section">
    <div class="dashboard-wrapper"> -->
  <!-- <div class="dash-box-wrap-top" v-for="item in data" :key="item.key">
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
      <div id="dash-item">
        {{ item.hospitalized }}<br />

        <a id="dash-item-top-content">Hospitalized</a>
      </div> -->
  <!-- </div>
    <div id="dash-item-bottom">
      {{ data[0].lastUpdateEt }}<br />

      <a id="dash-item-bottom-content">Last Updated</a>
    </div> -->

  <!-- New Code Here -->
  <!-- <div
        class="side-bar"
        style="border-top-left-radius: 20px;border-bottom-left-radius: 20px;"
      >
        <h1>Current</h1>
        <div>
          <div id="dash-item-top">
            {{ data[0].hospitalizedCurrently }}<br />
            <a id="dash-item-top-content">Hospitalized</a>
          </div>
          <div id="dash-item-top">
            {{ data[0].inIcuCurrently }}<br />

            <a id="dash-item-top-content">ICU</a>
          </div>
          <div id="dash-item-top">
            {{ data[0].onVentilatorCurrently }}<br />

            <a id="dash-item-top-content">Ventilator</a>
          </div>
        </div>
      </div>

      <div
        class="side-bar"
        style="border-top-right-radius: 20px;border-bottom-right-radius: 20px;"
      >
        <h1>Historical</h1>
        <div>
          <div id="dash-item-top" style="background: red">
            {{ data[0].positive }}
            <br />
            <a id="dash-item-top-content">Positive</a>
          </div>
          <div id="dash-item-top" style="background: green">
            {{ data[0].negative }} <br /><a id="dash-item-top-content"
              >Negative</a
            >
          </div>
          <div id="dash-item-top" style="background: blue">
            {{ data[0].totalTestResults }}<br />
            <a id="dash-item-top-content">Total Test</a>
          </div>
          <div id="dash-item-top">
            {{ data[0].hospitalizedCumulative }}<br />
            <a id="dash-item-top-content">Hospitalized</a>
          </div>
          <div id="dash-item-top">
            {{ data[0].recovered }}<br />
            <a id="dash-item-top-content">Recovered</a>
          </div>
          <div id="dash-item-top">
            {{ data[0].death }}<br />
            <a id="dash-item-top-content">Deaths</a>
          </div>
        </div>
      </div>
    </div>
    <BottomDashboard :data="data" />
  </section> -->
  <section class="container">
    <div class="columns" v-for="item in data" :key="item.key">
      <div class="column is-6 has-background-primary">
        <h1 class="is-size-1">Current</h1>
        <p class="heading">Hospitalized</p>
        <p class="title">{{ data[0].hospitalizedCurrently }}</p>
        <p class="heading">ICU</p>
        <p class="title">{{ data[0].inIcuCurrently }}</p>
        <p class="heading">Ventilator</p>
        <p class="title">{{ data[0].onVentilatorCurrently }}</p>
      </div>
      <div class="column is-6 has-background-danger">
        <h1 class="is-size-1">Historical</h1>
        <p class="heading">Positive</p>
        <p class="title">{{ data[0].positive }}</p>
        <p class="heading">Negative</p>
        <p class="title">{{ data[0].negative }}</p>
        <p class="heading">Total Test</p>
        <p class="title">{{ data[0].totalTestResults }}</p>
        <p class="heading">Hospitalized</p>
        <p class="title">{{ data[0].hospitalizedCumulative }}</p>
        <p class="heading">Recovered</p>
        <p class="title">{{ data[0].recovered }}</p>
        <p class="heading">Deaths</p>
        <p class="title">{{ data[0].death }}</p>
      </div>
    </div>
    <div>
      <BottomDashboard :data="data" />
    </div>
  </section>
</template>

<script>
import BottomDashboard from "./BottomDashboard.vue";

export default {
  components: {
    BottomDashboard
  },
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
.container {
  padding: 5%;
}
.dashboard-wrapper {
  display: flex;
  justify-content: center;
  margin: auto;
  padding: auto;
  width: 70%;
}

.side-bar {
  display: flex;
  flex-direction: column;
  background: #333;
  width: 60%;
  padding: 1%;
}
.side-bar h1 {
  color: white;
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
