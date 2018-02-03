var MapWrapper = function (center, coords, zoom) {
    var container = document.getElementById('map-li');
    this.googleMap = new google.maps.Map(container, {
        center: coords,
        zoom: zoom
    })
    this.markers = [];
    console.log('mapcreated')
}