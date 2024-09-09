// ------------------------------------ APP ---------------------------------------------
// TALLER 3 DE NODEJS -- Natalia ML. -- App
//Hola prof.! verá que le dejé mi código comentado, esto a modo de puntualizar lo realizado
// y como practica para mi misma, así en el lab y en los demás proyectos puedo siempre recordar
//el paso a paso de lo q estoy haciendo además de mantener todo segmentado entendiendo cada módulo
//
// --- IMPORTACIONES ---
//importamos: express, las routes a usar, el bodyparse y el sequelize de la db.config
import express from 'express';
import bodyParser from 'body-parser';
import {prodRouter} from './routes/productRoute.js';
import {sequelize} from './db/p.db.config.js';
// podemos definir el puerto a usar en una const o podemos usar el ".env", 
//en este caso estaré usando la const port
const PORT = 4001;
const app = express();
// llamamos el bodyparser como es de constumbre al usar express
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())
app.use(express.json());
// comenzamos a definir los paths y urls a usar
app.use("/product", prodRouter)
//
app.get('/', (req, res) => {
    res.status(200).json({message: `Access to localhost in: ${PORT} /products` })
})
//este try catch que funciona como una especie de middleware
//a fin de asegurar la conexion con mysql
try
{
    await sequelize.sync();
    console.log('Connected with the DB succesfully!');
}
catch (error)
{
    console.log('Sorry couldnt connect with the DB!', error);
}

//
export let appX = app.listen(PORT, (_) => {
    console.log("server listening on http://localhost:" + PORT)
})