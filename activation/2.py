import os

for i in range(30):
    os.system('cd '+str(i)+" && zip -dv "+str(i)+".zip "+str(i))