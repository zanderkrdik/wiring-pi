Node.js bindings to [wiringPi](http://www.wiringpi.com)

Based on the awesome work of [eugeneware](https://github.com/eugeneware/wiring-pi.git),
which was based on the awesome work of [Soarez](https://github.com/Soarez/node-wiring-pi)

## Rationale

Improves the development environment for wiring-pi by introducing mocks for non-Pi systems.

- This wrapper installs on non-Pi systems by skipping the wiring-pi (C language) portions and providing mocks for the wiring-pi (NodeJS) portion.

## Install

```
npm install zanderkrdik/wiring-pi
```

## Usage

```javascript
var wpi = require('wiring-pi');
```
## Documentation

See the eugeneware [DOCUMENTATION.md](https://github.com/eugeneware/wiring-pi/blob/master/DOCUMENTATION.md) file for more detailed information.

