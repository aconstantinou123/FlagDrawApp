var Timer = function () {
    this.minute = 2
    this.second = 0;
    this.counting = false;
}


Timer.prototype.timer = function () {
    var timerBox = document.querySelector('#timer');
    this.minute = 2;
    this.second = 0;
    for (var i = 0; i < 120; i++) {
        (function (i) {
            setTimeout(function () {
                if(!this.counting){
                    return;
                }
                if (this.minute === 0 && this.second === 0) {
                    this.counting = false;
                    return;
                }
                if (this.second <= 0) {
                    this.minute--
                    this.second = 60;
                }
                if(this.counting === true){
                    this.second--;
                    console.log(this.minute, this.second);
                }
                timerBox.innerText = this.minute + ": " + this.second;
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


// Timer.prototype.timer = function () {
//     if (this.second >= 60) {
//         this.minute++;
//         this.second = 0;
//     }
//     if (this.counting) {
//         this.second++;
//         setTimeout(this.timer, 1000);
//     }
// }