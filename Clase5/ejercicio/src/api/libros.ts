import { Ilibro, newLibroI } from '../models/libro/librosInterface';
import { LibrosFactory, TipoPersistencia } from '../models/libro/libros.factory';

class Libro {
    private libros;
    private tipo;

    constructor() {
        this.tipo = TipoPersistencia.mysql;
        this.libros = LibrosFactory.get(this.tipo);
    }
    getLibros = async (id: string | undefined = undefined): Promise<Ilibro[]> => {
        if (id) {
            return await this.libros.getLibros(id);
        }
        return await this.libros.getLibros();
    }

    addLibro = async (data: newLibroI): Promise<Ilibro> => {
        const newLibro = await this.libros.addLibro(data);
        return newLibro;
    }

    patchLibro = async (id: string, data: newLibroI): Promise<Ilibro> => {
        const newLibro = await this.libros.patchLibro(id, data)

        return newLibro
    }

    deleteLibro = async (id: string) => {
        await this.libros.deleteLibro(id);
    }
}

export default new Libro();