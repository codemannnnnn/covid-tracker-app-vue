<template>
  <div>
    <div id="map">
      <MglMap
        :accessToken="accessToken"
        :mapStyle.sync="mapStyle"
        :zoom="zoom"
        :center="centerMt"
      >
        <MglMarker
          id="list"
          v-for="item in data"
          :key="item.key"
          :coordinates="item[0].coors"
          :color="getColor(item[1].cases)"
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
    updateYesterdaysTime: () => {
      const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      const date = new Date();
      const dd = date.getDate();
      const mm = date.getMonth();
      const yy = date.getFullYear();
      const yesterday = `${yy}-${mm + 1}-${dd - 1}`;

      if (dd === arr.indexOf(dd + 1)) {
        return `${yy}-${mm + 1}-0${dd - 1}`;
      } else if (dd === 9) {
        return `${yy}-${mm + 1}-0${dd - 1}`;
      } else if (dd === 10) {
        return `${yy}-${mm + 1}-0${dd - 1}`;
      } else {
        return yesterday;
      }
    },
    updateTodaysTime: () => {
      const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      const date = new Date();
      const dd = date.getDate();
      const mm = date.getMonth();
      const yy = date.getFullYear();
      const today = `${yy}-${mm + 1}-${dd}`;

      if (dd === arr.indexOf(dd + 1)) {
        return `${yy}-${mm + 1}-0${dd}`;
      } else if (dd === 9) {
        return `${yy}-${mm + 1}-0${dd}`;
      } else {
        return today;
      }
    },
    getData: function() {
      const url = `https://api.covid19api.com/country/united-states/status/confirmed/live?from=${this.updateYesterdaysTime()}T00:00:00Z&to=${this.updateTodaysTime()}T00:00:00Z`;
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
                  coors: [item.Lon, item.Lat]
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
    },
    getColor: count => {
      if (count >= 1000) {
        return "red";
      }
      if (count >= 800) {
        return "MIDNIGHTBLUE";
      }
      if (count >= 600) {
        return "DODGERBLUE";
      }
      if (count >= 400) {
        return "ROYALBLUE";
      }
      if (count >= 200) {
        return "STEELBLUE";
      }
      if (count >= 100) {
        return "LIGHTSKYBLUE";
      }
      if (count >= 10) {
        return "SKYBLUE";
      }
      if (count >= 1) {
        return "LIGHTBLUE";
      }
    }
  },

  created() {
    this.mapbox = Mapbox;
    this.getData();
  }
};
</script>

<style>
#map {
  width: 90vw;
  height: 50vh;
}
</style>
