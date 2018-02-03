const assert = require('assert');
const Timer = require('../public/Timer');

describe('Timer', function () {

    let timer;

    beforeEach(function () {
        timer = new Timer();
    })

    it('Timer can timer', function () {
        timer.start();
        assert.strictEqual()
    })

    it('Timer can stop', function () {
        timer.stop()
        assert.strictEqual();
    })

});