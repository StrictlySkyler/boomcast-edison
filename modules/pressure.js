var pressure = new Firebase('https://boomcast.firebaseio.com/pressure');

var pressure_sensor_options = {
  mode: 'text',
  scriptPath: '/home/boomcast/SparkFunEdisonADC/python'
};

var pressure1 = new PythonShell('sensor_1.py', pressure_sensor_options);
var pressure2 = new PythonShell('sensor_2.py', pressure_sensor_options);
var pressure3 = new PythonShell('sensor_3.py', pressure_sensor_options);
var pressure4 = new PythonShell('sensor_4.py', pressure_sensor_options);

pressure1.on('message', function (message) {
  pressure.push({ 'timestamp': Date.now(), 'time': Date(), 'pressure': message });
});

pressure2.on('message', function (message) {
  pressure.push({ 'timestamp': Date.now(), 'time': Date(), 'pressure': message });
});

pressure3.on('message', function (message) {
  pressure.push({ 'timestamp': Date.now(), 'time': Date(), 'pressure': message });
});

pressure4.on('message', function (message) {
  pressure.push({ 'timestamp': Date.now(), 'time': Date(), 'pressure': message });
});
