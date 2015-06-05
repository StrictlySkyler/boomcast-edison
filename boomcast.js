var Firebase = require('firebase');
var PythonShell = require('python-shell');

var orientation = new Firebase('https://boomcast.firebaseio.com/orientation');

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
