@ECHO OFF
<<<<<<< HEAD
echo "Installation et configuration du node_modules dans les variables d'environnements, happy coding ;)"
npm install
setx INTRANET_HOME %CD%
setx path "%path%;%INTRANET_HOME%\node_modules\.bin"
echo %path%
=======
PowerShell.exe -Command "& '%~dpn0.ps1'"
>>>>>>> 353c971d3cabe17ab041699fbac1499867a1dcdd
pause