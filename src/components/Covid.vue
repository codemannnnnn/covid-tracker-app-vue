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
      zoom: 6,
      data: [],
      latLon: [],
      yourMarkersArray: []
    };
  },
  methods: {
    getData: function() {
      fetch(
        "https://api.covid19api.com/country/united-states/status/confirmed/live?from=2020-11-25T00:00:00Z&to=2020-11-28T00:00:00Z"
      )
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
    this.getData();
  }
};
</script>

<style>
#map {
  width: 90vw;
  height: 100vh;
  margin: 5%;
}
</style>
<!--
<script>
import "https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.js";

const mapbox_token =
  "pk.eyJ1IjoiY29kZW1hbm5ubm5uIiwiYSI6ImNraHh2NTNzMzF0ZWgycXJtZzF3NXJob2YifQ.UjFVHKidLtif2kyV7l21SA";

mapboxgl.accessToken = mapbox_token;

var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11"
});
export default {
  data() {
    return {
      data: null
    };
  },
  methods: {
    getData: function() {
      fetch(
        "https://api.covid19api.com/country/ireland/status/confirmed/live?from=2020-11-01T00:00:00Z&to=2020-11-27T00:00:00Z"
      )
        .then(response => response.json())
        .then(data => console.log(data));
    }
  },
  created: function() {
    return this.getData();
  }
};
</script>

<style lang="css" scoped></style> -->

<!-- https://api.covid19api.com/country/united-states/status/confirmed?from=2020-11-24T00:00:00Z&to=2020-11-25T00:00:00Z -->

<!-- https://api.covid19api.com/country/ireland/status/confirmed/live?from=2020-11-01T00:00:00Z&to=2020-11-27T00:00:00Z -->
<!-- API key pk.eyJ1IjoiY29kZW1hbm5ubm5uIiwiYSI6ImNraHh2NTNzMzF0ZWgycXJtZzF3NXJob2YifQ.UjFVHKidLtif2kyV7l21SA -->
