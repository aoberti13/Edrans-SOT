import { Request, Response, NextFunction } from "express";
import libroService from '../../domain/api/libros'

class Libro {
    getLibro = async (req: Request, res: Response) => {
        const response = await libroService.getLibros(req.params.id);
        res.json(
            {
                msg: 'Get libros',
                data: response
            }
        );
    };

    addLibro = async (req: Request, res: Response, next: NextFunction) => {
        const body = req.body;

        const newLibro = {
            title: body.title,
            price: body.price
        };

        const response = await libroService.addLibro(newLibro);

        res.json({
            msg: 'Libro creado',
            response
        });
    }


    patchLibro = async (req: Request, res: Response) => {
        const { id } = req.params;
        const { body } = req;

        const response = await libroService.patchLibro(id, body);
        res.json({
            msg: 'Libro actulalizado',
            response
        });
    }

    deleteLibro = async (req: Request, res: Response) => {
        const { id } = req.params;

        await libroService.deleteLibro(id);

        res.json({
            msg: 'Libro deleteado'
        });
    }
}
//const librito = new Libro();
export default new Libro();

