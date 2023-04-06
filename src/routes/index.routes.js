const express = require('express');
const filmeController = require('../controllers/FilmeController');
const router = express.Router();

router.route("/").get(filmeController.pegarTodosOsFilmes);
router.route("/:id").get(filmeController.pegarFilmePorId);
router.route("/").post(filmeController.inserirFilme);
router.route("/:id").patch(filmeController.atualizarFilme);
router.route("/:id").delete(filmeController.removerFilme);

module.exports = router;