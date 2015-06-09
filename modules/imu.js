var Firebase = require('firebase');
var PythonShell = require('python-shell');

var orientation = new Firebase('https://boomcast.firebaseio.com/orientation');

orientation.set(null);

var gyro_options = {
  mode: 'text',
  scriptPath: '/boomcast'
};

var gyro = new PythonShell('imu.py', gyro_options);

gyro.on('message', function (message) {
  // console.log(message);
  // orientation.push({ 'timestamp': Date.now(), 'time': Date(), 'orientation': message });
  var parsed = JSON.parse(message)
  orientation.push(parsed);
});
