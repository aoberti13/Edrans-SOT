import { Request, Response } from "express";

class Libreria {
    getLibreria = async (req: Request, res: Response) => {
        res.json({ msg: 'Get libreria' })
    }

    addLibreria = async (req: Request, res: Response) => {
        res.json({ msg: 'Add Libreria' })
    }

    putLibreria = async (req: Request, res: Response) => {
        res.json({ msg: 'Put libreria' })
    }

    deleteLibreria = async (req: Request, res: Response) => {
        res.json({ msg: 'Delete libreria' })
    }
}

export default new Libreria();