import "https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.js";

const mapbox_token =
  "pk.eyJ1IjoiY29kZW1hbm5ubm5uIiwiYSI6ImNraHh2NTNzMzF0ZWgycXJtZzF3NXJob2YifQ.UjFVHKidLtif2kyV7l21SA";

mapboxgl.accessToken = mapbox_token;

var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/dark-v10",
});
