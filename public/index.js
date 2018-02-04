window.addEventListener('load', function () {
    var mapLi = document.querySelector('map-li');
    var coords = {lat:51.509865, lng: -0.118092};
    var map = new MapWrapper(mapLi, coords, 1);
    var timer = new Timer();
    var buttonCounter = 0;
    var countriesAPI = new CountriesAPI('https://restcountries.eu/rest/v2');
    countriesAPI.makeRequest();
    countriesAPI.saveData();
    var flags = countriesAPI.getFlags();
    console.log(flags);
    var regionSelector = document.querySelector('#region-select');
    regionSelector.addEventListener('change', function () {
        var selectContext = this;
        flags = countriesAPI.selectRegion(selectContext, flags);
    });
    var colorSelector = document.querySelector('#input-color');
    var redButton = document.querySelector('#red');
    var blueButton = document.querySelector('#blue');
    var greenButton = document.querySelector('#green');
    var yellowButton = document.querySelector('#yellow');
    var orangeButton = document.querySelector('#orange');
    var purpleButton = document.querySelector('#purple');
    var blackButton = document.querySelector('#black');
    var brownButton = document.querySelector('#brown');
    var eraseButton = document.querySelector('#white');
    var randomButton = document.querySelector('#random');
    var stopButton = document.querySelector('#stop');
    randomButton.addEventListener('click', function () {
            countriesAPI.randomizeFlags(flags);
            var timeToWait = flags.length * 25;
            setTimeout(function () {
                timer.start();
                countriesAPI.setCoords(flags);
                flags = countriesAPI.getFlags();
            }, timeToWait);
            buttonCounter ++;
    }.bind(this));
    stopButton.addEventListener('click', function () {
        timer.stop();
        buttonCounter = 0;
    })
    var select = document.querySelector('#brush-size');
    var canvas = document.querySelector('#main-canvas');
    var myCanvas = new MyCanvas();


    redButton.addEventListener('click', function () {
        var value = this.id;
        console.log(value);
        myCanvas.changeColour(value);
    });
    blueButton.addEventListener('click', function () {
        var value = this.id;
        myCanvas.changeColour(value);
    });
    greenButton.addEventListener('click', function () {
        var value = this.id;
        myCanvas.changeColour(value);
    });
    yellowButton.addEventListener('click', function () {
        var value = this.id;
        myCanvas.changeColour(value);
    });
    orangeButton.addEventListener('click', function () {
        var value = this.id;
        myCanvas.changeColour(value);
    });
    purpleButton.addEventListener('click', function () {
        var value = this.id;
        myCanvas.changeColour(value);
    });
    brownButton.addEventListener('click', function () {
        var value = this.id;
        myCanvas.changeColour(value);
    });
    blackButton.addEventListener('click', function () {
        var value = this.id;
        myCanvas.changeColour(value);
    });
    eraseButton.addEventListener('click', function () {
        var value = this.id;
        myCanvas.changeColour(value);
    });

    colorSelector.addEventListener('change', function () {
        var colourSelected = this;
        myCanvas.selectColour(colourSelected);
    });

    select.addEventListener('change', function () {
        var value = this.value;
        myCanvas.selectBrushSize(value);
    });

    canvas.addEventListener('mousedown', function (event) {
        myCanvas.startDrawing(event)
    })



    canvas.addEventListener('mousemove', function (event) {
        myCanvas.draw(event);
    })

    canvas.addEventListener('mouseup', function (event) {
        myCanvas.stopDrawing(event);
    })

})
