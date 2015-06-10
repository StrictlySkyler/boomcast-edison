var Firebase = require('firebase');
var SerialPort = require("serialport").SerialPort;

var port = "/dev/ttyMFD1";  
var serialPort = new SerialPort(port, {  
  baudrate: 38400  
});

var leds = new Firebase('https://boomcast.firebaseio.com/leds');

serialPort.on("open", function() {
  console.log("Serial port open");
  leds.on('value', function (data) {
    console.log("received data : ", data.val());
    switch(data.val()) {
      case 'on':
	console.log("sending z3");
        serialPort.write("z3");
        break;
      case false:
        console.log("sending z1");
        serialPort.write("z1");
        break;
      case true:
        console.log("sending z2")
        serialPort.write("z2");
        break;
      default:
        console.log("sending "+data.val());
        serialPort.write(data.val());
    }
  });
});
