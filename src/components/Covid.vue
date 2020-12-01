<template>
  <div>
    <div></div>

    <!-- {{ this.data }} -->
    <!-- {{ data }} -->

    <div id="map">
      <MglMap
        :accessToken="accessToken"
        :mapStyle.sync="mapStyle"
        :zoom="zoom"
        :center="centerMt"
      >
        <!-- <MglMarker
          id="list"
          v-for="mark in marks"
          :key="mark.key"
          :coordinates="mark.coors"
          color="red"
        /> -->

        <MglMarker
          id="list"
          v-for="item in data"
          :key="item.key"
          :coordinates="item[0].coors"
          color="blue"
        >
          <MglPopup>
            <div>
              County: {{ item[1].city }}
              <br />
              Cases: {{ item[1].cases }}
              <br />
              Status: {{ item[1].status }}
              <br />
              Date: {{ item[1].date }}
            </div>
          </MglPopup>
        </MglMarker>
      </MglMap>
    </div>
  </div>
</template>

<script>
import Mapbox from "mapbox-gl";
import { MglMap, MglMarker, MglPopup } from "vue-mapbox";

//new save
export default {
  components: {
    MglMap,
    MglMarker,
    MglPopup
  },
  data() {
    return {
      el: "#list",
      accessToken:
        "pk.eyJ1IjoiY29kZW1hbm5ubm5uIiwiYSI6ImNraHh2NTNzMzF0ZWgycXJtZzF3NXJob2YifQ.UjFVHKidLtif2kyV7l21SA", // your access token. Needed if you using Mapbox maps
      mapStyle: "mapbox://styles/mapbox/dark-v10", // your map style,
      coordinates: [1, 1],
      marks: [{ coors: [-110.12, 46.09] }, { coors: [33, 1] }],
      centerMt: [-110.12, 46.09],
      zoom: 5,
      data: [],
      latLon: [],
      yourMarkersArray: []
    };
  },
  methods: {
    updateTime: () => {
      const date = new Date();
      const dd = date.getDate();
      const mm = date.getMonth();
      const yy = date.getFullYear();
      const today = `${yy}-${mm + 1}-0${dd}`;
      return today;
      // return console.log(`${yy}-${mm}-${dd}`);
    },
    getData: function() {
      const url = `https://cors-anywhere.herokuapp.com/https://api.covid19api.com/country/united-states/status/confirmed/live?from=2020-11-25T00:00:00Z&to=${this.updateTime()}T00:00:00Z`;
      fetch(url)
        .then(response => response.json())
        .then(data => {
          data
            .filter(e => {
              return e.Province === "Montana";
            })
            .map(item => {
              return [
                {
                  // cody: console.log(item)
                  // City: item.City,
                  coors: [item.Lon, item.Lat]
                  // Lon: item.Lon,
                  // Lat: item.Lat
                },
                {
                  city: item.City,
                  cases: item.Cases,
                  status: item.Status,
                  date: item.Date
                }
              ];
            })
            .forEach(e => this.data.push(e));
        });
    }
  },

  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox;
    console.log(this.updateTime());
    this.getData();

    // console.log(this.data);
  }
};
</script>

<style>
#map {
  width: 90vw;
  height: 50vh;
}
</style>
