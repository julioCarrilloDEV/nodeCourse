let sequelize = require('./../model/index');

const path = require('path'); // Importe o módulo path
const Sequelize = require('sequelize'); // Importe o Sequelize

let Cliente = require(path.join(__dirname, './../model/client'))(sequelize, Sequelize.DataTypes)
let Fornecedor = require(path.join(__dirname, './../model/fornec'))(sequelize, Sequelize.DataTypes)

module.exports = {
    findCliente: (req, res) => {
        let msg= 0;
        Cliente
            .findAll()
            .then((clients) => {
                return res.render('client_list', {
                    title: "Lista de Clientes",
                    clients: clients, //variável clients com todos os registros contidos no objeto clients. 
                    msg: req.query.msg
                })
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