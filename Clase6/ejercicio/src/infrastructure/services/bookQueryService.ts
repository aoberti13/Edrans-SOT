import { conection } from "../conection/mariaDb";
import knex from "knex";

const Knex = knex(conection);

class persistenciaBdd {

    async getProducts() {
        //traer todos
        return await knex('product').select('*')
    };

    async getProductById(id: string) {
        //traer por id
        return await knex('product').select().where({ id: id });
    };

    // async addProducts(dataToAdd) {
    //     //agregar products
    //     return await knex('product').insert(dataToAdd);
    // };

    // async updateProduct(dataToUpdate) {
    //     //actualizar prod por id
    //     return await knex('product').update(dataToUpdate.data).where({id: dataToUpdate.id});
    // };

    // async deleteProduct(id) {
    //     //Eliminar prod por id
    //     return await knex('product').delete().where({id: id});
    // };


};

export default new persistenciaBdd();