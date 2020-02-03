#@ECHO OFF
Write-Output "Installation et configuration du node_modules dans les variables d'environnements, happy coding ;)"
npm install
setx INTRANET_HOME ((get-location).Path).Replace("\conf","")
setx path "$Env:path;%INTRANET_HOME%\node_modules\.bin"
$Env:path
pause