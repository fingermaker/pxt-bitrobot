# BitRobot Package for Microsoft PXT

[![Build Status](https://travis-ci.org/srs/pxt-BitRobot.svg?branch=master)](https://travis-ci.org/srs/pxt-BitRobot)
[![GitHub Tag](https://img.shields.io/github/tag/srs/pxt-BitRobot.svg)]()

This library provides a Microsoft PXT package for BitRobot, see
http://www.makeredu.net

## Driving the motor

Use `BitRobot.motor(..)` to drive motor either forward or reverse. The value
indicates speed and is between `-1023` to `1023`. Minus indicates reverse.

```blocks
// Drive 1000 ms forward
BitRobot.motor(BBMotor.All, 1023);
basic.pause(1000);

// Drive 1000 ms reverse
BitRobot.motor(BBMotor.All, -1023);
basic.pause(1000);

// Drive 1000 ms forward on left and reverse on right
BitRobot.motor(BBMotor.Left, 1023);
BitRobot.motor(BBMotor.Right, -1023);
basic.pause(1000);
```

## Buzz sound

To use the buzzer, just use `BitRobot.buzz(..)` function with either `1`
(sound) or `0` (no-sound).

```blocks
// Buzz for 100 ms
BitRobot.buzz(1);
basic.pause(100);
BitRobot.buzz(0);
```

## Read line sensor

The BitRobot has two line-sensors: left and right. To read the value of the
sensors, use `BitRobot.readLine(..)` function.

```blocks
// Read left and right line sensor
let left = BitRobot.readLine(BBLineSensor.Left);
let right = BitRobot.readLine(BBLineSensor.Right);
```

## Read light sensor

Light sensors can be read using `BitRobot.readLight(..)` function.

```blocks
// Read left and right light sensor
let left = BitRobot.readLight(BBLightSensor.Left);
let right = BitRobot.readLight(BBLightSensor.Right);
```

## Read sonar value

If you have mounted the optional sonar sensor for the BitRobot you can
also use the `BitRobot.sonar(..)` function to read the distance to obstacles.

```blocks
// Read sonar values
let v1 = BitRobot.sonar(BBPingUnit.MicroSeconds);
let v2 = BitRobot.sonar(BBPingUnit.Centimeters);
let v3 = BitRobot.sonar(BBPingUnit.Inches);
```

## NeoPixel helpers

The BitRobot has 12 NeoPixels mounted. This library defines some helpers
for using the NeoPixels.

```blocks
// Show all leds
BitRobot.neoSetColor(neopixel.colors(NeoPixelColors.Red));
BitRobot.neoShow();

// Clear all leds
BitRobot.neoClear();
BitRobot.neoShow();

// Show led at position 1
BitRobot.neoSetPixelColor(0, neopixel.colors(NeoPixelColors.Red));
BitRobot.neoShow();

// Show led rainbow
BitRobot.neoRainbow();
BitRobot.neoShow();

// Show led rainbow and shift
BitRobot.neoRainbow();
BitRobot.neoShift();
BitRobot.neoShow();

// Show led rainbow and rotate
BitRobot.neoRainbow();
BitRobot.neoRotate();
BitRobot.neoShow();

// Set brightness of leds
BitRobot.neoBrightness(100);
BitRobot.neoShow();

// Use neo() variable
BitRobot.neo().clear();
BitRobot.neo().show();
```

## Supported targets

* for PXT/microbit

## License

Apache 2.0
