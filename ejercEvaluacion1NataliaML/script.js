//const file = require("./moduleFS")
//
const fechaHoy = new Date().toLocaleDateString();
console.log("Today's Date:", fechaHoy);

//
//
/*
async function autorArchivoJSON(){

    try {
        const archivo = await file.readThisFile("./files/autor.json")
        if(archivo == null || archivo.length == 0){
            const data = fs.readThisFile('./files/autor.json');
            const jsonData = JSON.parse(data);

            jsonData.push({
                "author": "Natalia ML - V.30.416.997", 
                "startDate": fechaHoy
            });

            const jsonString = JSON.stringify(jsonData);

            fs.writeToFile('data.json', jsonString, 'utf-8', (err) => {
                if (err) throw err;
                console.log('Author Data added to file');
            });

        }
        
    } catch (error) {
        console.log(error)
    }
}

module.exports = { autorArchivoJSON}*/