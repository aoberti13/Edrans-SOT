import Config from "../config";
import knex, { Knex } from "knex";
import { newLibroI, Ilibro } from "../models/libro/librosInterface";

const config = {
    stg: {
        client: 'mysql2',
        connection: {
            host: '127.0.0.1',
            user: Config.MSQL_USER,
            password: Config.MYSQL_PASS,
            database: 'book'
        },
        pool: { min: 0, max: 7 },
    },
    dev: {
        client: 'sqlite3',
        connection: { filename: './mydbsqlite' },
        useNullAsDefault: true
    }
};

type ambiente = 'dev' | 'stg';

class DB {
    private connection: Knex;
    private enviroment: ambiente

    constructor() {
        this.enviroment = Config.MYSQL_ENV as ambiente
        this.connection = knex(config[this.enviroment]);
    }

    async initDb() {
        const existDb = await this.connection.schema.hasTable('book');
        console.log('MySQL connected');
        if (!existDb) {
            console.log('Tabla creada');
            return this.connection.schema.createTable('book', (table) => {
                table.uuid('_id').primary();
                table.string('title');
                table.integer('price');
            })
        }
    }

    async get(tablename: string, id: string | undefined = undefined): Promise<Ilibro[]> {
        if (id) {
            return this.connection(tablename).where({ _id: id });
        }
        return this.connection(tablename);
    }

    async create(tablename: string, data: Ilibro): Promise<Ilibro> {
        await this.connection(tablename).insert(data);
        const response = await this.get('book', data._id);
        return response[0];
    }

    async update(tablename: string, _id: string, data: newLibroI): Promise<Ilibro> {
        await this.connection(tablename).update(data).where({ _id });
        const response = await this.get('book', _id);
        return response[0];
    }

    async delete(tablename: string, _id: string): Promise<void> {
        await this.connection(tablename).delete().where({ _id });
    }
}

export const DbService = new DB();