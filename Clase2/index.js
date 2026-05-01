// // console.log("Hola, Node.js");

// // console.log(document); // DOM

// let nombre;
// nombre = "María";

// nombre = "Ana";

// const apellido = "Perez";

// console.log(nombre, apellido);

// nombre = 123;

// console.log(typeof nombre);

// nombre = "123";

// console.log(typeof nombre);

// let edad = 33;

// console.log('Tu edad es', edad, 'tu apellido es', apellido)

// ---

// const fs = require("fs");

// // fs.writeFileSync("hola.txt", "Hola Node.js!");
// // fs.appendFileSync("hola.txt", " Otro texto");

// const contenido = fs.readFileSync("hola.txt", "utf-8");

// console.log(contenido);

// ---

// console.log(1);

// setTimeout(() => {
//   console.log(2);
// }, 0);

// console.log(3);

// setTimeout(() => {
//   console.log(4);
// }, 0);

// ---

// function saludar(nombre) {
//   console.log(`Hola ${nombre}`);
// }

// saludar("Juan");

// ---

// const fs = require("fs");

// console.log("Inicio");

// fs.writeFileSync("resumen.txt", "Node ejecuta JS y trabaja con archivos");

// setTimeout(() => {
//   console.log("Evento ejecutado");
// }, 0);

// console.log("Fin");

// ---

import { readFile } from "fs/promises";

const data = await readFile("./users.json", "utf-8");
const json = JSON.parse(data);

console.log(json);
