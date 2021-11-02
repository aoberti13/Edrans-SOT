//const fs = require('fs')
import fs from 'fs/promises'


const prod = {
    title: 'Hola',
    price: 22,
    description: 'Sou una palabra'
}

const fileName = './productos.txt';

class Files {
    name: String;
    constructor(name: String) {
        this.name = name
    }

    async read(condition: boolean) {
        try {
            let resolve = await fs.readFile(this.name, 'utf-8');
            const parse = resolve != [] ? JSON.parse(resolve) : [];

            if (!condition) {
                console.log(parse);
            } else {
                return parse;
            }
        } catch (err) {
            const file = require(fileName);
            if (!file) {
                if (condition) {
                    return [];
                } else {
                    console.log([]);
                }
            } else {
                console.log(`No se pudo leer el archivo ${this.name}`);
            }
        }
    }

    async add(product: any) {
        try {
            const read = await this.read(true);
            product['id'] = read.length + 1;
            read.push(product);
            await fs.writeFile('./productos.txt', JSON.stringify(read));
            console.log(`El producto ${product.title} fue guardado con exito`);
        } catch (err) {
            console.log(`No se pudo guardad el producto. ERROR: ${err}`);
        }
    }

    async delete() {
        try {
            await fs.unlink(this.name);
            console.log(`El archivo ${this.name} fue eliminado con exito`);
        } catch (err) {
            console.log(`No se pudo eliminar el producto ${this.name}. ERROR: ${err}`)
        }
    }
}

const myFile = new Files(fileName);
async function readFile() {
    await myFile.read(false);
};
async function addFile() {
    await myFile.add(prod);
};
async function deleteFile() {
    await myFile.delete();
};

readFile();
//addFile();
//deleteFile();
