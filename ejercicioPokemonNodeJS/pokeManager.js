const file = require("./moduleFS")

let data = []
let arrayContador = []

async function leerArchivoJSON(){

    try {
        const archivo = await file.readThisFile("./files/informacionPoke.json")
        if(archivo != null && archivo.length > 0){
            const info = JSON.parse(archivo)

            data = info.datos
        }

        console.log(archivo["datos"])
        
    } catch (error) {
        console.log(error)
    }
}

async function filtrarInfo() {
    try {
        await leerArchivoJSON()
        const filtroAgua = data.filter(p => p['type'].includes('water') )

        console.log("Filtro agua: ", filtroAgua)
    } catch (error) {
        console.log(error)
    }
}

async function filtrarNombresP() {
    try {
        await leerArchivoJSON()
        const cantidad = data.filter(p => p.name[0] == 'p').length
        console.log("Cantidad por P: ",cantidad);
    } catch (error) {
        console.log(error);
    }
}

async function contarPorTipo() {
    try {
        await leerArchivoJSON()

        let tipos = []
        tipos = data.map(p => {
            return p['type'].join(',')
        }).join(',').split(',')

        console.log(tipos)

        const tiposUnicos = [...new Set(tipos)]
        console.log(tiposUnicos)

        let contador = 0;

        for(type of tiposUnicos){
            contador = data.filter(p => p['type'].includes(type)).length
            arrayContador.push({"tipo": type, "cantidad": contador})
        }
        console.log("arrayContador: ", arrayContador)
    } catch (error) {
        
    }
}

async function ordenarPokemonMayorAMenor() {
    await contarPorTipo()

    let arrayOrdenado = arrayContador.sort((a, b) => a.cantidad - b.cantidad)
    console.log("Array ordenado: ", arrayOrdenado.reverse())
}

//leerArchivoJSON()
//filtrarInfo()
//filtrarNombresP()
//contarPorTipo()
ordenarPokemonMayorAMenor()


