"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const fs = require('fs');
const prod = {
    title: 'Hola',
    price: 22,
    description: 'Sou una palabra'
};
const fileName = './productos.txt';
class Files {
    constructor(name) {
        this.name = name;
    }
    read(condition) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let resolve = yield fs.readFile(this.name, 'utf-8');
                const parse = resolve != [] ? JSON.parse(resolve) : [];
                if (!condition) {
                    console.log(parse);
                }
                else {
                    return parse;
                }
            }
            catch (err) {
                const file = require(fileName);
                if (!file) {
                    if (condition) {
                        return [];
                    }
                    else {
                        console.log([]);
                    }
                }
                else {
                    console.log(`No se pudo leer el archivo ${this.name}`);
                }
            }
        });
    }
    add(product) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const read = yield this.read(true);
                product['id'] = read.length + 1;
                read.push(product);
                yield fs.writeFile('./productos.txt', JSON.stringify(read));
                console.log(`El producto ${product.title} fue guardado con exito`);
            }
            catch (err) {
                console.log(`No se pudo guardad el producto. ERROR: ${err}`);
            }
        });
    }
    delete() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield fs.unlink(this.name);
                console.log(`El archivo ${this.name} fue eliminado con exito`);
            }
            catch (err) {
                console.log(`No se pudo eliminar el producto ${this.name}. ERROR: ${err}`);
            }
        });
    }
}
const myFile = new Files(fileName);
function readFile() {
    return __awaiter(this, void 0, void 0, function* () {
        yield myFile.read(false);
    });
}
;
function addFile() {
    return __awaiter(this, void 0, void 0, function* () {
        yield myFile.add(prod);
    });
}
;
function deleteFile() {
    return __awaiter(this, void 0, void 0, function* () {
        yield myFile.delete();
    });
}
;
readFile();
//addFile();
//deleteFile();
