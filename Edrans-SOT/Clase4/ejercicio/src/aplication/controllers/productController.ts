import express, { Request, Response } from 'express';
import productService from '../../domain/productService';

class ProductController {
    getAll = async (req: Request, res: Response) => {
        try {
            const response = await productService.getAll();
            res.json(response);
        } catch (err) {
            res.status(400).json(err);
        }
    }

    addProduct = async (req: Request, res: Response) => {
        try {
            const data = req.body;
            const response = await productService.addProduct(data);
            if (response?.success) {
                res.json('Product added successfully');
            } else {
                res.status(400).json('Something go wrong');
            }
        } catch (err) {
            res.status(400).json(err);
        }
    }

    updateProduct = async (req: Request, res: Response) => {
        try {
            let response = await productService.updateProduct(req.params.id, req.body);
            if (response?.success) {
                res.json('Product updated successfully');
            } else {
                res.status(404).json('Product not foud');
            }
        } catch (err) {
            res.status(400).json(err)
        }
    }

    deleteProduct = async (req: Request, res: Response) => {
        try {
            const response = await productService.deleteProduct(req.params.id);
            if (response?.success) {
                res.json('Product deleted successfully');
            } else {
                res.status(404).json('Prodct not found');
            }
        } catch (err) {
            res.status(400).json(err);
        }
    }
}

export default new ProductController();