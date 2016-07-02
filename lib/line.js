//top level line object
var L = require('leaflet-headless');

var LINE_WEIGHT = 10;
var FILL_OPACITY = 1;

function Line(name) {
    this.name = name;
    this.createPolylines = this.createPolylines;
}

//An array of lat lng points arrays are passed in and this function returns a multi polyline object
Line.prototype.createPolylines = function(pointsArrays,colour) {

    //For each array, create a polyline
    var latlngs = [];
    for (var i=0; i<pointsArrays.length; i++) {
        latlngs.push(createLatLngs(pointsArrays[i]));
    }
    var options = {color: colour, weight: LINE_WEIGHT, fillOpacity: FILL_OPACITY};
    return L.multiPolyline(latlngs,options);
}

function createLatLngs(points) {
    var pointList = [];
    for (var i=0; i<points.length; i++) {
        var newPoint = new L.LatLng(points[i][0],points[i][1]);
        pointList.push(newPoint);
    }
    return(pointList);
}

module.exports = Line;