/*var fs = require('fs');
var obj;

fs.readFile('./files/participantes.json', 'utf8', function (err, data) {
  if (err) throw err;
  obj = JSON.parse(data);
});*/

//var fs = require('fs');
//var obj = JSON.parse(fs.readFileSync('./filesP2/p2.json', 'utf8'));
var fs = require('./moduloFS');
var obj = fs.readThisFileJSON('./filesP2/p2.json');

console.log("Objeto: ", obj)
/*
function filter1():
  for i in obj.lenght:
    console.log(i.nombre)*/
console.log(obj.filter( x => x.sexo=="M"))

