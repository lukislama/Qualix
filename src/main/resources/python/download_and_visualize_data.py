import sys
import LAMP
import matplotlib.pyplot as plt
import math
import collections
import time

from datetime import datetime, timezone, timedelta

start = time.time()

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

        data = [d for d in data if visualization_start <= d['UTC time'] <= visualization_finish]

        X = [datetime.now()] * len(data)
        Y = [1.1] * len(data)

        i = 0
        for elem in data:
             X[i] = elem['UTC time']
             Y[i] = math.sqrt(elem['x'] * elem['x'] + elem['y'] * elem['y'] + elem['z'] * elem['z'])
             i += 1

        plt.figure(figsize=(10, 5.625), dpi=120)
        plt.plot(X, Y)
        plt.suptitle(visualization_type + ' for patient ' + patient_id, fontweight='bold')
        plt.xlabel('Date')
        plt.ylabel('Acceleration (m/s^2)')
        plt.savefig('generated_visualizations/'
                    + patient_id + '_'
                    + visualization_type + '_'
                    + sys.argv[6] + '_'
                    + sys.argv[7] + '.png')

    case "Data_quality":
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

        data = [d for d in data if visualization_start <= d['UTC time'] <= visualization_finish]

        for elem in data:
            elem['UTC time'] = elem['UTC time'].replace(minute=0, second=0, microsecond=0)

        counts = collections.Counter((d['UTC time'].year, d['UTC time'].month, d['UTC time'].day, d['UTC time'].hour)
                                     for d in data)
        print(counts)

        X = [datetime.now()] * len(counts.keys())
        Y = [1.1] * len(counts.keys())

        i = 0
        for date_hour_tuple, count in counts.items():
            X[i] = X[i].replace(year=date_hour_tuple[0],
                                month=date_hour_tuple[1],
                                day=date_hour_tuple[2],
                                hour=date_hour_tuple[3],
                                minute=0,
                                second=0,
                                microsecond=0)
            Y[i] = count / 18000 * 100
            i += 1

        interval = timedelta(hours=1)

        fig = plt.figure(figsize=(10, 5.625), dpi=120)
        fig.suptitle(visualization_type + ' for patient ' + patient_id, fontweight='bold')
        ax = fig.add_subplot(111)
        ax.bar(X, Y, width=interval/2)
        ax.xaxis_date()
        ax.set_title('100% is equal to 5Hz pulling rate')
        ax.set_xlabel('Date')
        ax.set_ylabel('Percentage of expected amount of data')
        fig.savefig('generated_visualizations/'
                    + patient_id + '_'
                    + visualization_type + '_'
                    + sys.argv[6] + '_'
                    + sys.argv[7] + '.png')

finish = time.time()

#print(f"Runtime: {finish - start} seconds")
