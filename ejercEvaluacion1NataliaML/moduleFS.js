const { appendFile } = require('fs/promises');
const { copyFile } = require("fs/promises")
const { mkdir } = require('fs/promises');
const { unlink } = require("fs/promises")
const { open } = require('fs/promises');
const { readFile } = require('fs/promises');
const { rmdir } = require('fs/promises');
const { rename } = require("fs/promises");
const { writeFile } = require('fs/promises');
const { readFileSync } = require('fs')

async function writeToFile(fileName, data) {
    try {
    await writeFile(fileName, data);
    console.log(`Wrote data to ${fileName}`);
    } catch (error) {
    console.error(`Got an error trying to write the
    file: ${error.message}`);
    }
}

async function renameFile(oldName, newName) {
    try {
        await rename(oldName, newName)
        console.log('File name changed')
      } catch(err) {
        console.error('Something wrong happened removing the file', err)
      }
}

async function deleteDirectory(path) {
try {
    await rmdir(path);
    console.log(`Deleted directory ${path}`);
    } catch (error) {
    console.error(`Got an error trying to delete the
    directory: ${error.message}`);
    }
}
//
async function readThisFile(filePath) {
    try {
    const data = await readFile(filePath);
    console.log(data.toString());
    return data
    } catch (error) {
    console.error(`Got an error trying to read the
    file: ${error.message}`);
    }
}
// VERS. JSON - SYNC
function readThisFileJSON(filePath) {
    try {
    const data = readFileSync(filePath);
    //console.log(data.toString());
    return JSON.parse(data)
    } catch (error) {
    console.error(`Got an error trying to read the file: ${error.message}`);
    }
}
//
async function openFile(fileName, data) {
    try {
    const file = await open(fileName, 'w');
    await file.write(data);
    console.log(`Opened file ${fileName}`);
    } catch (error) {
    console.error(`Got an error trying to open the
    file: ${error.message}`);
    }
}

async function deleteFile(fileName) {
    try {
        await unlink(fileName)
        console.log('File removed')
      } catch(err) {
        console.error('Something wrong happened removing the file', err)
      }
}

async function createDirectory(path) {
    try {
    await mkdir(path);
    console.log(`Created directory ${path}`);
    } catch (error) {
    console.error(`Got an error trying to create the
    directory: ${error.message}`);
    }
}

async function copyAFile(sourceFile, finalFile) {
    try {
        await copyFile(sourceFile, finalFile)
        console.log('File was copied')
      } catch(err) {
        console.error('Something wrong happened copying the file', err)
      }
}

async function appendToFile(fileName, data) {
    try {
    await appendFile(fileName, data, { flag: 'a' });
    console.log(`Appended data to ${fileName}`);
    } catch (error) {
    console.error(`Got an error trying to append the
    file: ${error.message}`);
    }
}





module.exports = { appendToFile, writeToFile, renameFile, readThisFileJSON, deleteDirectory, 
    readThisFile, openFile, deleteFile, createDirectory, copyAFile }