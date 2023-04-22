const filmeController = require("../controllers/FilmeController");
const { app } = require("../app");
const Filme = require("../models/Filme");

test("Caso válido de inserção de filme", async () => {
    const request = {
        "nome": "Filme Teste",
        "lancamento": "02-02-2020",
        "produtora": "ABC Produções",
        "duracao": "01:50:32",
        "avaliacao": 2.0,
    }

    var res;

    const response = await filmeController.pegarTodosOsFilmes(null, res);

    expect(response).toBe(200);


})