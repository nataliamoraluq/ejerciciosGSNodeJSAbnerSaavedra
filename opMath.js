const imprimir = function(str){
    console.log(str)
}

const sumar = function(a, b){
    return a + b
}

const resta = function(a, b){
    return a - b
}

const division = function(a, b){
    if (b != 0)
        return a/b
    else
        return false
}

module.exports = {
    imprimir, sumar, resta, division
}