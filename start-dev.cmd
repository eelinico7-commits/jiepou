@echo off
cd /d "%~dp0"
set "PATH=C:\Program Files\nodejs;C:\Windows\System32;C:\Windows;C:\Windows\System32\WindowsPowerShell\v1.0"
set "Path=%PATH%"
npm.cmd run dev -- --port 3000 --hostname 127.0.0.1
