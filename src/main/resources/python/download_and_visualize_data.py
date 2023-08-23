import sys
import LAMP
import matplotlib.pyplot as plt
import math

from datetime import datetime, timezone, timedelta

LAMP.connect(sys.argv[1], sys.argv[2], sys.argv[3])

patient_id = sys.argv[4]
visualization_type = sys.argv[5]
visualization_start = datetime.strptime(sys.argv[6], '%Y-%m-%dT%H:%M')
visualization_finish = datetime.strptime(sys.argv[7], '%Y-%m-%dT%H:%M')

TIMESTAMP_NOW = visualization_finish
TIMESTAMP_LIMIT = visualization_start

match visualization_type:
    case "Accelerometer":
        t_stamp = TIMESTAMP_NOW
        data = []
        i = 0
        while t_stamp > TIMESTAMP_LIMIT:
            events = LAMP.SensorEvent.all_by_participant(patient_id, origin='lamp.accelerometer',
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
                    'z': event['data']['z'],
                })
                if lowest_tst > timestamp:
                    lowest_tst = timestamp
            t_stamp = datetime.utcfromtimestamp(lowest_tst / 1000)
            print("Participant: " + patient_id + " len(data): " + str(len(data)))
        if len(data) == 0:
            exit(101)

        X = [datetime.now()] * len(data)
        Y = [1.1] * len(data)

        i = 0
        for elem in data:
             X[i] = elem['UTC time']
             Y[i] = math.sqrt(elem['x'] * elem['x'] + elem['y'] * elem['y'] + elem['z'] * elem['z'])
             i += 1

        plt.figure(figsize=(10, 5.625), dpi=120)
        plt.plot(X, Y)
        plt.xlabel('Date')
        plt.ylabel('Value')
        plt.savefig('generated_visualizations/'
                    + patient_id + '_'
                    + visualization_type + '_'
                    + sys.argv[6] + '_'
                    + sys.argv[7] + '.png')
