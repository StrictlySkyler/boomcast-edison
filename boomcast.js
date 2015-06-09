var Firebase = require('firebase');
var PythonShell = require('python-shell');
var SerialPort = require("serialport").SerialPort;
var port = "/dev/ttyMFD1";  
var serialPort = new SerialPort(port, {  
  baudrate: 38400  
});

var orientation = new Firebase('https://boomcast.firebaseio.com/orientation');
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

var gyro_options = {
  mode: 'text',
  scriptPath: '/home/boomcast/RTIMULib/Linux/python/tests'
};

var pressure_sensor_options = {
  mode: 'text',
  scriptPath: '/home/boomcast/SparkFunEdisonADC/python'
};

var gyro = new PythonShell('Fusion.py', gyro_options);

var pressure1 = new PythonShell('sensor_1.py', pressure_sensor_options);
var pressure2 = new PythonShell('sensor_2.py', pressure_sensor_options);
var pressure3 = new PythonShell('sensor_3.py', pressure_sensor_options);
var pressure4 = new PythonShell('sensor_4.py', pressure_sensor_options);

gyro.on('message', function (message) {
  // console.log(message);
  orientation.push({ 'timestamp': Date.now(), 'time': Date(), 'orientation': message });
});

pressure1.on('message', function (message) {
  orientation.push({ 'timestamp': Date.now(), 'time': Date(), 'orientation': message });
});

pressure2.on('message', function (message) {
  orientation.push({ 'timestamp': Date.now(), 'time': Date(), 'orientation': message });
});

pressure3.on('message', function (message) {
  orientation.push({ 'timestamp': Date.now(), 'time': Date(), 'orientation': message });
});

pressure4.on('message', function (message) {
  orientation.push({ 'timestamp': Date.now(), 'time': Date(), 'orientation': message });
});


