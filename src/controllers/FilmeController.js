const Filme = require("../models/Filme");

let response;

module.exports = {
    async pegarTodosOsFilmes(req, res){
        try{
            const filmes = await Filme.findAll();
            response = res.status(200).json(filmes);
        } catch (error){
            response = res.status(400).json(error.message);
        } finally{
            return response
        }
    },

    async pegarFilmePorId(req, res){
        const { id } = req.params

        try{
            const filme = await Filme.findOne({ where: {
                id: Number(id)
            }});
            response = res.status(200).json(filme);
        } catch (error){
            response = res.status(400).json(error.message);
        } finally{
            return response
        }
    },

    async inserirFilme(req, res){
        try{
            const novoFilme = await Filme.create({
                ...req.body,
                createdAt: Date.now(),
                updatedAt: Date.now()
            });

            response = res.status(200).json(novoFilme);
        } catch (error){
            response = res.status(400).json(error.message);
        } finally{
            return response
        }
    },

    async atualizarFilme(req, res){
        const { id } = req.params
        const atualizacao = { ...req.body, updatedAt: Date.now() }

        try{
            const novoFilme = await Filme.update(atualizacao, {where: {
                id: Number(id)
            }});

            if (novoFilme == 1) {
                response = res.status(200).json({ "message": "Cadastro atualizado com sucesso" })
            } else {
                response = res.status(400).json({ "message": "Falha ao atualizar cadastro" })
            }
        } catch (error){
            response = res.status(400).json(error.message);
        } finally{
            return response
        }
    },

    async removerFilme(req, res){
        const { id } = req.params

        try{
            const filme = await Filme.destroy({where: {
                id: Number(id)
            }});

            response = res.status(200).json(filme);
        } catch (error){
            response = res.status(400).json(error.message);
        } finally{
            return response
        }
    },
}