import sys
import LAMP
from datetime import datetime, timezone, timedelta
import pandas as pd

LAMP.connect(sys.argv[1], sys.argv[2], sys.argv[3])

participants = LAMP.Participant.all_by_study(sys.argv[4])

TIMESTAMP_NOW = datetime.now()

# Accelerometer

TIMESTAMP_DAY = datetime.strptime(TIMESTAMP_NOW.strftime("%Y-%m-%d 00:00:00.000000"), "%Y-%m-%d 00:00:00.000000")
TIMESTAMP_DAY = TIMESTAMP_DAY - timedelta(days=1)
TIMESTAMP_LIMIT = TIMESTAMP_DAY - timedelta(days=1)

print("Accelerometer")
for i in range(7):
    for participant in participants['data']:
        t_stamp = TIMESTAMP_DAY
        data = []
        i = 0
        while t_stamp > TIMESTAMP_LIMIT:
            events = LAMP.SensorEvent.all_by_participant(participant['id'], origin='lamp.accelerometer',
                                                         to=t_stamp.replace(tzinfo=timezone.utc).timestamp() * 1000)[
                'data']
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
                    'z': event['data']['z'],
                })
                if lowest_tst > timestamp:
                    lowest_tst = timestamp
            t_stamp = datetime.utcfromtimestamp(lowest_tst / 1000)
            print("Participant: " + participant['id'] + " len(data): " + str(len(data)) +
                  " start: " + TIMESTAMP_LIMIT.strftime('%Y-%m-%dT%H:%M') +
                  " end: " + TIMESTAMP_DAY.strftime('%Y-%m-%dT%H:%M'))

        data = [d for d in data if TIMESTAMP_LIMIT <= d['UTC time'] <= TIMESTAMP_DAY]

        if len(data) > 0:
            print("Saving data to file " +
                  "data_cache/" +
                  participant['id'] +
                  "Accelerometer" +
                  TIMESTAMP_LIMIT.strftime('%Y-%m-%dT%H:%M') +
                  TIMESTAMP_DAY.strftime('%Y-%m-%dT%H:%M') +
                  ".csv")
            pd.DataFrame.from_dict(data, orient='columns').to_csv(f"data_cache/" +
                                                                  participant['id'] +
                                                                  "Accelerometer" +
                                                                  TIMESTAMP_LIMIT.strftime('%Y-%m-%dT%H:%M') +
                                                                  TIMESTAMP_DAY.strftime('%Y-%m-%dT%H:%M') +
                                                                  ".csv", index=False)

    TIMESTAMP_DAY = TIMESTAMP_DAY - timedelta(days=1)
    TIMESTAMP_LIMIT = TIMESTAMP_DAY - timedelta(days=1)

# GPS

TIMESTAMP_DAY = datetime.strptime(TIMESTAMP_NOW.strftime("%Y-%m-%d 00:00:00.000000"), "%Y-%m-%d 00:00:00.000000")
TIMESTAMP_DAY = TIMESTAMP_DAY - timedelta(days=1)
TIMESTAMP_LIMIT = TIMESTAMP_DAY - timedelta(days=1)

print("GPS")
for i in range(7):
    for participant in participants['data']:
        t_stamp = TIMESTAMP_DAY
        data = []
        i = 0
        while t_stamp > TIMESTAMP_LIMIT:
            events = LAMP.SensorEvent.all_by_participant(participant['id'], origin='lamp.gps',
                                                         to=t_stamp.replace(tzinfo=timezone.utc).timestamp() * 1000)[
                'data']
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
            print("Participant: " + participant['id'] + " len(data): " + str(len(data)) +
                  " start: " + TIMESTAMP_LIMIT.strftime('%Y-%m-%dT%H:%M') +
                  " end: " + TIMESTAMP_DAY.strftime('%Y-%m-%dT%H:%M'))

        data = [d for d in data if TIMESTAMP_LIMIT <= d['UTC time'] <= TIMESTAMP_DAY]

        if len(data) > 0:
            print("Saving data to file " +
                  "data_cache/" +
                  participant['id'] +
                  "GPS" +
                  TIMESTAMP_LIMIT.strftime('%Y-%m-%dT%H:%M') +
                  TIMESTAMP_DAY.strftime('%Y-%m-%dT%H:%M') +
                  ".csv")
            pd.DataFrame.from_dict(data, orient='columns').to_csv(f"data_cache/" +
                                                                  participant['id'] +
                                                                  "GPS" +
                                                                  TIMESTAMP_LIMIT.strftime('%Y-%m-%dT%H:%M') +
                                                                  TIMESTAMP_DAY.strftime('%Y-%m-%dT%H:%M') +
                                                                  ".csv", index=False)

    TIMESTAMP_DAY = TIMESTAMP_DAY - timedelta(days=1)
    TIMESTAMP_LIMIT = TIMESTAMP_DAY - timedelta(days=1)

# Device state

TIMESTAMP_DAY = datetime.strptime(TIMESTAMP_NOW.strftime("%Y-%m-%d 00:00:00.000000"), "%Y-%m-%d 00:00:00.000000")
TIMESTAMP_DAY = TIMESTAMP_DAY - timedelta(days=1)
TIMESTAMP_LIMIT = TIMESTAMP_DAY - timedelta(days=1)

print("Device state")
for i in range(7):
    for participant in participants['data']:
        t_stamp = TIMESTAMP_DAY
        data = []
        i = 0
        while t_stamp > TIMESTAMP_LIMIT:
            events = LAMP.SensorEvent.all_by_participant(participant['id'], origin='lamp.device_state',
                                                         to=t_stamp.replace(tzinfo=timezone.utc).timestamp() * 1000)[
                'data']
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
            print("Participant: " + participant['id'] + " len(data): " + str(len(data)) +
                  " start: " + TIMESTAMP_LIMIT.strftime('%Y-%m-%dT%H:%M') +
                  " end: " + TIMESTAMP_DAY.strftime('%Y-%m-%dT%H:%M'))

        data = [d for d in data if TIMESTAMP_LIMIT <= d['UTC time'] <= TIMESTAMP_DAY]

        if len(data) > 0:
            print("Saving data to file " +
                  "data_cache/" +
                  participant['id'] +
                  "Screen_state" +
                  TIMESTAMP_LIMIT.strftime('%Y-%m-%dT%H:%M') +
                  TIMESTAMP_DAY.strftime('%Y-%m-%dT%H:%M') +
                  ".csv")
            pd.DataFrame.from_dict(data, orient='columns').to_csv(f"data_cache/" +
                                                                  participant['id'] +
                                                                  "Screen_state" +
                                                                  TIMESTAMP_LIMIT.strftime('%Y-%m-%dT%H:%M') +
                                                                  TIMESTAMP_DAY.strftime('%Y-%m-%dT%H:%M') +
                                                                  ".csv", index=False)

    TIMESTAMP_DAY = TIMESTAMP_DAY - timedelta(days=1)
    TIMESTAMP_LIMIT = TIMESTAMP_DAY - timedelta(days=1)

# Telephony

TIMESTAMP_DAY = datetime.strptime(TIMESTAMP_NOW.strftime("%Y-%m-%d 00:00:00.000000"), "%Y-%m-%d 00:00:00.000000")
TIMESTAMP_DAY = TIMESTAMP_DAY - timedelta(days=1)
TIMESTAMP_LIMIT = TIMESTAMP_DAY - timedelta(days=1)

print("Telephony")
for i in range(7):
    for participant in participants['data']:
        t_stamp = TIMESTAMP_DAY
        data = []
        i = 0
        while t_stamp > TIMESTAMP_LIMIT:
            events = LAMP.SensorEvent.all_by_participant(participant['id'], origin='lamp.telephony',
                                                         to=t_stamp.replace(tzinfo=timezone.utc).timestamp() * 1000)[
                'data']
            if len(events) == 0:
                break
            lowest_tst = 10000000000000
            for event in events:
                timestamp = int(event['timestamp'])
                data.append({
                    'timestamp': timestamp,
                    'UTC time': datetime.utcfromtimestamp(timestamp / 1000),
                    'type': event['data']['type'],
                    'duration': event['data']['duration']
                })
                if lowest_tst > timestamp:
                    lowest_tst = timestamp
            t_stamp = datetime.utcfromtimestamp(lowest_tst / 1000)
            print("Participant: " + participant['id'] + " len(data): " + str(len(data)) +
                  " start: " + TIMESTAMP_LIMIT.strftime('%Y-%m-%dT%H:%M') +
                  " end: " + TIMESTAMP_DAY.strftime('%Y-%m-%dT%H:%M'))

        data = [d for d in data if TIMESTAMP_LIMIT <= d['UTC time'] <= TIMESTAMP_DAY]

        if len(data) > 0:
            print("Saving data to file " +
                  "data_cache/" +
                  participant['id'] +
                  "Telephony" +
                  TIMESTAMP_LIMIT.strftime('%Y-%m-%dT%H:%M') +
                  TIMESTAMP_DAY.strftime('%Y-%m-%dT%H:%M') +
                  ".csv")
            pd.DataFrame.from_dict(data, orient='columns').to_csv(f"data_cache/" +
                                                                  participant['id'] +
                                                                  "Telephony" +
                                                                  TIMESTAMP_LIMIT.strftime('%Y-%m-%dT%H:%M') +
                                                                  TIMESTAMP_DAY.strftime('%Y-%m-%dT%H:%M') +
                                                                  ".csv", index=False)

    TIMESTAMP_DAY = TIMESTAMP_DAY - timedelta(days=1)
    TIMESTAMP_LIMIT = TIMESTAMP_DAY - timedelta(days=1)
