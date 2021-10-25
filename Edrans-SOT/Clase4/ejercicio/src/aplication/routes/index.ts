import express, { Request, Response } from 'express';
import productsRoute from './products.routes'

const router = express.Router();

router.use('/products', productsRoute);

export default router;