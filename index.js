var five = require('johnny-five'),
  board = new five.Board();

board.on('ready', function() {
  // Test board with a LED plugged on pin 13
  var led = new five.Led(13);
  led.blink(500);

  var right = new five.Motor({pin: 9});
  board.repl.inject({motor: right});
  right.start(100);

  var left = new five.Motor(8);
  left.start(100);
});
