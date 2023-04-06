const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database-connect');

class Filme extends Model{}

Filme.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    lancamento: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    produtora: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    duracao: {
        type: DataTypes.TIME,
        allowNull: false
    },
    avaliacao: {
        type: DataTypes.DECIMAL,
        defaultValue: 0.0
    }
}, {
    sequelize,
    modelName: "filme",
    timestamps: false
})

module.exports = Filme;



