const express = require("express");
const router = express.Router();
const clientesController = require('../controllers/clientesController');

router.get('/', clientesController.clientes);

// Página de clientes
router.get('/', clientesController.index);

// Formulário de teste
router.get('/formulario', clientesController.formulario);

// Rota de login
router.get('/login', clientesController.formulario);

router.post('/login', clientesController.loginCliente);

module.exports = router;
