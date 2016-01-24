
var GYPLIB = '../build/Release/wiringPi';

if (require.resolve(GYPLIB)) {
    module.exports = require(GYPLIB);
} else {
    module.exports = {
        // Constants
        OUTPUT: 1,
        INPUT: 0,
        setup: function (a) {
            console.log('setup');
        },
        pinMode: function (pin, dir) {
            console.log('pinMode(%s,%s)', pin, dir);
        },
        digitalWrite: function (pin, val) {
            console.log('digitalWrite(%s,%s)', pin, val);
        }
    };
}
module.exports.VERSION = require('../package').version;