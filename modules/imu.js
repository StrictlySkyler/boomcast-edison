var Firebase = require('firebase');
var PythonShell = require('python-shell');

var orientation = new Firebase('https://boomcast.firebaseio.com/orientation');
var log = new Firebase('https://boomcast.firebaseio.com/log');

var gyro_options = {
  mode: 'text',
  scriptPath: '/home/boomcast/www/boomcast-edison'
};

var gyro = new PythonShell('imu.py', gyro_options);

gyro.on('message', function (message) {
    var shouldLog;
    log.on('value', function (data) {
        switch(data.val()) {
            case false:
                shouldLog = false;
                break;
            case true:
                shouldLog = true;
                break;
        }
    });  
  var date = new Date();
  var dateformat = date.getDate();
  dateformat+="-";
  dateformat+=date.getMonth()+1;
  dateformat+="-";
  dateformat+=date.getFullYear();
  var parsed = JSON.parse(message)
  if (shouldLog) {
    orientation.child(dateformat).push(parsed);
  }
});

