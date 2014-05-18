
$(document).ready(function(){
var myZoom = 12;
var myMarkerIsDraggable = true;
var myCoordsLenght = 6;
var defaultLat = 10.055250; 
var defaultLng = 76.354684;

// creates the map
// zooms
// centers the map
// sets the map's type 
var map = new google.maps.Map(document.getElementById('admap-canvas'), {
	zoom: myZoom,
	center: new google.maps.LatLng(defaultLat, defaultLng),
	mapTypeId: google.maps.MapTypeId.ROADMAP
});

// creates a draggable marker to the given coords
var myMarker = new google.maps.Marker({
	position: new google.maps.LatLng(defaultLat, defaultLng),
	draggable: myMarkerIsDraggable
});

// adds a listener to the marker
// gets the coords when drag event ends
// then updates the input with the new coords
google.maps.event.addListener(myMarker, 'dragend', function(evt){
	document.getElementById('latitude').innerHTML = evt.latLng.lat().toFixed(myCoordsLenght);
	document.getElementById('longitude').innerHTML = evt.latLng.lng().toFixed(myCoordsLenght);
});

// centers the map on markers coords
map.setCenter(myMarker.position);

// adds the marker on the map
myMarker.setMap(map);
google.maps.event.addDomListener(window, 'load', initialize);
 });
// }
// }