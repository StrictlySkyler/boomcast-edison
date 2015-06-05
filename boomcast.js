var PythonShell = require('python-shell');

var path = '/home/boomcast/RTIMULib/Linux/python/tests/Fusion.py'

var shell = new PythonShell(path, { mode: 'text '});

shell.on('message', function (message) {
  console.log(message);
});