var MyCanvas = function () {
    this.canvas = document.querySelector('#main-canvas');
    this.context = this.canvas.getContext('2d');
    this.prevX = null;
    this.prevY = null;
    this.currentX = null;
    this.currentY = null;
    this.canDraw = false;
}

MyCanvas.prototype.selectBrushSize = function (value) {
    if(value === 'Massive'){
        this.context.lineWidth = 20;
    }
    else if(value === 'Thick'){
        this.context.lineWidth = 10;
    }
    else if (value === 'Medium'){
        this.context.lineWidth = 5;
    }
    else if(value === 'Thin'){
        this.context.lineWidth = 1;
    }
}

MyCanvas.prototype.clearCanvas = function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
}

MyCanvas.prototype.changeColour = function (value) {
    this.context.strokeStyle = value;
}

MyCanvas.prototype.draw = function (event) {
    if(this.canDraw === true) {
        this.context.beginPath()
        this.context.moveTo(this.prevX , this.prevY);
        this.currentX = event.layerX;
        this.currentY = event.layerY;
        this.context.lineTo(this.currentX, this.currentY);
        this.context.stroke();
        this.prevX = this.currentX;
        this.prevY = this.currentY;
    }
}

MyCanvas.prototype.selectColour = function (colourSelected) {
    this.context.strokeStyle = colourSelected.value;
}

MyCanvas.prototype.startDrawing = function (event) {
    this.canDraw = true;
    this.prevX = event.layerX;
    this.prevY = event.layerY;
    this.currentX = this.prevX;
    this.currentY  = this.prevY;
    console.log(this.prevX, this.prevX);
}

MyCanvas.prototype.stopDrawing = function (event) {
    this.canDraw = false;
    this.prevX = event.clientX;
    this.prevY = event.clientY;
}
