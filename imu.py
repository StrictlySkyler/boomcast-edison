import sys, getopt

sys.path.append('.')
import RTIMU
import os.path
import time
import math

SETTINGS_FILE = "RTIMULib"

print("Using settings file " + SETTINGS_FILE + ".ini")
if not os.path.exists(SETTINGS_FILE + ".ini"):
  print("Settings file does not exist, will be created")

s = RTIMU.Settings(SETTINGS_FILE)
imu = RTIMU.RTIMU(s)

print("IMU Name: " + imu.IMUName())

if (not imu.IMUInit()):
    print("IMU Init Failed")
    sys.exit(1)
else:
    print("IMU Init Succeeded")

# this is a good time to set any fusion parameters

imu.setSlerpPower(0.02)
imu.setGyroEnable(True)
imu.setAccelEnable(True)
imu.setCompassEnable(True)

poll_interval = imu.IMUGetPollInterval()
print("Recommended Poll Interval: %dmS\n" % poll_interval)

count = 0
orientations = {}

while True:
  if imu.IMURead():
    # x, y, z = imu.getFusionData()
    # print("%f %f %f" % (x,y,z))
    data = imu.getIMUData()
    fusionPose = data["fusionPose"]

    count += 1
    # print count
    read_time = "%.2f" % (time.time())
    r = round(math.degrees(fusionPose[0]), 3)
    p = round(math.degrees(fusionPose[1]), 3)
    y = round(math.degrees(fusionPose[2]), 3)

    orientations[read_time] = {'r': r, 'p': p, 'y': y}
    # print("r: %f p: %f y: %f time: %.2f" % (math.degrees(fusionPose[0]), 
    #     math.degrees(fusionPose[1]), math.degrees(fusionPose[2]), time.time()))
    if (count > 99):
        print orientations
        orientations.clear()
        count = 0
    time.sleep(poll_interval*1.0/1000.0)
