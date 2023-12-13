//Chamo o pacote sequelize com o require
const Seq = require('sequelize');

const Sequelize = new Seq('crud_node', 'root', 'Julinho@657', {
    host: '127.0.0.1',
    dialect: 'mysql',
    port: 3306, 
});

//Testando conexão
Sequelize
    .authenticate()
    .then(() => console.log("Sequelado ok"))
    .catch(() => console.log("Erro no Sequelado"))

Sequelize.sync()

module.exports = Sequelize