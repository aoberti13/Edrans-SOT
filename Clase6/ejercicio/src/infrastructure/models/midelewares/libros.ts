import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import LibrosApi from '../../../domain/api/libros';

const schema = Joi.object({
    title: Joi.string().required(),
    price: Joi.number().required()
});

const schemaPath = Joi.object({
    title: Joi.string().optional(),
    price: Joi.number().optional()
});


export const checkBodyLibro = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { body } = req;
    try {
        if (req.method == 'POST') {
            await schema.validateAsync(body);
        } else {
            await schemaPath.validateAsync(body);
        }

        next();
    } catch (err) {
        if (err instanceof Error) {
            next({
                code: 400,
                message: err.message
            });
        };
    }
};

export const findLibro = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    if (id) {
        const libros = await LibrosApi.getLibros(id);
        if (!libros.length) {
            next({ code: 400, message: 'Libro no encontrado' });
        }
    }
    next();
}