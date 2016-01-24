var pi = require('../build/Release/wiringPi');


module.exports = {
    // Constants
    OUTPUT: pi.OUTPUT,
    INPUT: pi.INPUT,
    setup: function(a) {
        console.log('setup');
        return pi.setup(a);
    }, 
    pinMode: function(pin, dir) {
        console.log('pinMode(%s,%s)',pin, dir);
        return pi.pinMode(pin,dir);
    }, 
    digitalWrite: function(pin, val) {
        console.log('digitalWrite(%s,%s)',pin, val);
        return pi.digitalWrite(pin.value);
    }
};

module.exports.VERSION = require('../package').version;