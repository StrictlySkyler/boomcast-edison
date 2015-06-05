var Firebase = require('firebase');
var PythonShell = require('python-shell');

var orientation = new Firebase('https://boomcast.firebaseio.com/orientation');

var options = {
  mode: 'text',
  scriptPath: '/home/boomcast/RTIMULib/Linux/python/tests'
};

var shell = new PythonShell('Fusion.py', options);

shell.on('message', function (message) {
  // console.log(message);
  orientation.push({ 'timestamp': Date.now(), 'time': Date(), 'orientation': message });
});
