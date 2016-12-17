function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: Could not find your locatioin.' :
                        'Error: Your browser doesn\'t support geolocation.');
}

function initMap() {
  var centerLoc = {lat: 32.763006, lng: -97.066543}
  var markerLocArray = [{lat: 32.804677, lng: -96.815262}, {lat: 32.812908, lng: -96.838898}, {lat: 32.792049, lng: -96.779892}, {lat: 32.736572, lng: -96.808731}, {lat: 32.836224, lng: -96.753304}, {lat: 32.840824, lng: -96.868271}, {lat: 32.734707, lng: -97.343903}, {lat: 32.684982, lng: -97.308945}, {lat: 32.741013, lng: -97.325714}, {lat: 32.751236, lng: -97.367165}, {lat: 32.710464, lng: -97.364922}, {lat: 32.810375, lng: -96.614212}, {lat: 32.810375, lng: -96.614212}, {lat: 32.646538, lng: -96.871025}, {lat: 32.732841, lng: -97.049576}, {lat: 32.829388, lng: -97.213493}]

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: centerLoc
  });

  for (i = 0; i < markerLocArray.length; i++){
    var marker = new google.maps.Marker({
      position: markerLocArray[i],
      map: map
    });  
  }

  if (navigator.geolocation) {
    var infoWindow = new google.maps.InfoWindow({map: map});
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Your location');
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

