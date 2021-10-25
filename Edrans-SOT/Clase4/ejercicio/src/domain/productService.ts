import { v4 } from 'uuid'
import model from '../infastructure/services/productFileQueryServie'

export interface Product {
    name: string,
    price: number,
    description: string
};

class Files {

    getAll = async () => {
        try {
            const products = await model.getProducts();
            const response = JSON.parse(products);
            if (response == []) {
                return [];
            }
            return response;
        } catch (err) {
            console.log(err);
        };
    }

    addProduct = async (products: Product) => {
        try {
            let product = await this.getAll();
            const dataToadd = {
                id: v4(),
                title: products.name,
                price: products.price,
                description: products.description,
            };
            product.push(dataToadd)
            await model.addProducts(product);
            return { success: true }
        } catch (err) {
            console.log(err);
        };
    }

    updateProduct = async (id: string, product: Product) => {
        try {
            let products = await this.getAll();
            let item = products.find((item: { id: string; }) => item.id == id);
            if (item) {
                let dataUpdated = {
                    id: id,
                    title: product.name,
                    price: product.price,
                    description: product.description
                };
                item = dataUpdated;
                let dataToAdd = products.filter((item: { id: string }) => item.id != id);
                dataToAdd.push(item);
                await model.updateProduct(dataToAdd);
                return { success: true }
            } else {
                return { success: false }
            };
        } catch (err) {
            console.log(err);
        };
    }

    deleteProduct = async (id: string) => {
        try {
            let products = await this.getAll();
            let item = products.find((item: { id: string; }) => item.id == id);
            if (item) {
                let product = products.filter((item: { id: string }) => item.id != id);
                await model.deleteProduct(product)
                return { success: true };
            } else {
            };
        } catch (err) {
            console.log(err);

        };
    };
}


export default new Files();