import sys
import matplotlib.pyplot as plt
import math
import collections
import pandas as pd
import csv
import multiprocessing

from datetime import datetime, timezone, timedelta


def date_parser(s):
    return pd.to_datetime(s, format="%Y-%m-%d %H:%M:%S.%f")


if __name__ == '__main__':

    patient_id = sys.argv[1]
    visualization_type = sys.argv[2]
    visualization_length = sys.argv[3]

    TIMESTAMP_NOW = datetime.now()

    match visualization_length:
        case "1DAY":
            TIMESTAMP_DAY = datetime.strptime(TIMESTAMP_NOW.strftime("%Y-%m-%d 00:00:00.000000"),
                                              "%Y-%m-%d 00:00:00.000000")
            TIMESTAMP_LIMIT = TIMESTAMP_DAY - timedelta(days=1)

            offset = 1

        case "3DAYS":
            TIMESTAMP_DAY = datetime.strptime(TIMESTAMP_NOW.strftime("%Y-%m-%d 00:00:00.000000"),
                                              "%Y-%m-%d 00:00:00.000000")
            TIMESTAMP_LIMIT = TIMESTAMP_DAY - timedelta(days=3)

            offset = 3

        case "5DAYS":
            TIMESTAMP_DAY = datetime.strptime(TIMESTAMP_NOW.strftime("%Y-%m-%d 00:00:00.000000"),
                                              "%Y-%m-%d 00:00:00.000000")
            TIMESTAMP_LIMIT = TIMESTAMP_DAY - timedelta(days=5)

            offset = 5

        case "7DAYS":
            TIMESTAMP_DAY = datetime.strptime(TIMESTAMP_NOW.strftime("%Y-%m-%d 00:00:00.000000"),
                                              "%Y-%m-%d 00:00:00.000000")
            TIMESTAMP_LIMIT = TIMESTAMP_DAY - timedelta(days=7)

            offset = 7

        case _:
            print("Incorrect 3rd arg")
            exit(101)

    visualization_start = TIMESTAMP_LIMIT
    visualization_finish = datetime.strptime(TIMESTAMP_NOW.strftime("%Y-%m-%d 00:00:00.000000"),
                                             "%Y-%m-%d 00:00:00.000000")

    data = []

    for i in range(offset):
        file_path = (f"data_cache/" +
                     patient_id +
                     "Accelerometer" +
                     TIMESTAMP_LIMIT.strftime('%Y-%m-%dT%H:%M') +
                     TIMESTAMP_DAY.strftime('%Y-%m-%dT%H:%M') +
                     ".csv")

        try:
            with open(file_path, "r") as f:
                reader = csv.DictReader(f)
                data.extend(list(reader))
        except FileNotFoundError:
            print("File " + file_path + " doesn't exist.")

        TIMESTAMP_DAY = TIMESTAMP_DAY + timedelta(days=1)
        TIMESTAMP_LIMIT = TIMESTAMP_LIMIT + timedelta(days=1)

    print("Loaded data")

    if len(data) == 0:
        exit(101)

    visualization_finish -= timedelta(days=1)

    TIMESTAMP_DAY = visualization_finish
    TIMESTAMP_LIMIT = visualization_start

    for row in data:
        row["timestamp"] = int(row["timestamp"])
        row["x"] = float(row["x"])
        row["y"] = float(row["y"])
        row["z"] = float(row["z"])
        row["UTC time"] = date_parser(row["UTC time"])

    print("Transformed data")

    match visualization_type:
        case "Accelerometer":

            data = [d for d in data if visualization_start <= d['UTC time'] <= visualization_finish]

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
            plt.suptitle(visualization_type + ' for patient ' + patient_id, fontweight='bold')
            plt.xlabel('Date')
            plt.ylabel('Acceleration (m/s^2)')
            plt.savefig('generated_visualizations/'
                        + patient_id + '_'
                        + visualization_type + '_'
                        + TIMESTAMP_LIMIT.strftime('%Y-%m-%dT%H:%M') + '_'
                        + TIMESTAMP_DAY.strftime('%Y-%m-%dT%H:%M') + '.png')

        case "Data_quality":

            data = [d for d in data if visualization_start <= d['UTC time'] <= visualization_finish]

            if len(data) == 0:
                exit(101)

            for elem in data:
                elem['UTC time'] = elem['UTC time'].replace(minute=0, second=0, microsecond=0)

            counts = collections.Counter(
                (d['UTC time'].year, d['UTC time'].month, d['UTC time'].day, d['UTC time'].hour)
                for d in data)

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
            ax.bar(X, Y, width=interval / 2)
            ax.xaxis_date()
            ax.set_title('100% is equal to 5Hz pulling rate')
            ax.set_xlabel('Date')
            ax.set_ylabel('Percentage of expected amount of data')
            fig.savefig('generated_visualizations/'
                        + patient_id + '_'
                        + visualization_type + '_'
                        + TIMESTAMP_LIMIT.strftime('%Y-%m-%dT%H:%M') + '_'
                        + TIMESTAMP_DAY.strftime('%Y-%m-%dT%H:%M') + '.png')
