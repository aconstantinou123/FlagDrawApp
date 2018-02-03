window.addEventListener('load', function () {
    var timer = new Timer();
    var buttonCounter = 0;
    var countriesAPI = new CountriesAPI('https://restcountries.eu/rest/v2');
    countriesAPI.makeRequest();
    countriesAPI.saveData();
    var flags = countriesAPI.getFlags();
    console.log(flags);
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
            setTimeout(function () {
                timer.start();
                countriesAPI.setCoords(flags);
            }, 6300);
            buttonCounter ++;
    }.bind(this));
    stopButton.addEventListener('click', function () {
        timer.stop();
        buttonCounter = 0;
    })
    var select = document.querySelector('#brush-size');
    var canvas = document.querySelector('#main-canvas');
    var context = canvas.getContext('2d');
    var prevX = null;
    var prevY = null;
    var currentX = null;
    var currentY = null;
    var canDraw = false;


    var draw = function (event) {
        if(canDraw === true) {
            context.beginPath()
            context.moveTo(prevX , prevY);
            currentX = event.layerX;
            currentY = event.layerY;
            context.lineTo(currentX, currentY);
            context.stroke();
            prevX = currentX;
            prevY = currentY;
        }
    }

    var selectColour = function () {
        context.strokeStyle = this.value;
    }

    var selectBrushSize = function () {
        console.log(this.value);
        if(this.value === 'Massive'){
            context.lineWidth = 20;
        }
        else if(this.value === 'Thick'){
            context.lineWidth = 10;
        }
        else if (this.value === 'Medium'){
            context.lineWidth = 5;
        }
        else if(this.value === 'Thin'){
            context.lineWidth = 1;
        }
    }

    changeColour = function () {
        console.log(this.id);
        context.strokeStyle = this.id;
    }

    redButton.addEventListener('click', changeColour);
    blueButton.addEventListener('click', changeColour);
    greenButton.addEventListener('click', changeColour);
    yellowButton.addEventListener('click', changeColour);
    orangeButton.addEventListener('click', changeColour);
    purpleButton.addEventListener('click', changeColour);
    brownButton.addEventListener('click', changeColour);
    blackButton.addEventListener('click', changeColour);
    eraseButton.addEventListener('click', changeColour);

    colorSelector.addEventListener('change', selectColour);

    select.addEventListener('change', selectBrushSize);

    canvas.addEventListener('mousedown', function (event) {
        canDraw = true;
        prevX = event.layerX;
        prevY = event.layerY;
        currentX = prevX;
        currentY  = prevY;
        console.log(prevX, prevX);
    })



    canvas.addEventListener('mousemove', function (event) {
        draw(event)
    })

    canvas.addEventListener('mouseup', function () {
        canDraw = false;
        prevX = event.clientX;
        prevY = event.clientY;
    })

})
