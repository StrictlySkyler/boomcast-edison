// var PythonShell = require('python-shell');

// var path = '/home/boomcast/RTIMULib/Linux/python/tests/Fusion.py'

// var shell = new PythonShell(path, { mode: 'text '});

// shell.on('message', function (message) {
//   console.log(message);
// });

var PythonShell = require('python-shell');
 
var options = {
  mode: 'text',
  scriptPath: '/home/boomcast/RTIMULib/Linux/python/tests'
};

var shell = new PythonShell('Fusion.py', options);

shell.on('message', function (message) {
  // handle message (a line of text from stdout) 
  console.log(message);
});