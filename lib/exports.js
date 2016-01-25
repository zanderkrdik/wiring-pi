/**
 * exports.js
 * Manages the module export depending on the system.
 * 
 * TODO:
 *  - Add EventEmitters to mockPi with the end goal of adding them optionally to
 *      wiring pi core.
 *  - Replace console.log with a logging agent.
 */
var GYPLIB = '../build/Release/wiringPi.node';


var mockPi = {
    // Constants
    OUTPUT: 1,
    INPUT: 0,
    // Setup Methods
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

// Export ---------------------------------------------------------------------
if (doesExist(GYPLIB)) {
    // If there is a built binary on the system, return it.
    module.exports = require(GYPLIB);
} else {
    // If there is not a binary, return the mockup
    console.log('*** MockPi ***')
    module.exports = mockPi;
}
module.exports.VERSION = require('../package').version;

// Utility Methods ------------------------------------------------------------

/**
 * doesExist
 * A backward way of testing file existence.
 * Bring back fs.exists!
 */
function doesExist(str) {
    var fs = require('fs'),
    path = require('path');
    try {
        fs.accessSync(path.resolve(__dirname,str), fs.F_OK);
    } catch (e) {
        return false;
    }
    return true;
}