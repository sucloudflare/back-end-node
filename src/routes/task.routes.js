const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/task.controller');
const auth = require('../middlewares/auth');

router.use(auth); // todas as rotas abaixo requerem autenticação

router.post('/', TaskController.create);
router.get('/', TaskController.index);
router.put('/:id', TaskController.update);
router.delete('/:id', TaskController.delete);

module.exports = router;
