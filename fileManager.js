const rfile = require("./archivosNodeJS/readFile")
const wfile = require("./archivosNodeJS/writeFile")
const afile = require("./archivosNodeJS/appendFile")

rfile.readThisFile("./files/participantes.txt")

wfile.writeToFile("./files/fileToWrite.txt", "Hola mundo")

afile.appendToFile("./files/fileToAppend.txt", "Hola mundo one more time")