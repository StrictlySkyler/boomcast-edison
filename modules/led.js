var Firebase = require('firebase');
var SerialPort = require("serialport").SerialPort;

var port = "/dev/ttyMFD1";  
var serialPort = new SerialPort(port, {  
  baudrate: 38400  
});

var LED = new Firebase('https://boomcast.firebaseio.com/LED');

serialPort.on("open", function() {
  console.log("Serial port open");
  LED.on('value', function (data) {
    console.log("received data : ", data.val());
    switch(data.val()) {
      case 'on':
	console.log("sending z3");
        serialPort.write("z3");
        break;
      case 'off':
        console.log("sending z1");
        serialPort.write("z1");
        break;
      case 'demo':
        console.log("sending z2")
        serialPort.write("z2");
        break;
      default:
        console.log("sending "+data.val());
        serialPort.write(data.val());
    }
  });
});