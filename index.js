var five = require('johnny-five'),
  board = new five.Board();

board.on('ready', function() {
  // Test board with a LED plugged on pin 13
  var led = new five.Led(13);
  led.blink(500);
});
