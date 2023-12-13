const { DataTypes } = require('sequelize');
const sequelize = require('./index');

//DataTypes responsável por criar meus tipos de dados
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('fornec', {
        fornecedor: DataTypes.STRING,
        CNPJ: DataTypes.STRING,
        telefone: DataTypes.STRING,
        email: DataTypes.STRING,
        contato: DataTypes.STRING 
    }, {
        timesstamps: false //configurar campo de data de cadastro, configs e afins
    })
}