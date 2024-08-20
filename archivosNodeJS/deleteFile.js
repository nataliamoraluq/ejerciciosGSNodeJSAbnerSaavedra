const { unlink } = require("fs/promises")

async function deleteFile(fileName) {
    try {
        await unlink(fileName)
        console.log('File removed')
      } catch(err) {
        console.error('Something wrong happened removing the file', err)
      }
}

module.exports = { deleteFile }