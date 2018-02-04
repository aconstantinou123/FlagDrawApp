var CountriesAPI = function (url) {
    this.url = url;
    this.data = [];
}

CountriesAPI.prototype.requestComplete = function () {
    if(this.status !== 200){
        return
    }
    var jsonString =this.responseText;
    var countries = JSON.parse(jsonString);
    var jsonString = JSON.stringify(countries);
    localStorage.setItem('countries', jsonString);
}

CountriesAPI.prototype.makeRequest = function () {
    var request =new XMLHttpRequest();
    request.open('GET', this.url);
    request.addEventListener('load', this.requestComplete);
    request.send();
}

CountriesAPI.prototype.saveData = function () {
    var jsonString = localStorage.getItem('countries');
    var countries = JSON.parse(jsonString);
    this.data = countries;
    console.log(countries);
}

CountriesAPI.prototype.getFlags = function () {
    var flags = this.data.map(country = country => [country.flag, country.name, country.latlng])
    return flags;
}


CountriesAPI.prototype.randomizeFlags = function (flags) {
    for (let i = flags.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [flags[i], flags[j]] = [flags[j], flags[i]];
    }
   this.displayFlags(flags);
}

CountriesAPI.prototype.displayFlags = function (flagsToDisplay) {
    var arrayLength = flagsToDisplay.length;
     for (var i = 0; i < arrayLength; i++) {
         (function (i) {
             setTimeout(function () {
                 var flagDiv = document.querySelector('#flag-div');
                 var flagLi = document.querySelector('#flag-li');
                 var flagImg = document.querySelector('#flag-img');
                 var nameLi = document.querySelector('#name-li');
                 nameLi.innerText = flagsToDisplay[i][1];
                 flagDiv.appendChild(nameLi);
                 flagImg.src = flagsToDisplay[i][0];
                 flagLi.appendChild(flagImg);
                 flagDiv.appendChild(flagLi);
             }, 25*i);
         }.bind(this))(i);
    }
}

CountriesAPI.prototype.setCoords = function (flagsToDisplay) {
    var mapLi = document.querySelector('#map-li')
    coords = {lat: flagsToDisplay[249][2][0], lng: flagsToDisplay[249][2][1]};
    console.log(coords)
    var map = new MapWrapper(mapLi, coords, 4);
    // map.addMarker(coords);
}







