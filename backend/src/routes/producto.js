import express from 'express';
import controller from '../controllers/producto.js';

const router = express.Router();

router.get('/', controller.findAllWithCategorias);
router.get('/:id', controller.findWithCategoria);
router.post('/', controller.create);
router.put('/', controller.update);
router.delete('/:id', controller.remove);

export default router;