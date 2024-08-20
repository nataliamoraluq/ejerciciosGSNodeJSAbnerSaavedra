const { rename } = require("fs/promises")

async function renameFile(oldName, newName) {
    try {
        await rename(oldName, newName)
        console.log('File name changed')
      } catch(err) {
        console.error('Something wrong happened removing the file', err)
      }
}

module.exports = { renameFile }