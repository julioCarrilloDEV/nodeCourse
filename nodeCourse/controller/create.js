let sequelize = require('./../model/index');

const path = require('path'); // Importe o módulo path
const Sequelize = require('sequelize'); // Importe o Sequelize

let Cliente = require(path.join(__dirname, './../model/client'))(sequelize, Sequelize.DataTypes)
let Fornecedor = require(path.join(__dirname, './../model/fornec'))(sequelize, Sequelize.DataTypes)

module.exports = {
    createCliente: (req, res) => {
        Cliente
          .create(req.body)
          .then(() => console.log('Inserção de Cliente OK'))
          .catch(error => {
            console.error('Erro ao inserir cliente:', error);
            res.status(500).json({ error: 'Erro interno do servidor.' });
          });
      },

      createFornecedor: (req, res) => {
        Fornecedor
          .create(req.body)
          .then(() => console.log('Inserção de Fornecedor OK'))
          .catch(error => {
            console.error('Erro ao inserir fornecedor:', error);
            res.status(500).json({ error: 'Erro interno do servidor.' });
          });
      }
}
/* ANTES
module.exports = (req, res) => {
    Cliente
        .create(req.body)
          .then(() => console.log('Inserção de Cliente OK'))
          .catch(error => {
            console.error('Erro ao inserir cliente:', error);
            res.status(500).json({ error: 'Erro interno do servidor.' });
          });
} */