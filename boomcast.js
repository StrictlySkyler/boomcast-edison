// var PythonShell = require('python-shell');

// var path = '/home/boomcast/RTIMULib/Linux/python/tests/Fusion.py'

// var shell = new PythonShell(path, { mode: 'text '});

// shell.on('message', function (message) {
//   console.log(message);
// });

var PythonShell = require('python-shell');
 
var options = {
  mode: 'text',
  pythonPath: '/usr/lib/python2.7',
  scriptPath: '/home/boomcast/RTIMULib/Linux/python/tests'
};
 
PythonShell.run('Fusion.py', options, function (err, results) {
  if (err) throw err;
  // results is an array consisting of messages collected during execution 
  console.log('results: %j', results);
});