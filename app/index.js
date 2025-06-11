import express from "express";

//fix para __dirname
import path from 'path';
import {fileURLToPath} from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));


//Server
const app = express();
app.set("port", 4000);
app.listen(app.get("port"));
console.log("Servidor corriendo en puerto", app.get("port"));

//Configuracion
app.use(express.static(__dirname + "/public"));

//Rutas
app.get("/", (reg,res)=> res.sendFile( __dirname + "/pages/register.html"));
app.get("/register", (reg,res)=> res.sendFile( __dirname + "/pages/register.html"));