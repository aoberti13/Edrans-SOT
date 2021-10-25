/*
Desarrollar un proyecto en node.js que declare un array de objetos de este tipo:

let productos = [
    { id:1, nombre:'Escuadra', precio:323.45 },
    { id:2, nombre:'Calculadora', precio:234.56 },
    { id:3, nombre:'Globo Terráqueo', precio:45.67 },
    { id:4, nombre:'Paleta Pintura', precio:456.78 },
    { id:5, nombre:'Reloj', precio:67.89 },
    { id:6, nombre:'Agenda', precio:78.90 }
]

Y obtenga la siguiente información de dicho array
A) Los nombres de los productos en un string separados por comas.
B) El precio total
C) El precio promedio
D) El producto con menor precio
E) El producto con mayor precio
F) Con los datos de los puntos 1 al 5 crear un objeto y representarlo por consola

Crear un archivo.js y ejecutarlo con NodeJs. Ver que se impriman los resultados correctamente. Adjuntar el codigo en la respuesta
*/


let productos = [
    { id: 1, nombre: 'Escuadra', precio: 323.45 },
    { id: 2, nombre: 'Calculadora', precio: 234.56 },
    { id: 3, nombre: 'Globo Terráqueo', precio: 45.67 },
    { id: 4, nombre: 'Paleta Pintura', precio: 456.78 },
    { id: 5, nombre: 'Reloj', precio: 67.89 },
    { id: 6, nombre: 'Agenda', precio: 78.90 }
]

class Objects {
    constructor(productos) {
        this.productos = productos
    };

    getname() {
        let name = [];
        this.productos.forEach(product => {
            name.push(product.nombre);
        });
        console.log(name.toString());
    };

    total() {
        let total = 0;
        this.productos.forEach(product => {
            total += product.precio;
        });
        console.log(`Total: ${total}`);
    };

    promedio() {
        let total = 0;
        let cont = 0;
        this.productos.forEach(product => {
            total += product.precio;
            cont++;
        });
        console.log(`El promedio es ${total / cont}`);
    };

    mayor() {
        let max = 0;
        this.productos.forEach(product => {
            if (product.precio > max) {
                max = product.precio;
            };
        });
        console.log(`El mayor precio es ${max}`);
    };

    menor() {
        let max = 0;
        let min = 0;
        this.productos.forEach(product => {
            if (product.precio > max) {
                max = product.precio;
            };
        });
        this.productos.forEach(product => {
            if (product.precio < max) {
                min = product.precio;
                max = min;
            };
        });
        console.log(`El menor precio es ${min}`);
    };

    newObject() {
        let newObj = [];
        for (let i = 0; i < 5; i++) {
            const element = this.productos[i];
            newObj.push(element);
        };

        console.log({ newObject: newObj });
    };
}

let obj = new Objects(productos);

obj.getname();
obj.total();
obj.promedio();
obj.mayor();
obj.menor();
obj.newObject();