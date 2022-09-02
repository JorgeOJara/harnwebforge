import os;
import time;

# update everything using git
os.system("git add --all")
print("added")
time.sleep(3)
os.system("git commit -m 'Something'")
print("message added")
time.sleep(3)
os.system("git push")
print("done")