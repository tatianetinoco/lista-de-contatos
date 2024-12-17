const express = require('express'); 
const router = express.Router();
const contatoController = require('../controllers/contatoController');

router.get('/', contatoController.listarContatos);
router.post('/', contatoController.criarContato);
router.put('/:id', contatoController.editarContato);
router.delete('/:id', contatoController.deletarContato);

module.exports = router;
