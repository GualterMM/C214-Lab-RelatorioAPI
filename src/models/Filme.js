const { DataTypes, Model, ValidationError } = require('sequelize');
const sequelize = require('../config/database-connect');

class Filme extends Model{}

Filme.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        validate: {
            isInt: {
                msg: "O campo de ID deve ser um número inteiro não negativo."
            }
        }
    },
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate:{
            notEmpty: {
                msg: "O campo \"nome\" não pode ser vazio."
            }
        }
    },
    lancamento: {
        type: DataTypes.STRING(10),
        allowNull: false,
        validate:{
            is: {
                args: [/^[0-9]{2}\-[0-9]{2}\-[0-9]{4}$/],
                msg: "O campo \"lancamento\" deve estar no formato DD-MM-YYYY."
            }
        }
    },
    produtora: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate:{
            notEmpty: {
                msg: "O campo \"produtora\" não pode ser vazio."
            }
        }
    },
    duracao: {
        type: DataTypes.TIME,
        allowNull: false,
        validate: {
            is: {
                args: [/^\d+:\d{2}:\d{2}$/i],
                msg: "O campo \"duracao\" deve estar no formato HH:MM:SS."
            }
        }
    },
    avaliacao: {
        type: DataTypes.DECIMAL,
        defaultValue: 0.0,
        validate: {
            isFloat: {
                msg: "O campo \"avaliacao\" deve ser um número decimal não negativo."
            },
            isNegative(value){
                if(value < 0.0){
                    throw new ValidationError("A avaliação de um filme não pode ser negativa.")
                }
            }
        }
    }
}, {
    sequelize,
    modelName: "filme",
    timestamps: false
})

module.exports = Filme;



