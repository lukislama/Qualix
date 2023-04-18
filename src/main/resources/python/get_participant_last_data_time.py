import sys
import LAMP

from datetime import datetime, timezone, timedelta

LAMP.connect(sys.argv[1], sys.argv[2], sys.argv[3])

TIMESTAMP_NOW = datetime.now()

# GPS
events = LAMP.SensorEvent.all_by_participant(sys.argv[4], origin='lamp.gps',
                                             to=TIMESTAMP_NOW.replace(tzinfo=timezone.utc).timestamp() * 1000)['data']
print(events[0]['timestamp'])

# Accelerometer
events = LAMP.SensorEvent.all_by_participant(sys.argv[4], origin='lamp.accelerometer',
                                             to=TIMESTAMP_NOW.replace(tzinfo=timezone.utc).timestamp() * 1000)['data']
print(events[0]['timestamp'])

# Device state
events = LAMP.SensorEvent.all_by_participant(sys.argv[4], origin='lamp.device_state',
                                             to=TIMESTAMP_NOW.replace(tzinfo=timezone.utc).timestamp() * 1000)['data']
print(events[0]['timestamp'])

# Device motion
events = LAMP.SensorEvent.all_by_participant(sys.argv[4], origin='lamp.device_motion',
                                             to=TIMESTAMP_NOW.replace(tzinfo=timezone.utc).timestamp() * 1000)['data']
print(events[0]['timestamp'])
