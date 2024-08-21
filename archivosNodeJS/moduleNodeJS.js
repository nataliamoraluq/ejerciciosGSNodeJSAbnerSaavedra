//CONST - FOR EACH FUNCT
const { writeFile } = require('fs/promises');
const { readFile } = require('fs/promises');
const { rename } = require("fs/promises")

//WRITTE
async function writeToFile(fileName, data) {
    try {
    await writeFile(fileName, data);
    console.log(`Wrote data to ${fileName}`);
    } catch (error) {
    console.error(`Got an error trying to write the
    file: ${error.message}`);
    } 
}

//READ
async function readThisFile(filePath) {
    try {
    const data = await readFile(filePath);
    console.log(data.toString());
    } catch (error) {
    console.error(`Got an error trying to read the
    file: ${error.message}`);
    }
}

//APPEND

//OPEN

//RENAME 
async function renameFile(oldName, newName) {
    try {
        await rename(oldName, newName)
        console.log('File name changed')
      } catch(err) {
        console.error('Something wrong happened removing the file', err)
      }
}

//DELETE

//CREATE DIR

//COPY FILE

//EXPORT ALL

module.exports = { writeToFile, readThisFile, renameFile }