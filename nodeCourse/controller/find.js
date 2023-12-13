let sequelize = require('./../model/index');

const path = require('path'); // Importe o módulo path
const Sequelize = require('sequelize'); // Importe o Sequelize

let Cliente = require(path.join(__dirname, './../model/client'))(sequelize, Sequelize.DataTypes)
let Fornecedor = require(path.join(__dirname, './../model/fornec'))(sequelize, Sequelize.DataTypes)

module.exports = {
    findCliente: (req, res) => {
        Cliente
            .findAll()
            .then((clients) => {
                console.log(clients)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    findFornecedor: (req, res) => {
        Fornecedor
            .findAll()
            .then((fornec) => {
                console.log(fornec)
            })
            .catch((err) => {
                console.log(err)
            })
    }
}