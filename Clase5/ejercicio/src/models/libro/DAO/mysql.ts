import { newLibroI } from '../librosInterface';
import { uuid } from 'uuidv4';
import { DbService } from '../../../services/db';

class Libro {
    private tableName = 'book';
    
    getLibros = async (id: string | undefined = undefined) => {
        return DbService.get(this.tableName, id);
    }

    addLibro = async (data: newLibroI) => {
        const newLibro = {
            _id: uuid(),
            ...data
        };

        const response = await DbService.create(this.tableName, newLibro)

        return response;
    }

    patchLibro = async (id: string, data: newLibroI) => {
        const response = await DbService.update(this.tableName, id, data);
        return response;
    }

    deleteLibro = async (id: string) => {
        await DbService.delete(this.tableName, id);
    }
}

export default Libro;