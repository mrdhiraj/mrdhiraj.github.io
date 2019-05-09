@echo off
set /p id="Enter Comment : "
git add .
git commit -m "%id%"