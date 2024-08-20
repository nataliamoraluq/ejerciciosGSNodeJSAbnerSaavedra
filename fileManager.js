// FILE MANAGER
/* 
//READ AND WRITE
const rfile = require("./archivosNodeJS/readFile")
const wfile = require("./archivosNodeJS/writeFile")

// WRITTE2, APPEND AND OPEN
const wfile2 = require("./archivosNodeJS/writeFile")
const afile = require("./archivosNodeJS/appendFile")
const ofile = require("./archivosNodeJS/openFile")*/

//RENAME AND DELETE
/*const dfile = require("./archivosNodeJS/deleteFile")
const rfile = require("./archivosNodeJS/renameFile")

//CREATE DIR - COPY FILE
const cfile = require("./archivosNodeJS/copyFile")
const cDir = require("./archivosNodeJS/createDir")*/
/*
rfile.readThisFile("./files/participantes.txt")

wfile.writeToFile("./files/fileToWrite.txt", "Holaaa probando file ")
wfile2.writeToFile("./files/fileToWriteBibble.txt", "Bibble pralalala")

afile.appendToFile("./files/fileToAppend.txt", "Oh-oh-oh-oh Take me to a place without no name (no name) La-la-la-la-la-la")
ofile.openFile("./files/fileToOpen.txt", "MJ - Invincible")*/

//RENAME AND DELETE
/*rfile.renameFile("./files/fileToRename.txt", "./files/fileToRename2.txt")
dfile.deleteFile("./files/fileToDelete.txt")*/

//CREATE DIR - COPY FILE
/*cDir.createDirectory("./files/img")
cfile.copyAFile("./files/participantes.txt", "./files/participantes1.txt")*/

//------------------------------------------------------------------------------------------

// **--** EJERCICIO PARTICIPANTES - CLASE 2 Y 3 **--**
//CREATE
/*const afileS = require("./archivosNodeJS/ejercicioParticipantes")
afileS.appendStudents("./files/Participantes.txt", "Cabecera - Student Name: \n")
afileS.appendStudents("./files/Participantes.txt", "\n Natalia")
afileS.appendStudents("./files/Participantes.txt", "\n Daniela")
afileS.appendStudents("./files/Participantes.txt", "\n Osmar")
afileS.appendStudents("./files/Participantes.txt", "\n Ricardo")
afileS.appendStudents("./files/Participantes.txt", "\n Ariadna")
afileS.appendStudents("./files/Participantes.txt", "\n Siberia")
afileS.appendStudents("./files/Participantes.txt", "\n David")
afileS.appendStudents("./files/Participantes.txt", "\n Lino")*/

//RENAME
/*const renameThisFile = require("./archivosNodeJS/renameFile")
renameThisFile.renameFile("./files/Participantes.txt", "./files/Participantes200824.txt")*/

//CREATE DIR "RESPALDO" & COPY FILE
/*const createDir = require("./archivosNodeJS/createDir")
createDir.createDirectory("./files/respaldo")*/

/*const copyfile = require("./archivosNodeJS/copyFile")
copyfile.copyAFile("./files/Participantes200824.txt", "./files/respaldo/Participantes200824.txt")*/

//DELETE ORIGINAL FILE
const dfile = require("./archivosNodeJS/deleteFile")
dfile.deleteFile("./files/Participantes200824.txt")