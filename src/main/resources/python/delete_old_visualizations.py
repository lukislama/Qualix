import os
import glob

files_to_delete = glob.glob(os.path.join("generated_visualizations", "*"))

if len(files_to_delete) == 0:
    print("No files to delete")
    exit(0)

for f in files:
    os.remove(f)

print("Old visualizations deleted")
