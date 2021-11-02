import { Router, Request, Response, NextFunction } from "express";
import LibrosRouter from './libros';
import Librerias from './librerias';

const router = Router();

const midelWareLibros = (req: Request, res: Response, next: NextFunction) => {
    console.log('Se esta accediendo a /libros');
    next();
};

const midelWareLibrerias = (req: Request, res: Response, next: NextFunction) => {
    console.log('Se esta accediendo a /librerias');
    next();
};


router.use('/libros', midelWareLibros, LibrosRouter);
router.use('/libreria', midelWareLibrerias, Librerias);


export default router;