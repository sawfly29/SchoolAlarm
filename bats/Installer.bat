SCHTASKS /CREATE /SC DAILY /TN "Daily reboot" /TR "C:\Windows\System32\shutdown.exe /r" /ST 06:00:00
schtasks /create /tn "AutoStart SchoolAlarm" /tr "C:\SchoolAlarm\bats\starter.bat" /sc onlogon
cd C:\SchoolAlarm\Prerequisities
node-v12.18.3-x86.msi
cd C:\SchoolAlarm
node main.js
cd C:\SchoolAlarm\Instructions
index.html