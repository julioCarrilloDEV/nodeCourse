let sequelize = require('./../model/index');
const path = require('path'); // Importe o módulo path
const Sequelize = require('sequelize'); // Importe o Sequelize
let Cliente = require(path.join(__dirname, './../model/client'))(sequelize, Sequelize.DataTypes)
let Fornecedor = require(path.join(__dirname, './../model/fornec'))(sequelize, Sequelize.DataTypes)

module.exports = {
    editCliente: (req, res) => {
        Cliente
            .findByPk(req.params.id)
            .then((client) => {
                return res.render('client_edit', {
                    client: client //variável clients com todos os registros contidos no objeto clients. 
                })
            })
            .catch((err) => {
                console.log(err)
                console.log('PAROU AQUI')
            })
    }
}