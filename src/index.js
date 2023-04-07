const express = require('express')
const sequelize = require('./config/database-connect');
const Routes = require('./routes/index.routes')

const app = express()

const port = process.env.PORT || 3000

sequelize.sync().then( () => console.log("Banco de Dados conectado com sucesso."));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', function (req, res) {
  res.send('Você chegou no diretório raiz. Cheque a documentação no GitHub para se orientar sobre as rotas da API.')
})

app.get('/api', function (req, res) {
  res.send({
    "message": "Rotas disponíveis",
    "routes": [
      `http://localhost:${port}/`,
      `http://localhost:${port}/api`,
      `http://localhost:${port}/api/filmes`,
      `http://localhost:${port}/api/filmes/:id`
    ]
  })
})

app.use('/api/filmes', Routes);

app.use(function(req, res) {
        res.json({
          error: {
            'name':'Error',
            'status':404,
            'message':'Pedido inválido',
            'statusCode':404,
            'stack':`http://localhost:${port}`
          },
           message: 'A rota inserida é inválida.'
        });
  });

app.listen(port, () => {
    console.log(`Aplicativo rodando em http://localhost:${port}`)
  })
