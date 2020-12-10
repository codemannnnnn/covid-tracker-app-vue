<template lang="html">
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
  async created() {
    await this.getMtData();
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
