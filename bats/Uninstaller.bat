@echo off

title Uninstall SchoolAlarm
echo VNIMANIE! Eto udalit programmu Shkolnogo zvonka s kopmpjutera!


set /p id="Dlya udaleniya nazhmite knopku 1, dlya otmeny nazhmite druguyu klavishu"

if %id%==1 (RMDIR /Q/S C:\SchoolAlarm & SchTasks /DELETE /TN "Daily reboot" & SchTasks /DELETE /TN "AutoStart SchoolAlarm" & echo Gotovo! teper' vruchnuyu udalite programmu NodeJS & pause & control appwiz.cpl) else (@echo on & echo Udalenie otmeneno. & pause)
