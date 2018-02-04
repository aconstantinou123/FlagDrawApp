var Timer = function () {
    this.minute = 2
    this.second = 0;
    this.counting = false;
    this.timerBox = document.querySelector('#timer');
    this.timerBox.innerText = this.minute + ": " + '0' + this.second;

}

Timer.prototype.timer = function () {
    for (var i = 0; i < 120; i++) {
        (function (i) {
            setTimeout(function () {
                if (this.minute <= 0 && this.second <= 1) {
                    this.counting = false;
                    alert('STOP DRAWING!');
                }
                if (this.second <= 0) {
                    this.minute--;
                    this.second = 60;
                }
                if(this.counting === true){
                    this.second--;
                }
                else {
                    return;
                }

                if(this.second < 10){
                    this.timerBox.innerText = this.minute + ": " + '0' +  this.second;
                }
                else {
                    this.timerBox.innerText = this.minute + ": " + this.second;
                }
            }.bind(this), 1000*i);
        }.bind(this))(i);
    }
}

Timer.prototype.stop = function () {
    this.counting = false;
}

Timer.prototype.start = function () {
    this.counting = true;
    this.timer();
}

module.exports = Timer;

