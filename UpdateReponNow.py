import os;
import time;

# update everything using git
os.system("git add --all")
os.system("git reset -- .env")
print("added and remove env")
time.sleep(3)
os.system("git commit -m 'Something'")
print("message added")
time.sleep(3)
os.system("git push")
print("done")
