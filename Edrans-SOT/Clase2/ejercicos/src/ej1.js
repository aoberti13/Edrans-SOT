/*
Realizar un proyecto usando Babel que haga lo siguiente


Tenga una función que genere números aleatorios entre 2 rangos pasados por parámetros


Tenga una función que genere el un objeto con 3 keys (rojo, verde y azul). El valor de cada key sera un numero aleatorio entre 0 y 255;


Ejecutar el programa con nodemon y comprobar que la salida sea la esperada.
Ejecutar el buildeo de la aplicacion. Ejecutar el codigo transpilado y comprobar que la salida sea la esperada
*/

const functions = require('./functions');

console.log(functions.randomNum(1, 20, 50, 100));
console.log(functions.randomColour());
