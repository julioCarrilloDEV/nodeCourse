let sequelize = require('./../model/index');

const path = require('path'); // Importe o módulo path
const Sequelize = require('sequelize'); // Importe o Sequelize

let Cliente = require(path.join(__dirname, './../model/client'))(sequelize, Sequelize.DataTypes)
let Fornecedor = require(path.join(__dirname, './../model/fornec'))(sequelize, Sequelize.DataTypes)

module.exports = {
    deleteCliente: (req, res) => {
        Cliente
            .destroy({
                where:{
                    id:req.params.id
                }
            })
            .then(() => console.log("Delete de Cliente OK"))
            .catch((err) => {
                console.log(err)
            })
    },
    deleteFornecedor: (req, res) => {
        Fornecedor
            .destroy({
                where:{
                    id:req.params.id
                }
            })
            .then(() => console.log("Delete de Fornecedor OK"))
            .catch((err) => {
                console.log(err)
            })
    }
}