const express = require('express')
const sequelize = require('./config/database-connect');
const Routes = require('./routes/index.routes')

const app = express()

const port = 3000

sequelize.sync().then( () => console.log("Banco de Dados conectado com sucesso."));

app.use(express.json());

app.use('/api/filmes', Routes);

app.get('/', function (req, res) {
  res.send('Você chegou no diretório raiz. Cheque a documentação no GitHub para se orientar sobre as rotas da API.')
})

app.listen(port, () => {
    console.log(`Aplicativo rodando em http://localhost:${port}`)
  })

// TODO: Migrations