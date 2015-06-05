var path = '/home/boomcast/RTIMULib/Linux/python/tests/Fusion.py'

var shell = new PythonShell(path, { mode: 'text '});

shell.on('message', function (message) {
  // received a message sent from the Python script (a simple "print" statement) 
  console.log(message);
});