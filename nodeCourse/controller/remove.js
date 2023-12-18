let sequelize = require('./../model/index');
const path = require('path'); // Importe o módulo path
const Sequelize = require('sequelize'); // Importe o Sequelize
let Cliente = require(path.join(__dirname, './../model/client'))(sequelize, Sequelize.DataTypes)
//let Fornecedor = require(path.join(__dirname, './../model/fornec'))(sequelize, Sequelize.DataTypes)

module.exports = {
    removeCliente: (req, res) => {
            Cliente.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(() => {
                console.log("DELETADO??")
                res.redirect('/client/?msg=5')
            })
            .catch((err) => {
                console.error('Erro ao remover cliente:', err);
                res.redirect('/client/?msg=6')
            })
    }
}

