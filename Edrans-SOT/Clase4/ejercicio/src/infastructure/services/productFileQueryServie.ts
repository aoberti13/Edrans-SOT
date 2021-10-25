const fs = require('fs/promises');
//import fs from 'fs/promises';
import path from 'path';
import { Product } from '../../domain/productService'

const myPathFile = path.resolve(__dirname, '../products.json');
class FileModel {

    static instance: FileModel;
    constructor() {
        if (!FileModel.instance) {
            ; (async () => {
                try {
                    await fs.readFile(myPathFile);
                }
                catch {
                    await fs.writeFile(myPathFile, JSON.stringify([]));
                }
            })()
            FileModel.instance = this;
        } else {
            return FileModel.instance;
        };
    };

    getProducts = async () => {
        return await fs.readFile(myPathFile);
    };

    addProducts = async (dataToAdd: Product) => {
        return await fs.writeFile(myPathFile, JSON.stringify(dataToAdd));
    };

    updateProduct = async (dataToUpdate: Product) => {
        return await fs.writeFile(myPathFile, JSON.stringify(dataToUpdate));
    };

    deleteProduct = async (dataToAdd: Product) => {
        return await fs.writeFile(myPathFile, JSON.stringify(dataToAdd));
    };
}

export default new FileModel();