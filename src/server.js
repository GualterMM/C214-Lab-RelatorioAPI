const { app, port } = require('./app');

const server = app.listen(port, () => {
    console.log(`Aplicativo rodando em http://localhost:${port}`)
  })

module.exports = server