var map = new L.Map('map', {
  center: new L.LatLng(32.8138, -83.6925),
  layers: new L.TileLayer('http://a.tiles.mapbox.com/v3/zachwill.bibb/{z}/{x}/{y}.png'),
  minZoom: 11,
  maxZoom: 17,
  zoom: 12
});
