var MapWrapper = function (center, coords, zoom) {
    var container = document.getElementById('map-li');
    this.googleMap = new google.maps.Map(container, {
        center: coords,
        zoom: zoom
    })
    this.markers = [];
    console.log('mapcreated')
}

MapWrapper.prototype.addMarker = function (coords) {
    var marker = new google.maps.Marker({
        position: coords,
        map: this.googleMap,
        animation: google.maps.Animation.DROP
    })
    this.markers.push(marker);
}