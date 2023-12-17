import sys
import LAMP

LAMP.connect(sys.argv[1], sys.argv[2], sys.argv[3])

sempro = sys.argv[4]
participants = LAMP.Participant.all_by_study(sempro)

print(len(participants['data']))