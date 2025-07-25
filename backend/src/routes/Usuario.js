import express from 'express'
import controller from '../controllers/Usuario.js'

const router = express.Router();

router.get('/byEmail', controller.findByUsername);
router.get('/', controller.findAll);
router.get('/:id', controller.findOne);
router.post('/', controller.create);
router.put('/', controller.update);
router.delete('/:id', controller.remove);


export default router;