let sequelize = require('./../model/index');

const path = require('path'); // Importe o módulo path
const Sequelize = require('sequelize'); // Importe o Sequelize

let Cliente = require(path.join(__dirname, './../model/client'))(sequelize, Sequelize.DataTypes)
let Fornecedor = require(path.join(__dirname, './../model/fornec'))(sequelize, Sequelize.DataTypes)

module.exports = {
    updateCliente: (req, res) => {
        Cliente 
            .update(req.body, {
                where: {
                    id: req.params.id
                }
            })
            .then(() => res.redirect('/client/?msg=3'))
            .catch((err) => res.redirect('/client/?msg=4'))
    },
    updateFornecedor: (req, res) => {
        Fornecedor 
            .update(req.body, {
                where: {
                    id: req.params.id
                }
            })
            .then(() => console.log("Update de Fornecedor OK"))
    }
}