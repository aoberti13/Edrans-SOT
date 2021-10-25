import { Router } from "express";
import libreriaController from "../contollers/libreriaController";
const router = Router();

router.get('/', libreriaController.getLibreria)
router.post('/', libreriaController.addLibreria)
router.put('/', libreriaController.putLibreria)
router.delete('/', libreriaController.deleteLibreria)

export default router;