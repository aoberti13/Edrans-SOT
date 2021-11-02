import { Router } from "express";
import libroController from "../contollers/libroController";
import asyncHandler from 'express-async-handler'
import { checkBodyLibro, findLibro } from "../midelewares/libros";

const router = Router();

router.get('/:id?', findLibro, asyncHandler(libroController.getLibro));
router.post('/', checkBodyLibro, asyncHandler(libroController.addLibro));
router.patch('/:id', findLibro, checkBodyLibro, asyncHandler(libroController.patchLibro));
router.delete('/:id', findLibro, asyncHandler(libroController.deleteLibro));


export default router;