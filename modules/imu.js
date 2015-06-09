var Firebase = require('firebase');
var PythonShell = require('python-shell');

var orientation = new Firebase('https://boomcast.firebaseio.com/orientation');

var gyro_options = {
  mode: 'text',
};

var gyro = new PythonShell('imu.py', gyro_options);

gyro.on('message', function (message) {
  console.log(message);
  // orientation.push({ 'timestamp': Date.now(), 'time': Date(), 'orientation': message });
});