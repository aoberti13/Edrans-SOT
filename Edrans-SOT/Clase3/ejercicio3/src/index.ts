const model = require('./fileModel');

interface Product {
    name: string,
    price: number,
    description: string
};

class Files {

    async getAll() {
        try {
            const response = await model.getProducts();
            console.log(JSON.parse(response));
        } catch (err) {
            return err
        };
    };

    async addProduct(products: Product) {
        try {
            await model.addProducts(products);
            console.log(`Product ${products.name} added successfully`);
        } catch (err) {
            return err
        };
    };

    async updateProduct(id: string, product: Product) {
        try {
            let response = await model.updateProduct(id, product);
            if (response.ERROR) {
                console.log(response.ERROR);
            } else {
                console.log(response);
            }
        } catch (err) {
            console.log(err);
        };
    };

    async deleteProduct(id: string) {
        try {
            let response = await model.deleteProduct(id);
            if (response.ERROR) {
                console.log(response.ERROR);
            } else {
                console.log(`${response} ID: ${id}`);
            }
        } catch (err) {
            console.log(err);
        };
    };
}

const myFile = new Files();
const readFile = async () => {
    await myFile.getAll();
}
const addProduct = async () => {
    await myFile.addProduct({ name: "camison", price: 20, description: 'se usa para salir' });
}
const updateProduct = async () => {
    await myFile.updateProduct("3bf5f7ef-12ed-49c7-8e1a-6b43d45b4576", { name: 'camison', price: 2123, description: 'remera de fiststas' });
}
const deleteProduct = async () => {
    await myFile.deleteProduct('3bf5f7ef-12ed-49c7-8e1a-6b43d45b4576');
}
readFile();
//addProduct();
//updateProduct();
//deleteProduct();