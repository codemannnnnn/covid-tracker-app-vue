<template>
  <section id="app">
    <h1 class="title is-1">from MapV.vue</h1>
    <!-- {{ country }} -->
    <!-- <div class="data-box" v-for="d in data" :key="d">
      {{ d.Country }}
      {{ d.TotalConfirmed }}
    </div> -->
    <table class="table is-striped">
      <tr>
        {{
          montana.state
        }}
      </tr>
      <tr>
        Positive:
        {{
          montana.positive
        }}
      </tr>
      <tr>
        Negative:
        {{
          montana.negative
        }}
      </tr>
    </table>

    <div class="data-box">
      {{ data[181].Country }}
      <h1>Total Cases</h1>
      {{ data[181].TotalConfirmed }}
    </div>

    <!-- {{ data.Country[181] }}
    {{ data.TotalConfirmed[181] }} -->
  </section>
</template>

//
<script>
export default {
  el: "#app",
  data() {
    return {
      data: null,
      montana: null
      // country: {}
    };
  },

  methods: {
    getData: function() {
      fetch("https://api.covid19api.com/summary")
        .then(response => response.json())
        .then(data => {
          console.log(data.Countries);
          this.data = data.Countries;
        });

      fetch("https://api.covidtracking.com/v1/states/mt/current.json")
        .then(response => response.json())
        .then(data => {
          this.montana = data;
        });
    }
    // getMontana: function() {
    //   fetch("https://api.covidtracking.com/v1/states/mt/current.json")
    //     .then(response => response.json())
    //     .then(data => {
    //       this.montana = data;
    //     });
    // }
  },
  created: function() {
    return this.getData();
  }
};
</script>

<style>
.data-box {
  display: flex;

  border: 1px solid black;
}
</style>
