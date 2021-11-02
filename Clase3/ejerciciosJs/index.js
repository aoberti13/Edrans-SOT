const fs = require('fs')

const prod = {
    title: 'Hola',
    price: 22,
    description: 'Sou una palabra'
};

const fileName = './productos.json';

class Files {
    constructor(name) {
        this.name = name
    }

    async read(condition) {
        try {
            let resolve = await fs.promises.readFile(this.name, 'utf-8');
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

    async add(title, price, description) {
        try {
            let product = {
                title: title,
                price: price,
                description: description
            };
            const read = await this.read(true);
            product['id'] = read.length + 1;
            read.push(product);
            await fs.promises.writeFile('./productos.json', JSON.stringify(read));
            console.log(`El producto ${product.title} fue guardado con exito`);
        } catch (err) {
            console.log(`No se pudo guardad el producto. ERROR: ${err}`);
        }
    }

    async delete(id) {
        try {
            const read = await this.read(true);
            const filtered = await read.filter(function (element) {
                return element.id = 2;
            })
            console.log(filtered);
        } catch (err) {

        }
    }
}

const myFile = new Files(fileName);
async function readFile() {
    await myFile.read();
};
async function addFile(title, price, description) {
    await myFile.add(title, price, description);
};
async function deleteProduct() {
    await myFile.delete();
};

//readFile();
//addFile('remera', 200, 'remera de fiestas');
deleteProduct(2);
