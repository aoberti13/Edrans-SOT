import { conection } from "./mariaDb";
import knex from "knex";

const maria = knex(conection);

maria.schema.createTable('book', table => {
    table.increments('id');
    table.string('_id');
    table.string('title');
    table.integer('price');
}).then(() => console.log('Table created'))
    .catch((err) => console.log(err))
    .finally(() => {
        maria.destroy();
    })

