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
import moment from "moment";
require("dotenv").config();

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
      accessToken: process.env.VUE_APP_API_KEY, // your access token. Needed if you using Mapbox maps
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
    //Previous Jerry Rigged date setter for API url parameter
    // updateYesterdaysTime: () => {
    //   const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    //   const date = new Date();
    //   const dd = date.getDate();
    //   const mm = date.getMonth();
    //   const yy = date.getFullYear();
    //   const yesterday = `${yy}-${mm + 1}-${dd - 2}`;
    //
    //   if (dd === arr.indexOf(dd + 1)) {
    //     return `${yy}-${mm + 1}-0${dd - 2}`;
    //   } else if (dd === 9) {
    //     return `${yy}-${mm + 1}-0${dd - 2}`;
    //   } else if (dd === 10) {
    //     return `${yy}-${mm + 1}-0${dd - 2}`;
    //   } else if (dd === 11) {
    //     return `${yy}-${mm + 1}-0${dd - 2}`;
    //   } else {
    //     return yesterday;
    //   }
    // },
    // updateTodaysTime: () => {
    //   const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    //   const date = new Date();
    //   const dd = date.getDate();
    //   const mm = date.getMonth();
    //   const yy = date.getFullYear();
    //   const today = `${yy}-${mm + 1}-${dd}`;
    //
    //   if (dd === arr.indexOf(dd + 1)) {
    //     return `${yy}-${mm + 1}-0${dd}`;
    //   } else if (dd === 9) {
    //     return `${yy}-${mm + 1}-0${dd}`;
    //   } else {
    //     return today;
    //   }
    // },
    // Updated functions to handle date control for API url parameter
    todaysDate: () => {
      const futureDate = moment().format("YYYY-MM-DD");
      return futureDate;
    },

    subtract2Days: () => {
      const previousDate = moment()
        .subtract(2, "days")
        .format("YYYY-MM-DD");
      return previousDate;
    },

    getData: function() {
      const url = `https://api.covid19api.com/country/united-states/status/confirmed/live?from=${this.subtract2Days()}T00:00:00Z&to=${this.todaysDate()}T00:00:00Z`;
      fetch(url)
        .then(response => response.json())
        .then(data => {
          data
            .filter(e => {
              return e.Province === "Montana";
            })
            .filter(e => {
              if (e.Lon != 0 && e.Lat != 0) {
                return e.Lon && e.Lat;
              }
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
        return "#f14568";
      }
      if (count >= 800) {
        return "#f14568";
      }
      if (count >= 600) {
        return "#f14568";
      }
      if (count >= 400) {
        return "#07d0b2";
      }
      if (count >= 200) {
        return "#07d0b2";
      }
      if (count >= 100) {
        return "#07d0b2";
      }
      if (count >= 10) {
        return "#07d0b2";
      }
      if (count >= 1) {
        return "#07d0b2";
      }
    }
  },

  async created() {
    this.mapbox = Mapbox;
    await this.getData();
  }
};
</script>

<style>
#map {
  width: 90vw;
  height: 50vh;
}
</style>
