import apiLibroMem from './DAO/memory';
import apiLibroMySQL from './DAO/mysql';

export enum TipoPersistencia {
    memoria = 'MEM',
    mysql = 'MYSQL'
};

export class LibrosFactory {
    static get(tipo: TipoPersistencia) {
        switch (tipo) {
            case 'MEM':
                console.log('Persistencia en memoria');
                return new apiLibroMem();

            case TipoPersistencia.mysql:
                console.log('Persistencia en MySql');
                return new apiLibroMySQL;

            default:
                return new apiLibroMem();
        }
    }
}