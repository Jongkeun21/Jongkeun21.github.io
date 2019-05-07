var map;
var geocoder;

function geocoderAdderss(geocoder, resultsMap) {
    var marker = null;
    var address = document.getElementById('address').value;
    geocoder.geocode({'address': address}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
        resultsMap.setCenter(results[0].geometry.location);
        marker = new google.maps.Marker({
            map: resultsMap,
            position: results[0].geometry.location
        });
        } else {
        alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 37.541, lng: 126.986},
        zoom: 10,
        mapTypeId: 'roadmap'
    });

    geocoder = new google.maps.Geocoder();

    document.getElementById('submit').addEventListener('click', function() {
        geocoderAdderss(geocoder, map);
    });
}