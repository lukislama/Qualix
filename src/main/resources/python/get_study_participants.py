import sys
import LAMP

LAMP.connect(sys.argv[1], sys.argv[2], sys.argv[3])

sempro = '0p5n9jp5gte2107zspmb'
participants = LAMP.Participant.all_by_study(sempro)

for participant in participants['data']:
    print(participant['id'])
