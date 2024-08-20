const { copyFile } = require("fs/promises")

async function copyAFile(sourceFile, finalFile) {
    try {
        await copyFile(sourceFile, finalFile)
        console.log('File was copied')
      } catch(err) {
        console.error('Something wrong happened copying the file', err)
      }
}

module.exports = { copyAFile }