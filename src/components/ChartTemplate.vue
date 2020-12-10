<template lang="html">
  <div class="container">
    <div class="row mt-5" v-if="arrPositive.length > 0">
      <div class="col">
        <h1>Positive</h1>
        <Chart
          :chartData="arrPositive"
          :options="chartOptions"
          label="Positive"
          :chartColors="chartColors"
        ></Chart>
      </div>
    </div>

    <div class="row mt-5" v-if="arrNegative.length > 0">
      <div class="col">
        <h1>Negative</h1>
        <Chart
          :chartData="arrNegative"
          :options="chartOptions"
          label="Negative"
          :chartColors="chartColors"
        ></Chart>
      </div>
    </div>

    <div class="row mt-5" v-if="arrDeaths.length > 0">
      <div class="col">
        <h1>Deaths</h1>
        <Chart
          :chartData="arrDeaths"
          :options="chartOptions"
          label="Deaths"
          :chartColors="chartColors"
        ></Chart>
      </div>
    </div>

    <div class="row mt-5" v-if="arrHospitalized.length > 0">
      <div class="col">
        <h1>Hospitalized</h1>
        <Chart
          :chartData="arrHospitalized"
          :options="chartOptions"
          label="Hospitalized"
          :chartColors="chartColors"
        ></Chart>
      </div>
    </div>

    <div class="row mt-5" v-if="arrIcu.length > 0">
      <div class="col">
        <h1>In ICU</h1>
        <Chart
          :chartData="arrIcu"
          :options="chartOptions"
          label="In ICU"
          :chartColors="chartColors"
        ></Chart>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";

import Chart from "./Chart";
export default {
  components: {
    Chart
  },
  data() {
    return {
      arrPositive: [],
      arrNegative: [],
      arrDeaths: [],
      arrHospitalized: [],
      arrIcu: [],
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      },
      chartColors: {
        borderColor: "#07d0b2",
        pointBorderColor: "#07d0b2",
        pointBackgroundColor: "#f14568",
        backgroundColor: "#07d0b2"
      }
    };
  },
  async created() {
    const { data } = await axios.get(
      "https://api.covidtracking.com/v1/states/mt/daily.json"
    );
    data.forEach(item => {
      const date = moment(item.date, "YYYYMMDD").format("MM/DD");

      const {
        positive,
        negative,
        death,
        hospitalizedCumulative,
        inIcuCurrently
      } = item;
      this.arrPositive.push({ date, total: positive });
      this.arrNegative.push({ date, total: negative });
      this.arrDeaths.push({ date, total: death });
      this.arrHospitalized.push({ date, total: hospitalizedCumulative });
      this.arrIcu.push({ date, total: inIcuCurrently });
    });
  }
};
</script>

<style lang="css">
.container {
  width: 80%;
  margin: auto;
}
.col h1 {
  color: white;
  text-align: left;
  font-size: 40px;
}
</style>
