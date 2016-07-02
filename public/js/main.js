var map;
var group;

$(document).ready(function() {

  map = L.map('map').setView([51.510871, -0.127930], 11);

  L.tileLayer('https://api2.ordnancesurvey.co.uk/mapping_api/v1/service/zxy/EPSG%3A3857/Night 3857/{z}/{x}/{y}.png?key=sdJSoCa7r8w2rW5LNUsB9vZCjEP0zTEP').addTo(map);



  $.get('/lines', function(result) {
    for (var i=0; i<result.length; i++) {
      var line = result[i].line;
      var polyline = L.multiPolyline(line.latlngs, line.options);
      map.addLayer(polyline); 
    }
    
  });
});