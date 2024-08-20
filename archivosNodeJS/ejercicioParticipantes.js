const { appendFile} = require('fs/promises');

async function appendStudents(fileName, data) {
    try {
    await appendFile(fileName, data);
    console.log(`Appended student data of this course to ${fileName}`);
    } catch (error) {
    console.error(`Got an error trying to append the
    file: ${error.message}`);
    }
}

module.exports = { appendStudents }