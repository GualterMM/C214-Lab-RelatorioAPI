const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './filmes.db'
});

async function start(){
    try{
        await sequelize.authenticate();
        console.log("Connected successfully.");
    } catch(error){
        console.log("Unable to connect to database.");
    }
}

start();

module.exports = sequelize
