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
}

CountriesAPI.prototype.getFlags = function () {
    var flags = this.data.map(country = country => [country.flag, country.name])
    return flags;
    console.log(flags);
}


CountriesAPI.prototype.randomizeFlags = function (flags) {
    var flagToReturn = null;
    for (let i = flags.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [flags[i], flags[j]] = [flags[j], flags[i]];
    }
    flagToReturn = flags[0];
    console.log(flagToReturn)
    this.displayFlags(flagToReturn)
}

CountriesAPI.prototype.displayFlags = function (flagToDisplay) {
    var flagDiv = document.querySelector('#flag-div');
    var flagLi = document.createElement('li');
    var flagImg = document.createElement('img');
    flagImg.src = flagToDisplay[0];
    console.log(flagToDisplay[0])
    flagImg.width = 200;
    flagLi.appendChild(flagImg);
    flagDiv.appendChild(flagLi);
    var nameLi = document.createElement('li');
    nameLi.innerText = flagToDisplay[1];
    flagDiv.appendChild(nameLi);
}
