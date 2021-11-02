const fs = require('fs/promises');
const path = require('path');
const { uuid } = require('uuidv4');
const { v4 } = require('uuid')

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
        try {
            let products = fs.readFile(myPathFile);
            if (products == []) {
                return [];
            }
            return products;
        } catch (err) {
            return err
        };
    };

    addProducts = async (dataToAdd: Product) => {
        try {
            let product = JSON.parse(await fs.readFile(myPathFile));
            const dataToadd = {
                id: v4(),
                title: dataToAdd.name,
                price: dataToAdd.price,
                description: dataToAdd.description,
            };
            product.push(dataToadd);
            return await fs.writeFile(myPathFile, JSON.stringify(product));
        } catch (err) {
            console.log(err);
        };
    };

    updateProduct = async (id: string, dataToUpdate: Product) => {
        let message: string;
        try {
            let product = JSON.parse(await fs.readFile(myPathFile));
            let item = product.find((item: { id: string; }) => item.id == id);
            if (item) {
                let dataUpdated = {
                    id: id,
                    title: dataToUpdate.name,
                    price: dataToUpdate.price,
                    description: dataToUpdate.description
                };
                item = dataUpdated;
                let products = product.filter((item: { id: string }) => item.id != id);
                products.push(item);
                await fs.writeFile(myPathFile, JSON.stringify(products));
                message = 'Product updated successfully';
                return message;
            } else {
                message = 'Product not found';
                return {
                    ERROR: message
                };
            };
        } catch (err) {
            console.log(err);
        };
    };

    deleteProduct = async (id: string) => {
        let message: string;
        try {
            let product = JSON.parse(await fs.readFile(myPathFile));
            let item = product.find((item: { id: string; }) => item.id == id);
            if (item) {
                let products = product.filter((item: { id: string }) => item.id != id);
                await fs.writeFile(myPathFile, JSON.stringify(products));
                message = 'Product deleted successfully';
                return message;
            } else {
                message = 'Product not found';
                return {
                    ERROR: message
                };
            };

        } catch (err) {
            console.log(err);
        };
    };
}

module.exports = new FileModel();