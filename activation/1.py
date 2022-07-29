from ast import Str
import os
from pickletools import read_uint2 
import random

def GetRandom1(): 
    ran1 = random.randint(1 , 25)
    return ran1

def GetRandom2():
    ran2 = random.randint(1000 , 10000)
    return ran2

for i in range(30):
    #print('OK Mkdir: '+str(i))
    a = [
        "a","b","c","d","e","f","g","h","i","j","k","l","m","n",
        "o","p","q","r","s","t","u","v","w","x","y","z"
        ]
    ran1 = GetRandom1()
    ran2 = GetRandom2()
    Activation = a[GetRandom1()]+str(GetRandom2())+"-"+a[GetRandom1()]+str(GetRandom2())+"-"+a[GetRandom1()]+str(GetRandom2())+"-"+a[GetRandom1()]+str(GetRandom2())
    os.system("mkdir "+str(i)+" && echo "+str(Activation)+" > "+str(i)+"/"+str(i)+".txt")
    print("生成激活码: "+Activation+" ;写入: "+str(Activation)+" > "+str(i)+"/"+str(i)+".txt")
