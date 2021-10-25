import express, { Request, Response } from 'express';
import productController from '../controllers/productController';

const router = express.Router();


router
    .route('/').get(productController.getAll);

router
    .route('/').post(productController.addProduct);

router
    .route('/:id').put(productController.updateProduct);

router
    .route('/:id').delete(productController.deleteProduct);


export default router;