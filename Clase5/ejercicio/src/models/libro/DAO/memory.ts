import { Ilibro, newLibroI } from '../librosInterface';
import { uuid } from 'uuidv4';

class Libro {
    private libros: Ilibro[] = [{
        _id: '123',
        title: 'hola',
        price: 123
    },
    {
        _id: '12',
        title: 'hola',
        price: 123
    },
    {
        _id: '1',
        title: 'hola',
        price: 123
    }];

    getLibros = async (id: string | undefined = undefined) => {
        if (id) {
            return this.libros.filter((unLibro) => unLibro._id === id);
        }
        return this.libros;
    }

    addLibro = async (data: newLibroI) => {
        const newLibro = {
            _id: uuid(),
            ...data
        }

        this.libros.push(newLibro);

        return newLibro;
    }

    patchLibro = async (id: string, data: newLibroI) => {
        const index = this.libros.findIndex((unLibro) => unLibro._id == id);
        const oldLibro = this.libros[index];
        const newLibro = Object.assign(oldLibro, data);
        
        return newLibro
    }

    deleteLibro = async (id: string) => {
        const index = this.libros.findIndex((unLibro) => unLibro._id == id);
        this.libros.splice(index, 1);

    }
}

export default  Libro;