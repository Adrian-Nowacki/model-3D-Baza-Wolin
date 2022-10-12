var map = L.map( 'map', {
  center: [53.945871, 14.478967],
  minZoom: 7,
  maxZoom: 35,
  zoom: 17.5,
zoomSnap:0.001,
});

var openstreetmap = L.tileLayer('', {
  maxZoom: 35,
  maxNativeZoom: 34,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

var wms_service = "https://poznan-gis.pl/geoserver/wms"

var nadlesnictwa = L.tileLayer.wms(wms_service, {
layers: 'ortofotomapa',
format: 'image/png',
zIndex: 4,
maxZoom:35,
transparent: true,
opacity: 1
}).addTo(map);