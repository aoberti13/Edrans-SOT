/* 2) A partir del siguiente array que se proporciona: const valores = [true, 5, false, "hola", "adios", 2];

a. Realizar una función que reciba como parámetro el array y devuelva el elemento de texto con más caracteres.
b. Realizar una función que reciba como parámetro el array y devuelva en qué posición del array se encuentra un 'false'.
c. Crear otra función que devuelva el resultado de la operación entre los dos elementos numéricos que contiene el array. 
Dicha función recibirá dos parámetros: el array y la operación ('suma', 'resta', 'mult', 'div') a realizar.

Llamar a las funciones con los parámetros correspondientes y mostrar sus resultados por consola. Utilizar para la resolución, 
en lo posible, expresiones sencillas del lenguaje JavaScript. */

const values = [true, 5, false, "hola", "adios", "RiverPlate", 2];

const findText = function (params) {
    let word = '';
    let numOfLetters = 0;
    for (let i = 0; i < params.length; i++) {
        const element = params[i];
        if (typeof element == 'string') {
            if (element.length > numOfLetters) {
                numOfLetters = element.length;
                word = element;
            };
        };
    };
    console.log(word);
};

const findFalse = function (params) {
    let index = params.indexOf(false);
    console.log(index);
};

const operation = function (array, op) {
    let nums = [];
    let total;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (typeof element == 'number') {
            nums.push(element);
        };
    };
    switch (op.toLowerCase()) {
        case 'suma':
            total = nums[0] + nums[1];
            console.log(total);
            break;
        case 'resta':
            total = nums[0] - nums[1];
            console.log(total);
            break;
        case 'mult':
            total = nums[0] * nums[1];
            console.log(total);
            break;
        case 'div':
            total = nums[0] / nums[1];
            console.log(total);
            break;
        default:
            console.log('Ingrese las operaciones correctas [suma, resta, mult, div]');
            break;
    };
};

findText(values);
findFalse(values);
operation(values, 'DIV');
