import sys
import LAMP

from datetime import datetime, timezone, timedelta

LAMP.connect(sys.argv[1], sys.argv[2], sys.argv[3])

TIMESTAMP_NOW = datetime.now()
TIMESTAMP_LIMIT = TIMESTAMP_NOW

# GPS

t_stamp = TIMESTAMP_NOW
data = []
while t_stamp > TIMESTAMP_LIMIT:
    events = LAMP.SensorEvent.all_by_participant(sys.argv[4], origin='lamp.gps',
                                                 to=t_stamp.replace(tzinfo=timezone.utc).timestamp() * 1000)['data']
    if len(events) == 0:
        break
    lowest_tst = 10000000000000
    for event in events:
        timestamp = int(event['timestamp'])
        data.append({
            'timestamp': timestamp,
            'UTC time': datetime.utcfromtimestamp(timestamp / 1000),
            'latitude': event['data']['latitude'],
            'longitude': event['data']['longitude'],
            'altitude': event['data']['altitude'],
            'accuracy': event['data']['accuracy']
        })
        if lowest_tst > timestamp:
            lowest_tst = timestamp
    t_stamp = datetime.utcfromtimestamp(lowest_tst / 1000)

print(str(len(data)))

# Accelerometer

t_stamp = TIMESTAMP_NOW
data = []
while t_stamp > TIMESTAMP_LIMIT:
    events = LAMP.SensorEvent.all_by_participant(sys.argv[4], origin='lamp.accelerometer',
                                                 to=t_stamp.replace(tzinfo=timezone.utc).timestamp() * 1000)['data']
    if len(events) == 0:
        break
    lowest_tst = 10000000000000
    for event in events:
        timestamp = int(event['timestamp'])
        data.append({
            'timestamp': timestamp,
            'UTC time': datetime.utcfromtimestamp(timestamp / 1000),
            'x': event['data']['x'],
            'y': event['data']['y'],
            'z': event['data']['z']
        })
        if lowest_tst > timestamp:
            lowest_tst = timestamp
    t_stamp = datetime.utcfromtimestamp(lowest_tst / 1000)

print(str(len(data)))

# Device state

t_stamp = TIMESTAMP_NOW
data = []
while t_stamp > TIMESTAMP_LIMIT:
    events = LAMP.SensorEvent.all_by_participant(sys.argv[4], origin='lamp.device_state',
                                                 to=t_stamp.replace(tzinfo=timezone.utc).timestamp() * 1000)['data']
    if len(events) == 0:
        break
    lowest_tst = 10000000000000
    for event in events:
        timestamp = int(event['timestamp'])
        data.append({
            'timestamp': timestamp,
            'UTC time': datetime.utcfromtimestamp(timestamp / 1000),
            'screen_state': event['data']['value']
        })
        if lowest_tst > timestamp:
            lowest_tst = timestamp
    t_stamp = datetime.utcfromtimestamp(lowest_tst / 1000)

print(str(len(data)))

# Device motion

t_stamp = TIMESTAMP_NOW
data = []
while t_stamp > TIMESTAMP_LIMIT:
    events = LAMP.SensorEvent.all_by_participant(sys.argv[4], origin='lamp.device_motion',
                                                 to=t_stamp.replace(tzinfo=timezone.utc).timestamp() * 1000)['data']
    if len(events) == 0:
        break
    lowest_tst = 10000000000000
    for event in events:
        timestamp = int(event['timestamp'])
        data.append({
            'timestamp': timestamp,
            'UTC time': datetime.utcfromtimestamp(timestamp / 1000),
            'data': event['data']
        })
        if lowest_tst > timestamp:
            lowest_tst = timestamp
    t_stamp = datetime.utcfromtimestamp(lowest_tst / 1000)

print(str(len(data)))
