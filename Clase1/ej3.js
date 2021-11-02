/*
Crear una funcion que devuelva un numero aleatorio entre el 1 y el 20

crear una funcion que llame 10.000 veces a la funcion anterior y devuelva al final un objeto donde se registre cuantas
veces se llamo a cada numero.
Es decir, las claves van a ser los numeros que salieron aleatoriamente y los valores el numero de veces que salio ese numero
con la funcion Random
Ej.

{
1: 20,   // el numero 1 salio 20 veces
2: 30,
3: 10,
.....
}

Crear un archivo.js y ejecutarlo con NodeJs. Ver que se impriman los resultados correctamente. Adjuntar el codigo en la respuesta
*/

const random = () => {
    let random = Math.floor(Math.random() * (20));
    return random;
};

function generador() {
    let valueAppearence = [];
    for (let i = 0; i < 20; i++) {
        valueAppearence.push(0);
    };
    for (let i = 0; i <= 10000; i++) {
        let randomIndex = random();
        valueAppearence[randomIndex]++;
    };
    for (let i = 0; i < valueAppearence.length; i++) {
        console.log(`${i + 1}: ${valueAppearence[i]}`);
    };
}

generador();


