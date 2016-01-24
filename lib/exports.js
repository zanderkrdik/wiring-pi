
/**
 * doesExist
 * A backward way of testing file existence.
 * Bring back fs.exists!
 */
function doesExist(str) {
    var fs = require('fs');
    try {
        fs.accessSync(str, fs.R_OK);
    } catch (e) {
        return false;
    }
    return true;
}

var GYPLIB = '../build/Release/wiringPi';

if (doesExist(GYPLIB)) {
    // If there is a built binary on the system, return it.
    module.exports = require(GYPLIB);
} else {
    // If there is not a binary, return the mockup
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