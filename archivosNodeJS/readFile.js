const { readFile } = require('fs/promises');

async function readThisFile(filePath) {
    try {
    const data = await readFile(filePath);
    console.log(data.toString());
    } catch (error) {
    console.error(`Got an error trying to read the
    file: ${error.message}`);
    }
}

module.exports = { readThisFile }