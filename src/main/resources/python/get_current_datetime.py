from datetime import datetime, timezone, timedelta

TIMESTAMP_NOW = datetime.now()

print(TIMESTAMP_NOW.replace(tzinfo=timezone.utc).timestamp() * 1000)
